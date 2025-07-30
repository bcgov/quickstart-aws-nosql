variable "api_cpu" {
  description = "CPU units for the API service."
  type        = string
  nullable    = false
  default     = "256"
}

variable "api_image" {
  description = "Docker image for the API service."
  type        = string
  nullable    = false
}

variable "api_memory" {
  description = "Memory for the API service."
  type        = string
  nullable    = false
  default     = "512"
}

variable "app_env" {
  description = "Application environment (e.g., dev, prod)."
  type        = string
  nullable    = false
}

variable "app_name" {
  description = "Name of the application."
  type        = string
  nullable    = false
}

variable "app_port" {
  description = "Port for the application."
  type        = number
  nullable    = false
  default     = 3000
}

variable "aws_region" {
  description = "AWS region to deploy resources."
  type        = string
  nullable    = false
  default     = "ca-central-1"
}


variable "common_tags" {
  description = "Common tags to apply to resources."
  type        = map(string)
  nullable    = false
}

variable "dynamodb_table_name" {
  description = "Name of the DynamoDB table."
  type        = string
  nullable    = false
  default     = ""
}


variable "health_check_path" {
  description = "Health check path for the API."
  type        = string
  nullable    = false
  default     = "/api/health"
}


variable "is_public_api" {
  description = "Whether the API is public."
  type        = bool
  nullable    = false
  default     = true
}
variable "api_max_capacity" {
  description = "Maximum capacity for the API service."
  type        = number
  nullable    = false
  default     = 3
}
variable "api_min_capacity" {
  description = "Minimum capacity for the API service."
  type        = number
  nullable    = false
  default     = 1
}
variable "repo_name" {
  description = "Repository name."
  type        = string
  nullable    = false
}

variable "target_env" {
  description = "Target environment."
  type        = string
  nullable    = false
}

