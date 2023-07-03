FROM golang:1.16-alpine AS builder

WORKDIR /app

COPY main.go main.go

RUN go build main.go

FROM scratch

WORKDIR /app

COPY --from=builder /app/main /app

# Execute o aplicativo
CMD ["./main"]
