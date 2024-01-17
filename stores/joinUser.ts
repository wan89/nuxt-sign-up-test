import { defineStore } from "pinia"

/**
 * join user store - signup step 최종 결과 페이지에서 보여지는 데이터를 관리합니다
 */
type IJoinUser = {
  name: string
  phone: string
  email: string
  address: string
}

export const useJoinUser = defineStore('joinUser', {
  state: (): IJoinUser => ({
    name: '',
    phone: '',
    email: '',
    address: '',
  }),
  actions: {
    setName(name: string) {
      this.name = name
    },
    setPhone(phone: string) {
      this.phone = phone
    },
    setEmail(email: string) {
      this.email = email
    },
    setAddress(adress: string) {
      this.address = adress
    },
  }
})