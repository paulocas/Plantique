document.addEventListener("mousemove", (e) => {
    const followDiv = document.getElementById("followDiv");
    const x = e.clientX;
    const y = e.clientY;

    followDiv.style.transform = `translate(${x}px, ${y}px)`;
  });

  document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
      hideSplashScreen();
    }, 1000);
  });

  function hideSplashScreen() {
    const splashScreen = document.getElementById("splash-screen");
    splashScreen.classList.add("hidden");
  }

  document.addEventListener('DOMContentLoaded', function () {
    const squares = document.querySelectorAll('.square-item');

    squares.forEach((square, index) => {
        square.addEventListener('mouseover', () => {
            square.style.transform = 'scale(1.1)';
            square.style.transition = 'transform 0.3s ease';
        });

        square.addEventListener('mouseout', () => {
            square.style.transform = 'scale(1)';
            square.style.transition = 'transform 0.3s ease';
        });
    });
});


function lookAtMouse(event, element) {
  const boundingRect = element.getBoundingClientRect();
  const centerX = boundingRect.left + boundingRect.width / 2;
  const centerY = boundingRect.top + boundingRect.height / 2;
  const deltaX = event.clientX - centerX;
  const deltaY = event.clientY - centerY;

  const angleX = (deltaY / boundingRect.height) * 50; // Increased speed
  const angleY = -(deltaX / boundingRect.width) * 50; // Increased speed

  element.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) scale(1.1)`;

  const parallaxStrength = 30;
  element.querySelector('.overlay::before').style.transform = `translate(${deltaX / parallaxStrength}px, ${deltaY / parallaxStrength}px)`;

  const textParallaxStrength = 15;
  element.querySelector('p').style.transform = `translate(-50%, -50%) translate(${deltaX / textParallaxStrength}px, ${deltaY / textParallaxStrength}px)`;
}



/*  Tentativa de ter three js na página, porém o ecra fica simplesmente preto e nunca aparece nada ou qquando uso um modelo basico como um cubo fica completamente dedsformado


 // Set up Three.js scene
 var scene = new THREE.Scene();
 var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
 var renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('3d-canvas') });
 renderer.setSize(window.innerWidth / 2, window.innerHeight); // Adjust the size if needed

 // Create a simple 3D box
 var geometry = new THREE.BoxGeometry();
 var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
 var orchidModel = new THREE.Mesh(geometry, material);
 scene.add(orchidModel);

 // Set up camera position
 camera.position.z = 5;
 document.getElementById('3d-container').appendChild(renderer.domElement);

 // Animation loop
 var animate = function () {
     requestAnimationFrame(animate);
     orchidModel.rotation.y += 0.01;
     renderer.render(scene, camera);
 };

 animate();
 */
