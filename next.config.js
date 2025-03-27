/** @type {import('next').NextConfig} */
const {withContentlayer}=require("next-contentlayer")

// module.exports = {
//     // othor next config here...
//     compiler: {
//       removeConsole: process.env.NODE_ENV === 'production' ? true : false,
//     },
//     webpack: config => {
//       config.plugins.push(new VeliteWebpackPlugin())
//       return config
//     }
//   }

  // class VeliteWebpackPlugin {
  //   static started = false
  //   apply(/** @type {import('webpack').Compiler} */ compiler) {
  //     // executed three times in nextjs
  //     // twice for the server (nodejs / edge runtime) and once for the client
  //     compiler.hooks.beforeCompile.tapPromise('VeliteWebpackPlugin', async () => {
  //       if (VeliteWebpackPlugin.started) return
  //       VeliteWebpackPlugin.started = true
  //       const dev = compiler.options.mode === 'development'
  //       const { build } = await import('velite')
  //       await build({ watch: dev, clean: !dev })
  //     })
  //   }
  // }


  module.exports = {
    env: {
      NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
      NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    }
  };
  
const NextConfig={};
  module.exports= withContentlayer({...NextConfig})