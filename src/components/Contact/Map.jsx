

const GoogleMap = () => {
  return (
    <div className="map-container">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.8911451757767!2d-118.47794912404392!3d33.99532967317852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bacf4578353b%3A0x475106ed00e39b87!2sGold&#39;s%20Gym%20Venice!5e0!3m2!1ses!2sar!4v1699036823764!5m2!1ses!2sar"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default GoogleMap;