<template>
    <div>
        <p> Faça o download dos arquivos.</p>
        <button>Donwload</button>
    </div>
</template>

<script>
export default {
    nome: "AulaDownload",
    created() {
        console.log("Download criado")
    },
    destroyed() {
        console.log("Download destruido")
    }
};
</script>

<style>

</style>