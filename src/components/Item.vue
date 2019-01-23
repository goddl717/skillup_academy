<template>
    <div class = "item">
        {{hole}}
         <div class = "item-delete" @click="onDeleteClick">삭제</div>
    </div>     
</template>

<script>
    export default {   
        props:['hole','itemIndex'],
        methods:{
            onDeleteClick()
            {
                this.$emit('delete',this.itemIndex)
            },
        }
    }
</script>

<style>
</style>
