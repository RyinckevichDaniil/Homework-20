const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

function snowMan () { 
    function snowManTorso () {
        const HeadConfig = {
            x: 250,
            y: 100,
            radius: 40,
        };
        const bodyConfig = {
            x: 250,
            y: 200,
            radius: 60,
        };
        
        const drowSnowman = ({x, y, radius}) => {
            ctx.beginPath();
            ctx.arc(x, y, radius, 0, Math.PI * 2, false);
            ctx.stroke();
            ctx.fillStyle = 'white';
            ctx.fill();
        };
        
        drowSnowman(HeadConfig);
        drowSnowman(bodyConfig);
    };
    function snowManLimbs () {
            const leftLegConfig = {
                x: 230,
                y: 256
            };

            const rightLegConfig = {
                x: 270,
                y: 256
            };


            const drowLeftLeg = ({x, y}) => {
                ctx.beginPath();
                ctx.moveTo(x - 30, y + 80);
                ctx.lineTo(x, y);
                ctx.stroke();
            };
            const drowRightLeg = ({x, y}) => {
                ctx.beginPath();
                ctx.moveTo(x + 30, y + 80);
                ctx.lineTo(x, y);
                ctx.stroke();
            }
            
            const leftHandConfig = {
                x: 198,
                y: 170
            };

            const rightHandConfig = {
                x: 238,
                y: 125
            };
            
            const drowLeftHand = ({x, y}) => {
                ctx.beginPath();
                ctx.moveTo(x - 40, y + 60);
                ctx.lineTo(x, y);
                ctx.stroke();
            }
            const drowRightHand = ({x, y}) => {
                ctx.beginPath();
                ctx.moveTo(x + 40, y + 60);
                ctx.lineTo(x, y);
                ctx.stroke();
            }


            drowLeftLeg(leftLegConfig);
            drowRightLeg(rightLegConfig);
            drowLeftHand(leftHandConfig);
            drowRightHand(rightHandConfig);
    };
    function snowManDecoration () {

        const configButtons = {
            x: 248,
            y: 200,
            radius: 4,
        };

        const eyeConfig = {
            x: 235,
            y: 130,
            radius: 3,
        };

        const mouseConfig = {
            x: 237,
            y: 130,
        };

        const mouse = ({ x, y }) => {
            ctx.beginPath();
            ctx.moveTo(x + 20, y);
            ctx.lineTo(x, y);
            ctx.stroke();
        };

        mouse(mouseConfig);

            const eye1 = ({ x, y, radius }) => {
                ctx.beginPath();
                ctx.arc(x, y - 30, radius, 0, Math.PI * 2, false);
                ctx.fillStyle = 'black';
                ctx.fill();
                ctx.stroke();
            };

            eye1(eyeConfig);

            const eye2 = ({ x, y, radius }) => {
                ctx.beginPath();
                ctx.arc(x + 30, y - 30, radius, 0, Math.PI * 2, false);
                ctx.fillStyle = 'black';
                ctx.fill();
                ctx.stroke();
            };

            eye2(eyeConfig);

                const button1 = ({ x, y, radius }) => {
                    ctx.beginPath();
                    ctx.arc(x, y, radius, 0, Math.PI * 2, false);
                    ctx.fillStyle = 'black';
                    ctx.fill();
                    ctx.stroke();
                };
        
                button1(configButtons);

                const button2 = ({ x, y, radius }) => {
                    ctx.beginPath();
                    ctx.arc(x, y - 30, radius, 0, Math.PI * 2, false);
                    ctx.fillStyle = 'black';
                    ctx.fill();
                    ctx.stroke();
                };
        
                button2(configButtons);

                const button3 = ({ x, y, radius }) => {
                    ctx.beginPath();
                    ctx.arc(x, y + 30, radius, 0, Math.PI * 2, false);
                    ctx.fillStyle = 'black';
                    ctx.fill();
                    ctx.stroke();
                };
        
                button3(configButtons);
    }
    snowManTorso();
    snowManLimbs();
    snowManDecoration();

};

snowMan();
