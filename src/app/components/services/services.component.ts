import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-services",
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="services" class="services" dir="rtl">
      <div class="container">
        <h2>שירותי סת״ם ומוצרי יודאיקה</h2>

        <div class="running-text-container">
          <h3 class="category-title running-title">
            <span>מכירת אותיות לספר תורה חדש ומהודר להצלחת עם ישראל וחיילי צה"ל הגיבורים ניתן לרכוש גם מילה, פסוק או עמוד שיהיה שלכם לנצח</span>
          </h3>
        </div>

        <!-- STaM Services -->
        <h3 class="category-title">שירותי סת״ם</h3>
        <div class="services-grid">
          <div class="service-card torah-scroll">
            <div class="bg-image"></div>
            <div class="content">
              <h3>ספרי תורה</h3>
              <ul>
                <li>כתיבת ספר תורה מהודר</li>
                <li>שירותי תיקון והגהה</li>
                <li>תעודת הכשר והסמכה</li>
              </ul>
            </div>
          </div>
          <div class="service-card tefillin">
            <div class="bg-image"></div>
            <div class="content">
              <h3>תפילין</h3>
              <ul>
                <li>תפילין חדשות</li>
                <li>בדיקת תפילין</li>
                <li>ייעוץ מקצועי</li>
              </ul>
            </div>
          </div>
          <div class="service-card mezuzah">
            <div class="bg-image"></div>
            <div class="content">
              <h3>מזוזות</h3>
              <ul>
                <li>מזוזות מהודרות</li>
                <li>שירותי בדיקה</li>
                <li>הדרכה להתקנה נכונה</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <section>
        <section id="products" class="products" dir="rtl">
          <div class="container">
            <h2>המוצרים שלנו</h2>
            <!-- Prayer Items -->
            <h3 class="category-title">תשמישי תפילה</h3>
            <div class="services-grid">
              <div class="service-card tallit">
                <div class="bg-image"></div>
                <div class="content">
                  <h3>טליתות</h3>
                  <ul>
                    <li>טליתות מצמר איכותי</li>
                    <li>טליתות קטן</li>
                    <li>תיקי טלית מהודרים</li>
                  </ul>
                </div>
              </div>
              <div class="service-card kippah">
                <div class="bg-image"></div>
                <div class="content">
                  <h3>כיפות</h3>
                  <ul>
                    <li>כיפות סרוגות</li>
                    <li>כיפות קטיפה</li>
                    <li>כיפות מעוצבות</li>
                  </ul>
                </div>
              </div>
              <div class="service-card siddur">
                <div class="bg-image"></div>
                <div class="content">
                  <h3>סידורים</h3>
                  <ul>
                    <li>סידורים מכל הנוסחים</li>
                    <li>מחזורים לחגים</li>
                    <li>ספרי תהילים</li>
                  </ul>
                </div>
              </div>
            </div>

            <!-- Holiday Items -->
            <h3 class="category-title">חפצי חג ושבת</h3>
            <div class="services-grid">
              <div class="service-card shabbat">
                <div class="bg-image"></div>
                <div class="content">
                  <h3>תשמישי שבת</h3>
                  <ul>
                    <li>פמוטים וחנוכיות</li>
                    <li>גביעי קידוש</li>
                    <li>חלות ופלטות שבת</li>
                  </ul>
                </div>
              </div>
              <div class="service-card holidays">
                <div class="bg-image"></div>
                <div class="content">
                  <h3>מוצרי חגים</h3>
                  <ul>
                    <li>שופרות מהודרים</li>
                    <li>הגדות לפסח</li>
                    <li>סביבונים ונרות</li>
                  </ul>
                </div>
              </div>
              <div class="service-card kitchenware">
                <div class="bg-image"></div>
                <div class="content">
                  <h3>כלי מטבח</h3>
                  <ul>
                    <li>כלים לפסח</li>
                    <li>סירים וכלי בישול</li>
                    <li>כלי הגשה מהודרים</li>
                  </ul>
                </div>
              </div>
            </div>

            <!-- Jewelry and Art -->
            <h3 class="category-title">תכשיטים ואומנות</h3>
            <div class="services-grid">
              <div class="service-card jewelry">
                <div class="bg-image"></div>
                <div class="content">
                  <h3>תכשיטים</h3>
                  <ul>
                    <li>מגן דוד</li>
                    <li>חמסות</li>
                    <li>תכשיטי אבן ירושלמית</li>
                  </ul>
                </div>
              </div>
              <div class="service-card art">
                <div class="bg-image"></div>
                <div class="content">
                  <h3>אומנות</h3>
                  <ul>
                    <li>הדפסים ותמונות</li>
                    <li>שטיחי קיר</li>
                    <li>כלי נוי מעוצבים</li>
                  </ul>
                </div>
              </div>
              <div class="service-card books">
                <div class="bg-image"></div>
                <div class="content">
                  <h3>ספרים ומוזיקה</h3>
                  <ul>
                    <li>ספרי קודש</li>
                    <li>מוזיקה יהודית</li>
                    <li>ספרי ילדים</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </section>
  `,
  styles: [
    `
      .services {
        padding: 3rem 0;
        background-color: var(--secondary-color);
      }

      h2 {
        text-align: center;
        margin-bottom: 3rem;
        color: var(--primary-color);
        font-size: 2.5rem;
      }

      .category-title {
        text-align: center;
        color: var(--primary-color);
        font-size: 1.8rem;
        margin: 4rem 0 2rem;
        position: relative;

        &.running-title {
          margin: 1rem 0 0rem;
          color: gold;
          font-family: "Frank Ruhl Libre", serif;
          text-shadow: 0 0 10px rgba(255, 215, 0, 0.7);
          background: linear-gradient(45deg, #37310b, #daa520);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-weight: bold;
        }
      }

      .category-title::after {
        content: "";
        display: block;
        width: 60px;
        height: 3px;
        background-color: var(--accent-color);
        margin: 1rem auto 0;

        &.running-title::after {
          background-color: none;
        }
      }

      .services-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: var(--spacing-unit);
        margin-bottom: 2rem;
      }

      .service-card {
        height: 300px;
        border-radius: 8px;
        position: relative;
        overflow: hidden;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.9);
        transition: transform 0.3s ease;
        cursor: pointer;
      }

      .bg-image {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-size: cover;
        background-position: center;
        transition: transform 0.5s ease;
      }

      .service-card::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(to bottom, rgba(116, 101, 101, 0.4), rgba(116, 101, 101, 0.9));
        transition: all 0.5s ease;
        z-index: 1;
      }

      .service-card:hover {
        transform: translateY(-5px);
      }

      .service-card:hover .bg-image {
        transform: scale(1.3);
      }

      .service-card:hover::before {
        background: linear-gradient(to bottom, rgba(116, 101, 101, 0.7), rgba(116, 101, 101, 0.85));
      }

      /* Background images for all cards */
      .torah-scroll .bg-image {
        background-image: url("/judaica-store/assets/images/torah-scroll.jpg");
      }
      .tefillin .bg-image {
        background-image: url("/judaica-store/assets/images/tefillin.jpg");
      }
      .mezuzah .bg-image {
        background-image: url("/judaica-store/assets/images/mezuzah.jpg");
      }
      .tallit .bg-image {
        background-image: url("/judaica-store/assets/images/tallit.jpg");
      }
      .kippah .bg-image {
        background-image: url("/judaica-store/assets/images/kippah.jpg");
      }
      .siddur .bg-image {
        background-image: url("/judaica-store/assets/images/siddur.jpg");
      }
      .shabbat .bg-image {
        background-image: url("/judaica-store/assets/images/shabbat.jpg");
      }
      .holidays .bg-image {
        background-image: url("/judaica-store/assets/images/holidays.jpg");
      }
      .kitchenware .bg-image {
        background-image: url("/judaica-store/assets/images/kitchenware.jpg");
      }
      .jewelry .bg-image {
        background-image: url("/judaica-store/assets/images/jewelry.jpg");
      }
      .art .bg-image {
        background-image: url("/judaica-store/assets/images/art.jpg");
      }
      .books .bg-image {
        background-image: url("/judaica-store/assets/images/books.jpg");
      }

      .content {
        position: relative;
        z-index: 2;
        padding: 1.5rem;
        color: var(--secondary-color);
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }

      .service-card h3 {
        font-size: 3.25rem;
        margin-bottom: 1rem;
        text-align: center;
        color: var(--secondary-color);
      }

      .service-card ul {
        list-style: none;
        padding: 0;
        font-size: 1.25rem;
      }

      .service-card li {
        margin-bottom: 0.75rem;
        padding-right: 1.5rem;
        position: relative;
      }

      .service-card li::before {
        content: "•";
        color: var(--accent-color);
        position: absolute;
        right: 0;
      }

      @media (max-width: 768px) {
        .service-card {
          height: 220px;
        }

        .service-card h3 {
          font-size: 2rem;
        }

        .service-card ul {
          font-size: 1.2rem;
        }

        .category-title {
          font-size: 1.5rem;
          margin: 0rem 0 1.5rem;
        }
      }

      .running-text-container {
        width: 100%;
        overflow: hidden;
        white-space: nowrap;
        margin: 1rem 0;
        border-radius: 10px;
        background-color: #f1dece;
      }

      .running-title {
        display: inline-block;
        animation: runText 20s linear infinite, shiny-effect 3s infinite alternate;
        padding-right: 100%;
      }

      @keyframes shiny-effect {
        0% {
          text-shadow: 0 0 5px rgba(255, 215, 0, 0.5);
        }
        100% {
          text-shadow: 0 0 15px rgba(255, 215, 0, 0.9);
        }
      }

      @keyframes runText {
        0% {
          transform: translateX(0%);
        }
        100% {
          transform: translateX(100%);
        }
      }
    `,
  ],
})
export class ServicesComponent {}
