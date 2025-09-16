import { motion } from 'motion/react';

export function MovingBanner() {
  // Array of banner images
  const bannerImages = [
    "https://blogger.googleusercontent.com/img/a/AVvXsEh2B1B6nPF-Ae_I8XYw1lnqTFBiQm0JJRHLlF_QQo3i-lT_1feRqeqVsy8aRMZhrBzE8dDakbqBS1cRTO6opn1MTdVnV3knDFsaON846yN9QFJe9tbCFtY24_wnK6x3KYCkEWbNOOcob7gWHkBmWRROWXX0kr0xzVQxVpVoSnLlvKu59yQU1kQ-qZh2jjM",
    "https://blogger.googleusercontent.com/img/a/AVvXsEgCJ2OcH_0S3_bmjqm_Gupt-XBiMwDjsVWzdInQrSuz2wKekXhtaD8Jmel7_43sJq1-XwFV_NW1SFC6FjX3GYO-n10Pxei9qLFyYznPAYIFi07ojW9DaNU9FNifI9s1givPSnkyndW_MHDK5WUQwh0MX5NSoiOdl2_pyYIoNHaKvMGwkH5mechPC9dIDM8",
    "https://blogger.googleusercontent.com/img/a/AVvXsEj3FgLhSH4hfuDHm8Q81DbTAw7W3DWHOnOgB_552STfb3kWSOqvkxPvN2RSPZfQSGuqwDMEwX7TlNRyz0cvjEllyZIWbGl_qs6bPgDkXDoCJmnGk1beunzC7iZSeMt92PUhvKFmzuATwScDaxoh64C7jhlwlHZYsmcvAUGXhZm4AgNET_GdyQD3yGY8tUw",
    "https://blogger.googleusercontent.com/img/a/AVvXsEjZMKhOwUVMzDRPGQaGPIRXclVH6heAFAcKWoLoS0UOFHP-Cdbnc5hkdeBoJe0FCE23l3NyAR2wp91Mnp6USOzbwVyG-U8QFlW2jzctcZ_y7ezhCEJJg5UdVUmVgtqD2xiAXVQ0E2_FdW1WA_nbsFJ9NNasAlGE4l5JTZsf-o1h0NDHCt9oeUbiqF2iIRk",
    "https://blogger.googleusercontent.com/img/a/AVvXsEj5wYneVMEiueE5fC52sVdkn1So20ecQQvKNs_OSJRCpIEbWDM3IgqPlPsF-kHEEYIVnDh8wmTkJS3na4_SpDvseKJD04Pi1JVYgnx7NrJXv-20TBB_RUU7-VhWVLcUcQE6KWy9tFEOFnCkOFHA9T1RAP-wCo67CeDHqObb0HFyEMv_ML9SgNJu2TBCr-8",
    "https://blogger.googleusercontent.com/img/a/AVvXsEgsAUhg9FAnZZs1qpPqAzQCZ_YPqcH_iIQabnrCirI59APfjqqXLgwSprG2x7PnA4brLN9M3cJYx04ZMRzIJkhPuxwbiV-S2NJCzh86Vikc97sGeqcQ9zxJ2j4aG22VeZORBcWJupTkcWvjThSb1F7PvPnsLVe__gyOdgcf6p2PRcMhVrsG9oEHeR2QVM0"
  ];

  return (
    <div className="w-full overflow-hidden bg-gradient-to-b from-dark-bg to-dark-surface py-12">
      {/* Content Section Above Banner */}
      <div className="container mx-auto px-4 text-center mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-neon-cyan animate-glow">Everything You Love,</span>{' '}
            <span className="text-white">All In One Place</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-6">
            From live sports to blockbuster movies, we've got your entertainment covered with 
            <span className="text-neon-cyan font-semibold"> over 50,000+ channels</span> and premium content.
          </p>
        </motion.div>
      </div>

      {/* Moving Banner Container */}
      <div className="relative banner-container overflow-hidden rounded-lg">
        <motion.div
          className="flex moving-banner"
          animate={{
            x: ['0%', '-100%'],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {/* First Set of Images */}
          <div className="flex flex-shrink-0">
            {bannerImages.map((imageUrl, index) => (
              <div key={`first-${index}`} className="flex-shrink-0 w-48 h-28 mx-1">
                <img
                  src={imageUrl}
                  alt={`IPTV Prime Entertainment Banner ${index + 1}`}
                  className="w-full h-full object-contain rounded-lg shadow-lg bg-dark-surface/50"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
          
          {/* Duplicate Set for seamless loop */}
          <div className="flex flex-shrink-0">
            {bannerImages.map((imageUrl, index) => (
              <div key={`second-${index}`} className="flex-shrink-0 w-48 h-28 mx-1">
                <img
                  src={imageUrl}
                  alt={`IPTV Prime Entertainment Banner ${index + 1}`}
                  className="w-full h-full object-contain rounded-lg shadow-lg bg-dark-surface/50"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Enhanced Gradient Overlays for smooth edges */}
        <div className="absolute top-0 left-0 w-40 h-full banner-fade-left z-10"></div>
        <div className="absolute top-0 right-0 w-40 h-full banner-fade-right z-10"></div>
        
        {/* Subtle glow effect */}
        <div className="absolute inset-0 bg-gradient-to-t from-neon-cyan/5 via-transparent to-neon-cyan/5 pointer-events-none"></div>
      </div>

      {/* Additional Features Below Banner */}
      <div className="container mx-auto px-4 mt-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center"
        >
          <div className="p-4">
            <h3 className="text-xl font-bold text-neon-cyan mb-2">Premium Sports</h3>
            <p className="text-gray-300 text-sm">All major leagues and tournaments in stunning HD quality</p>
          </div>
          <div className="p-4">
            <h3 className="text-xl font-bold text-neon-cyan mb-2">Latest Movies</h3>
            <p className="text-gray-300 text-sm">Blockbuster films from top platforms and studios</p>
          </div>
          <div className="p-4">
            <h3 className="text-xl font-bold text-neon-cyan mb-2">Binge-Worthy Series</h3>
            <p className="text-gray-300 text-sm">Your favorite shows and series, all in one place</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}