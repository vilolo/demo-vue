<template>
  <div>
    <div class="card-body pad">
      <div class="mb-3">
        <textarea class="textarea" placeholder="Place some text here"
                  style="width: 100%; height: 200px; font-size: 14px; line-height: 18px; border: 1px solid #dddddd; padding: 10px;"></textarea>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  created: function(){
    $('.textarea').summernote()
  }
}
</script>
