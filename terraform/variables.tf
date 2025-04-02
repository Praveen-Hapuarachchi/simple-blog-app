variable "region" {
  description = "DigitalOcean region for the Kubernetes cluster"
  default     = "sfo3"
}

variable "cluster_name" {
  description = "Name of the Kubernetes cluster"
  default     = "simple-blog-cluster"
}

variable "k8s_version" {
  description = "Kubernetes version"
  default     = "1.32.2-do.0"
}

variable "node_size" {
  description = "Size of the nodes in the node pool"
  default     = "s-2vcpu-4gb"
}

variable "node_count" {
  description = "Number of nodes in the node pool"
  default     = 2
}