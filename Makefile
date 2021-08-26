build:
	docker build -t documentacion:latest -f Dockerfile .

run:
	docker run --name documentacion -p 80:80 -d documentacion:latest

stop:
	docker stop documentacion
	docker rm documentacion

force-restart:
	docker stop documentacion
	docker rm documentacion
	make run