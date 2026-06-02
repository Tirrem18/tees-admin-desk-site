export function Footer() {
  return `
    <footer class="site-footer">
      <div class="container footer-grid">
        <div class="footer-brand">
          <img src="assets/Logo.png" alt="Tees Admin Desk logo" class="footer-logo" />
          <div>
            <strong>Tees Admin Desk</strong>
            <span>Paperwork &bull; Deadlines &bull; Systems</span>
          </div>
        </div>

        <div class="footer-contact">
          <a href="mailto:hello@teesadmindesk.co.uk">hello@teesadmindesk.co.uk</a>
          <a href="https://teesadmindesk.co.uk">teesadmindesk.co.uk</a>
        </div>

        <p class="footer-disclaimer">
          Tees Admin Desk provides admin, document organisation and deadline-tracking
          support only. We do not provide legal, technical health and safety,
          accreditation, transport, property or statutory compliance advice.
        </p>
      </div>
    </footer>
  `;
}
