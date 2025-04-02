resource "digitalocean_kubernetes_cluster" "simple_blog_cluster" {
  name    = var.cluster_name
  region  = var.region
  version = var.k8s_version
  tags    = ["simple-blog", "devops-project"]

  node_pool {
    name       = "worker-pool"
    size       = var.node_size
    node_count = var.node_count
  }
}

resource "local_file" "kubeconfig" {
  content  = digitalocean_kubernetes_cluster.simple_blog_cluster.kube_config[0].raw_config
  filename = "${path.module}/kubeconfig.yaml"
}

output "cluster_id" {
  value = digitalocean_kubernetes_cluster.simple_blog_cluster.id
}