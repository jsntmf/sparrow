
export default {
  '/src/components/Sticky/index.vue': 
    {
      code: decodeURIComponent(`%3Ctemplate%3E%0A%20%20%3Cdiv%20%3Astyle%3D%22%7Bheight%3Aheight%2B'px'%2CzIndex%3AzIndex%7D%22%3E%0A%20%20%20%20%3Cdiv%0A%20%20%20%20%20%20%3Aclass%3D%22className%22%0A%20%20%20%20%20%20%3Astyle%3D%22%7Btop%3A(isSticky%20%3F%20stickyTop%20%2B'px'%20%3A%20'')%2CzIndex%3AzIndex%2Cposition%3Aposition%2Cwidth%3Awidth%2Cheight%3Aheight%2B'px'%7D%22%0A%20%20%20%20%3E%0A%20%20%20%20%20%20%3Cslot%3E%0A%20%20%20%20%20%20%20%20%3Cdiv%3Esticky%3C%2Fdiv%3E%0A%20%20%20%20%20%20%3C%2Fslot%3E%0A%20%20%20%20%3C%2Fdiv%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%3E%0Aexport%20default%20%7B%0A%20%20name%3A%20'Sticky'%2C%0A%20%20props%3A%20%7B%0A%20%20%20%20stickyTop%3A%20%7B%0A%20%20%20%20%20%20type%3A%20Number%2C%0A%20%20%20%20%20%20default%3A%200%0A%20%20%20%20%7D%2C%0A%20%20%20%20zIndex%3A%20%7B%0A%20%20%20%20%20%20type%3A%20Number%2C%0A%20%20%20%20%20%20default%3A%201%0A%20%20%20%20%7D%2C%0A%20%20%20%20className%3A%20%7B%0A%20%20%20%20%20%20type%3A%20String%2C%0A%20%20%20%20%20%20default%3A%20''%0A%20%20%20%20%7D%0A%20%20%7D%2C%0A%20%20data()%20%7B%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20active%3A%20false%2C%0A%20%20%20%20%20%20position%3A%20''%2C%0A%20%20%20%20%20%20width%3A%20undefined%2C%0A%20%20%20%20%20%20height%3A%20undefined%2C%0A%20%20%20%20%20%20isSticky%3A%20false%0A%20%20%20%20%7D%0A%20%20%7D%2C%0A%20%20mounted()%20%7B%0A%20%20%20%20this.height%20%3D%20this.%24el.getBoundingClientRect().height%0A%20%20%20%20window.addEventListener('scroll'%2C%20this.handleScroll)%0A%20%20%20%20window.addEventListener('resize'%2C%20this.handleResize)%0A%20%20%7D%2C%0A%20%20activated()%20%7B%0A%20%20%20%20this.handleScroll()%0A%20%20%7D%2C%0A%20%20destroyed()%20%7B%0A%20%20%20%20window.removeEventListener('scroll'%2C%20this.handleScroll)%0A%20%20%20%20window.removeEventListener('resize'%2C%20this.handleResize)%0A%20%20%7D%2C%0A%20%20methods%3A%20%7B%0A%20%20%20%20sticky()%20%7B%0A%20%20%20%20%20%20if%20(this.active)%20%7B%0A%20%20%20%20%20%20%20%20return%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20this.position%20%3D%20'fixed'%0A%20%20%20%20%20%20this.active%20%3D%20true%0A%20%20%20%20%20%20this.width%20%3D%20this.width%20%2B%20'px'%0A%20%20%20%20%20%20this.isSticky%20%3D%20true%0A%20%20%20%20%7D%2C%0A%20%20%20%20handleReset()%20%7B%0A%20%20%20%20%20%20if%20(!this.active)%20%7B%0A%20%20%20%20%20%20%20%20return%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20this.reset()%0A%20%20%20%20%7D%2C%0A%20%20%20%20reset()%20%7B%0A%20%20%20%20%20%20this.position%20%3D%20''%0A%20%20%20%20%20%20this.width%20%3D%20'auto'%0A%20%20%20%20%20%20this.active%20%3D%20false%0A%20%20%20%20%20%20this.isSticky%20%3D%20false%0A%20%20%20%20%7D%2C%0A%20%20%20%20handleScroll()%20%7B%0A%20%20%20%20%20%20const%20width%20%3D%20this.%24el.getBoundingClientRect().width%0A%20%20%20%20%20%20this.width%20%3D%20width%20%7C%7C%20'auto'%0A%20%20%20%20%20%20const%20offsetTop%20%3D%20this.%24el.getBoundingClientRect().top%0A%20%20%20%20%20%20if%20(offsetTop%20%3C%20this.stickyTop)%20%7B%0A%20%20%20%20%20%20%20%20this.sticky()%0A%20%20%20%20%20%20%20%20return%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20this.handleReset()%0A%20%20%20%20%7D%2C%0A%20%20%20%20handleResize()%20%7B%0A%20%20%20%20%20%20if%20(this.isSticky)%20%7B%0A%20%20%20%20%20%20%20%20this.width%20%3D%20this.%24el.getBoundingClientRect().width%20%2B%20'px'%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A%3C%2Fscript%3E%0A`)
    }    
  
}