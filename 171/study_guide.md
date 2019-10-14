# The Internet
* Have a broad understanding of what the Internet is and how it works
  - The Internet is a network of networks.
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

* Have an understanding of how DNS works
* Understand the client-server model of web interactions, and the role of HTTP
  as a protocol within that model

# TCP & UDP
* Have a clear understanding of the TCP and UDP protocols, their similarities
  and differences
* Have a broad understanding of the three-way handshake and its purpose
* Have a broad understanding of flow control and congestion avoidance

# URLs
* Be able to identify the components of a URL, including query strings
* Be able to construct a valid URL
* Have an understanding of what URL encoding is and when it might be used

# HTTP and the Request/Response Cycle
* Be able to explain what HTTP requests and responses are, and identify the
  components of each
* Be able to describe the HTTP request/response cycle
* Be able to explain what status codes are, and provide examples of different
  status code types
* Understand what is meant by 'state' in the context of the web, and be able to
  explain some techniques that are used to simulate state
* Explain the difference between GET and POST, and know when to choose each

# Security
* Have an understanding of various security risks that can affect HTTP, and be
  able to outline measures that can be used to mitigate against these risks
* Be aware of the different services that TLS can provide, and have a broad
  understanding of each of those services
