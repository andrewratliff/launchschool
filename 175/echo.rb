require "socket"
require "pry"

def parse_request(request_line)
  params = {}

  http_method, path_and_params, _ = request_line.split
  path, params_string = path_and_params.split("?")

  unless params_string.nil?
    params_string.split("&").each do |param|
      key, value = param.split("=")
      params[key] = value
    end
  end

  [http_method, path, params]
end

server = TCPServer.new("localhost", 3003)

loop do
  client = server.accept

  request_line = client.gets
  next if !request_line || request_line =~ /favicon/

  puts request_line

  http_method, path, params = parse_request(request_line)

  client.puts "HTTP/1.1 200 OK"
  client.puts "Content-Type: text/html\r\n\r\n"
  client.puts "<html>"
  client.puts "<body>"
  client.puts "<pre>"
  client.puts http_method
  client.puts path
  client.puts params
  client.puts "</pre>"

  client.puts "<h1>ROLLS!</h1>"

  params["rolls"].to_i.times do
    roll = (1..(params["sides"].to_i)).to_a.sample
    client.puts "<p>#{roll}</p>"
  end

  client.puts "</body>"
  client.puts "</html>"

  client.close
end
