# Stage 1: Build Maven project with JDK 11
FROM maven:3.8.4-openjdk-11 AS build
WORKDIR /app
COPY . .
RUN mvn clean install

# Stage 2: Run the application with JDK 11
FROM openjdk:11
WORKDIR /app
COPY --from=build /app/target/*.jar app.jar
ENTRYPOINT ["java", "-jar", "app.jar"]