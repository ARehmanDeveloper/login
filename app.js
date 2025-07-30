const SUPABASE_URL = 'https://jzgqfkbmudjblitvevxc.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp6Z3Fma2JtdWRqYmxpdHZldnhjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM0NzMzMDAsImV4cCI6MjA2OTA0OTMwMH0.bUva-RMXg_rX_ecx54EJCm99G7ASlzVy5nxS92t16Ec';
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);


document.addEventListener('DOMContentLoaded', () => {
  const loginBtn = document.getElementById('loginBtn');
  if (loginBtn) {
    loginBtn.addEventListener('click', async () => {
      const email = document.getElementById('loginEmail').value;
      const password = document.getElementById('loginPassword').value;
      const msg = document.getElementById('loginMessage');

      const { error } = await supabase.auth.signInWithPassword({ email, password });

      if (error) {
        msg.textContent = error.message;
        msg.className = 'msg error';
      } else {
        msg.textContent = 'Login successful!';
        msg.className = 'msg success';
        setTimeout(() => window.location.href = 'dashboard.html', 1500);
      }
    });
  }

  
  const signupBtn = document.getElementById('signupBtn');
  if (signupBtn) {
    signupBtn.addEventListener('click', async () => {
      const email = document.getElementById('signupEmail').value;
      const password = document.getElementById('signupPassword').value;
      const msg = document.getElementById('signupMessage');

      const { error } = await supabase.auth.signUp({ email, password });

      if (error) {
        msg.textContent = error.message;
        msg.className = 'msg error';
      } else {
        msg.textContent = 'Signup successful!';
        msg.className = 'msg success';
        setTimeout(() => window.location.href = 'index.html', 1500);
      }
    });
  }
});

const googleLogin = document.getElementById('googleLogin');
if (googleLogin) {
  googleLogin.addEventListener('click', async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: 'https://arehmandeveloper.github.io/dashboard/'

      }
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const facebookLogin = document.getElementById('facebookLogin');

  if (facebookLogin) {
    facebookLogin.addEventListener('click', async () => {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'facebook',
        options: {
          redirectTo: 'https://arehmandeveloper.github.io/dashboard/'
        }
      });

      if (error) {
        console.error('Facebook Login Error:', error.message);
      }
    });
  }
});
