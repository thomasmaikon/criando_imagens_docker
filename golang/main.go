package main

import (
	"fmt"
	"time"
)

func main(){
	messageHello := "Hello Full Cycle Tester..."
	messageChallenge := "Full Cycle Rocks!!"


	showSlowly(messageHello)
	showSlowly(messageChallenge)
}


func showSlowly(message string) {
	for _, char := range message {
		fmt.Printf("%c", char)

		time.Sleep(40 * time.Millisecond)
	}

	fmt.Println()
}
