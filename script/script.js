const sliderData = [
	{
		description: "Oh, who do we have here?",
		text: "It's a dozing dogo!"
	},
	{
	description: "And here?",
	text: "Aww such a cute dogo!"
},
{
	description: "Who is so fast?",
	text: "It's a super dogo!"
}
];

const sliderImg = document.querySelector('.slider-images');
const slides = (document.querySelectorAll('.img'));
const nextSlideBtn = document.querySelector('.right');
const previousSlideBtn = document.querySelector('.left');
const dots = Array.from(document.querySelectorAll('.slider-dot'));


let currentIndex = 0;

function showCurrentSlide(index) {
	slides.forEach((slide, i) => {
		slide.classList.remove('active');
		if (i === index) {
			slide.classList.add('active');
			const currentData = sliderData[index];
			document.querySelector('.description').textContent = currentData.description;
			document.querySelector('.text').textContent = currentData.text;
		};
	});
	showCurrentDot();
}

previousSlideBtn.onclick = function () {
	currentIndex = (currentIndex - 1 + slides.length) % slides.length;
	showCurrentSlide(currentIndex);
	showCurrentDot();
};

nextSlideBtn.onclick = function () {
	currentIndex = (currentIndex + 1) % slides.length;
	showCurrentSlide(currentIndex);
	showCurrentDot();
};

function showCurrentDot() {
	dots.forEach((dot, index) => {
		if (index === currentIndex) {
			dot.classList.add('active');
		} else {
			dot.classList.remove('active');
		}
	});
};


dots.forEach((dot, index) => {
	dot.addEventListener('click', function() {
		currentIndex = index;
		showCurrentSlide(currentIndex);
	});
});


showCurrentSlide(currentIndex);
