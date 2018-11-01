<template>
   <Carousel 
      :height="height"
      :autoplay=true
      loop
   >
        <CarouselItem>
            <div class="demo-carousel">
              轮播图片
            </div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel">
              轮播图片
            </div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel">
              轮播图片
            </div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel">
              轮播图片
            </div>
        </CarouselItem>
    </Carousel>
</template>

<script>
export default {
  name: 'carousel',
  data() {
    return {
      height: 165,
    }
  }
}
</script>

<style lang="scss">

.demo-carousel {
  width: 100%;
  height: 100%;
  background-color: #93c9ae;
  color: #180d0d;
  position: fixed;
}

</style>
