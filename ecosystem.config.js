module.exports = {
    apps : [{
        name   : "config-server",
        script : "java -jar ./config-server/target/config-server-0.0.1-SNAPSHOT.jar",
        log_file: "./logs/config-server.log"
    },
        {
            name   : "eureka-server",
            script : "java -jar ./eureka-server/target/eureka-server-0.0.1-SNAPSHOT.jar",
            log_file: "./logs/eureka-server.log"
        },
        {
            name   : "api-gateway",
            script : "java -jar ./api-gateway/target/api-gateway-0.0.1-SNAPSHOT.jar",
            log_file: "./logs/api-gateway.log"
        }]
}