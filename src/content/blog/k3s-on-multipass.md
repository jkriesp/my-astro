---
title: "Setting Up a k3s Cluster on Multipass"
description: "Explore the setup of a k3s Kubernetes cluster using Multipass, offering a streamlined, resource-efficient environment ideal for Kubernetes experimentation and learning."
pubDate: "Apr 16 2024"
heroImage: "/blog-placeholder-5.jpg"
---


This guide will walk you through the process of setting up a k3s Kubernetes cluster on Multipass, from creating the virtual machines to deploying k3s and joining the worker nodes to the control plane.

## Introduction

After encountering issues with network configurations using Minikube inside Multipass, I decided to explore an alternative lightweight Kubernetes setup using k3s. The following sections detail a step-by-step guide on setting up a k3s cluster using Multipass as the virtualization platform.

## Initial Setup with Multipass

### Finding Images

Before creating virtual machines, it's useful to know what images are available:

```bash
multipass find
```
```bash
Image                       Aliases           Version          Description
20.04                       focal             20240408         Ubuntu 20.04 LTS
22.04                       jammy,lts         20240319         Ubuntu 22.04 LTS
23.10                       mantic            20240410         Ubuntu 23.10

Blueprint                   Aliases           Version          Description
anbox-cloud-appliance                         latest           Anbox Cloud Appliance
charm-dev                                     latest           A development and testing environment for charmers
docker                                        0.4              A Docker environment with Portainer and related tools
jellyfin                                      latest           Jellyfin is a Free Software Media System that puts you in control of managing and streaming your media.
minikube                                      latest           minikube is local Kubernetes
ros-noetic                                    0.1              A development and testing environment for ROS Noetic.
ros2-humble                                   0.1              A development and testing environment for ROS 2 Humble.
```


### Creating VMs

Create one control node and two worker nodes using Ubuntu 23.10:

```bash
# Create the control node
multipass launch -c 1 -m 1g -d 4g -n k3s-control 23.10

# Create worker nodes
multipass launch -c 1 -m 1g -d 4g -n k3s-worker-1 23.10
multipass launch -c 1 -m 1g -d 4g -n k3s-worker-2 23.10
```

**Flags Explanation:**
- `-c`: Number of CPUs
- `-m`: Amount of memory
- `-d`: Disk space
- `-n`: Name of the node

### Verify Node Status

Ensure all nodes are running:

```bash
multipass list
```
```bash
Name                    State             IPv4             Image
k3s-control             Running           192.168.64.16    Ubuntu 23.10
k3s-worker-1            Running           192.168.64.17    Ubuntu 23.10
k3s-worker-2            Running           192.168.64.19    Ubuntu 23.10
```

## Deploying k3s

### Install k3s on the Control Node

Run the k3s installation script on the control node:

```bash
multipass exec k3s-control -- bash -c "curl -sfL https://get.k3s.io | sh -"
```

### Set Up Node Token and IP Environment Variables

Retrieve and save the node token and IP address of the control node:

```bash
# Save the token
TOKEN=$(multipass exec k3s-control sudo cat /var/lib/rancher/k3s/server/node-token)

# Save the IP address
IP=$(multipass info k3s-control | grep IPv4 | awk '{print $2}')
```

### Configure Worker Nodes

Create a bash script to join the worker nodes to the cluster:

```bash
#!/bin/bash

# Assign passed arguments to variables
IP=$1
TOKEN=$2

for f in 1 2; do
    multipass exec k3s-worker-$f -- bash -c "curl -sfL https://get.k3s.io | K3S_URL='https://${IP}:6443' K3S_TOKEN='${TOKEN}' sh -" &
done
wait
```

Run the script with IP and token:

```bash
./install_k3s_workers.sh $IP $TOKEN
```

### Verifying the Cluster

Log in to the control node and check the cluster nodes:

```bash
multipass exec k3s-control -- bash
sudo kubectl get nodes
```

## Clean Up

When done, you can stop and delete your instances:

```bash
# Stop instances
multipass stop k3s-control k3s-worker-1 k3s-worker-2

# Delete instances
multipass delete k3s-control k3s-worker-1 k3s-worker-2
multipass purge
```

## Where to Go From Here

Now that you have a k3s cluster running on Multipass, there are several exciting directions you can take to expand your knowledge and utilization of your new Kubernetes environment:

### 1. **Deploy Real-World Applications**

Experiment by deploying real-world applications into your cluster. This could range from simple web applications to more complex multi-tier applications involving databases, caching, and front-end services. You can use existing Docker images or create your own.

### 2. **Explore Kubernetes Features**

Dive deeper into Kubernetes functionalities such as:

- **Ingress Controllers**: Set up an Ingress controller like Traefik or Nginx to manage access to the services in your cluster from outside.
- **Persistent Volumes**: Implement persistent storage solutions to understand how data can be managed and persisted in Kubernetes.
- **Advanced Scheduling**: Learn about pod affinity, taints, and tolerations for advanced scheduling of workloads.

### 3. **Implement DevOps Practices**

Utilize your cluster to implement full CI/CD pipelines which could help in automating the deployment of applications directly from source control:

- **Continuous Integration Tools**: Set up Jenkins or GitLab CI to automate the building and testing of your applications.
- **Continuous Deployment**: Use Argo CD or Flux for GitOps-based deployments to continuously deploy updates to your applications.

### 4. **Monitoring and Logging**

Set up monitoring and logging to maintain the health of your cluster:

- **Monitoring**: Install Prometheus and Grafana for monitoring the performance of your cluster and applications.
- **Logging**: Set up a stack like ELK (Elasticsearch, Logstash, Kibana) or Loki to aggregate and analyze logs from your cluster.

### 5. **Learning and Experimentation**

- **Security Practices**: Implement network policies, manage secrets effectively, and use service accounts to improve the security of your cluster.
- **Simulate Failures**: Use tools like Chaos Mesh to introduce failures into the cluster to learn how Kubernetes and your applications respond to unexpected disruptions.

## Conclusion

Setting up a k3s cluster on Multipass provides a lightweight and flexible development environment suitable for various use cases, from learning Kubernetes to developing cloud-native applications.
