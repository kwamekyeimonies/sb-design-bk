package api

import (
	"log"

	"github.com/gin-gonic/gin"

	"github.com/kwamekyeimonies/sb-design-bk/config"
	"github.com/kwamekyeimonies/sb-design-bk/middleware"
)

func ApiServer() {
	webServer := gin.Default()
	webServer.Use(middleware.CORSMiddleware())

	config, err := config.LoadInitializer("")
	if err != nil {
		log.Fatalf("error: %v", err.Error())
	}

	// server := &http.Server{
	// 	Addr:    config.SERVER_PORT,
	// 	Handler: webServer,
	// }

	// serverErr := server.ListenAndServe()
	// if serverErr != nil {
	// 	log.Fatal(serverErr.Error())
	// }

	webServer.Run(":" + config.SERVER_PORT)
}
