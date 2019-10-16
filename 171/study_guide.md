# The Internet
* Have a broad understanding of what the Internet is and how it works
  - The Internet is a network of networks.
  - infrastructure that enables inter-network communication, both in terms of
    the physical network and lower-level protocols that control its use
  - Network infrastructure (devices, routers, switches, cables, etc)
  - Protocols that enable the infrastructure to function
  - protocols: a set of rules governing the exchange or transmission of data
  - Protocol Data Unit (PDU) is an amount or block of data transferred over the
    network
  - PDU names change from layer to layer (bits, frames, packets,
    segments/datagrams, data)
  - PDU consists of a header, data payload, and sometimes a trailer/footer
    - Headers(trailer/footers) provide protocol-specific meta-data about the PDU
    - Data payload is the entire PDU from the layer above

* Understand the characteristics of the physical network, such as latency and
  bandwidth
  - The physical layer is concerned with the transfer of bits (binary data)
  - Electrical signal, light signal, or radio waves
  - What are the limitations of the physical network?
    - Latency is the measure of time it takes for some data to get from one point
    in a network to another point in a network
      - Propagation delay: the amount of time it takes for a message to go from
        sender to reciever (ratio between distance and speed)
      - Transmission delay: the amount of time it takes to transfer data from
        each device/wire/link in the network
      - Processing delay: the amount of time it takes to process data at each
        link in the network
      - Queuing delay: the amount of time data is waiting to be processed by
        devices on the network
      - Last-mile latency: delays that take place on parts of the network that
        are closest to the end points
      - Round-trip time: time for a signal to be sent, added to the length of
        time for an acknowledgement or response to be received
    - Bandwidth is the amount of data that can be sent at once (capacity)
      - Varies across the network
      - Core network will be much faster than the edge
      - A bottleneck is where bandwidth changes from relatively high to
        relatively low

* Have a basic understanding of how lower level protocols operate
  - Link/Data Link layer is the interface between the physical layer and more
    logical layers
  - Ethernet protocol's most important aspects: framing and addressing
  - Ethernet Frames (PDU -> frame)
    - Gives logical structure to binary data
    - Defines which bits are data payload vs meta-data
    - Ethernet compliant network devices are able to identify different parts of
      the frame
  - MAC addresses
    - physical or burned-in address assigned to a network device when
    it is manufactured
    - used to identify devices connected to a local network
  - Internet/Network Layer
    - Internet Protocol (IP) is used for internetwork communication
    - routing capability via IP addressing
    - Encapsulation of data into packets

* Know what an IP address is and what a port number is
  - IP addresses, unlike MAC addresses, are logical and not tied to a specific
    devices (assigned as required to devices as they join a network)
  - Fall within a range of addresses available to the local network that the
    device is connected to
  - Hierarchical structure allows routers to identify which segments of a
    network are assigned control to another router. Routers don't need to know
    the address of every device on another network
  - IP is communication between hosts or devices
  - Ports allow communication between processes
  - Multiplexing and demultiplexing provide for the transmission of multiple
    signals over a single channel
  - Network socket: combination of IP address and port number (communication
    end-point)
  - A port is an identifier for a specific process running on a host

* Have an understanding of how DNS works
  - a distributed data base which translates a domain name into an IP address
* Understand the client-server model of web interactions, and the role of HTTP
  as a protocol within that model

# TCP & UDP
* Have a clear understanding of the TCP and UDP protocols, their similarities
  and differences
  - Both protocols provide data encapsulation and multiplexing
  - Both provide error detection (UDP via the checksum)
## Transmission Control Protocol (TCP)
  - PDUs are called segments 3-way handshake
  - connection-oriented system - data isn't sent until a connection is
    established between application processes
  - reliability provided by:
    - message acknowledgement
    - retransmission
    - in-order delivery
  - flow control
    - prevents the sender from overwhelming the receiver with too much data at
      once
    - the WINDOW field in the PDU segment is what allows the sender/receiver to
      dynamically control how much data is being sent
  - congestion avoidance
    - network congestion happens when there is more data sent across the network
      than the network has the capability to process
    - a network uses a 'buffer' to store data that is waiting to be processed
    - a TCP connection will uses data loss to detect and avoid network
      congestion
    - if lots of transmissions are occurring, the TCP connection detects network
      congestion and reduces the size of the transmission window
  - downsides
    - latency overhead when establishing a connection (handshake process)
    - potential head-of-line blocking as a result of in-order delivery
      - messages must wait to be processed if a message earlier in the sequence
        is lost/corrupted and needs to be transmitted
## User Datagram Protocol (UDP)
    - PDUs are called datagrams
    - connectionless system: data can be sent without having to wait for a
      connection to be established with the application process of the reciever
    - unreliable
    - simplicity of UDP provides speed and flexibility
    - pieces of connection reliability can be built on top of UDP
    - there are some best practices that should be adhered too, some form of
      congestion avoidance should be implemented in order to prevent
      overwhelming the network
* Have a broad understanding of the three-way handshake and its purpose
  - used to establish a connection
  - sender sends syn message
  - receiver sends syn ack
  - sender sends ack
  - once the sender receives the ack, they can start transmitting data
  - one main reason for this process is to synchronize the sequence number used
    for the connection
* Have a broad understanding of flow control and congestion avoidance
  - flow control
    - prevents the sender from overwhelming the receiver with too much data at
      once
    - the WINDOW field in the PDU segment is what allows the sender/receiver to
      dynamically control how much data is being sent
    - from the quiz: Flow control is a mechanism to prevent the sender
      overwhelming the receiver with more data than it can process. Each
      participant in a connection lets the other participant know how much data
      it is willing to accecpt using a field in a TCP header
  - congestion avoidance
    - network congestion happens when there is more data sent across the network
      than the network has the capability to process
    - a network uses a 'buffer' to store data that is waiting to be processed
    - a TCP connection will uses data loss to detect and avoid network
      congestion
    - if lots of transmissions are occurring, the TCP connection detects network
      congestion and reduces the size of the transmission window
    - from quiz: Congestion avoidance is a process by which TCP uses data loss
      (based on the volume of retransmissions required) as a feedback mechanism
      to determine how congested the network is, and adjusts the amount of data
      sent accordingly

# URLs
* Be able to identify the components of a URL, including query strings
* Be able to construct a valid URL
* Have an understanding of what URL encoding is and when it might be used
  - URLs only accept certain ASCII characters
  - unsafe or reserved characters must be encoded by using a % followed by two
    hexdecimal digits

# HTTP and the Request/Response Cycle
* Be able to explain what HTTP requests and responses are, and identify the
  components of each
  - HTTP request
    - method, path, and optional parameters, headers, and body
  - HTTP response
    - status code and optional headers and body
* Be able to describe the HTTP request/response cycle
  - a single message exchange
  - takes place between a client and a server
* Be able to explain what status codes are, and provide examples of different
  status code types
  - part of a HTTP response
  - indicate the status of the request
  - there are various categories of status code
* Understand what is meant by 'state' in the context of the web, and be able to
  explain some techniques that are used to simulate state
  - HTTP is a stateless protocol, each request/response is independent of each
    other
  - state in the context of the web is where
* Explain the difference between GET and POST, and know when to choose each

# Security
* Have an understanding of various security risks that can affect HTTP, and be
  able to outline measures that can be used to mitigate against these risks
* Be aware of the different services that TLS can provide, and have a broad
  understanding of each of those services
