// ** Code to find the thing that we want to change. In this example it is the div.pixels.
const pixelsTag = document.querySelector('div.pixels')

// ** Code to get the info on scroll
const bodyTag = document.querySelector('body')

// ** Code to select the div.progress where we will then be able to link the const percentage to the width of the progressTag when we will scroll.
const progressTag = document.querySelector("div.progress")

// ** Code to select the section HTML tags which are then used along with the HTML data attribute to make changes on scroll
const sections = document.querySelectorAll("section")

// ** Code to select the div.client classes
const clientTag = document.querySelector("div.client")

// ** Code to select the div.page classes
const pageTag = document.querySelector("div.page")

// ** Code to select the header HTML tag
const headerTag = document.querySelector("header")


// ** const are things that you never need the code to change. You never need to double, subtract from, or add to etc.

// ** when we scroll the page, update the pixels tag to be how far we've scrolled
document.addEventListener('scroll', function() {
  //   console.log("scroll")
  const pixels = window.pageXOffset
  //   ** this little bit of code gives me the number of pixels I've scrolled down in the window. The number shows up in the Console when inspecting the website. You use this code to check and make sure that you created the correct const pixels above.
  //   console.log(pixels)

  //   ** This code changes the HTML on our page to display the number of pixels we've scrolled from the top. Since the pixelsTag is a const that we've created before that is why there is less code needed below.
  pixelsTag.innerHTML = pixels
})

// When we scroll the page, make a progress bar that tracks the distance scrolled on the page.

document.addEventListener('scroll', function() {
  const pixels = window.pageXOffset
  // This will give us the document height. This will give us an object all about how tall, wide, where it starts, where it ends, etc. Yet we don't want to get all this information we just want to get the height so we add .height to the end of the line.

//  console.log(pixels)

  const pageWidth = bodyTag.getBoundingClientRect().width

  // this will give us the total scrollable distance which is the page height minus the window height. window.innerHeight = the height of the window. pageHeight = height of the entire page.
  const totalScrollableDistance = pageWidth - window.innerWidth

  console.log(pageWidth)


  // this will convert our distance scrolled to a percentage.
  const percentage = pixels / totalScrollableDistance

//   this will change the width of our div.progress in the CSS based on the percent we've scrolled on the page.
  progressTag.style.height = `${100 * percentage}%`
  progressTag.style.width = "5px"

//   If you'd like to change the progress bar from a horizontal to vertical orientation you'd switch progressTag.style.width with progressTag.style.height. You'd also need to make sure that you add a width to the div.progress on the CSS and change height to 0

//   **********&&&&&&&&&& Code to swap with for the vertical progress bar.
//   progressTag.style.height = `${100 * percentage}%`
//   progressTag.style.width = "5px"
})

// when we scroll the page, see how far down the page we've scrolled and then check for each section, and check to see if we've scrolled passed that threshold. If we have passed the section then update the text in the header.

document.addEventListener("scroll", function() {
  const pixels = window.pageXOffset

  sections.forEach(section => {
//     offsetTop is the exact location of the top of a given section. By doing section.offsetTop - 60 we are saying that we want the changes to occur when we've scrolled to within 60 pixels of the top of that section.
    if (section.offsetLeft - 60 <= pixels) {
//       .getAttribute utilizes the data attribute in connection with an HTML tag. You can create a wide variety of attributes to work as Hooks for javascript and jquery events. You can name a data attribute anything you'd like similar to an id or class. It looks like data-_________="____________"
      clientTag.innerHTML = section.getAttribute("data-client")
      pageTag.innerHTML = section.getAttribute("data-page")

      if (section.hasAttribute("data-is-dark")) {
          headerTag.classList.add("white")
        progressTag.classList.add("white")
          } else {
            headerTag.classList.remove("white")
            progressTag.classList.remove("white")
          }

    }
  })

})

// when we scroll the page, make things parallax
// we want to move certain types based on how far they are from an anchor point. The anchor point in this example is the middle of the section.
// How far should we parallax? Well, it's a ratio of the middle distance scrolled to the middle point of the anchor
document.addEventListener ("scroll", function() {
//   distance from the top of the viewport to the midpoint
  const leftViewport = window.pageXOffset
//   distance from the top of the viewport to the midpoint plus half the height of the entire page.
  const midViewport = leftViewport + (window.innerWidth / 2)

//   check to see if the two const above are correct
//   what you should be seeing in the console log and you scroll to the top of the page it should be 300.
//   console.log(midViewport)

//   *** Code to determine the midpoint for each section
  sections.forEach(section => {
//     code to determine how far down the page the top of each section is
    const leftSection = section.offsetLeft
//     code to determine the midpoint for each section
    const midSection = leftSection + (section.offsetWidth / 2)
//     code to check if the midSection works. In the console log you should see the same three numbers repeating as you scroll down the page.
//     console.log(midSection)

//     code to determine the distance between midSection and MidViewport. How far away the
    const distanceToSection = midViewport - midSection
//   code to check if the distanceToSection works. In the console log you will see four different numbers that keep changing as you scroll. These numbers relate to the distance from each Section Midpoint as you're scrolling. For example if you scroll all the way down to the bottom of the page the last number should be 0 because you are 0px away from the midpoint of Section 4.
//     ****** in my code currently I'm seeing section 4 listed as 15px when I'm scrolled all the way to the bottom. I don't know why this is but will have to investigate this. It has something to do with the height and width of the viewport. If it is bigger than 1000px in either direction the number is 0px.
//     console.log(distanceToSection)

//     code to add movement to ALL shapes
    const parallaxTags = section.querySelectorAll(`[data-parallax]`)

//     loop over each parallaxed tag
    parallaxTags.forEach(tag => {
      const speed = parseFloat(tag.getAttribute("data-parallax"))
    tag.style.transform = `translate(0, ${distanceToSection * speed}px)`
    })

// code to add movement to the square tags
//     const tag = section.querySelector("div.square")
//     code to get the value for the speed of each square. Each square in the html has a data attribute on it with a percentage which we will be pulling into our code below and multiplying it by the distanceToSection. In order to make the attribute a number we need to make sure that we add parseFloat before the string. parseFloat will turn this string into a decimal number.
//      const speed = parseFloat(tag.getAttribute("data-parallax"))
//     tag.style.transform = `translate(0, ${distanceToSection * speed}px)`







  })
})
