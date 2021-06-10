<template>
  <section>
    <h2>Endereço para Envio</h2>
    <UserForm>
      <button class="btn" @click.prevent="finishCheckout">Finalizar Compra</button>
    </UserForm>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import UserForm from '@/components/UserForm'
import { api } from '@/services.js'

export default {
  name: 'Checkout',
  components: { UserForm },
  props: ["produto"],
  computed: {
    ...mapState(['usuario']),
    compra () {
      return {
        comprador_id: this.usuario.email,
        vendedor_id: this.produto.usuario_id,
        produto: this.produto,
        endereco: {
          cep: this.usuario.cep,
          rua: this.usuario.rua,
          bairro: this.usuario.bairro,
          cidade: this.usuario.cidade,
          estado: this.usuario.estado,
        }
      }
    }
  },
  methods: {
    async createCheckout () {
      await api.post('/transacao', this.compra)
      await this.$router.push({ name: 'compras' })
    },

    async createUser() {
      await this.$store.dispatch('createUser', this.$store.state.usuario)
      await this.$store.dispatch('getUser', this.$store.state.usuario.email)
      await this.createCheckout()
    },

    finishCheckout () {
      this.$store.state.login
        ? this.createCheckout()
        : this.createUser()
    }
  }
}
</script>

<style scoped>
h2 {
  margin: 40px 0 20px;
}

.btn {
  background: #e80;
}

</style>