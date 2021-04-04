require('dotenv').config()
const Stripe = require('stripe')
const stripe = Stripe(process.env.STRIPE_SECRET_KEY)
const repl = require('repl')
const r = repl.start('> ').context.stripe = stripe;