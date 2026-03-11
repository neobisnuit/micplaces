const ARROW_SVG = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>';

const IMG = [null,
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69afe996e84095c271d671c2_1-connemara-national-park.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69afea97f6ae7256b66ec8b3_2-kylemore-abbey.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69afea972dc6328cd3056b1f_3-arainn-inis-mor.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69afea97f50d2537775f228f_4-galway-city-museum.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69afea9713d87b5c37ceb631_5-dunguaire-castle.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69afea97ebafb64422f8dc35_6-aughnanure-castle.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69afeba889ba3291763120f3_7-parke-s-castle.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69afeba8fc4d0e5412aa6151_8-sliabh-an-iarainn-visitor-centre.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69afeba8bd236ef9049f6a63_9-leitrim-sculpture-centre.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69afeba8f7b80d43d8adb739_10-lough-allen-adventure.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69afeba8124e6c78894edc55_11-shannon-blueway.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69afeba8bf4cd0686f2acb0c_12-shannon-erne-blueway.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69afebea9faa31cd33209622_13-achill-island.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69afebea7b2ba5c963d1a21a_14-westport-house.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69afebea603e0def55f4e72b_15-ceide-fields.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69afebea1bc20c6643f173c0_16-national-museum-of-ireland-country-life.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69afebeae301e46b8097d809_17-knock-shrine.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69afebea13d87b5c37cf092f_18-the-great-western-greenway.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69afec1c25910fad1e65efa4_19-rathcroghan-visitor-centre.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69afec1c97065ad6ac114e9f_20-strokestown-park.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69afec1c73d8c05a163d3cc5_21-lough-key-forest-activity-park.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69afec1c4623a5482ae5bbdd_22-arigna-mining-experience.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69afec1c47e568075397d9ce_23-boyle-cistercian-abbey.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69afec1bfebbae49f14309b6_24-roscommon-castle-south-west-tower.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69afec699d1f9a40c03511f6_25-carrowmore-megalithic-cemetery.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69afec69ccad0d215bde5c3c_26-sligo-abbey.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69afec6982d2f232254366b1_27-knocknarea-queen-medb-s-tomb.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69afec6966786d63bd6b37e5_28-lissadell-house.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69afec693ac12c7139539168_29-the-model.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69afec694b6ba934763335a8_30-ben-bulben.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69aff07202c8227f3da7110f_31-cliffs-of-moher-experience.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69aff0722538d0f743f9d4da_32-burren-national-park.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69aff07248d633038022c939_33-bunratty-castle-folk-park.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69aff072c407f37c5b8c0dc0_34-aillwee-burren-experience.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69aff072f5dfcadf3ffa2bb3_35-doolin-cave.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69aff0729aa6d1887019bb43_36-loop-head-lighthouse.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69aff10ade9ec5fcae8c131d_37-blarney-castle-gardens.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69aff10a3f566491a0db1276_38-the-english-market.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69aff10ac2939d283246e42e_39-fota-wildlife-park.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69aff10a4456e137de922867_40-spike-island.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69aff10abb05824066bf363c_41-titanic-experience-cobh.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69aff10ac220c4bf6c8a2603_42-jameson-midleton-distillery.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69aff14c3f45817f30081b90_43-killarney-national-park.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69aff14d1006863a9d7a78ba_44-muckross-house.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69aff14c30d413e63cb8f8b7_45-ross-castle.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69aff14dd7f41d7312cf2064_46-sceilg-mhichil.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69aff14c52e9c07f370f409b_47-ring-of-kerry.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69aff14db591f56a9c60e6b9_48-dingle-peninsula.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69aff182240028b43eba7273_49-king-john-s-castle.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69aff1824a43cfc7e8beac1f_50-the-hunt-museum.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69aff182d00f848ce8060631_51-lough-gur-visitor-centre-lakeshore-park.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69aff182282e55a561b96575_52-foynes-flying-boat-maritime-museum.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69aff1833f566491a0db2a5b_53-limerick-greenway.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69aff18322ad38df75f9594d_54-adare-village.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69aff1eeeb261d140e5aba50_55-the-rock-of-cashel.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69aff1eec29e6ca7c2411e3e_56-cahir-castle.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69aff1ee0aa56282283f8826_57-ormond-castle.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69aff1ef78e31b687d0ae3df_58-the-swiss-cottage.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69aff1ef9957e51de04b4e58_59-mitchelstown-cave.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69aff1eeea2af49835a632ee_60-glen-of-aherlow.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69aff229ca6d273995d7301c_61-waterford-treasures.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69aff229f213f99d236c3998_62-reginald-s-tower.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69aff2297c00304af38e805f_63-house-of-waterford-crystal.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69aff229fa06bcbbdca7a9b7_64-mount-congreve-gardens.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69aff2298877418e5be8c106_65-copper-coast-unesco-global-geopark.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69aff229c3e509d4e3d42316_66-waterford-greenway.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69aff4dc5a32bd42bdea3369_67-altamont-gardens.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69afed06a6e5baf68d550675_68-brownshill-portal-dolmen.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69afed0708b7196d1a2643e9_69-carlow-castle.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69afed07f6e22c77b8c2aed6_70-delta-sensory-gardens.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69afed06a7d386e295ef2356_71-visual-carlow.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69afed07b56adb82d5faa4d5_72-o-hara-s-brewery-tour.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69afed8b1119b94a745b72fd_73-guinness-storehouse.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69afed8b83a052362bf22536_74-book-of-kells-experience.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69afed8b6a2ba7335fa3b9ed_75-kilmainham-gaol-museum.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69afed8bdfb507b0e22a1e49_76-dublin-castle.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69afed8b88fe057899fd0347_77-saint-patrick-s-cathedral.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69afed8b68e755fae5e04088_78-christ-church-cathedral.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69afed8b183c3e93f11b1520_79-epic-the-irish-emigration-museum.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69afed8a0e7cee7944c9db34_80-national-museum-of-ireland-archaeology.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69afed8bbd236ef9049ff32e_81-dublin-zoo.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69afed8ba5ba267880a1e004_82-gpo-museum.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69afedf688bb70a0536f2d78_83-irish-national-stud-gardens.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69afedf6a6a7664342f03969_84-irish-racehorse-experience.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69afedf6b4f00e2c39affc33_85-newbridge-silverware-visitor-centre.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69afedf5249e29f3e2a39288_86-castletown-house-and-parklands.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69afedf6a8dac97035199099_87-maynooth-castle.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69afedf6f6e22c77b8c2f084_88-st-brigid-s-cathedral-kildare.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69afee3282d2f2322543c611_89-kilkenny-castle.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69afee31f977e2d48fd7e847_90-st-canice-s-cathedral-round-tower.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69afee32d394b51dfdba1399_91-smithwick-s-experience.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69afee325e5db0506d35873d_92-jerpoint-cistercian-abbey.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69afee32b57fb2360c7e7dab_93-kells-priory.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69afee328b7ac50ea8c92357_94-dunmore-cave.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69afee320c360f0e06b56d78_95-woodstock-arms-bar-bed-breakfast.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69afee6a13c1de0e79b1d23c_96-emo-court-and-estate.jpg",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69afee6a670083e8a6839f6e_97-rock-of-dunamase.jpg",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69afee6bb02e4b40c7099bd4_98-heywood-gardens.jpg",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69afee6bf65e11615936a02d_99-donaghmore-workhouse-agricultural-museum.jpg",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69afee6bc8ac2514eb164c0b_100-slieve-bloom-mountains.jpg",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69afee6b0ab61db0c758e425_101-abbeyleix-bog.jpg",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69afee908753425cb9f67d99_102-corlea-trackway-visitor-centre.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69afee90bb7673027031876b_103-center-parcs-longford-forest.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69afee902887af64e22fb490_104-st-mel-s-cathedral.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69afee90baa98757a26cfc43_105-royal-canal-greenway.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69afee9037252b202784e5f7_106-carrigglas-manor.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69afee910ab61db0c758ed39_107-newcastle-wood-lough-ree.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69afeec388bb70a0536f5c59_108-monasterboice.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69afeec443c4ed2eabf2a65e_109-old-mellifont-abbey.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69afeec365513eed466830f8_110-battle-of-the-boyne-visitor-centre.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69afeec32f96290808297e75_111-carlingford-heritage-area.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69afeec38d95a2909048c197_112-highlanes-gallery.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69afeec310baa14e777dc4ba_113-cooley-peninsula-tain-trail.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69afef1a3f45817f3007ac05_114-bru-na-boinne-newgrange.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69afef1bf9d7528391e819dc_115-hill-of-tara.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69afef1acdca3159871c9e41_116-trim-castle.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69afef1b88bb70a0536f6c3f_117-loughcrew-megalithic-centre.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69afef1b2f96290808298f73_118-slane-castle-distillery.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69afef1aea2af49835a58892_119-tayto-park-now-emerald-park.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69afef97d956748346e089bd_120-clonmacnoise.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69afef9728ab512ca60e4fda_121-birr-castle-gardens-science-centre.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69afef9791ed3cc1a26dbb99_122-lough-boora-discovery-park.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69afef98baa98757a26d556c_123-tullamore-d-e-w-visitor-centre.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69afef97051a447f05684d81_124-kinnitty-castle.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69afef98e03cc7b1465fd676_125-clara-bog-nature-reserve.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69afefd8b0737c6c7ebb2b4b_126-athlone-castle-visitor-centre.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69afefd819a87ab270a27796_127-belvedere-house-gardens-park.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69afefd8c3e509d4e3d39c66_128-kilbeggan-distillery.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69afefd831c493fd4791748b_129-fore-abbey.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69afefd8183c3e93f11baea0_130-tullynally-castle-gardens.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69afefd82292981d80386698_131-old-rail-trail-greenway.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69aff008ab21913a4c669e6e_132-irish-national-heritage-park.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69aff0070db8d71df0d2ab1b_133-hook-lighthouse.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69aff00803b780de9ec88b4e_134-dunbrody-famine-ship-experience.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69aff00879320a260e1dfb99_135-johnstown-castle-gardens.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69aff008282e55a561b8fc81_136-tintern-abbey.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69aff0082538d0f743f9bd92_137-wells-house-gardens.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69aff03ba52323982dc1e6da_138-glendalough-monastic-site.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69aff03b0b73e0a25c4a1478_139-powerscourt-estate-gardens.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69aff03b9cf412b8bfeafd94_140-powerscourt-waterfall.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69aff03b3af4cd0d0347a049_141-wicklow-mountains-national-park.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69aff03bfc518bf362ecc4db_142-beyond-the-trees-avondale.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69aff03b78926fc9d3423db9_143-bray-to-greystones-cliff-walk.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69aff262283326cb8a1225f4_144-giant-s-causeway.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69aff262dd2dc7ba46756b11_145-titanic-belfast.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69aff262709e6ae89cc853d5_146-carrick-a-rede-rope-bridge.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69aff262d00f848ce8063253_147-the-dark-hedges.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69aff2624b65c01f8cf092ba_148-old-bushmills-distillery.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69aff26215683a724381ce4d_149-dunluce-castle.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69aff2a14849f78a3029709f_150-armagh-observatory-planetarium.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69aff2a1ea2af49835a681f7_151-navan-centre-fort.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69aff2a14ab75fb82d2fbc02_152-st-patrick-s-cathedrals.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69aff2a12887af64e23078d3_153-ring-of-gullion.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69aff2a1abf44917a3a55e5c_154-palace-demesne-public-park.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69aff2a285cd9f90218dfcf5_155-armagh-county-museum.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69aff2df8fb5a6c08a0aad5b_156-cavan-burren-park.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69aff2df2fd3ec3bb2fd6b4b_157-cavan-county-museum.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69aff2df8d95a2909049b72a_158-killykeen-forest-park.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69aff2df5d3572eb7c931fe4_159-dun-a-ri-forest-park.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69aff2df69db9c8bf1f7dddf_160-shannon-erne-waterway.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69aff2df76a3218a124ff446_161-lough-oughter-and-associated-loughs-sac.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69aff319abe33e2bde51da58_162-derry-city-walls.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69aff3191712ba98877a0e14_163-mussenden-temple-downhill-demesne.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69aff319da59ff526bccb8b8_164-tower-museum.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69aff31913c1de0e79b2f887_165-the-guildhall.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69aff319ea048d64fa1ab7a7_166-museum-of-free-derry.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69aff31916f128ac62225a2f_167-roe-valley-country-park.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69aff3506b2187d913aebbc2_168-glenveagh-national-park.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69aff35076a3218a12500c05_169-slieve-league-cliffs-centre.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69aff350e2cbd56e653b5050_170-donegal-castle.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69aff350ca6d273995d76e42_171-fanad-lighthouse.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69aff35015683a724381f36a_172-malin-head.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69aff35088c32e0c0a7c3bce_173-grianan-of-aileach.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69aff38843e7240cc74ff307_174-mount-stewart.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69aff3881eedb7fa9a514315_175-castle-ward.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69aff3880b3447cdf4807cb6_176-mourne-mountains.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69aff3887c00304af38ecf3d_177-saint-patrick-centre.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69aff387cf37a1b947424c49_178-exploris-aquarium.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69aff38842c75a427a8f012d_179-tollymore-forest-park.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69aff3b5b8b220c0c958ffb2_180-marble-arch-caves-global-geopark.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69aff3b5874597ff277b81c2_181-enniskillen-castle-museums.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69aff3b52d49454eb1ebd0e4_182-devenish-island.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69aff3b561e649d05ffa07ed_183-cuilcagh-boardwalk-trail.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69aff3b5087c76b1777d7c6c_184-florence-court.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69aff3b55d3572eb7c9343ba_185-lough-erne.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69aff3e3ebf0fcdd4abc9c9d_186-castle-leslie-estate.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69aff3e2a52323982dc2a82f_187-patrick-kavanagh-centre.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69aff3e201fb9c83239436eb_188-monaghan-county-museum.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69aff3e2bac3561c70ead283_189-lough-muckno-leisure-park.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69aff3e3bb05824066c03efe_190-rossmore-forest-park.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69aff3e3be1a0c0f60b5a26a_191-carrickmacross-lace-gallery.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69aff415b0737c6c7ebc5aae_192-ulster-american-folk-park.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69aff4155337208411b08038_193-beaghmore-stone-circles.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69aff415fc518bf362edc4e8_194-gortin-glen-forest-park.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69aff414dd4bb600a591e937_195-sperrin-mountains.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69aff4151712ba98877a41cc_196-gray-s-printing-press.avif",
"https://cdn.prod.website-files.com/678750f97194ea7f76b8f929/69aff415b591f56a9c6191f3_197-an-creagan-visitor-centre.avif"
];

const DATA = [
  {
    province: "Connacht",
    counties: [
      {
        name: "Galway",
        attractions: [
          { name: "Connemara National Park", desc: "If you want Connemara in one hit\u2014mountains, bogland, and those wide-open skies\u2014this is where you lace up and go wandering on well-marked trails.", url: "https://www.nationalparks.ie/connemara/" },
          { name: "Kylemore Abbey", desc: "It\u2019s a fairytale lakeside abbey with gardens that make you slow down without even trying\u2014pure \u201ctake a breath and look around\u201d Galway.", url: "https://www.kylemoreabbey.com/" },
          { name: "\u00c1rainn - Inis M\u00f3r", desc: "This is the Aran Islands at full volume\u2014stone walls, Atlantic cliffs, and the kind of place where the landscape does most of the talking.", url: "https://www.discoverireland.ie/galway/inis-mor-inishmore-seaport" },
          { name: "Galway City Museum", desc: "A handy, straight-to-the-point museum that tells Galway\u2019s story\u2014from the sea to the streets\u2014without making a big fuss about it.", url: "https://galwaycitymuseum.ie/" },
          { name: "Dunguaire Castle", desc: "A classic little castle on the water\u2014exactly the kind of photogenic stop you\u2019ll be glad you pulled over for on the way through south Galway.", url: "https://www.dunguairecastle.com/" },
          { name: "Aughnanure Castle", desc: "Proper old tower-house vibes in the heart of Connemara\u2014stone stairs, big history, and the sort of place that feels built for stories.", url: "https://heritageireland.ie/places-to-visit/aughnanure-castle/" }
        ]
      },
      {
        name: "Leitrim",
        attractions: [
          { name: "Parke\u2019s Castle", desc: "A small-but-mighty castle stop: you get the plantation-era story and a lakeside setting that feels quietly dramatic, especially in soft weather.", url: "https://www.facebook.com/parkescastleopw/" },
          { name: "Sliabh an Iarainn Visitor Centre", desc: "If you like local history with a proper sense of place\u2014mining, music, and the shape of the land\u2014this visitor centre ties it together nicely.", url: "https://leitrimtourism.com/heritage/sliabh-an-iarainn-visitor-centre/" },
          { name: "Leitrim Sculpture Centre", desc: "A creative pocket of Leitrim\u2014studios, exhibitions, and the kind of arts space that feels genuinely rooted in the north-west landscape.", url: "https://www.leitrimsculpturecentre.ie/" },
          { name: "Lough Allen Adventure", desc: "Outdoors done properly\u2014lake time, guided activities, and an easy way to turn \u201cnice scenery\u201d into an actual day you\u2019ll remember.", url: "https://loughallenadventure.ie/" },
          { name: "Shannon Blueway", desc: "Think calm water, gentle trails, and that slow, unbothered midlands rhythm\u2014ideal if you want fresh air without a mountain mission.", url: "https://www.waterwaysireland.org/our-waterways/shannon-navigation/shannon-blueway" },
          { name: "Shannon-Erne Blueway", desc: "A grand option for paddling or strolling\u2014this is the kind of route where you can do as much or as little as you like and still feel smug after.", url: "https://leitrimtourism.com/treasured-landscapes/shannon-erne-blueway/" }
        ]
      },
      {
        name: "Mayo",
        attractions: [
          { name: "Achill Island", desc: "Wild beaches, big cliffs, and that \u201cend of the world\u201d Atlantic feeling\u2014Achill is Mayo showing off, and it doesn\u2019t even have to try.", url: "https://achilltourism.com/" },
          { name: "Westport House", desc: "A classic big-house day out\u2014history, grounds to roam, and plenty to keep a mixed group happy without anyone getting bored.", url: "https://www.westporthouse.ie/" },
          { name: "C\u00e9ide Fields", desc: "This is ancient Ireland under your feet\u2014walking above a buried Stone Age landscape, with a visitor centre that makes it all click.", url: "https://heritageireland.ie/places-to-visit/ceide-fields/" },
          { name: "National Museum of Ireland - Country Life", desc: "The calmest museum day you\u2019ll have: rural Irish life, design, and everyday history\u2014set in gorgeous grounds just outside Castlebar.", url: "https://www.museum.ie/en-ie/museums/country-life" },
          { name: "Knock Shrine", desc: "Whatever your background, it\u2019s a major Irish pilgrimage place with a strong sense of quiet and scale\u2014you can feel why people come.", url: "https://www.knockshrine.ie/" },
          { name: "The Great Western Greenway", desc: "A brilliant way to \u201csee Mayo\u201d at human speed\u2014cycle or walk the route and you\u2019ll get sea air, views, and proper little towns along the way.", url: "https://www.greenway.ie/" }
        ]
      },
      {
        name: "Roscommon",
        attractions: [
          { name: "Rathcroghan Visitor Centre", desc: "Come here for queens, mythology, and an ancient royal landscape\u2014if you\u2019re into Ireland\u2019s old stories, this is Roscommon\u2019s big hitter.", url: "https://heritageireland.ie/places-to-visit/rathcroghan-visitor-centre/" },
          { name: "Strokestown Park", desc: "A grand house with a hard-hitting famine story\u2014beautiful grounds, but the museum gives you the context Ireland doesn\u2019t sugarcoat.", url: "https://strokestownpark.ie/" },
          { name: "Lough Key Forest & Activity Park", desc: "This is your family-friendly forest day\u2014walks, play areas, and enough to keep everyone moving without it feeling like \u201ca hike.\u201d", url: "https://loughkey.ie/" },
          { name: "Arigna Mining Experience", desc: "You go underground with guides who know the mining life\u2014proper stories, real atmosphere, and you come out appreciating daylight all over again.", url: "https://arignaminingexperience.ie/" },
          { name: "Boyle Cistercian Abbey", desc: "A powerful old abbey site\u2014big stonework, serious history, and the kind of quiet that makes you automatically lower your voice.", url: "https://heritageireland.ie/places-to-visit/boyle-cistercian-abbey/" },
          { name: "Roscommon Castle", desc: "A Norman castle ruin with real presence\u2014great for a short stop where you walk the grounds and let your imagination fill in the rest.", url: "https://heritageireland.ie/places-to-visit/roscommon-castle-south-west-tower/" }
        ]
      },
      {
        name: "Sligo",
        attractions: [
          { name: "Carrowmore Megalithic Cemetery", desc: "Stone circles and tombs that take you way back\u2014this is one of those places where \u201colder than you can properly picture\u201d suddenly feels real.", url: "https://heritageireland.ie/places-to-visit/carrowmore-megalithic-cemetery/" },
          { name: "Sligo Abbey", desc: "Right in town you\u2019ve got medieval ruins with proper character\u2014arches, cloisters, and a calm little bubble away from the traffic.", url: "https://heritageireland.ie/places-to-visit/sligo-abbey/" },
          { name: "Knocknarea \u2013 Queen Medb\u2019s Tomb", desc: "A famous cairn with myth attached\u2014your reward is the views and that feeling of standing in a place people have talked about for centuries.", url: "https://heritageireland.ie/unguided-sites/knocknarea-queen-medbs-tomb/" },
          { name: "Lissadell House", desc: "Big estate energy\u2014history, landscape, and a strong connection to Irish cultural life; it\u2019s a good one if you like places with layers.", url: "https://lissadellhouse.com/" },
          { name: "The Model", desc: "Modern art and local culture in one spot\u2014an easy rainy-day win, and usually a good conversation starter even for \u201cnot an art person.\u201d", url: "https://themodel.ie/" },
          { name: "Ben Bulben", desc: "Sligo\u2019s landmark mountain\u2014look at it once and you\u2019ll recognize it forever, especially when the light hits the flat top and cliffs.", url: "https://www.ireland.com/en-nz/destinations/regions/ben-bulben/" }
        ]
      }
    ]
  },
  {
    province: "Munster",
    counties: [
      {
        name: "Clare",
        attractions: [
          { name: "Cliffs of Moher Experience", desc: "The famous Clare cliffs\u2014safe paths, massive Atlantic views, and that \u201chow is this real?\u201d moment when you step out and see the drop.", url: "https://www.cliffsofmoher.ie/" },
          { name: "Burren National Park", desc: "A strange and beautiful limestone world\u2014walks through \u201cfertile rock,\u201d rare plants, and scenery that feels like another planet on a good day.", url: "https://www.nationalparks.ie/burren/" },
          { name: "Bunratty Castle & Folk Park", desc: "Castle plus living-history village\u2014wandering here feels like stepping into old Ireland without the dusty museum mood.", url: "https://www.bunrattycastle.ie/" },
          { name: "Aillwee Burren Experience", desc: "Caves, birds of prey, and Burren views\u2014great when you want something fun and a bit different, without committing to a full-day trek.", url: "https://aillweeburrenexperience.ie/" },
          { name: "Doolin Cave", desc: "A proper underground adventure\u2014guided tours down into limestone chambers, plus the famous stalactite that makes people go quiet.", url: "https://doolincave.ie/" },
          { name: "Loop Head Lighthouse", desc: "The west Clare coast at its most dramatic\u2014come for the lighthouse, stay for the wind, the waves, and the feeling you\u2019re at the edge of things.", url: "https://loopheadlighthouse.ie/" }
        ]
      },
      {
        name: "Cork",
        attractions: [
          { name: "Blarney Castle & Gardens", desc: "The famous stone-and-kiss story, sure\u2014but the gardens are the real surprise: big, atmospheric, and easy to lose a happy hour in.", url: "https://blarneycastle.ie/" },
          { name: "The English Market", desc: "A proper Cork institution\u2014go hungry, walk slow, and treat it like a food museum where everything is also lunch.", url: "https://www.corkcity.ie/en/english-market/" },
          { name: "Fota Wildlife Park", desc: "More \u201canimals in big spaces\u201d than traditional zoo feel\u2014an easy family win where you end up doing a lot more walking than you expect.", url: "https://www.fotawildlife.ie/" },
          { name: "Spike Island", desc: "A short boat trip into big Cork Harbour history\u2014fort, prison stories, and sea air that\u2019ll wake you up even after a heavy breakfast.", url: "https://www.spikeislandcork.ie/" },
          { name: "Titanic Experience Cobh", desc: "Titanic\u2019s last port of call, told through real passenger stories\u2014compact, well done, and it hits harder than people expect.", url: "https://titanicexperiencecobh.ie/" },
          { name: "Jameson Midleton Distillery", desc: "Even if you\u2019re not a whiskey person, the tour is pure craft and history\u2014big stills, great storytelling, and a polished visitor experience.", url: "https://www.jamesonwhiskey.com/en-ie/visit-our-distilleries/midleton-distillery-cork/" }
        ]
      },
      {
        name: "Kerry",
        attractions: [
          { name: "Killarney National Park", desc: "Lakes, woods, mountains\u2014Kerry\u2019s greatest hits in one place, and you can scale it from \u201cgentle stroll\u201d to \u201cmy legs are finished.\u201d", url: "https://www.nationalparks.ie/killarney/" },
          { name: "Muckross House", desc: "A grand house in a postcard setting\u2014gardens, traditional farms, and enough on site to turn a quick stop into half a day.", url: "https://muckross-house.ie/" },
          { name: "Ross Castle", desc: "A lakeside castle with legends built in\u2014short, scenic, and the kind of stop that makes you understand why Kerry is always in the brochures.", url: "https://heritageireland.ie/places-to-visit/ross-castle/" },
          { name: "Sceilg Mhich\u00edl", desc: "A UNESCO site that feels unreal\u2014stone steps, beehive huts, and pure Atlantic drama. It\u2019s a serious day out, but it\u2019s one people never forget.", url: "https://heritageireland.ie/places-to-visit/sceilg-mhichil/" },
          { name: "Ring of Kerry", desc: "The classic scenic drive\u2014coast, lakes, villages, and constant pull-in points where you\u2019ll swear you\u2019re only stopping \u201cfor a minute.\u201d", url: "https://www.discoverireland.ie/ring-of-kerry" },
          { name: "Dingle Peninsula", desc: "Rugged coastline, Irish-speaking communities, and scenery that makes the car go quiet\u2014Dingle is pure Kerry character from start to finish.", url: "https://dingle-peninsula.ie/" }
        ]
      },
      {
        name: "Limerick",
        attractions: [
          { name: "King John\u2019s Castle", desc: "Right in the heart of medieval Limerick\u2014big walls, strong stories, and a visitor experience that makes the city\u2019s history feel close.", url: "https://kingjohnscastle.ie/" },
          { name: "The Hunt Museum", desc: "A seriously good collection without the snobbery\u2014ancient objects to modern art, and you can do it at an easy, unhurried pace.", url: "https://www.huntmuseum.com/" },
          { name: "Lough Gur Visitor Centre & Lakeshore Park", desc: "Ireland\u2019s deep history in one landscape\u2014stone circle country, lakeside views, and a visitor centre that helps you read the place properly.", url: "https://heritageireland.ie/places-to-visit/lough-gur-visitor-centre-lakeshore-park/" },
          { name: "Foynes Flying Boat & Maritime Museum", desc: "Aviation history with real nostalgia\u2014Foynes was once a transatlantic hub, and this museum makes that era feel surprisingly glamorous.", url: "https://flyingboatmuseum.com/" },
          { name: "Limerick Greenway", desc: "A lovely off-road route through west Limerick\u2014easygoing for bikes or walking, with small towns and countryside doing the heavy lifting.", url: "https://www.limerick.ie/greenway" },
          { name: "Adare Village", desc: "\u201cPretty village\u201d gets said a lot, but Adare earns it\u2014great for a stroll, a coffee, and a slow wander past stonework and tidy streets.", url: "https://www.adarevillage.com/" }
        ]
      },
      {
        name: "Tipperary",
        attractions: [
          { name: "The Rock of Cashel", desc: "One of Ireland\u2019s most iconic skylines\u2014medieval buildings clustered on a rock that looks like it was designed purely for drama.", url: "https://heritageireland.ie/places-to-visit/the-rock-of-cashel/" },
          { name: "Cahir Castle", desc: "A proper defensive castle on a river island\u2014big, well-preserved, and easy to picture it in full \u201csiege and banners\u201d mode.", url: "https://heritageireland.ie/places-to-visit/cahir-castle/" },
          { name: "Ormond Castle", desc: "More manor than fortress\u2014an Elizabethan showpiece where the details and decoration are the main event.", url: "https://heritageireland.ie/places-to-visit/ormond-castle/" },
          { name: "The Swiss Cottage", desc: "A quirky, elegant \u201ccottage orn\u00e9\u201d that feels like a Victorian fantasy\u2014small, charming, and totally different from your usual castles-and-abbeys day.", url: "https://heritageireland.ie/places-to-visit/the-swiss-cottage/" },
          { name: "Mitchelstown Cave", desc: "A guided cave tour that\u2019s been a visitor draw for generations\u2014cool air, big formations, and a nice change of pace from outdoor stops.", url: "https://mitchelstowncave.com/" },
          { name: "Glen of Aherlow", desc: "A lush valley between mountains\u2014great for walks and viewpoints, and it\u2019s the kind of place where you stop taking photos because you\u2019re just looking.", url: "https://www.aherlow.com/" }
        ]
      },
      {
        name: "Waterford",
        attractions: [
          { name: "Waterford Treasures", desc: "Waterford\u2019s story told through compact, walkable museums\u2014Vikings to modern life\u2014perfect when you want history without a full-day commitment.", url: "https://waterfordtreasures.com/" },
          { name: "Reginald\u2019s Tower", desc: "Ireland\u2019s oldest civic building\u2014great for a quick, memorable dose of Viking Waterford right by the river.", url: "https://heritageireland.ie/places-to-visit/reginalds-tower/" },
          { name: "House of Waterford Crystal", desc: "A behind-the-scenes look at craft and production\u2014if you like watching skilled people make beautiful things, this is a satisfying stop.", url: "https://www.houseofwaterford.com/content/plan-your-visit" },
          { name: "Mount Congreve Gardens", desc: "A serious garden for plant lovers\u2014woodland walks, big collections, and a setting that feels calm even when it\u2019s busy.", url: "https://mountcongreve.com/" },
          { name: "Copper Coast UNESCO Global Geopark", desc: "Cliffs, beaches, and geology with a story\u2014ideal for scenic stops where you get both the view and the \u201cwhat you\u2019re looking at\u201d explanation.", url: "https://coppercoastgeopark.com/" },
          { name: "Waterford Greenway", desc: "One of Ireland\u2019s best car-free routes\u2014cycle or walk through viaducts, countryside, and sea-air stretches that make you forget you\u2019re exercising.", url: "https://waterfordcouncil.ie/tourism/waterford-greenway/" }
        ]
      }
    ]
  },
  {
    province: "Leinster",
    counties: [
      {
        name: "Carlow",
        attractions: [
          { name: "Altamont Gardens", desc: "A peaceful \u201cwander and reset your brain\u201d garden\u2014formal bits, woodland bits, and enough variety that it never feels like you\u2019re just looping a park.", url: "https://heritageireland.ie/places-to-visit/altamont-gardens/" },
          { name: "Brownshill Portal Dolmen", desc: "A prehistoric portal tomb with a famously massive capstone\u2014one of those quick stops that stays in your head because it shouldn\u2019t still be standing.", url: "https://heritageireland.ie/unguided-sites/brownshill-portal-dolmen/" },
          { name: "Carlow Castle", desc: "Ruins with a story\u2014Carlow\u2019s Norman-era footprint right in town, good for a short stop when you\u2019re passing through.", url: "https://heritageireland.ie/unguided-sites/carlow-castle/" },
          { name: "Delta Sensory Gardens", desc: "Bright, playful gardens designed to be experienced\u2014smells, textures, colour\u2014great when you want something gentle and genuinely uplifting.", url: "https://deltasensorygardens.ie/" },
          { name: "VISUAL Carlow", desc: "Big contemporary art in a striking building\u2014ideal if you want culture with your coffee, and it\u2019s friendly even if you don\u2019t \u201cdo galleries.\u201d", url: "https://visualcarlow.ie/" },
          { name: "O\u2019Hara\u2019s Brewery Tour", desc: "A straightforward, no-nonsense craft beer tour\u2014how it\u2019s brewed, why it tastes the way it does, and a tasting at the end that feels earned.", url: "https://www.carlowbrewing.com/brewery-tour/" }
        ]
      },
      {
        name: "Dublin",
        attractions: [
          { name: "Guinness Storehouse", desc: "Dublin\u2019s best-known visitor stop\u2014part history, part immersive experience, and it finishes with a view that makes the city feel like yours for a minute.", url: "https://www.guinness-storehouse.com/en" },
          { name: "Book of Kells Experience", desc: "A famous manuscript and a beautiful library setting\u2014very \u201cI\u2019m in Dublin and I\u2019m doing the thing,\u201d and it\u2019s worth it.", url: "https://www.visittrinity.ie/book-of-kells-experience/" },
          { name: "Kilmainham Gaol Museum", desc: "A heavy-hitter for Irish history\u2014real stories, real rooms, and you leave understanding the country\u2019s past a lot more clearly.", url: "https://www.kilmainhamgaolmuseum.ie/" },
          { name: "Dublin Castle", desc: "Centuries of power and ceremony in one complex\u2014state apartments, chapels, courtyards, and a strong sense of \u201cthis is where things happened.\u201d", url: "https://dublincastle.ie/" },
          { name: "Saint Patrick\u2019s Cathedral", desc: "A big, beautiful cathedral with a lot of Dublin\u2019s story built into the stone\u2014worth it even if you\u2019re just there for the atmosphere.", url: "https://www.stpatrickscathedral.ie/" },
          { name: "Christ Church Cathedral", desc: "Nearly a thousand years at the heart of the city\u2014history, architecture, and that old-Dublin feeling you can\u2019t quite fake.", url: "https://christchurchcathedral.ie/" },
          { name: "EPIC The Irish Emigration Museum", desc: "A modern, interactive museum about the Irish abroad\u2014fast-paced, well done, and surprisingly personal even if you don\u2019t have Irish roots.", url: "https://epicchq.com/" },
          { name: "National Museum of Ireland - Archaeology", desc: "Ireland\u2019s archaeological treasures in one place\u2014gold, bog finds, deep-time history\u2014and it\u2019s the kind of museum that holds attention easily.", url: "https://www.museum.ie/en-ie/museums/archaeology" },
          { name: "Dublin Zoo", desc: "A strong family-day option in the Phoenix Park\u2014good animal viewing, lots of walking space, and a nice \u201coutdoors\u201d break from city streets.", url: "https://www.dublinzoo.ie/" },
          { name: "GPO Museum", desc: "A focused stop for modern Irish history\u2014especially around 1916\u2014with a timeline structure that makes it easy to follow even for first-timers.", url: "https://www.gpomuseum.ie/" }
        ]
      },
      {
        name: "Kildare",
        attractions: [
          { name: "Irish National Stud & Gardens", desc: "Thoroughbreds, manicured grounds, and the famous gardens\u2014this is Kildare doing horses and calm scenery in one tidy package.", url: "https://irishnationalstud.ie/" },
          { name: "Irish Racehorse Experience", desc: "A smart add-on at the Stud\u2014good if you want the behind-the-scenes racing context without needing to already know the sport.", url: "https://irishnationalstud.ie/plan-your-visit/" },
          { name: "Newbridge Silverware Visitor Centre", desc: "A mix of craft, design, museum displays, and shopping\u2014one of those places where someone in the group ends up quietly delighted.", url: "https://visitnewbridgesilverware.com/" },
          { name: "Castletown House and Parklands", desc: "A grand Palladian house with proper parkland walks\u2014perfect if you like stately buildings but also want room to roam and reset.", url: "https://heritageireland.ie/places-to-visit/castletown-house-and-parklands/" },
          { name: "Maynooth Castle", desc: "A strong local history stop\u2014ruins with real scale, and a quick way to feel how powerful the FitzGeralds once were.", url: "https://heritageireland.ie/places-to-visit/maynooth-castle/" },
          { name: "St. Brigid\u2019s Cathedral Kildare", desc: "A calm, meaningful place in one of Ireland\u2019s key saint towns\u2014good for a quiet visit, especially if you like heritage that still feels lived-in.", url: "https://stbrigidscathedral.com/" }
        ]
      },
      {
        name: "Kilkenny",
        attractions: [
          { name: "Kilkenny Castle", desc: "A castle that feels like a whole chapter of Irish history\u2014grand rooms, long timelines, and a park outside for a post-visit stroll.", url: "https://www.kilkennycastle.ie/" },
          { name: "St Canice\u2019s Cathedral & Round Tower", desc: "Medieval Kilkenny at its best\u2014cathedral history plus a tower climb that rewards you with the city laid out under your feet.", url: "https://www.stcanicescathedral.ie/" },
          { name: "Smithwick\u2019s Experience", desc: "Beer history in the medieval city\u2014when operating, it\u2019s a fun, sensory way to get the story behind one of Ireland\u2019s best-known ales.", url: "https://www.smithwicksexperience.com/" },
          { name: "Jerpoint Cistercian Abbey", desc: "A classic abbey ruin with beautiful stonework\u2014quiet, atmospheric, and one of those places where you naturally slow your pace.", url: "https://heritageireland.ie/places-to-visit/jerpoint-cistercian-abbey/" },
          { name: "Kells Priory", desc: "Big, enclosed monastic ruins\u2014room to explore, great photos, and it feels like you\u2019ve stumbled onto something important.", url: "https://heritageireland.ie/places-to-visit/kells-priory/" },
          { name: "Dunmore Cave", desc: "Underground chambers and impressive formations\u2014an easy choice when you want a \u201cwow\u201d stop that\u2019s completely weather-proof.", url: "https://heritageireland.ie/places-to-visit/dunmore-cave/" },
          { name: "Woodstock Arms", desc: "Rest easy in the heart of Kilkenny\u2019s countryside. Your relaxing village getaway, full of character, comfort, and local hospitality.", url: "https://www.woodstockarms.ie" }
        ]
      },
      {
        name: "Laois",
        attractions: [
          { name: "Emo Court and Estate", desc: "A grand neo-classical house with gardens that feel made for slow walking\u2014this is a classy, calm Laois day out.", url: "https://heritageireland.ie/places-to-visit/emo-court-and-estate/" },
          { name: "Rock of Dunamase", desc: "A dramatic ruin on a high rock\u2014short visit, big payoff, and the kind of place where you can see why castles picked views like this.", url: "https://heritageireland.ie/unguided-sites/rock-of-dunamase/" },
          { name: "Heywood Gardens", desc: "A landscaped hillside with serious design pedigree\u2014walks, vistas, and little architectural surprises tucked into the greenery.", url: "https://heritageireland.ie/places-to-visit/heywood-gardens/" },
          { name: "Donaghmore Workhouse & Agricultural Museum", desc: "A famine-era workhouse site turned museum\u2014honest, affecting, and run with real care for the stories behind the walls.", url: "https://donaghmoremuseum.ie/about-us/" },
          { name: "Slieve Bloom Mountains", desc: "Trails, biking, and that midlands mountain calm\u2014great when you want outdoors without the crowds or the coastal wind.", url: "https://slievebloom.ie/" },
          { name: "Abbeyleix Bog", desc: "A community-led bog and woodland trail\u2014quiet, wildlife-friendly, and one of the nicest \u201cstretch your legs\u201d stops in the midlands.", url: "https://www.abbeyleixbog.ie/" }
        ]
      },
      {
        name: "Longford",
        attractions: [
          { name: "Corlea Trackway Visitor Centre", desc: "A preserved Iron Age road pulled from the bog\u2014the kind of place where ancient engineering stops you in your tracks (literally).", url: "https://heritageireland.ie/places-to-visit/corlea-trackway-visitor-centre/" },
          { name: "Center Parcs Longford Forest", desc: "A big family resort tucked into the midlands woodland\u2014swimming, activities, and the kind of day where everyone comes home tired and happy.", url: "https://www.centerparcs.ie/" },
          { name: "St. Mel\u2019s Cathedral", desc: "Beautifully restored after a devastating fire\u2014the comeback story alone is worth the visit, and the interior doesn\u2019t disappoint.", url: "https://www.longfordparish.com/" },
          { name: "Royal Canal Greenway", desc: "A flat, easy route following the canal through quiet midlands countryside\u2014perfect for a gentle cycle or stretch-your-legs walk.", url: "https://www.royalcanalgreenway.ie/" },
          { name: "Carrigglas Manor", desc: "A Gothic Revival house with real character\u2014stableyard, costume collection, and that \u201ctime stood still\u201d feeling old estates do so well.", url: "https://www.carrigglas.com/" },
          { name: "Newcastle Wood & Lough Ree", desc: "Woodland trails by the lakeshore\u2014an easy-access nature walk with waterside views and the kind of calm that resets a busy head.", url: "https://www.coillte.ie/site/newcastle-wood/" }
        ]
      },
      {
        name: "Louth",
        attractions: [
          { name: "Monasterboice", desc: "Two of Ireland\u2019s finest high crosses and a round tower\u2014a short stop with the kind of ancient detail that makes you lean in close.", url: "https://heritageireland.ie/unguided-sites/monasterboice-monastic-site/" },
          { name: "Old Mellifont Abbey", desc: "Ireland\u2019s first Cistercian monastery\u2014atmospheric ruins with a lavabo that\u2019s genuinely beautiful, set in a quiet river valley.", url: "https://heritageireland.ie/places-to-visit/old-mellifont-abbey/" },
          { name: "Battle of the Boyne Visitor Centre", desc: "Where 1690 happened\u2014the Oldbridge estate tells the story well, and the grounds are worth a wander whether you\u2019re into history or not.", url: "https://www.battleoftheboyne.ie/" },
          { name: "Carlingford Heritage Area", desc: "A medieval walled town on the lough\u2014narrow streets, castle ruins, and a village that feels like it\u2019s been holding its character for centuries.", url: "https://www.carlingford.ie/" },
          { name: "Highlanes Gallery", desc: "A well-curated municipal gallery in Drogheda\u2014good art, calm atmosphere, and a nice \u201cI didn\u2019t expect this\u201d moment in a busy town.", url: "https://www.highlanes.ie/" },
          { name: "Cooley Peninsula & T\u00e1in Trail", desc: "Mythological landscape meets coastal scenery\u2014this is where the T\u00e1in B\u00f3 C\u00faailnge is set, and the hills still feel like it.", url: "https://www.discoverboynevalley.ie/cooley-peninsula" }
        ]
      },
      {
        name: "Meath",
        attractions: [
          { name: "Br\u00fa na B\u00f3inne \u2014 Newgrange", desc: "Older than the pyramids, and the winter solstice light show is legendary\u2014a UNESCO World Heritage site that earns every bit of the hype.", url: "https://www.newgrange.com/" },
          { name: "Hill of Tara", desc: "The ancient seat of the High Kings\u2014the mounds look simple, but stand up there and you understand why this hill mattered for thousands of years.", url: "https://heritageireland.ie/places-to-visit/hill-of-tara/" },
          { name: "Trim Castle", desc: "Ireland\u2019s largest Anglo-Norman castle\u2014serious scale, great condition, and yes, they filmed Braveheart here.", url: "https://heritageireland.ie/places-to-visit/trim-castle/" },
          { name: "Loughcrew Megalithic Centre", desc: "Hilltop passage tombs with ancient carvings and massive views\u2014fewer crowds than Newgrange, and just as atmospheric.", url: "https://www.loughcrew.com/" },
          { name: "Slane Castle & Distillery", desc: "A castle with rock concert history and a working whiskey distillery\u2014two very different reasons to visit, both worth it.", url: "https://www.slanecastle.ie/" },
          { name: "Tayto Park (now Emerald Park)", desc: "Ireland\u2019s biggest theme park\u2014rides, a zoo, and the kind of full-on family day that burns energy in the best possible way.", url: "https://www.emeraldpark.ie/" }
        ]
      },
      {
        name: "Offaly",
        attractions: [
          { name: "Clonmacnoise", desc: "A monastic city on the Shannon that takes your breath away\u2014high crosses, round towers, and a stillness that feels ancient and earned.", url: "https://heritageireland.ie/places-to-visit/clonmacnoise/" },
          { name: "Birr Castle Gardens & Science Centre", desc: "Beautiful demesne, a famous telescope, and a science story you don\u2019t expect\u2014the kind of place where curiosity gets rewarded.", url: "https://birrcastle.com/" },
          { name: "Lough Boora Discovery Park", desc: "Rewilded bogland turned sculpture park and nature trail\u2014flat, easy cycling with art installations and wildlife popping up everywhere.", url: "https://www.loughboora.com/" },
          { name: "Tullamore D.E.W. Visitor Centre", desc: "The home of Tullamore Dew whiskey\u2014a smooth visitor experience that gives you the town\u2019s story alongside the spirit\u2019s.", url: "https://www.tullamoredew.com/en/visit-us/" },
          { name: "Kinnitty Castle", desc: "A Gothic revival castle in the Slieve Bloom foothills\u2014good for a wander and a coffee, with a setting that feels far from everything.", url: "https://www.kinnittycastlehotel.com/" },
          { name: "Clara Bog Nature Reserve", desc: "One of the best-preserved raised bogs in Europe\u2014a genuinely important ecological site with a boardwalk that makes it accessible.", url: "https://www.npws.ie/protected-sites/sac/000572" }
        ]
      },
      {
        name: "Westmeath",
        attractions: [
          { name: "Athlone Castle Visitor Centre", desc: "A big, well-done castle experience right on the Shannon\u2014interactive exhibits, strong storytelling, and a town worth exploring after.", url: "https://www.athlonecastle.ie/" },
          { name: "Belvedere House, Gardens & Park", desc: "A grand lakeside estate with gorgeous gardens, woodland walks, and the \u201cJealous Wall\u201d\u2014one of Ireland\u2019s most famous follies.", url: "https://www.belvedere-house.ie/" },
          { name: "Kilbeggan Distillery", desc: "The world\u2019s oldest licensed distillery\u2014small-scale, authentic, and a whiskey tour that feels personal rather than corporate.", url: "https://www.kilbeggandistillery.ie/" },
          { name: "Fore Abbey", desc: "A cluster of early Christian and medieval ruins in a quiet valley\u2014the \u201cSeven Wonders of Fore\u201d give it a mythic edge.", url: "https://heritageireland.ie/unguided-sites/fore-abbey/" },
          { name: "Tullynally Castle Gardens", desc: "A castellated Gothic house with 30 acres of romantic gardens\u2014open seasonally, and worth timing your visit for.", url: "https://www.tullynallycastle.ie/" },
          { name: "Old Rail Trail Greenway", desc: "A flat, scenic greenway linking Athlone to Mullingar\u2014easy cycling, good coffee stops, and proper midlands countryside along the way.", url: "https://www.oldrailtrail.ie/" }
        ]
      },
      {
        name: "Wexford",
        attractions: [
          { name: "Irish National Heritage Park", desc: "Walk through 9,000 years of Irish history\u2014reconstructed settlements from the Stone Age to the Normans, set in lovely woodland.", url: "https://www.inhp.com/" },
          { name: "Hook Lighthouse", desc: "One of the oldest working lighthouses in the world\u2014the coastline is dramatic and the guided tour is full of stories.", url: "https://www.hookheritage.ie/" },
          { name: "Dunbrody Famine Ship Experience", desc: "A full-scale replica of an 1840s emigrant vessel\u2014powerful, well-told, and it puts the famine story right in front of you.", url: "https://www.dunbrody.com/" },
          { name: "Johnstown Castle & Gardens", desc: "A fairy-tale castle with gorgeous grounds and an agricultural museum\u2014the gardens alone are worth the detour.", url: "https://www.johnstowncastle.ie/" },
          { name: "Tintern Abbey", desc: "A beautiful Cistercian abbey ruin in a wooded setting\u2014peaceful trails, old stonework, and a very photogenic bridge walk.", url: "https://heritageireland.ie/places-to-visit/tintern-abbey/" },
          { name: "Wells House & Gardens", desc: "A Victorian house with a playground, craft workshops, and fairy trails\u2014family-friendly and genuinely fun without being theme-parky.", url: "https://www.wellshouse.ie/" }
        ]
      },
      {
        name: "Wicklow",
        attractions: [
          { name: "Glendalough Monastic Site", desc: "Stone ruins of a 6th-century monastery in a glacial valley\u2014two lakes, round tower, and an atmosphere that makes you whisper without meaning to.", url: "https://heritageireland.ie/places-to-visit/glendalough-monastic-city/" },
          { name: "Powerscourt Estate & Gardens", desc: "Grand house, famous gardens, and mountain views\u2014a proper \u201cwow\u201d stop that always lands, whether it\u2019s your first time or your fifth.", url: "https://powerscourt.com/" },
          { name: "Powerscourt Waterfall", desc: "At 121 metres, Ireland\u2019s highest waterfall\u2014tucked into a beautiful valley, great for a short walk and a big photo moment.", url: "https://powerscourt.com/powerscourt-waterfall/" },
          { name: "Wicklow Mountains National Park", desc: "A 220-square-kilometre protected area of upland beauty\u2014everything from gentle lakeside paths to serious mountain hikes.", url: "https://www.wicklowmountainsnationalpark.ie/" },
          { name: "Beyond The Trees \u2014 Avondale", desc: "A treetop walk, a 38-metre viewing tower, and a spiral slide through the forest canopy\u2014Wicklow doing outdoor adventure with proper style.", url: "https://www.beyondthetrees.ie/" },
          { name: "Bray to Greystones Cliff Walk", desc: "A coastal path with huge sea views\u2014short enough to feel achievable, dramatic enough to feel like an event.", url: "https://www.visitwicklow.ie/see-do/bray-head" }
        ]
      }
    ]
  },
  {
    province: "Ulster",
    counties: [
      {
        name: "Antrim",
        attractions: [
          { name: "Giant\u2019s Causeway", desc: "40,000 basalt columns shaped by nature (or a giant, depending who you ask)\u2014a UNESCO site that genuinely looks like another world.", url: "https://www.nationaltrust.org.uk/visit/northern-ireland/giants-causeway" },
          { name: "Titanic Belfast", desc: "The full Titanic story told on the spot where she was built\u2014one of the world\u2019s best museum experiences, and it earns that reputation.", url: "https://www.titanicbelfast.com/" },
          { name: "Carrick-a-Rede Rope Bridge", desc: "A swaying rope bridge between the mainland and a tiny island\u2014short, thrilling, and the coastal scenery around it is spectacular.", url: "https://www.nationaltrust.org.uk/visit/northern-ireland/carrick-a-rede" },
          { name: "The Dark Hedges", desc: "An avenue of beech trees that\u2019s been famous since Game of Thrones\u2014atmospheric in any weather, best in early morning light.", url: "https://www.nationaltrust.org.uk/visit/northern-ireland/the-dark-hedges" },
          { name: "Old Bushmills Distillery", desc: "The world\u2019s oldest licensed whiskey distillery\u2014a classic tour with real heritage and a tasting that makes the drive worth it.", url: "https://www.bushmills.com/distillery" },
          { name: "Dunluce Castle", desc: "A dramatic castle ruin on a cliff edge\u2014the kind of place that looks like it was designed for a movie poster.", url: "https://www.communities-ni.gov.uk/articles/visit-dunluce-castle" }
        ]
      },
      {
        name: "Armagh",
        attractions: [
          { name: "Armagh Observatory & Planetarium", desc: "Stars, science, and a planetarium show\u2014a smart family stop where you leave knowing more than you did going in.", url: "https://www.armagh.space/" },
          { name: "Navan Centre & Fort", desc: "The legendary Emain Macha\u2014one of Ireland\u2019s most important archaeological sites, and the visitor centre makes the mythology real.", url: "https://www.armagh.co.uk/navan-centre-fort/" },
          { name: "St. Patrick\u2019s Cathedrals", desc: "Two cathedrals, two traditions, one city\u2014both are impressive, and together they tell a complicated, honest story about Ireland.", url: "https://www.stpatricks-cathedral.org/" },
          { name: "Ring of Gullion", desc: "A volcanic ring dyke with trails, viewpoints, and serious geology\u2014the landscape here has a mood all its own.", url: "https://www.ringofgullion.org/" },
          { name: "Palace Demesne Public Park", desc: "A gorgeous public park in the heart of Armagh\u2014Georgian heritage, woodland, and a playground that makes kids reluctant to leave.", url: "https://www.armaghbanbridgecraigavon.gov.uk/palace-demesne/" },
          { name: "Armagh County Museum", desc: "Ireland\u2019s oldest county museum\u2014free, focused, and full of local stories from ancient times to the recent past.", url: "https://www.nmni.com/our-museums/armagh-county-museum/" }
        ]
      },
      {
        name: "Cavan",
        attractions: [
          { name: "Cavan Burren Park", desc: "Prehistoric landscapes and tombs in a compact area\u2014great walking, big history, and the kind of place that feels older than language.", url: "https://www.cavanburrenpark.ie/" },
          { name: "Cavan County Museum", desc: "A strong local museum\u2014Stone Age to modern Cavan, with exhibits that make the county\u2019s story feel clear instead of abstract.", url: "https://cavanmuseum.ie/" },
          { name: "Killykeen Forest Park", desc: "Lakeland walking with woodland paths\u2014easy, family-friendly, and a perfect \u201cfresh air\u201d stop when you don\u2019t want anything too strenuous.", url: "https://www.coillte.ie/site/killykeen-forest-park/" },
          { name: "D\u00fan a R\u00ed Forest Park", desc: "A gorgeous forest park with history in the background\u2014looped walks, river scenery, and a calm vibe built for an unhurried afternoon.", url: "https://dunari.ie/" },
          { name: "Shannon-Erne Waterway", desc: "A major inland navigation route\u2014peaceful water scenery and a good reminder that Ireland\u2019s \u201cbig journeys\u201d aren\u2019t always on the coast.", url: "https://www.waterwaysireland.org/our-waterways/shannon-erne-waterway" },
          { name: "Lough Oughter and Associated Loughs SAC", desc: "Protected lakeland habitat\u2014great for nature interest (especially birds and wetland scenery), and it shows why this landscape matters.", url: "https://www.npws.ie/protected-sites/sac/000007" }
        ]
      },
      {
        name: "Derry",
        attractions: [
          { name: "Derry City Walls", desc: "The most complete walled city in Ireland\u2014walk the full circuit and you get the city\u2019s history literally under your feet.", url: "https://www.derrystrabane.com/wallscity" },
          { name: "Mussenden Temple & Downhill Demesne", desc: "A tiny temple perched on a cliff above the Atlantic\u2014dramatic, windswept, and the kind of view that makes you grab someone\u2019s arm.", url: "https://www.nationaltrust.org.uk/visit/northern-ireland/mussenden-temple-and-downhill-demesne" },
          { name: "Tower Museum", desc: "Derry\u2019s story told from the Spanish Armada to the modern day\u2014well-paced, well-done, and it gives you real context for the city.", url: "https://www.derrystrabane.com/towermuseum" },
          { name: "The Guildhall", desc: "A stunning civic building with stained glass windows that tell Derry\u2019s history\u2014free to enter and worth every minute inside.", url: "https://www.derrystrabane.com/guildhall" },
          { name: "Museum of Free Derry", desc: "A museum that tells the civil rights and Bloody Sunday story from the community\u2019s perspective\u2014moving, important, and honestly done.", url: "https://museumoffreederry.org/" },
          { name: "Roe Valley Country Park", desc: "Woodland walks, a river gorge, and the site of Ireland\u2019s first hydro-electric station\u2014a quiet, green escape outside the city.", url: "https://www.midulstercouncil.org/roe-valley-country-park" }
        ]
      },
      {
        name: "Donegal",
        attractions: [
          { name: "Glenveagh National Park", desc: "Donegal wilderness with a castle-and-gardens twist\u2014big trails, mountain scenery, and the kind of quiet you only get far from cities.", url: "https://www.nationalparks.ie/glenveagh/" },
          { name: "Slieve League Cliffs Centre", desc: "Massive sea cliffs and a visitor centre to set you up\u2014Donegal\u2019s Atlantic edge at full power, best enjoyed with a steady pair of shoes.", url: "https://www.slieveleague.com/" },
          { name: "Donegal Castle", desc: "A Gaelic stronghold right in town\u2014short, punchy, and loaded with the kind of history Donegal is famous for.", url: "https://heritageireland.ie/places-to-visit/donegal-castle/" },
          { name: "Fanad Lighthouse", desc: "A working lighthouse you can actually experience\u2014sea views, local guiding, and the sort of coastline that makes you reset your standards.", url: "https://fanadlighthouse.com/" },
          { name: "Malin Head", desc: "Ireland\u2019s most northerly point\u2014raw scenery, sea air, and a \u201cthis is the end of the map\u201d feeling that\u2019s hard to beat.", url: "https://www.discoverireland.ie/donegal/malin-head" },
          { name: "Brian\u00e1n of Aileach", desc: "A stone fort on a hilltop with huge views\u2014one of those places where the landscape and the monument feel inseparable.", url: "https://heritageireland.ie/unguided-sites/grianan-of-aileach/" }
        ]
      },
      {
        name: "Down",
        attractions: [
          { name: "Mount Stewart", desc: "An 18th-century house with world-class gardens\u2014the plant collection is exceptional and the lakeside walks are pure therapy.", url: "https://www.nationaltrust.org.uk/visit/northern-ireland/mount-stewart" },
          { name: "Castle Ward", desc: "A National Trust estate with two architectural faces\u2014plus Game of Thrones filming locations and a stunning Strangford Lough setting.", url: "https://www.nationaltrust.org.uk/visit/northern-ireland/castle-ward" },
          { name: "Mourne Mountains", desc: "Northern Ireland\u2019s highest peaks with trails for every level\u2014the Mourne Wall walk is legendary, and the views are worth every step.", url: "https://www.visitmournemountains.co.uk/" },
          { name: "Saint Patrick Centre", desc: "The only permanent exhibition about Ireland\u2019s patron saint\u2014Downpatrick tells his story with care, and the town has real atmosphere.", url: "https://www.saintpatrickcentre.com/" },
          { name: "Exploris Aquarium", desc: "A family-friendly aquarium on Strangford Lough\u2014seal rescue, touch tanks, and local marine life that kids (and adults) genuinely enjoy.", url: "https://www.explorisni.com/" },
          { name: "Tollymore Forest Park", desc: "An ancient forest with river bridges, follies, and Game of Thrones filming spots\u2014beautiful trails and a very cinematic atmosphere.", url: "https://www.nidirect.gov.uk/articles/tollymore-forest-park" }
        ]
      },
      {
        name: "Fermanagh",
        attractions: [
          { name: "Marble Arch Caves Global Geopark", desc: "Underground boat rides and cave formations that feel otherworldly\u2014one of Ireland\u2019s best cave experiences, rain or shine.", url: "https://www.marblearchcaves.co.uk/" },
          { name: "Enniskillen Castle Museums", desc: "A waterside castle with two museums inside\u2014local history and military heritage in a building that\u2019s been standing since the 1400s.", url: "https://www.enniskillencastle.co.uk/" },
          { name: "Devenish Island", desc: "A monastic island on Lough Erne\u2014take the boat, climb the round tower, and enjoy the kind of peace that\u2019s hard to find on the mainland.", url: "https://www.communities-ni.gov.uk/articles/visit-devenish-island" },
          { name: "Cuilcagh Boardwalk Trail", desc: "The famous \u201cStairway to Heaven\u201d\u2014a boardwalk to a mountain summit with views that go on forever. Bring layers and a camera.", url: "https://www.walkni.com/walks/cuilcagh-boardwalk-trail/" },
          { name: "Florence Court", desc: "An 18th-century house in a stunning mountain setting\u2014the gardens, parkland, and original Irish yew tree are all worth the trip.", url: "https://www.nationaltrust.org.uk/visit/northern-ireland/florence-court" },
          { name: "Lough Erne", desc: "Upper and Lower\u2014two connected lakes dotted with islands, history, and some of the best water-based scenery in the north.", url: "https://www.fermanaghlakelands.com/" }
        ]
      },
      {
        name: "Monaghan",
        attractions: [
          { name: "Castle Leslie Estate", desc: "A classic estate setting\u2014lakes, woods, and that \u201cold Ireland\u201d feeling, whether you\u2019re staying over or just visiting for the atmosphere.", url: "https://www.castleleslie.com/" },
          { name: "Patrick Kavanagh Centre", desc: "A warm, well-done tribute to a major Irish poet\u2014great if you like culture that\u2019s tied directly to the landscape that inspired it.", url: "https://patrickkavanaghcentre.com/" },
          { name: "Monaghan County Museum", desc: "Solid local history in a modern setting\u2014good context for Monaghan\u2019s border stories, crafts, and everyday life across generations.", url: "https://monaghan.ie/museum/" },
          { name: "Lough Muckno Leisure Park", desc: "A big, outdoorsy park day\u2014walks, water, and enough space that it never feels cramped, even when families roll in.", url: "https://www.discoverireland.ie/monaghan/lough-muckno-leisure-park" },
          { name: "Rossmore Forest Park", desc: "Forest and lakeside walks close to town\u2014ideal for an easy nature reset, especially if you\u2019ve been driving all day.", url: "https://www.coillte.ie/site/rossmore-forest-park/" },
          { name: "Carrickmacross Lace Gallery", desc: "A true local craft tradition\u2014if you want something uniquely Monaghan (and surprisingly intricate), lace is the county\u2019s quiet flex.", url: "https://www.carrickmacrosslace.ie/" }
        ]
      },
      {
        name: "Tyrone",
        attractions: [
          { name: "Ulster American Folk Park", desc: "A living-history museum about Irish emigration to America\u2014thatched cottages, a full-size ship, and stories that cross the Atlantic.", url: "https://www.nmni.com/our-museums/ulster-american-folk-park/" },
          { name: "Beaghmore Stone Circles", desc: "Seven stone circles and cairns in open moorland\u2014a quiet, slightly mysterious place that rewards the drive to get there.", url: "https://www.communities-ni.gov.uk/articles/visit-beaghmore-stone-circles" },
          { name: "Gortin Glen Forest Park", desc: "Forest trails, a scenic drive, and wildlife enclosures\u2014an easy day out where nature does the entertaining.", url: "https://www.nidirect.gov.uk/articles/gortin-glen-forest-park" },
          { name: "Sperrin Mountains", desc: "A vast, under-visited upland area\u2014proper walking country with gold panning history and the kind of emptiness that feels like a privilege.", url: "https://www.sperrinstourism.com/" },
          { name: "Gray\u2019s Printing Press", desc: "A tiny but fascinating National Trust museum\u2014where John Dunlap printed the American Declaration of Independence\u2019s first copies.", url: "https://www.nationaltrust.org.uk/visit/northern-ireland/grays-printing-press" },
          { name: "An Creag\u00e1n Visitor Centre", desc: "A Tyrone cultural centre in the Sperrins\u2014bog walks, local heritage, and a good starting point for exploring the wider area.", url: "https://www.an-creagan.com/" }
        ]
      }
    ]
  }
];
