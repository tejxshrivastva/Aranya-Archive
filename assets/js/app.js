/* =========================================================================
   ARANYA ARCHIVE — Glass Storefront
   Framework-free application logic (data, catalog, wishlist, cart, checkout).
   Each page sets window.ARANYA_PAGE before loading this script.
   ========================================================================= */
(function () {
  'use strict';

  var WHATSAPP_NUMBER = '919399734130';

  /* ---------------------------------------------------------------------
     DATA
     --------------------------------------------------------------------- */
  var CATS = [
    ['all', 'All'],
    ['succulents', 'Succulents & Cacti'],
    ['foliage', 'Signature Foliage'],
    ['florals', 'Florals & Blooms'],
    ['trees', 'Trees & Bonsai'],
    ['vines', 'Vines & Climbers'],
    ['aquatic', 'Aquatic Flora']
  ];

  // [id, name, category, price, description, light(1-3), water(1-3)]
  var PLANTS = [
    [1, 'Classic Desert Rose', 'succulents', 1450, 'A sculptural, swollen-caudex bloom from the Sahel and Arabia', 3, 1],
    [2, 'Thick-Trunk Desert Rose', 'succulents', 2190, 'Bonsai-thick trunk prized across East African gardens', 3, 1],
    [3, 'Multi-Petal Grafted Adenium', 'succulents', 2850, 'A Thai graft crowned with layered, ruffled petals', 3, 1],
    [4, 'San Pedro Pillar Cactus', 'succulents', 1690, 'Fast-growing green column native to the Peruvian Andes', 3, 1],
    [5, 'Golden Barrel Cactus', 'succulents', 1980, 'Golden-spined globe from the deserts of central Mexico', 3, 1],
    [6, 'Trailing Fishbone Cactus', 'succulents', 1240, 'Zig-zag trailing stems from the Mexican rainforest floor', 2, 2],
    [7, 'Echeveria Rosette Succulent', 'succulents', 680, 'A tight, powder-blue rosette from semi-desert Mexico', 3, 1],
    [8, 'Spiky Haworthia Succulent', 'succulents', 640, 'Windowed, spiky-tipped rosettes native to South Africa', 2, 1],
    [9, 'Jade Plant', 'succulents', 890, 'Glossy coin-shaped leaves on a South African classic', 2, 1],
    [10, 'Classic Upright Snake Plant', 'foliage', 1150, 'Architectural sword leaves from West Africa', 2, 1],
    [11, 'Braided Cylindrical Snake Plant', 'foliage', 1480, 'Braided cylindrical spears woven from Angolan stock', 2, 1],
    [12, "Dwarf Bird's Nest Snake Plant", 'foliage', 760, 'A compact, nest-like rosette from the Congo basin', 1, 1],
    [13, 'Broadleaf Petra Croton', 'foliage', 1320, 'Fire-toned broad leaves from Southeast Asia', 3, 2],
    [14, 'Narrow-Leaf Zanzibar Croton', 'foliage', 1290, 'Slender flame-coloured leaves from the East African coast', 3, 2],
    [15, 'Trailing Golden Pothos', 'foliage', 720, 'A marbled, easy-going trailing vine from the Solomon Islands', 2, 2],
    [16, 'Oversized Moss Pole Pothos', 'foliage', 2340, 'A fenestrated climber trained tall up a moss pole', 2, 2],
    [42, 'Rare Variegated Monstera', 'foliage', 4200, 'White-marbled fenestrations make this a Southeast Asian rarity', 2, 2],
    [44, 'Silver Satin Pothos', 'foliage', 1180, 'Silver-dusted heart-shaped leaves trailing from Southeast Asia', 2, 2],
    [17, 'Classic Long-Stem Rose', 'florals', 1090, 'The timeless long-stemmed bloom of the Persian gardens', 3, 3],
    [18, 'Climbing Rose Vine', 'florals', 1560, 'Trained climbing canes on a classic European cultivar', 3, 3],
    [19, 'Miniature Potted Rose', 'florals', 690, 'A petite, generous repeat-bloomer bred in China', 3, 2],
    [20, 'Classic Single-Petal Hibiscus', 'florals', 980, 'Wide, open single blooms from tropical Asia', 3, 3],
    [21, 'Ruffled Double-Bloom Hibiscus', 'florals', 1240, 'A ruffled double flower straight from the Pacific isles', 3, 3],
    [22, 'Classic White Frangipani', 'florals', 2100, 'Fragrant white plumeria native to Central America', 3, 2],
    [23, 'Sunset Red Frangipani', 'florals', 2460, 'Warm sunset-red plumeria from the Caribbean', 3, 2],
    [24, 'Potted Bougainvillea Shrub', 'florals', 1380, 'Papery magenta bracts brought from coastal Brazil', 3, 2],
    [25, 'Climbing Bougainvillea Vine', 'florals', 1720, 'A vigorous flowering climber from South America', 3, 2],
    [26, 'Star-Bloom Clematis', 'florals', 1460, 'A star-flowered climber from temperate Asia', 2, 3],
    [27, 'Exotic Passion Flower Vine', 'florals', 1650, 'The intricate passiflora crown of South America', 3, 3],
    [28, 'Indoor Banyan Sapling', 'trees', 1890, 'An aerial-rooted fig from the Indian subcontinent', 2, 2],
    [29, 'Banyan Aerial Root Bonsai', 'trees', 5900, 'Aged aerial roots on an Indian subcontinent icon', 2, 2],
    [30, 'Miniature Baobab Desk Plant', 'trees', 3200, 'A swollen bottle-trunk tree native to Madagascar', 3, 1],
    [31, 'Dwarf Fruiting Lemon Tree', 'trees', 2650, 'A fragrant, fruiting Mediterranean dwarf for indoors', 3, 2],
    [32, 'Wood Apple Garden Sapling', 'trees', 1540, 'A hardy bael sapling from the Indian subcontinent', 3, 2],
    [33, 'Classic Upright Bonsai', 'trees', 4300, 'The formal upright form of the Japanese tradition', 2, 2],
    [34, 'Weeping Cascade Bonsai', 'trees', 6800, 'The cascading cliff style of the Japanese tradition', 2, 2],
    [43, 'Ficus Audrey Tree', 'trees', 2650, 'A velvety-leaved banyan cousin from the Indian subcontinent', 3, 2],
    [35, 'Bush-Trimmed Lemon Vine', 'vines', 1180, 'Bush-trained citrus from the tropical Americas', 3, 2],
    [36, 'Climbing Trellis Lemon Vine', 'vines', 1420, 'A trellised citrus vine from the tropical Americas', 3, 2],
    [40, 'Dwarf Papyrus Grass', 'aquatic', 980, 'Feathery umbrella reed heads from the Nile wetlands', 2, 3],
    [38, 'White Water Lily', 'aquatic', 1690, 'A serene white cupped bloom of temperate wetlands', 3, 3],
    [39, 'Potted Pond Lotus', 'aquatic', 2280, 'The sacred pink lotus of East Asian waters', 3, 3],
    [37, 'Pink Water Lily', 'aquatic', 1760, 'A pink floating bloom from Southern Asian ponds', 3, 3],
    [41, 'Blue Water Iris', 'aquatic', 1140, 'A blue marginal iris from the Eurasian marshes', 2, 3]
  ];

  // [id, name, price, description]
  var SEEDS = [
    ['sd1', 'Heirloom Desert Rose Seeds', 380, 'Caudex-forming heirloom stock gathered from the Sahel'],
    ['sd2', 'Monstera Deliciosa Spores', 440, 'Fresh, viable aroid seed for split-leaf climbers'],
    ['sd3', 'Sacred White Lotus Seeds', 360, 'Scarified pond-lotus seed, primed to sprout'],
    ['sd4', 'Japanese Maple Bonsai Seeds', 480, 'Cold-stratified acer seed for delicate bonsai'],
    ['sd5', 'Giant Bird of Paradise Seeds', 400, 'Towering Strelitzia nicolai for bold foliage'],
    ['sd6', 'Variegated Zanzibar Croton Seeds', 520, 'Grows into fiery, flame-toned foliage'],
    ['sd7', 'Blue Agave Succulent Seeds', 300, 'The blue-form tequilana for arid gardens'],
    ['sd8', 'Wildflower & Pollinator Scatter Mix', 260, 'A thirty-species meadow mix that feeds pollinators'],
    ['sd9', 'Black Bat Flower Seeds', 560, 'The rare and dramatic Tacca chantrieri'],
    ['sd10', 'Pitcher Plant Spores', 500, 'Carnivorous Nepenthes for the curious grower'],
    ['sd11', 'Queen Victoria Agave Seeds', 420, 'Sprouts into a geometric, compact rosette'],
    ['sd12', 'Weeping Fig Seeds', 320, 'Classic Ficus benjamina for graceful indoor trees'],
    ['sd13', 'Madagascar Jewel Seeds', 360, 'Patterned Euphorbia leuconeura foliage'],
    ['sd14', 'Silver Dollar Eucalyptus Seeds', 340, 'Fragrant silver cinerea, lovely as cut foliage'],
    ['sd15', 'String of Pearls Seeds', 380, 'Trailing senecio beads for hanging pots'],
    ['sd16', 'Split-Leaf Philodendron Seeds', 400, 'A monstera-type climber grown from seed']
  ];

  var VESSELS = [
    ['vs1', 'Traditional Heavy Brass Uruli', 3600, 'Hand-beaten Kerala brass with a warm mirror shine'],
    ['vs2', 'Jaipur Blue Pottery Planter', 2200, 'Quartz-fired cobalt glaze, painted by Jaipur artisans'],
    ['vs3', 'Mughal-Carved White Marble Pot', 5400, 'Hand-chiselled Makrana marble with jali fretwork'],
    ['vs4', 'Silver-Inlaid Bidriware Cachepot', 4800, 'Blackened Bidar alloy inlaid with pure silver'],
    ['vs5', 'Classic Chinoiserie Porcelain Basin', 3100, 'Blue-and-white fine porcelain, hand-illustrated'],
    ['vs6', 'Hammered Copper Floor Planter', 3400, 'Dimpled solid copper that ages to a living patina'],
    ['vs7', 'Antiqued Bronze Lotus Bowl', 2900, 'Lost-wax cast bronze with petal-formed sides'],
    ['vs8', 'Hand-Painted Madhubani Terracotta Pot', 1750, 'Breathable terracotta with Mithila folk motifs'],
    ['vs9', 'Ornate Meenakari Enamel Planter', 4200, 'Jewel-toned enamel fired over engraved metal'],
    ['vs10', 'Carved Soapstone Pedestal Bowl', 2600, 'Footed bowl carved from a single soapstone block'],
    ['vs11', 'Glazed Celadon Lotus Pot', 2350, 'Jade celadon glaze with a fine crackle finish'],
    ['vs12', 'Embossed Brass Temple Cylinder', 3050, 'Repoussé brass with hand-raised temple relief']
  ];

  var PEDESTALS = [
    ['pd1', 'Mid-Century Forged Iron Floor Stand', 3400, 'Tapered tripod legs hand-forged in blackened iron'],
    ['pd2', 'Minimalist Solid Oak Elevation Stool', 2600, 'An oiled solid-oak riser for a statement plant'],
    ['pd3', 'Adjustable Matte Black Display Pedestal', 3900, 'A height-set column in matte black steel'],
    ['pd4', 'Trailing Plant Wall Trellis', 1800, 'A modular grid for climbing and trailing vines'],
    ['pd5', 'Brushed Steel Tiered Stand', 4200, 'Three brushed-steel levels for a plant cluster'],
    ['pd6', 'Carved Walnut Plinth', 5200, 'A solid, hand-turned walnut display base'],
    ['pd7', 'Floating Acrylic Wall Shelf', 1650, 'An invisible-mount ledge for a single specimen'],
    ['pd8', 'Tension-Mounted Window Trellis', 1980, 'A no-drill frame for a sunny window climber'],
    ['pd9', 'Matte White Fluted Column', 4600, 'A classical ribbed pillar finished in matte white'],
    ['pd10', 'Geometric Wire Tabletop Stand', 1520, 'A powder-coated wire frame for tabletop pots'],
    ['pd11', 'Low Teak Wood Base', 2240, 'A weathered teak slab riser, low and grounding'],
    ['pd12', 'Hanging Macramé & Brass Sling', 1380, 'Hand-knotted macramé finished with a brass ring']
  ];

  var CARE = [
    ['cr1', 'Liquid Seaweed Root Elixir', 540, 'A kelp-rich biostimulant for vigorous roots'],
    ['cr2', 'Slow-Release Nitrogen Pellets', 420, 'A steady ninety-day feed for lush growth'],
    ['cr3', 'Organic Bloom Booster Concentrate', 480, 'A phosphorus-forward formula for more blooms'],
    ['cr4', 'Houseplant Daily Foliage Mist', 360, 'Raises humidity and leaves a soft leaf shine'],
    ['cr5', 'Cold-Pressed Neem Oil Treatment', 450, 'A natural guard against pests and fungus'],
    ['cr6', 'Diatomaceous Earth Soil Shield', 320, 'A food-grade barrier against soil pests'],
    ['cr7', 'Premium Aroid Chunky Soil Mix', 680, 'Bark, pumice and coco for airy, happy roots'],
    ['cr8', 'Volcanic Pumice Aeration Stones', 390, 'Porous stone for sharp root-zone drainage']
  ];

  var LIGHT_TEXT = ['', 'Low light', 'Bright indirect', 'Full sun'];
  var WATER_TEXT = ['', 'Sparing', 'Weekly', 'Keep moist'];

  var CAT_NOUN = { seeds: 'Seeds', vessels: 'Vessels', pedestals: 'Pedestals', care: 'Care' };

  /* ---------------------------------------------------------------------
     HELPERS
     --------------------------------------------------------------------- */
  function fINR(n) { return '₹' + Number(n).toLocaleString('en-IN'); }
  function meter(l) {
    var s = '';
    for (var i = 0; i < l; i++) s += '●';
    for (var j = 0; j < 3 - l; j++) s += '○';
    return s;
  }
  function catLabel(c) {
    for (var i = 0; i < CATS.length; i++) if (CATS[i][0] === c) return CATS[i][1];
    return c;
  }
  function esc(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  /* ---------------------------------------------------------------------
     PERSISTENT STATE (localStorage so bag + wishlist survive navigation)
     --------------------------------------------------------------------- */
  var LS_BAG = 'aranya.bag', LS_WISH = 'aranya.wishlist';
  function loadJSON(key, fallback) {
    try { var v = JSON.parse(localStorage.getItem(key)); return v && typeof v === 'object' ? v : fallback; }
    catch (e) { return fallback; }
  }
  function saveJSON(key, val) {
    try { localStorage.setItem(key, JSON.stringify(val)); } catch (e) {}
  }

  var bag = loadJSON(LS_BAG, {});      // { id: {id,name,price,qty} }
  var wishlist = loadJSON(LS_WISH, {}); // { id: true }
  var bagOpen = false;
  var activeCategory = 'all';
  var searchTerm = '';
  var addedTimers = {};
  var added = {}; // transient "Added ✓" flashes

  /* ---------------------------------------------------------------------
     CATALOG RENDERING
     --------------------------------------------------------------------- */
  var page = window.ARANYA_PAGE || 'home';
  var gridEl, chipsEl, searchInput, countEl;

  function currentList() {
    if (page === 'home') {
      var src = activeCategory === 'all' ? PLANTS : PLANTS.filter(function (r) { return r[2] === activeCategory; });
      var mapped = src.map(function (r) {
        return {
          id: r[0], name: r[1], price: r[3],
          img: 'media/products/plant-' + r[0] + '.webp',
          catLabel: catLabel(r[2]), desc: r[4],
          lightMeter: meter(r[5]), waterMeter: meter(r[6]),
          lightText: LIGHT_TEXT[r[5]], waterText: WATER_TEXT[r[6]],
          hasCare: true
        };
      });
      return filterSearch(mapped);
    }
    var DATA = { seeds: SEEDS, vessels: VESSELS, pedestals: PEDESTALS, care: CARE }[page] || [];
    var prefix = { seeds: 'seed-', vessels: 'vessel-', pedestals: 'pedestal-', care: 'care-' }[page];
    var out = DATA.map(function (r) {
      return {
        id: r[0], name: r[1], price: r[2],
        img: 'media/products/' + prefix + r[0] + '.webp',
        catLabel: CAT_NOUN[page], desc: r[3], hasCare: false
      };
    });
    return filterSearch(out);
  }

  function filterSearch(items) {
    if (!searchTerm) return items;
    var q = searchTerm.toLowerCase();
    return items.filter(function (it) {
      return it.name.toLowerCase().indexOf(q) !== -1 ||
             (it.desc && it.desc.toLowerCase().indexOf(q) !== -1) ||
             (it.catLabel && it.catLabel.toLowerCase().indexOf(q) !== -1);
    });
  }

  function cardHTML(it) {
    var isWished = !!wishlist[it.id];
    var isAdded = !!added[it.id];
    var care = it.hasCare ? (
      '<div class="card__care">' +
        '<div class="card__care-col">' +
          '<div class="card__care-label">Light</div>' +
          '<div class="card__care-val"><span class="card__care-meter">' + it.lightMeter + '</span><span class="card__care-text">' + esc(it.lightText) + '</span></div>' +
        '</div>' +
        '<div class="card__care-col">' +
          '<div class="card__care-label">Water</div>' +
          '<div class="card__care-val"><span class="card__care-meter">' + it.waterMeter + '</span><span class="card__care-text">' + esc(it.waterText) + '</span></div>' +
        '</div>' +
      '</div>'
    ) : '';

    return '' +
    '<article class="card" data-id="' + esc(it.id) + '">' +
      '<div class="card__glass">' +
        '<div class="card__frost"></div><div class="card__edge"></div><div class="card__streak"></div><div class="card__sheen"></div>' +
        '<div class="card__media">' +
          '<button class="card__wish' + (isWished ? ' is-wished' : '') + '" data-wish="' + esc(it.id) + '" aria-label="Save to wishlist" aria-pressed="' + isWished + '">' +
            '<svg width="17" height="17" viewBox="0 0 24 24" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path></svg>' +
          '</button>' +
          '<div class="card__plant"><img src="' + esc(it.img) + '" alt="' + esc(it.name) + '" loading="lazy"></div>' +
        '</div>' +
        '<div class="card__body">' +
          '<div class="card__row">' +
            '<span class="card__cat">' + esc(it.catLabel) + '</span>' +
            '<span class="card__price">' + fINR(it.price) + '</span>' +
          '</div>' +
          '<h3 class="card__name">' + esc(it.name) + '</h3>' +
          '<p class="card__desc">' + esc(it.desc) + '</p>' +
          care +
          '<button class="card__add' + (isAdded ? ' is-added' : '') + '" data-add="' + esc(it.id) + '">' + (isAdded ? 'Added to bag ✓' : 'Add to bag') + '</button>' +
        '</div>' +
      '</div>' +
    '</article>';
  }

  function renderGrid() {
    if (!gridEl) return;
    var list = currentList();
    if (countEl) {
      var unit = page === 'home' ? 'species in view' : 'items';
      countEl.textContent = list.length + ' ' + unit;
    }
    if (!list.length) {
      gridEl.innerHTML = '<div class="grid__empty">No matches in the archive. Try another search.</div>';
    } else {
      gridEl.innerHTML = list.map(cardHTML).join('');
      attachParallax();
    }
    // restart entrance animation
    gridEl.style.animation = 'none';
    void gridEl.offsetWidth;
    gridEl.style.animation = '';
  }

  /* Pointer parallax on plant image */
  function attachParallax() {
    var cards = gridEl.querySelectorAll('.card');
    for (var i = 0; i < cards.length; i++) {
      (function (card) {
        var plant = card.querySelector('.card__plant');
        card.addEventListener('mousemove', function (e) {
          var r = card.getBoundingClientRect();
          var dx = (e.clientX - r.left) / r.width - 0.5;
          var dy = (e.clientY - r.top) / r.height - 0.5;
          if (plant) plant.style.transform = 'translate(' + (dx * 16) + 'px,' + (dy * 12 - 6) + 'px) scale(1.06)';
        });
        card.addEventListener('mouseleave', function () { if (plant) plant.style.transform = ''; });
      })(cards[i]);
    }
  }

  function renderChips() {
    if (!chipsEl) return;
    chipsEl.innerHTML = CATS.map(function (c) {
      var active = c[0] === activeCategory;
      return '<button class="chip' + (active ? ' is-active' : '') + '" data-cat="' + c[0] + '">' + esc(c[1]) + '</button>';
    }).join('');
  }

  /* ---------------------------------------------------------------------
     WISHLIST + CART ACTIONS
     --------------------------------------------------------------------- */
  function toggleWishlist(id) {
    if (wishlist[id]) delete wishlist[id]; else wishlist[id] = true;
    saveJSON(LS_WISH, wishlist);
  }

  function findProduct(id) {
    var all = PLANTS.map(function (r) { return { id: r[0], name: r[1], price: r[3] }; })
      .concat(SEEDS.concat(VESSELS, PEDESTALS, CARE).map(function (r) { return { id: r[0], name: r[1], price: r[2] }; }));
    for (var i = 0; i < all.length; i++) if (String(all[i].id) === String(id)) return all[i];
    return null;
  }

  function addToCart(id) {
    var p = findProduct(id);
    if (!p) return;
    var cur = bag[id];
    bag[id] = cur ? { id: p.id, name: p.name, price: p.price, qty: cur.qty + 1 } : { id: p.id, name: p.name, price: p.price, qty: 1 };
    saveJSON(LS_BAG, bag);
    bagOpen = true;
    added[id] = true;
    if (addedTimers[id]) clearTimeout(addedTimers[id]);
    addedTimers[id] = setTimeout(function () { delete added[id]; renderGrid(); }, 1600);
    renderGrid();
    renderBag();
  }
  function incItem(id) { if (bag[id]) { bag[id].qty += 1; saveJSON(LS_BAG, bag); renderBag(); } }
  function decItem(id) {
    var c = bag[id]; if (!c) return;
    if (c.qty <= 1) { delete bag[id]; if (!Object.keys(bag).length) bagOpen = false; }
    else c.qty -= 1;
    saveJSON(LS_BAG, bag); renderBag();
  }
  function removeItem(id) {
    delete bag[id]; if (!Object.keys(bag).length) bagOpen = false;
    saveJSON(LS_BAG, bag); renderBag();
  }
  function clearBag() { bag = {}; bagOpen = false; saveJSON(LS_BAG, bag); renderBag(); }
  function toggleBag() { bagOpen = !bagOpen; renderBag(); }

  function confirmOrder() {
    var items = Object.keys(bag).map(function (k) { return bag[k]; });
    if (!items.length) return;
    var total = 0;
    var lines = items.map(function (it, i) {
      var line = it.price * it.qty; total += line;
      return (i + 1) + '. ' + it.name + ' x' + it.qty + ' (' + fINR(line) + ')';
    });
    var msg = 'Hello Aranya Archive, I would like to order:\n\n' + lines.join('\n') +
      '\n\nTotal: ' + fINR(total) + '\n\nPlease confirm availability and delivery.';
    var url = 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(msg);
    var w = window.open(url, '_blank', 'noopener');
    if (!w) window.location.href = url;
  }

  /* ---------------------------------------------------------------------
     BAG RENDERING
     --------------------------------------------------------------------- */
  var bagWrap;
  function renderBag() {
    if (!bagWrap) return;
    var arr = Object.keys(bag).map(function (k) { return bag[k]; });
    if (!arr.length) { bagWrap.className = 'bag-wrap hidden'; bagWrap.innerHTML = ''; return; }
    bagWrap.className = 'bag-wrap';
    var count = arr.reduce(function (n, i) { return n + i.qty; }, 0);
    var total = arr.reduce(function (n, i) { return n + i.price * i.qty; }, 0);

    if (!bagOpen) {
      bagWrap.innerHTML =
        '<div class="bag"><button class="bag__collapsed" data-bag-toggle>' +
          '<span class="icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M6 8h12l-1 12H7z"></path><path d="M9 8V7a3 3 0 0 1 6 0v1"></path></svg></span>' +
          '<span class="label">' + count + ' in your bag</span>' +
          '<span class="total">' + fINR(total) + '</span>' +
          '<span class="view">View<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M18 15l-6-6-6 6"></path></svg></span>' +
        '</button></div>';
      return;
    }

    var itemsHTML = arr.map(function (it) {
      return '<div class="bag__item">' +
        '<div class="bag__item-info">' +
          '<div class="bag__item-name">' + esc(it.name) + '</div>' +
          '<div class="bag__item-each">' + fINR(it.price) + ' each</div>' +
        '</div>' +
        '<div class="bag__qty">' +
          '<button class="dec" data-dec="' + esc(it.id) + '" aria-label="Decrease">−</button>' +
          '<span class="n">' + it.qty + '</span>' +
          '<button class="inc" data-inc="' + esc(it.id) + '" aria-label="Increase">+</button>' +
        '</div>' +
        '<span class="bag__line">' + fINR(it.price * it.qty) + '</span>' +
        '<button class="bag__remove" data-remove="' + esc(it.id) + '" aria-label="Remove">×</button>' +
      '</div>';
    }).join('');

    bagWrap.innerHTML =
      '<div class="bag"><div>' +
        '<div class="bag__head">' +
          '<span class="bag__head-title">Your bag <span>(' + count + ')</span></span>' +
          '<button class="bag__min" data-bag-toggle aria-label="Minimize"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 9l6 6 6-6"></path></svg></button>' +
        '</div>' +
        '<div class="bag__items">' + itemsHTML + '</div>' +
        '<div class="bag__foot">' +
          '<div class="bag__total-row"><span class="k">Total</span><span class="v">' + fINR(total) + '</span></div>' +
          '<div class="bag__actions">' +
            '<button class="bag__btn clear" data-clear>Clear</button>' +
            '<button class="bag__btn confirm" data-confirm>' +
              '<svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.7 15L2 21.8l4.9-1.3A10 10 0 1 0 12 2Zm0 18a8 8 0 0 1-4.1-1.1l-.3-.2-2.9.8.8-2.8-.2-.3A8 8 0 1 1 12 20Zm4.4-5.5c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.5.1-.2.2-.6.8-.8.9-.1.2-.3.2-.5.1-.7-.3-1.4-.7-2-1.4-.5-.5-.8-1.1-1.1-1.7-.1-.2 0-.4.1-.5l.4-.4c.1-.1.1-.3.2-.4 0-.1 0-.3-.1-.4l-.7-1.7c-.2-.4-.4-.4-.5-.4h-.5c-.2 0-.4.1-.6.3-.7.7-.9 1.6-.7 2.6.3 1.2 1 2.2 1.2 2.4 0 .1 1.6 2.5 3.9 3.5.5.2 1 .4 1.4.5.5.1.9.1 1.3.1.4-.1 1.4-.6 1.6-1.1.2-.5.2-1 .1-1.1-.1-.1-.2-.2-.4-.3Z"></path></svg>' +
              'Confirm Order on WhatsApp</button>' +
          '</div>' +
        '</div>' +
      '</div></div>';
  }

  /* ---------------------------------------------------------------------
     NAV: scroll shrink + mobile menu
     --------------------------------------------------------------------- */
  function initNav() {
    var nav = document.querySelector('.nav');
    var burger = document.querySelector('.nav__burger');
    var menu = document.querySelector('.mobile-menu');
    if (burger && menu) {
      burger.addEventListener('click', function () { menu.classList.toggle('open'); });
      var mlinks = menu.querySelectorAll('a');
      for (var i = 0; i < mlinks.length; i++) mlinks[i].addEventListener('click', function () { menu.classList.remove('open'); });
    }
    if (!nav) return;
    var ticking = false;
    function onScroll() {
      if (ticking) return; ticking = true;
      requestAnimationFrame(function () {
        var y = window.scrollY || window.pageYOffset || 0;
        nav.classList.toggle('shrunk', y > 30);
        var heroBg = document.querySelector('.hero__bg');
        var heroContent = document.querySelector('.hero__content');
        if (heroBg) heroBg.style.transform = 'translate3d(0,' + (y * 0.25) + 'px,0)';
        if (heroContent) {
          heroContent.style.transform = 'translate3d(0,' + (y * 0.1) + 'px,0)';
          heroContent.style.opacity = String(Math.max(0, 1 - y / 560));
        }
        ticking = false;
      });
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ---------------------------------------------------------------------
     EVENT DELEGATION
     --------------------------------------------------------------------- */
  function initDelegation() {
    document.addEventListener('click', function (e) {
      var t = e.target.closest ? e.target.closest('[data-add],[data-wish],[data-cat],[data-bag-toggle],[data-inc],[data-dec],[data-remove],[data-clear],[data-confirm]') : null;
      if (!t) return;
      if (t.hasAttribute('data-add')) addToCart(t.getAttribute('data-add'));
      else if (t.hasAttribute('data-wish')) { toggleWishlist(t.getAttribute('data-wish')); renderGrid(); }
      else if (t.hasAttribute('data-cat')) { activeCategory = t.getAttribute('data-cat'); renderChips(); renderGrid(); }
      else if (t.hasAttribute('data-bag-toggle')) toggleBag();
      else if (t.hasAttribute('data-inc')) incItem(t.getAttribute('data-inc'));
      else if (t.hasAttribute('data-dec')) decItem(t.getAttribute('data-dec'));
      else if (t.hasAttribute('data-remove')) removeItem(t.getAttribute('data-remove'));
      else if (t.hasAttribute('data-clear')) clearBag();
      else if (t.hasAttribute('data-confirm')) confirmOrder();
    });
  }

  /* Newsletter / consultation form — front-end only acknowledgement */
  function initConsultForm() {
    var form = document.querySelector('.footer__form');
    if (!form) return;
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var input = form.querySelector('input');
      var btn = form.querySelector('button');
      if (input && input.value.trim()) {
        btn.textContent = 'Thank you ✓';
        input.value = '';
        setTimeout(function () { btn.textContent = 'Inquire'; }, 2200);
      }
    });
  }

  /* ---------------------------------------------------------------------
     INIT
     --------------------------------------------------------------------- */
  function init() {
    gridEl = document.getElementById('grid');
    chipsEl = document.getElementById('chips');
    searchInput = document.getElementById('search');
    countEl = document.getElementById('count');
    bagWrap = document.getElementById('bag');

    if (searchInput) {
      searchInput.addEventListener('input', function () { searchTerm = searchInput.value.trim(); renderGrid(); });
    }

    renderChips();
    renderGrid();
    renderBag();
    initNav();
    initDelegation();
    initConsultForm();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
