FROM ubuntu:latest AS build

RUN apt-get update
RUN apt-get install openjdk-17-jdk -y
WORKDIR /spring-verzel-plus
COPY . /spring-verzel-plus/
COPY pom.xml /spring-verzel-plus/

RUN apt-get install maven -y
RUN mvn clean install

FROM openjdk:17

EXPOSE 8080

COPY  --from=build /spring-verzel-plus/target/verzel-plus-0.0.1-SNAPSHOT.jar app.jar

ENTRYPOINT [ "java", "-jar", "app.jar"]