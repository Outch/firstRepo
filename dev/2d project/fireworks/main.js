'use strict';

class Canvas
{
	constructor()
    {
        this.ele = document.createElement("canvas");
        this.ele.width = window.innerWidth;
        this.ele.height = window.innerHeight;
        this.index = 0;
        this.gravity = 0.004;
        this.tabParticle = [];
        this.ele.addEventListener("click", this.fillTable.bind(this));
        document.body.appendChild(this.ele);
        this.ctx = this.ele.getContext("2d", {alpha: false});
        window.requestAnimationFrame(this.update.bind(this));
    }
    
    render()
    {
        for (let i = 0; i < this.tabParticle.length; i++)
        {
            this.ctx.beginPath();
            this.ctx.rect(this.tabParticle[i].posX, this.tabParticle[i].posY, 1, 1);
            this.ctx.fillStyle = this.tabParticle[i].color;
            this.ctx.fill();
            this.ctx.closePath();

            if (this.tabParticle[i].posdy < 2)
                this.tabParticle[i].posdy += this.gravity;
            this.tabParticle[i].posX += Math.cos(this.tabParticle[i].dir)
                * this.tabParticle[i].factorDir * this.tabParticle[i].speed;
            this.tabParticle[i].posY += Math.sin(this.tabParticle[i].dir)
                * this.tabParticle[i].factorDir * this.tabParticle[i].speed
                + this.tabParticle[i].posdy;
            this.tabParticle[i].time++;

            if (this.tabParticle[i].time > 95)
                this.tabParticle.splice(i, 1);
        }
    }
    
    update()
    {
        this.ctx.fillStyle = 'rgba(0, 0, 0, 0.15)';
        this.ctx.fillRect(0, 0, this.ele.width, this.ele.height);
        this.index++;
        this.render();
        window.requestAnimationFrame(this.update.bind(this));
    }

    fillTable(e)
    {
        let cursorX = e.clientX;
        let cursorY = e.clientY;
        let speedParticle = (Math.random() + 0.2) * 2;
        let numberParticle = 200;
        let colorParticles = '#'+(Math.random()*0xFFFFFF<<0).toString(16);

        for (let i = 0; i < numberParticle; i++)
        {
            var particle = {
                posX: cursorX,
                posY: cursorY,
                factorDir: Math.random(),
                speed: speedParticle,
                posdy: 0,
                color: colorParticles,
                time: 0 - i / 10,
                dir: Math.random() * (2 * Math.PI)
            }
            if (i <  numberParticle / 4 && particle.factorDir < 0.5)
                particle.factorDir = 1;
            this.tabParticle.push(particle);
        }
    }
}

class App
{
	constructor(name)
    {
    	this.name = name;
        this.canvas = new Canvas();
    }
}

let app = new App("Fireworks");