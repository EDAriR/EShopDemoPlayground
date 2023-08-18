package main

import (
	"github.com/gin-gonic/gin"
	"net/http"
)

func main() {
	// 創建 Gin 路由引擎
	router := gin.Default()

	// 定義一個處理 GET 請求的路由
	router.GET("/", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{
			"message": "Hello, Golang Gin!",
		})
	})

	// 開始監聽並提供服務
	router.Run(":8080")
}
