import { useState, useEffect } from 'react';
import { EmbeddingItem, Point } from '../types/embedding';

const MOCK_API_DATA = {
  "items": [
    {
      "embedding": [
        11.247342109680176,
        1.7719507217407227
      ],
      "label": 13,
      "category": "cucumber",
      "sprite_path": "static/dump/umap/static/train/ginger/Image_1.jpg"
    },
    {
      "embedding": [
        5.843488693237305,
        2.9818501472473145
      ],
      "label": 13,
      "category": "cucumber",
      "sprite_path": "static/dump/umap/static/train/ginger/Image_82.jpeg"
    },
    {
      "embedding": [
        1.0165259838104248,
        4.972050189971924
      ],
      "label": 13,
      "category": "cucumber",
      "sprite_path": "static/dump/umap/static/train/ginger/Image_16.jpg"
    },
    {
      "embedding": [
        2.2613582611083984,
        5.550540447235107
      ],
      "label": 13,
      "category": "cucumber",
      "sprite_path": "static/dump/umap/static/train/ginger/Image_57.jpg"
    },
    {
      "embedding": [
        1.4057939052581787,
        4.408754348754883
      ],
      "label": 13,
      "category": "cucumber",
      "sprite_path": "static/dump/umap/static/train/ginger/Image_12.jpg"
    },
    {
      "embedding": [
        2.5955684185028076,
        5.26066255569458
      ],
      "label": 13,
      "category": "cucumber",
      "sprite_path": "static/dump/umap/static/train/ginger/Image_33.jpg"
    },
    {
      "embedding": [
        9.797688484191895,
        2.3447093963623047
      ],
      "label": 13,
      "category": "cucumber",
      "sprite_path": "static/dump/umap/static/train/ginger/Image_40.jpg"
    },
    {
      "embedding": [
        5.552468299865723,
        3.639700412750244
      ],
      "label": 13,
      "category": "cucumber",
      "sprite_path": "static/dump/umap/static/train/ginger/Image_10.jpg"
    },
    {
      "embedding": [
        8.572311401367188,
        2.4519052505493164
      ],
      "label": 13,
      "category": "cucumber",
      "sprite_path": "static/dump/umap/static/train/ginger/Image_21.jpg"
    },
    {
      "embedding": [
        9.561832427978516,
        2.5245444774627686
      ],
      "label": 13,
      "category": "cucumber",
      "sprite_path": "static/dump/umap/static/train/ginger/Image_78.jpg"
    },
    {
      "embedding": [
        1.3911590576171875,
        4.778775691986084
      ],
      "label": 13,
      "category": "cucumber",
      "sprite_path": "static/dump/umap/static/train/ginger/Image_4.jpg"
    },
    {
      "embedding": [
        5.613020420074463,
        3.2865729331970215
      ],
      "label": 13,
      "category": "cucumber",
      "sprite_path": "static/dump/umap/static/train/ginger/Image_38.jpg"
    },
    {
      "embedding": [
        9.813032150268555,
        2.6780123710632324
      ],
      "label": 13,
      "category": "cucumber",
      "sprite_path": "static/dump/umap/static/train/ginger/Image_41.jpg"
    },
    {
      "embedding": [
        12.601875305175781,
        1.361872911453247
      ],
      "label": 13,
      "category": "cucumber",
      "sprite_path": "static/dump/umap/static/train/ginger/Image_7.jpg"
    },
    {
      "embedding": [
        9.257712364196777,
        1.900925636291504
      ],
      "label": 13,
      "category": "cucumber",
      "sprite_path": "static/dump/umap/static/train/ginger/Image_69.jpg"
    },
    {
      "embedding": [
        5.4303717613220215,
        3.1653857231140137
      ],
      "label": 13,
      "category": "cucumber",
      "sprite_path": "static/dump/umap/static/train/ginger/Image_60.jpg"
    },
    {
      "embedding": [
        3.3491106033325195,
        4.917920112609863
      ],
      "label": 13,
      "category": "cucumber",
      "sprite_path": "static/dump/umap/static/train/ginger/Image_13.jpg"
    },
    {
      "embedding": [
        1.4819918870925903,
        5.720270156860352
      ],
      "label": 13,
      "category": "cucumber",
      "sprite_path": "static/dump/umap/static/train/ginger/Image_95.jpg"
    },
    {
      "embedding": [
        1.4369337558746338,
        5.827075481414795
      ],
      "label": 13,
      "category": "cucumber",
      "sprite_path": "static/dump/umap/static/train/ginger/Image_68.jpg"
    },
    {
      "embedding": [
        1.6525565385818481,
        5.208877086639404
      ],
      "label": 13,
      "category": "cucumber",
      "sprite_path": "static/dump/umap/static/train/ginger/Image_8.jpg"
    },
    {
      "embedding": [
        1.5119726657867432,
        5.072149753570557
      ],
      "label": 13,
      "category": "cucumber",
      "sprite_path": "static/dump/umap/static/train/ginger/Image_22.jpg"
    },
    {
      "embedding": [
        1.5218850374221802,
        5.575826168060303
      ],
      "label": 13,
      "category": "cucumber",
      "sprite_path": "static/dump/umap/static/train/ginger/Image_79.jpg"
    },
    {
      "embedding": [
        6.588163375854492,
        2.2649152278900146
      ],
      "label": 13,
      "category": "cucumber",
      "sprite_path": "static/dump/umap/static/train/ginger/Image_17.jpg"
    },
    {
      "embedding": [
        7.06281852722168,
        2.0487747192382812
      ],
      "label": 13,
      "category": "cucumber",
      "sprite_path": "static/dump/umap/static/train/ginger/Image_25.jpg"
    },
    {
      "embedding": [
        4.694154262542725,
        4.119960784912109
      ],
      "label": 13,
      "category": "cucumber",
      "sprite_path": "static/dump/umap/static/train/ginger/Image_42.png"
    },
    {
      "embedding": [
        6.782059669494629,
        0.7131193280220032
      ],
      "label": 13,
      "category": "cucumber",
      "sprite_path": "static/dump/umap/static/train/ginger/Image_9.jpg"
    },
    {
      "embedding": [
        11.828570365905762,
        2.1067159175872803
      ],
      "label": 13,
      "category": "cucumber",
      "sprite_path": "static/dump/umap/static/train/ginger/Image_71.jpg"
    },
    {
      "embedding": [
        9.015071868896484,
        2.0913236141204834
      ],
      "label": 13,
      "category": "cucumber",
      "sprite_path": "static/dump/umap/static/train/ginger/Image_34.jpg"
    },
    {
      "embedding": [
        1.9759912490844727,
        5.1624345779418945
      ],
      "label": 13,
      "category": "cucumber",
      "sprite_path": "static/dump/umap/static/train/ginger/Image_6.jpg"
    },
    {
      "embedding": [
        8.478805541992188,
        1.670566439628601
      ],
      "label": 13,
      "category": "cucumber",
      "sprite_path": "static/dump/umap/static/train/ginger/Image_20.jpg"
    },
    {
      "embedding": [
        11.22232437133789,
        1.733524203300476
      ],
      "label": 13,
      "category": "cucumber",
      "sprite_path": "static/dump/umap/static/train/ginger/Image_98.jpg"
    },
    {
      "embedding": [
        2.3549609184265137,
        5.648284912109375
      ],
      "label": 13,
      "category": "cucumber",
      "sprite_path": "static/dump/umap/static/train/ginger/Image_19.jpg"
    },
    {
      "embedding": [
        9.15620231628418,
        2.104875087738037
      ],
      "label": 13,
      "category": "cucumber",
      "sprite_path": "static/dump/umap/static/train/ginger/Image_61.jpg"
    },
    {
      "embedding": [
        1.6285874843597412,
        5.2255425453186035
      ],
      "label": 13,
      "category": "cucumber",
      "sprite_path": "static/dump/umap/static/train/ginger/Image_85.jpg"
    },
    {
      "embedding": [
        7.538961887359619,
        1.5696334838867188
      ],
      "label": 13,
      "category": "cucumber",
      "sprite_path": "static/dump/umap/static/train/ginger/Image_74.jpg"
    },
    {
      "embedding": [
        7.3906965255737305,
        2.7493765354156494
      ],
      "label": 13,
      "category": "cucumber",
      "sprite_path": "static/dump/umap/static/train/ginger/Image_53.jpg"
    },
    {
      "embedding": [
        1.2157354354858398,
        5.007662296295166
      ],
      "label": 13,
      "category": "cucumber",
      "sprite_path": "static/dump/umap/static/train/ginger/Image_64.jpg"
    },
    {
      "embedding": [
        10.57669448852539,
        0.6561394333839417
      ],
      "label": 13,
      "category": "cucumber",
      "sprite_path": "static/dump/umap/static/train/ginger/Image_92.jpg"
    },
    {
      "embedding": [
        1.149579644203186,
        4.962620735168457
      ],
      "label": 13,
      "category": "cucumber",
      "sprite_path": "static/dump/umap/static/train/ginger/Image_27.jpg"
    },
    {
      "embedding": [
        0.8305121660232544,
        5.133515357971191
      ],
      "label": 13,
      "category": "cucumber",
      "sprite_path": "static/dump/umap/static/train/ginger/Image_72.jpg"
    },
    {
      "embedding": [
        13.12434196472168,
        1.9826151132583618
      ],
      "label": 13,
      "category": "cucumber",
      "sprite_path": "static/dump/umap/static/train/ginger/Image_39.png"
    },
    {
      "embedding": [
        6.608966827392578,
        3.1267693042755127
      ],
      "label": 13,
      "category": "cucumber",
      "sprite_path": "static/dump/umap/static/train/ginger/Image_73.jpg"
    },
    {
      "embedding": [
        9.56481647491455,
        0.8866716623306274
      ],
      "label": 13,
      "category": "cucumber",
      "sprite_path": "static/dump/umap/static/train/ginger/Image_96.jpg"
    },
    {
      "embedding": [
        8.791955947875977,
        2.9156014919281006
      ],
      "label": 13,
      "category": "cucumber",
      "sprite_path": "static/dump/umap/static/train/ginger/Image_11.jpg"
    },
    {
      "embedding": [
        2.084179401397705,
        5.542152404785156
      ],
      "label": 13,
      "category": "cucumber",
      "sprite_path": "static/dump/umap/static/train/ginger/Image_67.jpg"
    },
    {
      "embedding": [
        8.669736862182617,
        1.8829209804534912
      ],
      "label": 13,
      "category": "cucumber",
      "sprite_path": "static/dump/umap/static/train/ginger/Image_58.jpg"
    },
    {
      "embedding": [
        8.570103645324707,
        2.0154802799224854
      ],
      "label": 13,
      "category": "cucumber",
      "sprite_path": "static/dump/umap/static/train/ginger/Image_29.png"
    },
    {
      "embedding": [
        1.2097790241241455,
        5.038174629211426
      ],
      "label": 13,
      "category": "cucumber",
      "sprite_path": "static/dump/umap/static/train/ginger/Image_62.jpg"
    },
    {
      "embedding": [
        3.9888551235198975,
        4.680859088897705
      ],
      "label": 13,
      "category": "cucumber",
      "sprite_path": "static/dump/umap/static/train/ginger/Image_30.jpg"
    },
    {
      "embedding": [
        8.791850090026855,
        0.6909805536270142
      ],
      "label": 13,
      "category": "cucumber",
      "sprite_path": "static/dump/umap/static/train/ginger/Image_5.jpg"
    },
    {
      "embedding": [
        2.232750415802002,
        5.305366516113281
      ],
      "label": 13,
      "category": "cucumber",
      "sprite_path": "static/dump/umap/static/train/ginger/Image_100.jpg"
    },
    {
      "embedding": [
        4.307307720184326,
        4.213902473449707
      ],
      "label": 13,
      "category": "cucumber",
      "sprite_path": "static/dump/umap/static/train/ginger/Image_15.jpg"
    },
    {
      "embedding": [
        5.175726890563965,
        3.297199010848999
      ],
      "label": 13,
      "category": "cucumber",
      "sprite_path": "static/dump/umap/static/train/ginger/Image_35.jpg"
    },
    {
      "embedding": [
        8.602063179016113,
        0.6523491740226746
      ],
      "label": 13,
      "category": "cucumber",
      "sprite_path": "static/dump/umap/static/train/ginger/Image_14.jpg"
    },
    {
      "embedding": [
        8.628649711608887,
        2.1943519115448
      ],
      "label": 13,
      "category": "cucumber",
      "sprite_path": "static/dump/umap/static/train/ginger/Image_63.jpg"
    },
    {
      "embedding": [
        1.6884236335754395,
        5.296461582183838
      ],
      "label": 13,
      "category": "cucumber",
      "sprite_path": "static/dump/umap/static/train/ginger/Image_24.jpg"
    },
    {
      "embedding": [
        1.068932294845581,
        4.651495456695557
      ],
      "label": 13,
      "category": "cucumber",
      "sprite_path": "static/dump/umap/static/train/ginger/Image_99.jpg"
    },
    {
      "embedding": [
        1.9527831077575684,
        5.510526180267334
      ],
      "label": 13,
      "category": "cucumber",
      "sprite_path": "static/dump/umap/static/train/ginger/Image_32.jpg"
    },
    {
      "embedding": [
        6.959521770477295,
        2.759105682373047
      ],
      "label": 13,
      "category": "cucumber",
      "sprite_path": "static/dump/umap/static/train/ginger/Image_37.jpg"
    },
    {
      "embedding": [
        5.015016555786133,
        3.2827706336975098
      ],
      "label": 13,
      "category": "cucumber",
      "sprite_path": "static/dump/umap/static/train/ginger/Image_28.jpg"
    },
    {
      "embedding": [
        2.2270796298980713,
        5.619140625
      ],
      "label": 13,
      "category": "cucumber",
      "sprite_path": "static/dump/umap/static/train/ginger/Image_54.jpg"
    },
    {
      "embedding": [
        3.0599396228790283,
        4.7619309425354
      ],
      "label": 13,
      "category": "cucumber",
      "sprite_path": "static/dump/umap/static/train/ginger/Image_36.jpg"
    },
    {
      "embedding": [
        5.971190929412842,
        2.66259503364563
      ],
      "label": 13,
      "category": "cucumber",
      "sprite_path": "static/dump/umap/static/train/ginger/Image_31.jpg"
    },
    {
      "embedding": [
        1.0244251489639282,
        4.7355637550354
      ],
      "label": 13,
      "category": "cucumber",
      "sprite_path": "static/dump/umap/static/train/ginger/Image_2.jpg"
    },
    {
      "embedding": [
        2.1818933486938477,
        5.321163177490234
      ],
      "label": 13,
      "category": "cucumber",
      "sprite_path": "static/dump/umap/static/train/ginger/Image_3.jpg"
    },
    {
      "embedding": [
        1.6266206502914429,
        5.040877819061279
      ],
      "label": 13,
      "category": "cucumber",
      "sprite_path": "static/dump/umap/static/train/ginger/Image_26.jpg"
    },
    {
      "embedding": [
        6.045540809631348,
        2.738473415374756
      ],
      "label": 13,
      "category": "cucumber",
      "sprite_path": "static/dump/umap/static/train/ginger/Image_43.jpg"
    },
    {
      "embedding": [
        12.147143363952637,
        1.6046411991119385
      ],
      "label": 13,
      "category": "cucumber",
      "sprite_path": "static/dump/umap/static/train/ginger/Image_18.jpg"
    },
    {
      "embedding": [
        9.602310180664062,
        1.2647274732589722
      ],
      "label": 1,
      "category": "banana",
      "sprite_path": "static/dump/umap/static/train/banana/Image_89.jpg"
    },
    {
      "embedding": [
        1.595786452293396,
        5.4156413078308105
      ],
      "label": 1,
      "category": "banana",
      "sprite_path": "static/dump/umap/static/train/banana/Image_1.jpg"
    },
    {
      "embedding": [
        9.281936645507812,
        1.7224332094192505
      ],
      "label": 1,
      "category": "banana",
      "sprite_path": "static/dump/umap/static/train/banana/Image_16.jpg"
    },
    {
      "embedding": [
        2.8911783695220947,
        5.680056571960449
      ],
      "label": 1,
      "category": "banana",
      "sprite_path": "static/dump/umap/static/train/banana/Image_57.jpg"
    },
    {
      "embedding": [
        11.63548755645752,
        2.506783962249756
      ],
      "label": 1,
      "category": "banana",
      "sprite_path": "static/dump/umap/static/train/banana/Image_56.jpg"
    },
    {
      "embedding": [
        8.159193992614746,
        0.3596717119216919
      ],
      "label": 1,
      "category": "banana",
      "sprite_path": "static/dump/umap/static/train/banana/Image_45.jpg"
    },
    {
      "embedding": [
        2.6548423767089844,
        5.678473949432373
      ],
      "label": 1,
      "category": "banana",
      "sprite_path": "static/dump/umap/static/train/banana/Image_40.jpg"
    },
    {
      "embedding": [
        12.665567398071289,
        1.8741346597671509
      ],
      "label": 1,
      "category": "banana",
      "sprite_path": "static/dump/umap/static/train/banana/Image_59.jpg"
    },
    {
      "embedding": [
        2.3835995197296143,
        6.140426158905029
      ],
      "label": 1,
      "category": "banana",
      "sprite_path": "static/dump/umap/static/train/banana/Image_4.jpg"
    },
    {
      "embedding": [
        2.734046697616577,
        5.635578632354736
      ],
      "label": 1,
      "category": "banana",
      "sprite_path": "static/dump/umap/static/train/banana/Image_41.jpg"
    },
    {
      "embedding": [
        5.178133010864258,
        3.0147602558135986
      ],
      "label": 1,
      "category": "banana",
      "sprite_path": "static/dump/umap/static/train/banana/Image_69.jpg"
    },
    {
      "embedding": [
        6.062092304229736,
        2.736862897872925
      ],
      "label": 1,
      "category": "banana",
      "sprite_path": "static/dump/umap/static/train/banana/Image_13.jpg"
    },
    {
      "embedding": [
        1.7687938213348389,
        5.704745292663574
      ],
      "label": 1,
      "category": "banana",
      "sprite_path": "static/dump/umap/static/train/banana/Image_49.jpg"
    },
    {
      "embedding": [
        1.7582056522369385,
        5.944521427154541
      ],
      "label": 1,
      "category": "banana",
      "sprite_path": "static/dump/umap/static/train/banana/Image_91.jpg"
    },
    {
      "embedding": [
        1.395062804222107,
        5.768869400024414
      ],
      "label": 1,
      "category": "banana",
      "sprite_path": "static/dump/umap/static/train/banana/Image_95.jpg"
    },
    {
      "embedding": [
        8.004833221435547,
        0.6735020279884338
      ],
      "label": 1,
      "category": "banana",
      "sprite_path": "static/dump/umap/static/train/banana/Image_86.jpg"
    },
    {
      "embedding": [
        8.868814468383789,
        1.4089584350585938
      ],
      "label": 1,
      "category": "banana",
      "sprite_path": "static/dump/umap/static/train/banana/Image_68.jpg"
    },
    {
      "embedding": [
        9.414182662963867,
        2.869992971420288
      ],
      "label": 1,
      "category": "banana",
      "sprite_path": "static/dump/umap/static/train/banana/Image_23.jpg"
    },
    {
      "embedding": [
        2.7853221893310547,
        5.765252590179443
      ],
      "label": 1,
      "category": "banana",
      "sprite_path": "static/dump/umap/static/train/banana/Image_8.jpg"
    },
    {
      "embedding": [
        12.875581741333008,
        2.649563789367676
      ],
      "label": 1,
      "category": "banana",
      "sprite_path": "static/dump/umap/static/train/banana/Image_48.png"
    },
    {
      "embedding": [
        11.56757640838623,
        1.1332100629806519
      ],
      "label": 1,
      "category": "banana",
      "sprite_path": "static/dump/umap/static/train/banana/Image_79.jpg"
    },
    {
      "embedding": [
        11.296409606933594,
        2.157961845397949
      ],
      "label": 1,
      "category": "banana",
      "sprite_path": "static/dump/umap/static/train/banana/Image_77.jpg"
    },
    {
      "embedding": [
        11.764498710632324,
        1.4355429410934448
      ],
      "label": 1,
      "category": "banana",
      "sprite_path": "static/dump/umap/static/train/banana/Image_25.jpg"
    },
    {
      "embedding": [
        1.4222922325134277,
        5.682852745056152
      ],
      "label": 1,
      "category": "banana",
      "sprite_path": "static/dump/umap/static/train/banana/Image_46.jpg"
    },
    {
      "embedding": [
        2.6711232662200928,
        5.710614204406738
      ],
      "label": 1,
      "category": "banana",
      "sprite_path": "static/dump/umap/static/train/banana/Image_9.jpg"
    },
    {
      "embedding": [
        5.626681327819824,
        2.9532663822174072
      ],
      "label": 1,
      "category": "banana",
      "sprite_path": "static/dump/umap/static/train/banana/Image_71.jpg"
    },
    {
      "embedding": [
        13.372712135314941,
        1.325835943222046
      ],
      "label": 1,
      "category": "banana",
      "sprite_path": "static/dump/umap/static/train/banana/Image_43.png"
    },
    {
      "embedding": [
        1.596848487854004,
        5.7899909019470215
      ],
      "label": 1,
      "category": "banana",
      "sprite_path": "static/dump/umap/static/train/banana/Image_6.jpg"
    },
    {
      "embedding": [
        13.128946304321289,
        2.004908323287964
      ],
      "label": 1,
      "category": "banana",
      "sprite_path": "static/dump/umap/static/train/banana/Image_53.png"
    },
    {
      "embedding": [
        1.5711719989776611,
        5.788005352020264
      ],
      "label": 1,
      "category": "banana",
      "sprite_path": "static/dump/umap/static/train/banana/Image_98.jpg"
    },
    {
      "embedding": [
        6.732687473297119,
        0.8316441774368286
      ],
      "label": 1,
      "category": "banana",
      "sprite_path": "static/dump/umap/static/train/banana/Image_47.jpg"
    },
    {
      "embedding": [
        1.031583547592163,
        5.329155445098877
      ],
      "label": 1,
      "category": "banana",
      "sprite_path": "static/dump/umap/static/train/banana/Image_81.jpeg"
    },
    {
      "embedding": [
        3.1450142860412598,
        5.756709098815918
      ],
      "label": 1,
      "category": "banana",
      "sprite_path": "static/dump/umap/static/train/banana/Image_84.jpg"
    },
    {
      "embedding": [
        10.046612739562988,
        1.0445828437805176
      ],
      "label": 1,
      "category": "banana",
      "sprite_path": "static/dump/umap/static/train/banana/Image_85.jpg"
    },
    {
      "embedding": [
        12.813132286071777,
        2.5969741344451904
      ],
      "label": 1,
      "category": "banana",
      "sprite_path": "static/dump/umap/static/train/banana/Image_88.png"
    },
    {
      "embedding": [
        0.738820493221283,
        5.073353290557861
      ],
      "label": 1,
      "category": "banana",
      "sprite_path": "static/dump/umap/static/train/banana/Image_64.jpg"
    },
    {
      "embedding": [
        9.213367462158203,
        1.4398120641708374
      ],
      "label": 1,
      "category": "banana",
      "sprite_path": "static/dump/umap/static/train/banana/Image_92.jpg"
    },
    {
      "embedding": [
        9.477059364318848,
        2.447171449661255
      ],
      "label": 1,
      "category": "banana",
      "sprite_path": "static/dump/umap/static/train/banana/Image_27.jpg"
    },
    {
      "embedding": [
        1.3502769470214844,
        5.743849277496338
      ],
      "label": 1,
      "category": "banana",
      "sprite_path": "static/dump/umap/static/train/banana/Image_55.jpg"
    },
    {
      "embedding": [
        1.7537181377410889,
        5.752445220947266
      ],
      "label": 1,
      "category": "banana",
      "sprite_path": "static/dump/umap/static/train/banana/Image_44.jpg"
    },
    {
      "embedding": [
        13.409677505493164,
        1.285899043083191
      ],
      "label": 1,
      "category": "banana",
      "sprite_path": "static/dump/umap/static/train/banana/Image_72.jpg"
    },
    {
      "embedding": [
        2.5343477725982666,
        5.602209568023682
      ],
      "label": 1,
      "category": "banana",
      "sprite_path": "static/dump/umap/static/train/banana/Image_73.jpg"
    },
    {
      "embedding": [
        11.237951278686523,
        3.0128722190856934
      ],
      "label": 1,
      "category": "banana",
      "sprite_path": "static/dump/umap/static/train/banana/Image_96.jpg"
    },
    {
      "embedding": [
        2.405552387237549,
        6.1264166831970215
      ],
      "label": 1,
      "category": "banana",
      "sprite_path": "static/dump/umap/static/train/banana/Image_52.jpg"
    },
    {
      "embedding": [
        3.337604522705078,
        5.474809646606445
      ],
      "label": 1,
      "category": "banana",
      "sprite_path": "static/dump/umap/static/train/banana/Image_90.jpg"
    },
    {
      "embedding": [
        8.124635696411133,
        0.6296648383140564
      ],
      "label": 1,
      "category": "banana",
      "sprite_path": "static/dump/umap/static/train/banana/Image_82.jpg"
    },
    {
      "embedding": [
        7.394367694854736,
        0.808040201663971
      ],
      "label": 1,
      "category": "banana",
      "sprite_path": "static/dump/umap/static/train/banana/Image_67.jpg"
    },
    {
      "embedding": [
        1.2535300254821777,
        4.516881465911865
      ],
      "label": 1,
      "category": "banana",
      "sprite_path": "static/dump/umap/static/train/banana/Image_50.jpg"
    },
    {
      "embedding": [
        2.9579665660858154,
        5.776070594787598
      ],
      "label": 1,
      "category": "banana",
      "sprite_path": "static/dump/umap/static/train/banana/Image_51.jpeg"
    },
    {
      "embedding": [
        2.836402177810669,
        5.734602451324463
      ],
      "label": 1,
      "category": "banana",
      "sprite_path": "static/dump/umap/static/train/banana/Image_58.png"
    },
    {
      "embedding": [
        13.264573097229004,
        2.050233840942383
      ],
      "label": 1,
      "category": "banana",
      "sprite_path": "static/dump/umap/static/train/banana/Image_97.jpg"
    },
    {
      "embedding": [
        2.3979554176330566,
        6.132845878601074
      ],
      "label": 1,
      "category": "banana",
      "sprite_path": "static/dump/umap/static/train/banana/Image_62.jpg"
    },
    {
      "embedding": [
        2.4004833698272705,
        6.135147571563721
      ],
      "label": 1,
      "category": "banana",
      "sprite_path": "static/dump/umap/static/train/banana/Image_5.jpg"
    },
    {
      "embedding": [
        2.4347641468048096,
        6.151455402374268
      ],
      "label": 1,
      "category": "banana",
      "sprite_path": "static/dump/umap/static/train/banana/Image_100.jpg"
    },
    {
      "embedding": [
        2.8029983043670654,
        5.745540142059326
      ],
      "label": 1,
      "category": "banana",
      "sprite_path": "static/dump/umap/static/train/banana/Image_15.jpg"
    },
    {
      "embedding": [
        8.03795051574707,
        2.6656296253204346
      ],
      "label": 1,
      "category": "banana",
      "sprite_path": "static/dump/umap/static/train/banana/Image_61.png"
    },
    {
      "embedding": [
        13.385660171508789,
        1.3177597522735596
      ],
      "label": 1,
      "category": "banana",
      "sprite_path": "static/dump/umap/static/train/banana/Image_14.jpg"
    },
    {
      "embedding": [
        1.387258529663086,
        5.5514655113220215
      ],
      "label": 1,
      "category": "banana",
      "sprite_path": "static/dump/umap/static/train/banana/Image_76.jpg"
    },
    {
      "embedding": [
        7.031069755554199,
        3.425619125366211
      ],
      "label": 1,
      "category": "banana",
      "sprite_path": "static/dump/umap/static/train/banana/Image_63.jpg"
    },
    {
      "embedding": [
        2.6303460597991943,
        5.45672082901001
      ],
      "label": 1,
      "category": "banana",
      "sprite_path": "static/dump/umap/static/train/banana/Image_83.png"
    },
    {
      "embedding": [
        12.89682388305664,
        2.667463779449463
      ],
      "label": 1,
      "category": "banana",
      "sprite_path": "static/dump/umap/static/train/banana/Image_75.jpg"
    },
    {
      "embedding": [
        1.4073877334594727,
        5.11380672454834
      ],
      "label": 1,
      "category": "banana",
      "sprite_path": "static/dump/umap/static/train/banana/Image_24.jpg"
    },
    {
      "embedding": [
        6.938725471496582,
        3.2090330123901367
      ],
      "label": 1,
      "category": "banana",
      "sprite_path": "static/dump/umap/static/train/banana/Image_32.jpg"
    },
    {
      "embedding": [
        10.2437162399292,
        1.663487434387207
      ],
      "label": 1,
      "category": "banana",
      "sprite_path": "static/dump/umap/static/train/banana/Image_80.png"
    },
    {
      "embedding": [
        12.873855590820312,
        2.871138572692871
      ],
      "label": 1,
      "category": "banana",
      "sprite_path": "static/dump/umap/static/train/banana/Image_65.png"
    },
    {
      "embedding": [
        12.829498291015625,
        2.8245556354522705
      ],
      "label": 1,
      "category": "banana",
      "sprite_path": "static/dump/umap/static/train/banana/Image_37.jpg"
    },
    {
      "embedding": [
        9.255532264709473,
        1.71993887424469
      ],
      "label": 1,
      "category": "banana",
      "sprite_path": "static/dump/umap/static/train/banana/Image_28.jpg"
    },
    {
      "embedding": [
        1.6683728694915771,
        5.953117370605469
      ],
      "label": 1,
      "category": "banana",
      "sprite_path": "static/dump/umap/static/train/banana/Image_54.jpg"
    },
    {
      "embedding": [
        1.4511908292770386,
        5.735291481018066
      ],
      "label": 1,
      "category": "banana",
      "sprite_path": "static/dump/umap/static/train/banana/Image_93.jpg"
    },
    {
      "embedding": [
        1.7110230922698975,
        5.521800518035889
      ],
      "label": 1,
      "category": "banana",
      "sprite_path": "static/dump/umap/static/train/banana/Image_42.jpg"
    },
    {
      "embedding": [
        2.65366792678833,
        5.635677814483643
      ],
      "label": 1,
      "category": "banana",
      "sprite_path": "static/dump/umap/static/train/banana/Image_31.jpg"
    },
    {
      "embedding": [
        11.734619140625,
        1.574143648147583
      ],
      "label": 1,
      "category": "banana",
      "sprite_path": "static/dump/umap/static/train/banana/Image_3.jpg"
    },
    {
      "embedding": [
        1.3599058389663696,
        5.8313164710998535
      ],
      "label": 1,
      "category": "banana",
      "sprite_path": "static/dump/umap/static/train/banana/Image_66.jpg"
    },
    {
      "embedding": [
        8.320501327514648,
        0.2587375044822693
      ],
      "label": 1,
      "category": "banana",
      "sprite_path": "static/dump/umap/static/train/banana/Image_11.png"
    },
    {
      "embedding": [
        12.502181053161621,
        0.8848655819892883
      ],
      "label": 1,
      "category": "banana",
      "sprite_path": "static/dump/umap/static/train/sweetpotato/Image_16.jpg"
    },
    {
      "embedding": [
        8.88763427734375,
        2.2024762630462646
      ],
      "label": 32,
      "category": "pear",
      "sprite_path": "static/dump/umap/static/train/sweetpotato/Image_57.jpg"
    },
    {
      "embedding": [
        8.364654541015625,
        0.036751341074705124
      ],
      "label": 32,
      "category": "pear",
      "sprite_path": "static/dump/umap/static/train/sweetpotato/Image_12.jpg"
    },
    {
      "embedding": [
        8.449584007263184,
        0.008106534369289875
      ],
      "label": 32,
      "category": "pear",
      "sprite_path": "static/dump/umap/static/train/sweetpotato/Image_94.jpg"
    },
    {
      "embedding": [
        2.1002631187438965,
        5.339147090911865
      ],
      "label": 32,
      "category": "pear",
      "sprite_path": "static/dump/umap/static/train/sweetpotato/Image_40.jpg"
    },
    {
      "embedding": [
        1.861556887626648,
        4.576339244842529
      ],
      "label": 32,
      "category": "pear",
      "sprite_path": "static/dump/umap/static/train/sweetpotato/Image_10.jpg"
    },
    {
      "embedding": [
        6.051462173461914,
        3.1030304431915283
      ],
      "label": 32,
      "category": "pear",
      "sprite_path": "static/dump/umap/static/train/sweetpotato/Image_21.jpg"
    },
    {
      "embedding": [
        12.63289737701416,
        2.403916358947754
      ],
      "label": 32,
      "category": "pear",
      "sprite_path": "static/dump/umap/static/train/sweetpotato/Image_78.jpg"
    },
    {
      "embedding": [
        6.462453365325928,
        2.0901811122894287
      ],
      "label": 32,
      "category": "pear",
      "sprite_path": "static/dump/umap/static/train/sweetpotato/Image_4.jpg"
    },
    {
      "embedding": [
        12.585714340209961,
        2.0963406562805176
      ],
      "label": 32,
      "category": "pear",
      "sprite_path": "static/dump/umap/static/train/sweetpotato/Image_38.jpg"
    },
    {
      "embedding": [
        8.471461296081543,
        0.500670313835144
      ],
      "label": 32,
      "category": "pear",
      "sprite_path": "static/dump/umap/static/train/sweetpotato/Image_41.jpg"
    },
    {
      "embedding": [
        8.689085960388184,
        -0.10609295219182968
      ],
      "label": 32,
      "category": "pear",
      "sprite_path": "static/dump/umap/static/train/sweetpotato/Image_69.jpg"
    },
    {
      "embedding": [
        6.684469223022461,
        3.1406943798065186
      ],
      "label": 32,
      "category": "pear",
      "sprite_path": "static/dump/umap/static/train/sweetpotato/Image_60.jpg"
    },
    {
      "embedding": [
        7.2074480056762695,
        2.3089170455932617
      ],
      "label": 32,
      "category": "pear",
      "sprite_path": "static/dump/umap/static/train/sweetpotato/Image_13.jpg"
    },
    {
      "embedding": [
        6.637607574462891,
        2.966153621673584
      ],
      "label": 32,
      "category": "pear",
      "sprite_path": "static/dump/umap/static/train/sweetpotato/Image_95.jpg"
    },
    {
      "embedding": [
        6.654285430908203,
        3.00297474861145
      ],
      "label": 32,
      "category": "pear",
      "sprite_path": "static/dump/umap/static/train/sweetpotato/Image_86.jpg"
    },
    {
      "embedding": [
        6.093450546264648,
        2.5581376552581787
      ],
      "label": 32,
      "category": "pear",
      "sprite_path": "static/dump/umap/static/train/sweetpotato/Image_68.jpg"
    },
    {
      "embedding": [
        12.48811149597168,
        2.418614387512207
      ],
      "label": 32,
      "category": "pear",
      "sprite_path": "static/dump/umap/static/train/sweetpotato/Image_23.jpg"
    },
    {
      "embedding": [
        8.374523162841797,
        -0.039800893515348434
      ],
      "label": 32,
      "category": "pear",
      "sprite_path": "static/dump/umap/static/train/sweetpotato/Image_8.jpg"
    },
    {
      "embedding": [
        6.317269802093506,
        3.143477439880371
      ],
      "label": 32,
      "category": "pear",
      "sprite_path": "static/dump/umap/static/train/sweetpotato/Image_22.jpg"
    },
    {
      "embedding": [
        8.921578407287598,
        0.49489134550094604
      ],
      "label": 32,
      "category": "pear",
      "sprite_path": "static/dump/umap/static/train/sweetpotato/Image_77.jpg"
    },
    {
      "embedding": [
        9.610998153686523,
        1.060733437538147
      ],
      "label": 32,
      "category": "pear",
      "sprite_path": "static/dump/umap/static/train/sweetpotato/Image_25.jpg"
    },
    {
      "embedding": [
        3.6969316005706787,
        4.873922348022461
      ],
      "label": 32,
      "category": "pear",
      "sprite_path": "static/dump/umap/static/train/sweetpotato/Image_9.jpg"
    },
    {
      "embedding": [
        7.45367431640625,
        2.7616803646087646
      ],
      "label": 32,
      "category": "pear",
      "sprite_path": "static/dump/umap/static/train/sweetpotato/Image_71.jpg"
    },
    {
      "embedding": [
        8.784463882446289,
        0.41002488136291504
      ],
      "label": 32,
      "category": "pear",
      "sprite_path": "static/dump/umap/static/train/sweetpotato/Image_34.jpg"
    },
    {
      "embedding": [
        5.9243316650390625,
        3.2707178592681885
      ],
      "label": 32,
      "category": "pear",
      "sprite_path": "static/dump/umap/static/train/sweetpotato/Image_81.jpg"
    },
    {
      "embedding": [
        7.62781286239624,
        1.2339311838150024
      ],
      "label": 32,
      "category": "pear",
      "sprite_path": "static/dump/umap/static/train/sweetpotato/Image_98.jpg"
    },
    {
      "embedding": [
        10.151065826416016,
        0.21074670553207397
      ],
      "label": 32,
      "category": "pear",
      "sprite_path": "static/dump/umap/static/train/sweetpotato/Image_19.jpg"
    },
    {
      "embedding": [
        9.923820495605469,
        0.7813304662704468
      ],
      "label": 32,
      "category": "pear",
      "sprite_path": "static/dump/umap/static/train/sweetpotato/Image_88.jpg"
    },
    {
      "embedding": [
        7.862173557281494,
        0.9814710021018982
      ],
      "label": 32,
      "category": "pear",
      "sprite_path": "static/dump/umap/static/train/sweetpotato/Image_29.jpg"
    },
    {
      "embedding": [
        6.763095378875732,
        3.1429102420806885
      ],
      "label": 32,
      "category": "pear",
      "sprite_path": "static/dump/umap/static/train/sweetpotato/Image_84.jpg"
    },
    {
      "embedding": [
        2.5994479656219482,
        5.022014617919922
      ],
      "label": 32,
      "category": "pear",
      "sprite_path": "static/dump/umap/static/train/sweetpotato/Image_85.jpg"
    },
    {
      "embedding": [
        2.15464186668396,
        4.413779258728027
      ],
      "label": 32,
      "category": "pear",
      "sprite_path": "static/dump/umap/static/train/sweetpotato/Image_53.jpg"
    },
    {
      "embedding": [
        12.554466247558594,
        2.078031301498413
      ],
      "label": 32,
      "category": "pear",
      "sprite_path": "static/dump/umap/static/train/sweetpotato/Image_64.jpg"
    },
    {
      "embedding": [
        9.018458366394043,
        0.12288132309913635
      ],
      "label": 32,
      "category": "pear",
      "sprite_path": "static/dump/umap/static/train/sweetpotato/Image_92.jpg"
    },
    {
      "embedding": [
        6.412114143371582,
        3.2193429470062256
      ],
      "label": 32,
      "category": "pear",
      "sprite_path": "static/dump/umap/static/train/sweetpotato/Image_55.jpg"
    },
    {
      "embedding": [
        2.7543792724609375,
        5.146585464477539
      ],
      "label": 32,
      "category": "pear",
      "sprite_path": "static/dump/umap/static/train/sweetpotato/Image_73.jpg"
    },
    {
      "embedding": [
        6.600869178771973,
        2.383634090423584
      ],
      "label": 32,
      "category": "pear",
      "sprite_path": "static/dump/umap/static/train/sweetpotato/Image_90.jpg"
    },
    {
      "embedding": [
        8.656702995300293,
        3.6210293769836426
      ],
      "label": 32,
      "category": "pear",
      "sprite_path": "static/dump/umap/static/train/sweetpotato/Image_11.jpg"
    },
    {
      "embedding": [
        4.782077312469482,
        4.582741737365723
      ],
      "label": 32,
      "category": "pear",
      "sprite_path": "static/dump/umap/static/train/sweetpotato/Image_80.jpg"
    },
    {
      "embedding": [
        9.338558197021484,
        2.587095022201538
      ],
      "label": 32,
      "category": "pear",
      "sprite_path": "static/dump/umap/static/train/sweetpotato/Image_67.jpg"
    },
    {
      "embedding": [
        5.922877311706543,
        3.184607982635498
      ],
      "label": 32,
      "category": "pear",
      "sprite_path": "static/dump/umap/static/train/sweetpotato/Image_50.jpg"
    },
    {
      "embedding": [
        8.451127052307129,
        0.9845722317695618
      ],
      "label": 32,
      "category": "pear",
      "sprite_path": "static/dump/umap/static/train/sweetpotato/Image_58.jpg"
    },
    {
      "embedding": [
        8.444951057434082,
        0.8357977867126465
      ],
      "label": 32,
      "category": "pear",
      "sprite_path": "static/dump/umap/static/train/sweetpotato/Image_97.jpg"
    },
    {
      "embedding": [
        6.4292097091674805,
        3.3362627029418945
      ],
      "label": 32,
      "category": "pear",
      "sprite_path": "static/dump/umap/static/train/sweetpotato/Image_62.jpg"
    },
    {
      "embedding": [
        3.039283275604248,
        4.925619125366211
      ],
      "label": 32,
      "category": "pear",
      "sprite_path": "static/dump/umap/static/train/sweetpotato/Image_30.jpg"
    },
    {
      "embedding": [
        5.214362144470215,
        3.5697426795959473
      ],
      "label": 32,
      "category": "pear",
      "sprite_path": "static/dump/umap/static/train/sweetpotato/Image_5.jpg"
    },
    {
      "embedding": [
        3.3875997066497803,
        4.457362174987793
      ],
      "label": 32,
      "category": "pear",
      "sprite_path": "static/dump/umap/static/train/sweetpotato/Image_100.jpg"
    },
    {
      "embedding": [
        12.554510116577148,
        2.0199227333068848
      ],
      "label": 32,
      "category": "pear",
      "sprite_path": "static/dump/umap/static/train/sweetpotato/Image_70.jpg"
    },
    {
      "embedding": [
        9.054841995239258,
        0.9092587828636169
      ],
      "label": 32,
      "category": "pear",
      "sprite_path": "static/dump/umap/static/train/sweetpotato/Image_15.jpg"
    },
    {
      "embedding": [
        8.997772216796875,
        0.9642856121063232
      ],
      "label": 32,
      "category": "pear",
      "sprite_path": "static/dump/umap/static/train/sweetpotato/Image_35.jpg"
    },
    {
      "embedding": [
        1.3976472616195679,
        4.659487724304199
      ],
      "label": 32,
      "category": "pear",
      "sprite_path": "static/dump/umap/static/train/sweetpotato/Image_14.jpg"
    },
    {
      "embedding": [
        2.8036890029907227,
        5.397487640380859
      ],
      "label": 32,
      "category": "pear",
      "sprite_path": "static/dump/umap/static/train/sweetpotato/Image_39.jpg"
    },
    {
      "embedding": [
        12.423826217651367,
        1.2438157796859741
      ],
      "label": 32,
      "category": "pear",
      "sprite_path": "static/dump/umap/static/train/sweetpotato/Image_76.jpg"
    },
    {
      "embedding": [
        9.159067153930664,
        0.7925960421562195
      ],
      "label": 32,
      "category": "pear",
      "sprite_path": "static/dump/umap/static/train/sweetpotato/Image_63.jpg"
    },
    {
      "embedding": [
        7.658196449279785,
        2.728642702102661
      ],
      "label": 32,
      "category": "pear",
      "sprite_path": "static/dump/umap/static/train/sweetpotato/Image_99.jpg"
    },
    {
      "embedding": [
        10.604286193847656,
        0.9635106921195984
      ],
      "label": 32,
      "category": "pear",
      "sprite_path": "static/dump/umap/static/train/sweetpotato/Image_32.jpg"
    },
    {
      "embedding": [
        8.359786033630371,
        0.8722228407859802
      ],
      "label": 32,
      "category": "pear",
      "sprite_path": "static/dump/umap/static/train/sweetpotato/Image_37.jpg"
    },
    {
      "embedding": [
        7.132339000701904,
        2.409176826477051
      ],
      "label": 32,
      "category": "pear",
      "sprite_path": "static/dump/umap/static/train/sweetpotato/Image_28.jpg"
    },
    {
      "embedding": [
        7.524590015411377,
        3.040095090866089
      ],
      "label": 32,
      "category": "pear",
      "sprite_path": "static/dump/umap/static/train/sweetpotato/Image_54.jpg"
    },
    {
      "embedding": [
        12.383946418762207,
        1.416783332824707
      ],
      "label": 32,
      "category": "pear",
      "sprite_path": "static/dump/umap/static/train/sweetpotato/Image_93.jpg"
    },
    {
      "embedding": [
        3.390631914138794,
        4.765294075012207
      ],
      "label": 32,
      "category": "pear",
      "sprite_path": "static/dump/umap/static/train/sweetpotato/Image_36.jpg"
    },
    {
      "embedding": [
        8.949261665344238,
        0.15412577986717224
      ],
      "label": 32,
      "category": "pear",
      "sprite_path": "static/dump/umap/static/train/sweetpotato/Image_42.jpg"
    },
    {
      "embedding": [
        8.709056854248047,
        2.1922688484191895
      ],
      "label": 32,
      "category": "pear",
      "sprite_path": "static/dump/umap/static/train/sweetpotato/Image_2.jpg"
    },
    {
      "embedding": [
        10.114659309387207,
        0.2534871995449066
      ],
      "label": 32,
      "category": "pear",
      "sprite_path": "static/dump/umap/static/train/sweetpotato/Image_3.jpg"
    },
    {
      "embedding": [
        10.615245819091797,
        0.9506975412368774
      ],
      "label": 32,
      "category": "pear",
      "sprite_path": "static/dump/umap/static/train/sweetpotato/Image_66.jpg"
    },
    {
      "embedding": [
        6.872193336486816,
        3.3869476318359375
      ],
      "label": 32,
      "category": "pear",
      "sprite_path": "static/dump/umap/static/train/sweetpotato/Image_87.jpg"
    },
    {
      "embedding": [
        11.51216983795166,
        1.1383076906204224
      ],
      "label": 32,
      "category": "pear",
      "sprite_path": "static/dump/umap/static/train/sweetpotato/Image_43.jpg"
    },
    {
      "embedding": [
        7.38065242767334,
        2.3053839206695557
      ],
      "label": 32,
      "category": "pear",
      "sprite_path": "static/dump/umap/static/train/sweetpotato/Image_18.jpg"
    },
    {
      "embedding": [
        3.112576484680176,
        5.11337423324585
      ],
      "label": 32,
      "category": "pear",
      "sprite_path": "static/dump/umap/static/train/sweetcorn/Image_89.jpg"
    },
    {
      "embedding": [
        9.148100852966309,
        2.686324119567871
      ],
      "label": 31,
      "category": "turnip",
      "sprite_path": "static/dump/umap/static/train/sweetcorn/Image_65.jpg"
    },
    {
      "embedding": [
        10.910550117492676,
        1.6891611814498901
      ],
      "label": 31,
      "category": "turnip",
      "sprite_path": "static/dump/umap/static/train/sweetcorn/Image_1.jpg"
    },
    {
      "embedding": [
        3.1546473503112793,
        5.769689083099365
      ],
      "label": 31,
      "category": "turnip",
      "sprite_path": "static/dump/umap/static/train/sweetcorn/Image_57.jpg"
    },
    {
      "embedding": [
        12.288453102111816,
        1.5361888408660889
      ],
      "label": 31,
      "category": "turnip",
      "sprite_path": "static/dump/umap/static/train/sweetcorn/Image_12.jpg"
    },
    {
      "embedding": [
        7.396373271942139,
        0.8568786978721619
      ],
      "label": 31,
      "category": "turnip",
      "sprite_path": "static/dump/umap/static/train/sweetcorn/Image_33.jpg"
    },
    {
      "embedding": [
        6.685033321380615,
        0.9815616011619568
      ],
      "label": 31,
      "category": "turnip",
      "sprite_path": "static/dump/umap/static/train/sweetcorn/Image_45.jpg"
    },
    {
      "embedding": [
        11.847559928894043,
        2.3204782009124756
      ],
      "label": 31,
      "category": "turnip",
      "sprite_path": "static/dump/umap/static/train/sweetcorn/Image_94.jpg"
    },
    {
      "embedding": [
        8.384119033813477,
        1.7438286542892456
      ],
      "label": 31,
      "category": "turnip",
      "sprite_path": "static/dump/umap/static/train/sweetcorn/Image_40.jpg"
    },
    {
      "embedding": [
        12.056061744689941,
        1.8935658931732178
      ],
      "label": 31,
      "category": "turnip",
      "sprite_path": "static/dump/umap/static/train/sweetcorn/Image_10.jpg"
    },
    {
      "embedding": [
        8.973072052001953,
        1.545507550239563
      ],
      "label": 31,
      "category": "turnip",
      "sprite_path": "static/dump/umap/static/train/sweetcorn/Image_21.jpg"
    },
    {
      "embedding": [
        7.677276134490967,
        1.14722740650177
      ],
      "label": 31,
      "category": "turnip",
      "sprite_path": "static/dump/umap/static/train/sweetcorn/Image_78.jpg"
    },
    {
      "embedding": [
        7.088689804077148,
        1.1924805641174316
      ],
      "label": 31,
      "category": "turnip",
      "sprite_path": "static/dump/umap/static/train/sweetcorn/Image_59.jpg"
    },
    {
      "embedding": [
        1.8328032493591309,
        4.85212516784668
      ],
      "label": 31,
      "category": "turnip",
      "sprite_path": "static/dump/umap/static/train/sweetcorn/Image_4.jpg"
    },
    {
      "embedding": [
        7.758871555328369,
        0.9863623380661011
      ],
      "label": 31,
      "category": "turnip",
      "sprite_path": "static/dump/umap/static/train/sweetcorn/Image_38.jpg"
    },
    {
      "embedding": [
        9.408207893371582,
        1.5450921058654785
      ],
      "label": 31,
      "category": "turnip",
      "sprite_path": "static/dump/umap/static/train/sweetcorn/Image_41.jpg"
    },
    {
      "embedding": [
        6.528411865234375,
        1.8780657052993774
      ],
      "label": 31,
      "category": "turnip",
      "sprite_path": "static/dump/umap/static/train/sweetcorn/Image_7.jpg"
    },
    {
      "embedding": [
        6.39713716506958,
        1.8047997951507568
      ],
      "label": 31,
      "category": "turnip",
      "sprite_path": "static/dump/umap/static/train/sweetcorn/Image_69.jpg"
    },
    {
      "embedding": [
        12.628957748413086,
        1.5170576572418213
      ],
      "label": 31,
      "category": "turnip",
      "sprite_path": "static/dump/umap/static/train/sweetcorn/Image_48.jpg"
    },
    {
      "embedding": [
        6.950979232788086,
        1.8414682149887085
      ],
      "label": 31,
      "category": "turnip",
      "sprite_path": "static/dump/umap/static/train/sweetcorn/Image_60.jpg"
    },
    {
      "embedding": [
        7.863150596618652,
        1.2141891717910767
      ],
      "label": 31,
      "category": "turnip",
      "sprite_path": "static/dump/umap/static/train/sweetcorn/Image_13.jpg"
    },
    {
      "embedding": [
        1.6274077892303467,
        4.617191791534424
      ],
      "label": 31,
      "category": "turnip",
      "sprite_path": "static/dump/umap/static/train/sweetcorn/Image_95.jpg"
    },
    {
      "embedding": [
        7.970905303955078,
        0.8809003233909607
      ],
      "label": 31,
      "category": "turnip",
      "sprite_path": "static/dump/umap/static/train/sweetcorn/Image_23.jpg"
    },
    {
      "embedding": [
        7.878333568572998,
        0.8870187997817993
      ],
      "label": 31,
      "category": "turnip",
      "sprite_path": "static/dump/umap/static/train/sweetcorn/Image_8.jpg"
    },
    {
      "embedding": [
        6.849057197570801,
        0.7751299738883972
      ],
      "label": 31,
      "category": "turnip",
      "sprite_path": "static/dump/umap/static/train/sweetcorn/Image_22.jpg"
    },
    {
      "embedding": [
        12.730191230773926,
        2.5822250843048096
      ],
      "label": 31,
      "category": "turnip",
      "sprite_path": "static/dump/umap/static/train/sweetcorn/Image_79.jpg"
    },
    {
      "embedding": [
        10.361727714538574,
        1.2863177061080933
      ],
      "label": 31,
      "category": "turnip",
      "sprite_path": "static/dump/umap/static/train/sweetcorn/Image_17.jpg"
    },
    {
      "embedding": [
        2.7148966789245605,
        5.470496654510498
      ],
      "label": 31,
      "category": "turnip",
      "sprite_path": "static/dump/umap/static/train/sweetcorn/Image_77.jpg"
    },
    {
      "embedding": [
        7.0236711502075195,
        0.9487074017524719
      ],
      "label": 31,
      "category": "turnip",
      "sprite_path": "static/dump/umap/static/train/sweetcorn/Image_25.jpg"
    },
    {
      "embedding": [
        10.608358383178711,
        2.650925397872925
      ],
      "label": 31,
      "category": "turnip",
      "sprite_path": "static/dump/umap/static/train/sweetcorn/Image_46.jpg"
    },
    {
      "embedding": [
        7.347084999084473,
        0.8469004034996033
      ],
      "label": 31,
      "category": "turnip",
      "sprite_path": "static/dump/umap/static/train/sweetcorn/Image_9.jpg"
    },
    {
      "embedding": [
        3.1215660572052,
        5.809775352478027
      ],
      "label": 31,
      "category": "turnip",
      "sprite_path": "static/dump/umap/static/train/sweetcorn/Image_71.jpg"
    },
    {
      "embedding": [
        7.161835193634033,
        1.0225602388381958
      ],
      "label": 31,
      "category": "turnip",
      "sprite_path": "static/dump/umap/static/train/sweetcorn/Image_34.jpg"
    },
    {
      "embedding": [
        11.724041938781738,
        1.0753034353256226
      ],
      "label": 31,
      "category": "turnip",
      "sprite_path": "static/dump/umap/static/train/sweetcorn/Image_6.jpg"
    },
    {
      "embedding": [
        1.4975587129592896,
        4.735479831695557
      ],
      "label": 31,
      "category": "turnip",
      "sprite_path": "static/dump/umap/static/train/sweetcorn/Image_20.jpg"
    },
    {
      "embedding": [
        10.181209564208984,
        1.8971675634384155
      ],
      "label": 31,
      "category": "turnip",
      "sprite_path": "static/dump/umap/static/train/sweetcorn/Image_98.jpg"
    },
    {
      "embedding": [
        7.861447334289551,
        0.9013696312904358
      ],
      "label": 31,
      "category": "turnip",
      "sprite_path": "static/dump/umap/static/train/sweetcorn/Image_47.jpg"
    },
    {
      "embedding": [
        7.253320217132568,
        1.1809909343719482
      ],
      "label": 31,
      "category": "turnip",
      "sprite_path": "static/dump/umap/static/train/sweetcorn/Image_19.jpg"
    },
    {
      "embedding": [
        7.895999431610107,
        0.9384538531303406
      ],
      "label": 31,
      "category": "turnip",
      "sprite_path": "static/dump/umap/static/train/sweetcorn/Image_88.jpg"
    },
    {
      "embedding": [
        8.80057430267334,
        0.7368957996368408
      ],
      "label": 31,
      "category": "turnip",
      "sprite_path": "static/dump/umap/static/train/sweetcorn/Image_29.jpg"
    },
    {
      "embedding": [
        8.048163414001465,
        0.8075108528137207
      ],
      "label": 31,
      "category": "turnip",
      "sprite_path": "static/dump/umap/static/train/sweetcorn/Image_61.jpg"
    },
    {
      "embedding": [
        12.848956108093262,
        1.514487862586975
      ],
      "label": 31,
      "category": "turnip",
      "sprite_path": "static/dump/umap/static/train/sweetcorn/Image_84.jpg"
    },
    {
      "embedding": [
        8.132307052612305,
        1.2249867916107178
      ],
      "label": 31,
      "category": "turnip",
      "sprite_path": "static/dump/umap/static/train/sweetcorn/Image_85.jpg"
    },
    {
      "embedding": [
        8.042325019836426,
        0.8015699982643127
      ],
      "label": 31,
      "category": "turnip",
      "sprite_path": "static/dump/umap/static/train/sweetcorn/Image_74.jpg"
    },
    {
      "embedding": [
        12.383347511291504,
        2.6775641441345215
      ],
      "label": 31,
      "category": "turnip",
      "sprite_path": "static/dump/umap/static/train/sweetcorn/Image_56.png"
    },
    {
      "embedding": [
        9.525424003601074,
        0.904038667678833
      ],
      "label": 31,
      "category": "turnip",
      "sprite_path": "static/dump/umap/static/train/sweetcorn/Image_53.jpg"
    },
    {
      "embedding": [
        1.185204267501831,
        4.45919132232666
      ],
      "label": 31,
      "category": "turnip",
      "sprite_path": "static/dump/umap/static/train/sweetcorn/Image_27.jpg"
    },
    {
      "embedding": [
        11.295945167541504,
        2.8290276527404785
      ],
      "label": 31,
      "category": "turnip",
      "sprite_path": "static/dump/umap/static/train/sweetcorn/Image_44.jpg"
    },
    {
      "embedding": [
        13.345434188842773,
        2.113590717315674
      ],
      "label": 31,
      "category": "turnip",
      "sprite_path": "static/dump/umap/static/train/sweetcorn/Image_72.jpg"
    },
    {
      "embedding": [
        7.035093307495117,
        2.0235602855682373
      ],
      "label": 31,
      "category": "turnip",
      "sprite_path": "static/dump/umap/static/train/sweetcorn/Image_75.png"
    },
    {
      "embedding": [
        8.13815975189209,
        1.2002350091934204
      ],
      "label": 31,
      "category": "turnip",
      "sprite_path": "static/dump/umap/static/train/sweetcorn/Image_96.jpg"
    },
    {
      "embedding": [
        7.641646385192871,
        0.6851329803466797
      ],
      "label": 31,
      "category": "turnip",
      "sprite_path": "static/dump/umap/static/train/sweetcorn/Image_52.jpg"
    },
    {
      "embedding": [
        8.924934387207031,
        1.645481824874878
      ],
      "label": 31,
      "category": "turnip",
      "sprite_path": "static/dump/umap/static/train/sweetcorn/Image_90.jpg"
    },
    {
      "embedding": [
        12.07446575164795,
        2.4799013137817383
      ],
      "label": 31,
      "category": "turnip",
      "sprite_path": "static/dump/umap/static/train/sweetcorn/Image_30.png"
    },
    {
      "embedding": [
        7.760343551635742,
        1.0254912376403809
      ],
      "label": 31,
      "category": "turnip",
      "sprite_path": "static/dump/umap/static/train/sweetcorn/Image_83.jpg"
    },
    {
      "embedding": [
        7.114261627197266,
        1.4566400051116943
      ],
      "label": 31,
      "category": "turnip",
      "sprite_path": "static/dump/umap/static/train/sweetcorn/Image_11.jpg"
    },
    {
      "embedding": [
        6.761966228485107,
        0.9765005707740784
      ],
      "label": 31,
      "category": "turnip",
      "sprite_path": "static/dump/umap/static/train/sweetcorn/Image_80.jpg"
    },
    {
      "embedding": [
        12.937908172607422,
        1.9826767444610596
      ],
      "label": 31,
      "category": "turnip",
      "sprite_path": "static/dump/umap/static/train/sweetcorn/Image_67.jpg"
    },
    {
      "embedding": [
        12.4190673828125,
        1.6594988107681274
      ],
      "label": 31,
      "category": "turnip",
      "sprite_path": "static/dump/umap/static/train/sweetcorn/Image_50.jpg"
    },
    {
      "embedding": [
        7.50401496887207,
        0.8028295040130615
      ],
      "label": 31,
      "category": "turnip",
      "sprite_path": "static/dump/umap/static/train/sweetcorn/Image_58.jpg"
    },
    {
      "embedding": [
        12.69809341430664,
        2.520972490310669
      ],
      "label": 31,
      "category": "turnip",
      "sprite_path": "static/dump/umap/static/train/sweetcorn/Image_97.jpg"
    },
    {
      "embedding": [
        8.057580947875977,
        0.6292520761489868
      ],
      "label": 31,
      "category": "turnip",
      "sprite_path": "static/dump/umap/static/train/sweetcorn/Image_55.png"
    },
    {
      "embedding": [
        7.920629501342773,
        0.7940122485160828
      ],
      "label": 31,
      "category": "turnip",
      "sprite_path": "static/dump/umap/static/train/sweetcorn/Image_62.jpg"
    },
    {
      "embedding": [
        6.682565212249756,
        0.8304274082183838
      ],
      "label": 31,
      "category": "turnip",
      "sprite_path": "static/dump/umap/static/train/sweetcorn/Image_5.jpg"
    },
    {
      "embedding": [
        9.477774620056152,
        1.6160866022109985
      ],
      "label": 31,
      "category": "turnip",
      "sprite_path": "static/dump/umap/static/train/sweetcorn/Image_100.jpg"
    },
    {
      "embedding": [
        9.742487907409668,
        1.6022387742996216
      ],
      "label": 31,
      "category": "turnip",
      "sprite_path": "static/dump/umap/static/train/sweetcorn/Image_70.jpg"
    },
    {
      "embedding": [
        8.38052749633789,
        1.7926386594772339
      ],
      "label": 31,
      "category": "turnip",
      "sprite_path": "static/dump/umap/static/train/sweetcorn/Image_35.jpg"
    },
    {
      "embedding": [
        9.406828880310059,
        1.6146132946014404
      ],
      "label": 31,
      "category": "turnip",
      "sprite_path": "static/dump/umap/static/train/sweetcorn/Image_14.jpg"
    },
    {
      "embedding": [
        12.705998420715332,
        2.601638078689575
      ],
      "label": 31,
      "category": "turnip",
      "sprite_path": "static/dump/umap/static/train/sweetcorn/Image_39.jpg"
    },
    {
      "embedding": [
        2.920391321182251,
        5.377716064453125
      ],
      "label": 31,
      "category": "turnip",
      "sprite_path": "static/dump/umap/static/train/sweetcorn/Image_76.jpg"
    },
    {
      "embedding": [
        7.672327518463135,
        1.0298383235931396
      ],
      "label": 31,
      "category": "turnip",
      "sprite_path": "static/dump/umap/static/train/sweetcorn/Image_63.jpg"
    },
    {
      "embedding": [
        12.814916610717773,
        1.8536651134490967
      ],
      "label": 31,
      "category": "turnip",
      "sprite_path": "static/dump/umap/static/train/sweetcorn/Image_24.jpg"
    },
    {
      "embedding": [
        10.46224308013916,
        1.3999863862991333
      ],
      "label": 31,
      "category": "turnip",
      "sprite_path": "static/dump/umap/static/train/sweetcorn/Image_99.jpg"
    },
    {
      "embedding": [
        10.183751106262207,
        1.6712334156036377
      ],
      "label": 31,
      "category": "turnip",
      "sprite_path": "static/dump/umap/static/train/sweetcorn/Image_32.jpg"
    },
    {
      "embedding": [
        7.977077960968018,
        0.8830304741859436
      ],
      "label": 31,
      "category": "turnip",
      "sprite_path": "static/dump/umap/static/train/sweetcorn/Image_37.jpg"
    },
    {
      "embedding": [
        11.139800071716309,
        2.6552376747131348
      ],
      "label": 31,
      "category": "turnip",
      "sprite_path": "static/dump/umap/static/train/sweetcorn/Image_51.jpg"
    },
    {
      "embedding": [
        6.426191806793213,
        1.8174843788146973
      ],
      "label": 31,
      "category": "turnip",
      "sprite_path": "static/dump/umap/static/train/sweetcorn/Image_54.jpg"
    },
    {
      "embedding": [
        12.613930702209473,
        2.5468533039093018
      ],
      "label": 31,
      "category": "turnip",
      "sprite_path": "static/dump/umap/static/train/sweetcorn/Image_93.jpg"
    },
    {
      "embedding": [
        1.8160759210586548,
        4.566829204559326
      ],
      "label": 31,
      "category": "turnip",
      "sprite_path": "static/dump/umap/static/train/sweetcorn/Image_36.jpg"
    },
    {
      "embedding": [
        7.2721405029296875,
        1.760717749595642
      ],
      "label": 31,
      "category": "turnip",
      "sprite_path": "static/dump/umap/static/train/sweetcorn/Image_42.jpg"
    },
    {
      "embedding": [
        9.997745513916016,
        0.5150563716888428
      ],
      "label": 31,
      "category": "turnip",
      "sprite_path": "static/dump/umap/static/train/sweetcorn/Image_31.jpg"
    },
    {
      "embedding": [
        3.0964741706848145,
        5.792680263519287
      ],
      "label": 31,
      "category": "turnip",
      "sprite_path": "static/dump/umap/static/train/sweetcorn/Image_64.png"
    },
    {
      "embedding": [
        1.3094829320907593,
        4.397834777832031
      ],
      "label": 31,
      "category": "turnip",
      "sprite_path": "static/dump/umap/static/train/sweetcorn/Image_2.jpg"
    },
    {
      "embedding": [
        1.4922760725021362,
        5.210652828216553
      ],
      "label": 31,
      "category": "turnip",
      "sprite_path": "static/dump/umap/static/train/sweetcorn/Image_3.jpg"
    },
    {
      "embedding": [
        6.486749172210693,
        1.616798758506775
      ],
      "label": 31,
      "category": "turnip",
      "sprite_path": "static/dump/umap/static/train/sweetcorn/Image_26.jpg"
    },
    {
      "embedding": [
        1.4659931659698486,
        5.782201766967773
      ],
      "label": 31,
      "category": "turnip",
      "sprite_path": "static/dump/umap/static/train/sweetcorn/Image_66.jpg"
    },
    {
      "embedding": [
        8.374637603759766,
        1.725071907043457
      ],
      "label": 31,
      "category": "turnip",
      "sprite_path": "static/dump/umap/static/train/sweetcorn/Image_87.jpg"
    },
    {
      "embedding": [
        7.947852611541748,
        0.9042125344276428
      ],
      "label": 31,
      "category": "turnip",
      "sprite_path": "static/dump/umap/static/train/sweetcorn/Image_43.jpg"
    },
    {
      "embedding": [
        8.551126480102539,
        0.9915638566017151
      ],
      "label": 31,
      "category": "turnip",
      "sprite_path": "static/dump/umap/static/train/carrot/Image_89.jpg"
    },
    {
      "embedding": [
        2.1963536739349365,
        5.273867130279541
      ],
      "label": 31,
      "category": "turnip",
      "sprite_path": "static/dump/umap/static/train/carrot/Image_65.jpg"
    },
    {
      "embedding": [
        8.117684364318848,
        0.73040771484375
      ],
      "label": 31,
      "category": "turnip",
      "sprite_path": "static/dump/umap/static/train/carrot/Image_1.jpg"
    },
    {
      "embedding": [
        6.87174129486084,
        1.6562504768371582
      ],
      "label": 31,
      "category": "turnip",
      "sprite_path": "static/dump/umap/static/train/carrot/Image_17.jpeg"
    },
    {
      "embedding": [
        0.6678940057754517,
        5.34890079498291
      ],
      "label": 6,
      "category": "eggplant",
      "sprite_path": "static/dump/umap/static/train/carrot/Image_57.jpg"
    },
    {
      "embedding": [
        8.685819625854492,
        0.7105110287666321
      ],
      "label": 6,
      "category": "eggplant",
      "sprite_path": "static/dump/umap/static/train/carrot/Image_12.jpg"
    },
    {
      "embedding": [
        12.701786994934082,
        0.921297550201416
      ],
      "label": 6,
      "category": "eggplant",
      "sprite_path": "static/dump/umap/static/train/carrot/Image_56.jpg"
    },
    {
      "embedding": [
        8.469969749450684,
        0.23224835097789764
      ],
      "label": 6,
      "category": "eggplant",
      "sprite_path": "static/dump/umap/static/train/carrot/Image_94.jpg"
    },
    {
      "embedding": [
        8.539665222167969,
        0.3089427947998047
      ],
      "label": 6,
      "category": "eggplant",
      "sprite_path": "static/dump/umap/static/train/carrot/Image_40.jpg"
    },
    {
      "embedding": [
        8.407059669494629,
        0.4353504180908203
      ],
      "label": 6,
      "category": "eggplant",
      "sprite_path": "static/dump/umap/static/train/carrot/Image_78.jpg"
    },
    {
      "embedding": [
        9.36636734008789,
        0.14410929381847382
      ],
      "label": 6,
      "category": "eggplant",
      "sprite_path": "static/dump/umap/static/train/carrot/Image_59.jpg"
    },
    {
      "embedding": [
        12.713225364685059,
        0.9645377993583679
      ],
      "label": 6,
      "category": "eggplant",
      "sprite_path": "static/dump/umap/static/train/carrot/Image_41.jpg"
    },
    {
      "embedding": [
        1.137539267539978,
        5.176629066467285
      ],
      "label": 6,
      "category": "eggplant",
      "sprite_path": "static/dump/umap/static/train/carrot/Image_7.jpg"
    },
    {
      "embedding": [
        1.198228359222412,
        5.608578681945801
      ],
      "label": 6,
      "category": "eggplant",
      "sprite_path": "static/dump/umap/static/train/carrot/Image_69.jpg"
    },
    {
      "embedding": [
        1.9608933925628662,
        4.4002366065979
      ],
      "label": 6,
      "category": "eggplant",
      "sprite_path": "static/dump/umap/static/train/carrot/Image_44.png"
    },
    {
      "embedding": [
        0.9349002242088318,
        4.45260763168335
      ],
      "label": 6,
      "category": "eggplant",
      "sprite_path": "static/dump/umap/static/train/carrot/Image_60.jpg"
    },
    {
      "embedding": [
        1.7922744750976562,
        5.973878383636475
      ],
      "label": 6,
      "category": "eggplant",
      "sprite_path": "static/dump/umap/static/train/carrot/Image_13.jpg"
    },
    {
      "embedding": [
        8.485587120056152,
        0.42867371439933777
      ],
      "label": 6,
      "category": "eggplant",
      "sprite_path": "static/dump/umap/static/train/carrot/Image_49.jpg"
    },
    {
      "embedding": [
        1.0082799196243286,
        4.410578727722168
      ],
      "label": 6,
      "category": "eggplant",
      "sprite_path": "static/dump/umap/static/train/carrot/Image_91.jpg"
    },
    {
      "embedding": [
        0.6266012191772461,
        5.383181095123291
      ],
      "label": 6,
      "category": "eggplant",
      "sprite_path": "static/dump/umap/static/train/carrot/Image_86.jpg"
    },
    {
      "embedding": [
        0.6934479475021362,
        5.278109073638916
      ],
      "label": 6,
      "category": "eggplant",
      "sprite_path": "static/dump/umap/static/train/carrot/Image_14.jpeg"
    },
    {
      "embedding": [
        8.391737937927246,
        0.5349963903427124
      ],
      "label": 6,
      "category": "eggplant",
      "sprite_path": "static/dump/umap/static/train/carrot/Image_23.jpg"
    },
    {
      "embedding": [
        8.185604095458984,
        2.387003183364868
      ],
      "label": 6,
      "category": "eggplant",
      "sprite_path": "static/dump/umap/static/train/carrot/Image_79.jpg"
    },
    {
      "embedding": [
        8.702717781066895,
        0.31829702854156494
      ],
      "label": 6,
      "category": "eggplant",
      "sprite_path": "static/dump/umap/static/train/carrot/Image_77.jpg"
    },
    {
      "embedding": [
        12.883102416992188,
        1.5579484701156616
      ],
      "label": 6,
      "category": "eggplant",
      "sprite_path": "static/dump/umap/static/train/carrot/Image_25.jpg"
    },
    {
      "embedding": [
        11.586654663085938,
        2.242086410522461
      ],
      "label": 6,
      "category": "eggplant",
      "sprite_path": "static/dump/umap/static/train/carrot/Image_46.jpg"
    },
    {
      "embedding": [
        0.7876222729682922,
        5.452307224273682
      ],
      "label": 6,
      "category": "eggplant",
      "sprite_path": "static/dump/umap/static/train/carrot/Image_9.jpg"
    },
    {
      "embedding": [
        12.430673599243164,
        1.7511099576950073
      ],
      "label": 6,
      "category": "eggplant",
      "sprite_path": "static/dump/umap/static/train/carrot/Image_73.jpeg"
    },
    {
      "embedding": [
        0.9603478312492371,
        4.405385971069336
      ],
      "label": 6,
      "category": "eggplant",
      "sprite_path": "static/dump/umap/static/train/carrot/Image_71.jpg"
    },
    {
      "embedding": [
        1.0105564594268799,
        4.384755611419678
      ],
      "label": 6,
      "category": "eggplant",
      "sprite_path": "static/dump/umap/static/train/carrot/Image_34.jpg"
    },
    {
      "embedding": [
        8.210752487182617,
        0.18198898434638977
      ],
      "label": 6,
      "category": "eggplant",
      "sprite_path": "static/dump/umap/static/train/carrot/Image_81.jpg"
    },
    {
      "embedding": [
        8.47627067565918,
        0.6628744602203369
      ],
      "label": 6,
      "category": "eggplant",
      "sprite_path": "static/dump/umap/static/train/carrot/Image_6.jpg"
    },
    {
      "embedding": [
        8.823454856872559,
        3.6087844371795654
      ],
      "label": 6,
      "category": "eggplant",
      "sprite_path": "static/dump/umap/static/train/carrot/Image_20.jpg"
    },
    {
      "embedding": [
        0.8177034854888916,
        4.516570091247559
      ],
      "label": 6,
      "category": "eggplant",
      "sprite_path": "static/dump/umap/static/train/carrot/Image_98.jpg"
    },
    {
      "embedding": [
        8.23459529876709,
        1.0510488748550415
      ],
      "label": 6,
      "category": "eggplant",
      "sprite_path": "static/dump/umap/static/train/carrot/Image_47.jpg"
    },
    {
      "embedding": [
        6.601207256317139,
        2.89884090423584
      ],
      "label": 6,
      "category": "eggplant",
      "sprite_path": "static/dump/umap/static/train/carrot/Image_88.jpg"
    },
    {
      "embedding": [
        6.696526050567627,
        1.910728096961975
      ],
      "label": 6,
      "category": "eggplant",
      "sprite_path": "static/dump/umap/static/train/carrot/Image_29.jpg"
    },
    {
      "embedding": [
        0.7133560180664062,
        5.1523566246032715
      ],
      "label": 6,
      "category": "eggplant",
      "sprite_path": "static/dump/umap/static/train/carrot/Image_61.jpg"
    },
    {
      "embedding": [
        1.260166883468628,
        4.542436599731445
      ],
      "label": 6,
      "category": "eggplant",
      "sprite_path": "static/dump/umap/static/train/carrot/Image_84.jpg"
    },
    {
      "embedding": [
        10.561217308044434,
        1.2492698431015015
      ],
      "label": 6,
      "category": "eggplant",
      "sprite_path": "static/dump/umap/static/train/carrot/Image_85.jpg"
    },
    {
      "embedding": [
        8.5645751953125,
        1.3681535720825195
      ],
      "label": 6,
      "category": "eggplant",
      "sprite_path": "static/dump/umap/static/train/carrot/Image_53.jpg"
    },
    {
      "embedding": [
        0.6090759038925171,
        5.353562355041504
      ],
      "label": 6,
      "category": "eggplant",
      "sprite_path": "static/dump/umap/static/train/carrot/Image_64.jpg"
    },
    {
      "embedding": [
        7.701903820037842,
        1.6095393896102905
      ],
      "label": 6,
      "category": "eggplant",
      "sprite_path": "static/dump/umap/static/train/carrot/Image_27.jpg"
    },
    {
      "embedding": [
        0.9692146182060242,
        4.380866527557373
      ],
      "label": 6,
      "category": "eggplant",
      "sprite_path": "static/dump/umap/static/train/carrot/Image_55.jpg"
    },
    {
      "embedding": [
        8.100407600402832,
        1.4019359350204468
      ],
      "label": 6,
      "category": "eggplant",
      "sprite_path": "static/dump/umap/static/train/carrot/Image_62.png"
    },
    {
      "embedding": [
        0.5984014272689819,
        5.329580307006836
      ],
      "label": 6,
      "category": "eggplant",
      "sprite_path": "static/dump/umap/static/train/carrot/Image_72.jpg"
    },
    {
      "embedding": [
        1.7247592210769653,
        4.904839515686035
      ],
      "label": 6,
      "category": "eggplant",
      "sprite_path": "static/dump/umap/static/train/carrot/Image_96.jpg"
    },
    {
      "embedding": [
        5.236039161682129,
        3.1513383388519287
      ],
      "label": 6,
      "category": "eggplant",
      "sprite_path": "static/dump/umap/static/train/carrot/Image_52.jpg"
    },
    {
      "embedding": [
        8.599143028259277,
        0.48825299739837646
      ],
      "label": 6,
      "category": "eggplant",
      "sprite_path": "static/dump/umap/static/train/carrot/Image_90.jpg"
    },
    {
      "embedding": [
        13.253808975219727,
        1.1854474544525146
      ],
      "label": 6,
      "category": "eggplant",
      "sprite_path": "static/dump/umap/static/train/carrot/Image_83.jpg"
    },
    {
      "embedding": [
        8.661259651184082,
        0.24859245121479034
      ],
      "label": 6,
      "category": "eggplant",
      "sprite_path": "static/dump/umap/static/train/carrot/Image_11.jpg"
    },
    {
      "embedding": [
        6.004802703857422,
        3.139463186264038
      ],
      "label": 6,
      "category": "eggplant",
      "sprite_path": "static/dump/umap/static/train/carrot/Image_82.jpg"
    },
    {
      "embedding": [
        8.549108505249023,
        0.427275151014328
      ],
      "label": 6,
      "category": "eggplant",
      "sprite_path": "static/dump/umap/static/train/carrot/Image_67.jpg"
    },
    {
      "embedding": [
        8.230374336242676,
        1.386324167251587
      ],
      "label": 6,
      "category": "eggplant",
      "sprite_path": "static/dump/umap/static/train/carrot/Image_50.jpg"
    },
    {
      "embedding": [
        5.89304256439209,
        2.878019094467163
      ],
      "label": 6,
      "category": "eggplant",
      "sprite_path": "static/dump/umap/static/train/carrot/Image_58.jpg"
    },
    {
      "embedding": [
        12.511456489562988,
        1.9444305896759033
      ],
      "label": 6,
      "category": "eggplant",
      "sprite_path": "static/dump/umap/static/train/carrot/Image_68.png"
    },
    {
      "embedding": [
        11.046149253845215,
        1.119141936302185
      ],
      "label": 6,
      "category": "eggplant",
      "sprite_path": "static/dump/umap/static/train/carrot/Image_5.jpg"
    },
    {
      "embedding": [
        9.160698890686035,
        1.0286701917648315
      ],
      "label": 6,
      "category": "eggplant",
      "sprite_path": "static/dump/umap/static/train/carrot/Image_100.jpg"
    },
    {
      "embedding": [
        12.433194160461426,
        1.7185604572296143
      ],
      "label": 6,
      "category": "eggplant",
      "sprite_path": "static/dump/umap/static/train/carrot/Image_70.jpg"
    },
    {
      "embedding": [
        9.435714721679688,
        0.30788034200668335
      ],
      "label": 6,
      "category": "eggplant",
      "sprite_path": "static/dump/umap/static/train/carrot/Image_15.jpg"
    },
    {
      "embedding": [
        0.829444944858551,
        4.807100772857666
      ],
      "label": 6,
      "category": "eggplant",
      "sprite_path": "static/dump/umap/static/train/carrot/Image_35.jpg"
    },
    {
      "embedding": [
        0.7478078007698059,
        5.1343464851379395
      ],
      "label": 6,
      "category": "eggplant",
      "sprite_path": "static/dump/umap/static/train/carrot/Image_76.jpg"
    },
    {
      "embedding": [
        1.7762304544448853,
        5.975644111633301
      ],
      "label": 6,
      "category": "eggplant",
      "sprite_path": "static/dump/umap/static/train/carrot/Image_63.jpg"
    },
    {
      "embedding": [
        8.906083106994629,
        0.2989785373210907
      ],
      "label": 6,
      "category": "eggplant",
      "sprite_path": "static/dump/umap/static/train/carrot/Image_75.jpg"
    },
    {
      "embedding": [
        6.042811393737793,
        2.8909287452697754
      ],
      "label": 6,
      "category": "eggplant",
      "sprite_path": "static/dump/umap/static/train/carrot/Image_10.jpeg"
    },
    {
      "embedding": [
        0.9170941114425659,
        4.420848369598389
      ],
      "label": 6,
      "category": "eggplant",
      "sprite_path": "static/dump/umap/static/train/carrot/Image_24.jpg"
    },
    {
      "embedding": [
        12.65500545501709,
        1.1760315895080566
      ],
      "label": 6,
      "category": "eggplant",
      "sprite_path": "static/dump/umap/static/train/carrot/Image_99.jpg"
    },
    {
      "embedding": [
        8.3888578414917,
        1.133092999458313
      ],
      "label": 6,
      "category": "eggplant",
      "sprite_path": "static/dump/umap/static/train/carrot/Image_32.jpg"
    },
    {
      "embedding": [
        6.869338035583496,
        2.892536163330078
      ],
      "label": 6,
      "category": "eggplant",
      "sprite_path": "static/dump/umap/static/train/carrot/Image_80.png"
    },
    {
      "embedding": [
        11.16446304321289,
        1.6397743225097656
      ],
      "label": 6,
      "category": "eggplant",
      "sprite_path": "static/dump/umap/static/train/carrot/Image_37.jpg"
    },
    {
      "embedding": [
        8.935262680053711,
        0.2694758176803589
      ],
      "label": 6,
      "category": "eggplant",
      "sprite_path": "static/dump/umap/static/train/carrot/Image_51.jpg"
    },
    {
      "embedding": [
        6.571539402008057,
        2.92343807220459
      ],
      "label": 6,
      "category": "eggplant",
      "sprite_path": "static/dump/umap/static/train/carrot/Image_28.jpg"
    },
    {
      "embedding": [
        12.386245727539062,
        1.4931366443634033
      ],
      "label": 6,
      "category": "eggplant",
      "sprite_path": "static/dump/umap/static/train/carrot/Image_54.jpg"
    },
    {
      "embedding": [
        12.808974266052246,
        1.7225524187088013
      ],
      "label": 6,
      "category": "eggplant",
      "sprite_path": "static/dump/umap/static/train/carrot/Image_93.jpg"
    },
    {
      "embedding": [
        1.151856780052185,
        4.386389255523682
      ],
      "label": 6,
      "category": "eggplant",
      "sprite_path": "static/dump/umap/static/train/carrot/Image_36.jpg"
    },
    {
      "embedding": [
        12.514203071594238,
        2.2338101863861084
      ],
      "label": 6,
      "category": "eggplant",
      "sprite_path": "static/dump/umap/static/train/carrot/Image_42.jpg"
    },
    {
      "embedding": [
        0.6633775234222412,
        5.338091850280762
      ],
      "label": 6,
      "category": "eggplant",
      "sprite_path": "static/dump/umap/static/train/carrot/Image_31.jpg"
    },
    {
      "embedding": [
        8.892027854919434,
        0.2463844120502472
      ],
      "label": 6,
      "category": "eggplant",
      "sprite_path": "static/dump/umap/static/train/carrot/Image_2.jpg"
    },
    {
      "embedding": [
        7.625233173370361,
        0.9043706059455872
      ],
      "label": 6,
      "category": "eggplant",
      "sprite_path": "static/dump/umap/static/train/carrot/Image_3.jpg"
    },
    {
      "embedding": [
        0.8419713377952576,
        4.517058849334717
      ],
      "label": 6,
      "category": "eggplant",
      "sprite_path": "static/dump/umap/static/train/carrot/Image_26.jpg"
    },
    {
      "embedding": [
        0.7270799875259399,
        5.319868564605713
      ],
      "label": 6,
      "category": "eggplant",
      "sprite_path": "static/dump/umap/static/train/carrot/Image_66.jpg"
    },
    {
      "embedding": [
        1.969605565071106,
        4.680305004119873
      ],
      "label": 6,
      "category": "eggplant",
      "sprite_path": "static/dump/umap/static/train/orange/Image_65.jpg"
    },
    {
      "embedding": [
        0.7649965286254883,
        5.068597793579102
      ],
      "label": 6,
      "category": "eggplant",
      "sprite_path": "static/dump/umap/static/train/orange/Image_16.jpg"
    },
    {
      "embedding": [
        5.946799278259277,
        3.160449504852295
      ],
      "label": 6,
      "category": "eggplant",
      "sprite_path": "static/dump/umap/static/train/orange/Image_12.jpg"
    },
    {
      "embedding": [
        0.6642848253250122,
        5.157297134399414
      ],
      "label": 6,
      "category": "eggplant",
      "sprite_path": "static/dump/umap/static/train/orange/Image_56.jpg"
    },
    {
      "embedding": [
        6.588630676269531,
        2.668821096420288
      ],
      "label": 6,
      "category": "eggplant",
      "sprite_path": "static/dump/umap/static/train/orange/Image_33.jpg"
    },
    {
      "embedding": [
        7.669439792633057,
        1.3849726915359497
      ],
      "label": 21,
      "category": "cabbage",
      "sprite_path": "static/dump/umap/static/train/orange/Image_45.jpg"
    },
    {
      "embedding": [
        8.735028266906738,
        3.538853645324707
      ],
      "label": 21,
      "category": "cabbage",
      "sprite_path": "static/dump/umap/static/train/orange/Image_40.jpg"
    },
    {
      "embedding": [
        6.681546688079834,
        0.8737184405326843
      ],
      "label": 21,
      "category": "cabbage",
      "sprite_path": "static/dump/umap/static/train/orange/Image_10.jpg"
    },
    {
      "embedding": [
        6.779246807098389,
        1.6874439716339111
      ],
      "label": 21,
      "category": "cabbage",
      "sprite_path": "static/dump/umap/static/train/orange/Image_21.jpg"
    },
    {
      "embedding": [
        8.290785789489746,
        2.231902599334717
      ],
      "label": 21,
      "category": "cabbage",
      "sprite_path": "static/dump/umap/static/train/orange/Image_4.jpg"
    },
    {
      "embedding": [
        3.135366916656494,
        5.461597919464111
      ],
      "label": 21,
      "category": "cabbage",
      "sprite_path": "static/dump/umap/static/train/orange/Image_38.jpg"
    },
    {
      "embedding": [
        6.677070140838623,
        0.8376064300537109
      ],
      "label": 21,
      "category": "cabbage",
      "sprite_path": "static/dump/umap/static/train/orange/Image_7.jpg"
    },
    {
      "embedding": [
        7.954333305358887,
        0.20983192324638367
      ],
      "label": 21,
      "category": "cabbage",
      "sprite_path": "static/dump/umap/static/train/orange/Image_13.jpg"
    },
    {
      "embedding": [
        6.66072416305542,
        0.9486666321754456
      ],
      "label": 21,
      "category": "cabbage",
      "sprite_path": "static/dump/umap/static/train/orange/Image_95.jpg"
    },
    {
      "embedding": [
        2.2755424976348877,
        5.59304666519165
      ],
      "label": 21,
      "category": "cabbage",
      "sprite_path": "static/dump/umap/static/train/orange/Image_68.jpg"
    },
    {
      "embedding": [
        10.99567699432373,
        2.116313934326172
      ],
      "label": 21,
      "category": "cabbage",
      "sprite_path": "static/dump/umap/static/train/orange/Image_23.jpg"
    },
    {
      "embedding": [
        2.3767733573913574,
        5.738197326660156
      ],
      "label": 21,
      "category": "cabbage",
      "sprite_path": "static/dump/umap/static/train/orange/Image_1.png"
    },
    {
      "embedding": [
        3.0540413856506348,
        5.253721714019775
      ],
      "label": 21,
      "category": "cabbage",
      "sprite_path": "static/dump/umap/static/train/orange/Image_22.jpg"
    },
    {
      "embedding": [
        3.7455012798309326,
        4.199388027191162
      ],
      "label": 21,
      "category": "cabbage",
      "sprite_path": "static/dump/umap/static/train/orange/Image_79.jpg"
    },
    {
      "embedding": [
        12.59874153137207,
        0.615908145904541
      ],
      "label": 21,
      "category": "cabbage",
      "sprite_path": "static/dump/umap/static/train/orange/Image_77.jpg"
    },
    {
      "embedding": [
        11.280467987060547,
        0.482207715511322
      ],
      "label": 21,
      "category": "cabbage",
      "sprite_path": "static/dump/umap/static/train/orange/Image_25.jpg"
    },
    {
      "embedding": [
        12.872518539428711,
        2.7580888271331787
      ],
      "label": 21,
      "category": "cabbage",
      "sprite_path": "static/dump/umap/static/train/orange/Image_46.jpg"
    },
    {
      "embedding": [
        7.262846946716309,
        1.8947927951812744
      ],
      "label": 21,
      "category": "cabbage",
      "sprite_path": "static/dump/umap/static/train/orange/Image_42.png"
    },
    {
      "embedding": [
        9.149169921875,
        3.0906224250793457
      ],
      "label": 21,
      "category": "cabbage",
      "sprite_path": "static/dump/umap/static/train/orange/Image_9.jpg"
    },
    {
      "embedding": [
        9.166749000549316,
        -0.060116805136203766
      ],
      "label": 21,
      "category": "cabbage",
      "sprite_path": "static/dump/umap/static/train/orange/Image_34.jpg"
    },
    {
      "embedding": [
        8.278190612792969,
        0.7380790710449219
      ],
      "label": 21,
      "category": "cabbage",
      "sprite_path": "static/dump/umap/static/train/orange/Image_6.jpg"
    },
    {
      "embedding": [
        6.935035228729248,
        1.714207410812378
      ],
      "label": 21,
      "category": "cabbage",
      "sprite_path": "static/dump/umap/static/train/orange/Image_20.jpg"
    },
    {
      "embedding": [
        12.097725868225098,
        1.533568263053894
      ],
      "label": 21,
      "category": "cabbage",
      "sprite_path": "static/dump/umap/static/train/orange/Image_98.jpg"
    },
    {
      "embedding": [
        7.995692729949951,
        0.5290205478668213
      ],
      "label": 21,
      "category": "cabbage",
      "sprite_path": "static/dump/umap/static/train/orange/Image_19.jpg"
    },
    {
      "embedding": [
        6.626467704772949,
        0.9858598113059998
      ],
      "label": 21,
      "category": "cabbage",
      "sprite_path": "static/dump/umap/static/train/orange/Image_88.jpg"
    },
    {
      "embedding": [
        7.727829933166504,
        0.6921312212944031
      ],
      "label": 21,
      "category": "cabbage",
      "sprite_path": "static/dump/umap/static/train/orange/Image_29.jpg"
    },
    {
      "embedding": [
        7.9569621086120605,
        1.563855528831482
      ],
      "label": 21,
      "category": "cabbage",
      "sprite_path": "static/dump/umap/static/train/orange/Image_85.jpg"
    },
    {
      "embedding": [
        7.859042644500732,
        0.6447416543960571
      ],
      "label": 21,
      "category": "cabbage",
      "sprite_path": "static/dump/umap/static/train/orange/Image_74.jpg"
    },
    {
      "embedding": [
        12.781410217285156,
        2.5205745697021484
      ],
      "label": 21,
      "category": "cabbage",
      "sprite_path": "static/dump/umap/static/train/orange/Image_27.jpg"
    },
    {
      "embedding": [
        8.369969367980957,
        -0.08625007420778275
      ],
      "label": 21,
      "category": "cabbage",
      "sprite_path": "static/dump/umap/static/train/orange/Image_55.jpg"
    },
    {
      "embedding": [
        6.6820759773254395,
        0.8931989669799805
      ],
      "label": 21,
      "category": "cabbage",
      "sprite_path": "static/dump/umap/static/train/orange/Image_44.jpg"
    },
    {
      "embedding": [
        8.166699409484863,
        0.24797971546649933
      ],
      "label": 21,
      "category": "cabbage",
      "sprite_path": "static/dump/umap/static/train/orange/Image_72.jpg"
    },
    {
      "embedding": [
        12.129348754882812,
        0.7489089369773865
      ],
      "label": 21,
      "category": "cabbage",
      "sprite_path": "static/dump/umap/static/train/orange/Image_73.jpg"
    },
    {
      "embedding": [
        12.852710723876953,
        1.3697394132614136
      ],
      "label": 21,
      "category": "cabbage",
      "sprite_path": "static/dump/umap/static/train/orange/Image_52.jpg"
    },
    {
      "embedding": [
        9.335269927978516,
        1.1400809288024902
      ],
      "label": 21,
      "category": "cabbage",
      "sprite_path": "static/dump/umap/static/train/orange/Image_90.jpg"
    },
    {
      "embedding": [
        3.206200122833252,
        5.840522766113281
      ],
      "label": 21,
      "category": "cabbage",
      "sprite_path": "static/dump/umap/static/train/orange/Image_11.jpg"
    },
    {
      "embedding": [
        11.988578796386719,
        1.0098044872283936
      ],
      "label": 21,
      "category": "cabbage",
      "sprite_path": "static/dump/umap/static/train/orange/Image_67.jpg"
    },
    {
      "embedding": [
        8.444628715515137,
        0.1546325534582138
      ],
      "label": 21,
      "category": "cabbage",
      "sprite_path": "static/dump/umap/static/train/orange/Image_30.jpg"
    },
    {
      "embedding": [
        1.1926571130752563,
        5.15455436706543
      ],
      "label": 21,
      "category": "cabbage",
      "sprite_path": "static/dump/umap/static/train/orange/Image_5.jpg"
    },
    {
      "embedding": [
        8.459088325500488,
        -0.02718397229909897
      ],
      "label": 21,
      "category": "cabbage",
      "sprite_path": "static/dump/umap/static/train/orange/Image_97.png"
    },
    {
      "embedding": [
        7.811821460723877,
        0.9375327229499817
      ],
      "label": 21,
      "category": "cabbage",
      "sprite_path": "static/dump/umap/static/train/orange/Image_100.jpg"
    },
    {
      "embedding": [
        6.834827899932861,
        0.8057610392570496
      ],
      "label": 21,
      "category": "cabbage",
      "sprite_path": "static/dump/umap/static/train/orange/Image_70.jpg"
    },
    {
      "embedding": [
        8.462811470031738,
        1.3395729064941406
      ],
      "label": 21,
      "category": "cabbage",
      "sprite_path": "static/dump/umap/static/train/orange/Image_15.jpg"
    },
    {
      "embedding": [
        6.672264575958252,
        0.8650190830230713
      ],
      "label": 21,
      "category": "cabbage",
      "sprite_path": "static/dump/umap/static/train/orange/Image_14.jpg"
    },
    {
      "embedding": [
        12.849002838134766,
        2.778088331222534
      ],
      "label": 21,
      "category": "cabbage",
      "sprite_path": "static/dump/umap/static/train/orange/Image_8.jpeg"
    },
    {
      "embedding": [
        2.2706193923950195,
        5.580068588256836
      ],
      "label": 21,
      "category": "cabbage",
      "sprite_path": "static/dump/umap/static/train/orange/Image_76.jpg"
    },
    {
      "embedding": [
        7.447223663330078,
        2.02655029296875
      ],
      "label": 21,
      "category": "cabbage",
      "sprite_path": "static/dump/umap/static/train/orange/Image_63.jpg"
    },
    {
      "embedding": [
        6.928601264953613,
        0.8760062456130981
      ],
      "label": 21,
      "category": "cabbage",
      "sprite_path": "static/dump/umap/static/train/orange/Image_24.jpg"
    },
    {
      "embedding": [
        2.9780054092407227,
        5.230672836303711
      ],
      "label": 21,
      "category": "cabbage",
      "sprite_path": "static/dump/umap/static/train/orange/Image_99.jpg"
    },
    {
      "embedding": [
        9.156896591186523,
        1.7426769733428955
      ],
      "label": 21,
      "category": "cabbage",
      "sprite_path": "static/dump/umap/static/train/orange/Image_32.jpg"
    },
    {
      "embedding": [
        11.912657737731934,
        2.443331241607666
      ],
      "label": 21,
      "category": "cabbage",
      "sprite_path": "static/dump/umap/static/train/orange/Image_39.jpeg"
    },
    {
      "embedding": [
        12.268121719360352,
        1.4008227586746216
      ],
      "label": 21,
      "category": "cabbage",
      "sprite_path": "static/dump/umap/static/train/orange/Image_37.jpg"
    },
    {
      "embedding": [
        7.8316192626953125,
        0.709682822227478
      ],
      "label": 21,
      "category": "cabbage",
      "sprite_path": "static/dump/umap/static/train/orange/Image_51.jpg"
    },
    {
      "embedding": [
        6.293589115142822,
        1.8121272325515747
      ],
      "label": 21,
      "category": "cabbage",
      "sprite_path": "static/dump/umap/static/train/orange/Image_28.jpg"
    },
    {
      "embedding": [
        2.625763177871704,
        5.693652153015137
      ],
      "label": 21,
      "category": "cabbage",
      "sprite_path": "static/dump/umap/static/train/orange/Image_36.jpg"
    },
    {
      "embedding": [
        8.899619102478027,
        2.194866895675659
      ],
      "label": 21,
      "category": "cabbage",
      "sprite_path": "static/dump/umap/static/train/orange/Image_84.png"
    },
    {
      "embedding": [
        7.205039978027344,
        2.8473916053771973
      ],
      "label": 21,
      "category": "cabbage",
      "sprite_path": "static/dump/umap/static/train/orange/Image_2.jpg"
    },
    {
      "embedding": [
        10.012394905090332,
        0.6866810321807861
      ],
      "label": 21,
      "category": "cabbage",
      "sprite_path": "static/dump/umap/static/train/orange/Image_3.jpg"
    },
    {
      "embedding": [
        8.894747734069824,
        1.0566412210464478
      ],
      "label": 21,
      "category": "cabbage",
      "sprite_path": "static/dump/umap/static/train/orange/Image_26.jpg"
    },
    {
      "embedding": [
        7.064585208892822,
        1.697434425354004
      ],
      "label": 21,
      "category": "cabbage",
      "sprite_path": "static/dump/umap/static/train/orange/Image_87.jpg"
    },
    {
      "embedding": [
        3.104736804962158,
        5.357280731201172
      ],
      "label": 21,
      "category": "cabbage",
      "sprite_path": "static/dump/umap/static/train/orange/Image_43.jpg"
    },
    {
      "embedding": [
        1.5979926586151123,
        5.755436420440674
      ],
      "label": 21,
      "category": "cabbage",
      "sprite_path": "static/dump/umap/static/train/orange/Image_18.jpg"
    },
    {
      "embedding": [
        7.813769340515137,
        0.6811172366142273
      ],
      "label": 21,
      "category": "cabbage",
      "sprite_path": "static/dump/umap/static/train/orange/Image_60.png"
    },
    {
      "embedding": [
        2.6262009143829346,
        5.734007835388184
      ],
      "label": 21,
      "category": "cabbage",
      "sprite_path": "static/dump/umap/static/train/eggplant/Image_89.jpg"
    },
    {
      "embedding": [
        12.948708534240723,
        1.9853850603103638
      ],
      "label": 21,
      "category": "cabbage",
      "sprite_path": "static/dump/umap/static/train/eggplant/Image_65.jpg"
    },
    {
      "embedding": [
        12.879328727722168,
        0.8065400123596191
      ],
      "label": 21,
      "category": "cabbage",
      "sprite_path": "static/dump/umap/static/train/eggplant/Image_1.jpg"
    },
    {
      "embedding": [
        12.451498985290527,
        1.968694806098938
      ],
      "label": 21,
      "category": "cabbage",
      "sprite_path": "static/dump/umap/static/train/eggplant/Image_16.jpg"
    },
    {
      "embedding": [
        12.276841163635254,
        2.2311010360717773
      ],
      "label": 21,
      "category": "cabbage",
      "sprite_path": "static/dump/umap/static/train/eggplant/Image_54.png"
    },
    {
      "embedding": [
        12.817047119140625,
        2.6922998428344727
      ],
      "label": 21,
      "category": "cabbage",
      "sprite_path": "static/dump/umap/static/train/eggplant/Image_12.jpg"
    },
    {
      "embedding": [
        10.169083595275879,
        1.7744545936584473
      ],
      "label": 11,
      "category": "raddish",
      "sprite_path": "static/dump/umap/static/train/eggplant/Image_56.jpg"
    },
    {
      "embedding": [
        9.535239219665527,
        2.6042096614837646
      ],
      "label": 11,
      "category": "raddish",
      "sprite_path": "static/dump/umap/static/train/eggplant/Image_33.jpg"
    },
    {
      "embedding": [
        7.9359588623046875,
        2.08499813079834
      ],
      "label": 11,
      "category": "raddish",
      "sprite_path": "static/dump/umap/static/train/eggplant/Image_45.jpg"
    },
    {
      "embedding": [
        6.8828277587890625,
        3.3271186351776123
      ],
      "label": 11,
      "category": "raddish",
      "sprite_path": "static/dump/umap/static/train/eggplant/Image_94.jpg"
    },
    {
      "embedding": [
        12.703657150268555,
        1.029812216758728
      ],
      "label": 11,
      "category": "raddish",
      "sprite_path": "static/dump/umap/static/train/eggplant/Image_10.jpg"
    },
    {
      "embedding": [
        2.8901219367980957,
        4.289373874664307
      ],
      "label": 11,
      "category": "raddish",
      "sprite_path": "static/dump/umap/static/train/eggplant/Image_21.jpg"
    },
    {
      "embedding": [
        0.9713265299797058,
        5.738309860229492
      ],
      "label": 11,
      "category": "raddish",
      "sprite_path": "static/dump/umap/static/train/eggplant/Image_78.jpg"
    },
    {
      "embedding": [
        11.566590309143066,
        0.8648850321769714
      ],
      "label": 11,
      "category": "raddish",
      "sprite_path": "static/dump/umap/static/train/eggplant/Image_59.jpg"
    },
    {
      "embedding": [
        9.961020469665527,
        1.793001413345337
      ],
      "label": 11,
      "category": "raddish",
      "sprite_path": "static/dump/umap/static/train/eggplant/Image_4.jpg"
    },
    {
      "embedding": [
        7.887088775634766,
        2.0712287425994873
      ],
      "label": 11,
      "category": "raddish",
      "sprite_path": "static/dump/umap/static/train/eggplant/Image_41.jpg"
    },
    {
      "embedding": [
        12.189644813537598,
        2.153918981552124
      ],
      "label": 11,
      "category": "raddish",
      "sprite_path": "static/dump/umap/static/train/eggplant/Image_7.jpg"
    },
    {
      "embedding": [
        12.064279556274414,
        0.6632411479949951
      ],
      "label": 11,
      "category": "raddish",
      "sprite_path": "static/dump/umap/static/train/eggplant/Image_69.jpg"
    },
    {
      "embedding": [
        12.774742126464844,
        0.8439426422119141
      ],
      "label": 11,
      "category": "raddish",
      "sprite_path": "static/dump/umap/static/train/eggplant/Image_48.jpg"
    },
    {
      "embedding": [
        6.403102397918701,
        3.5332345962524414
      ],
      "label": 11,
      "category": "raddish",
      "sprite_path": "static/dump/umap/static/train/eggplant/Image_13.jpg"
    },
    {
      "embedding": [
        9.830802917480469,
        2.310293197631836
      ],
      "label": 11,
      "category": "raddish",
      "sprite_path": "static/dump/umap/static/train/eggplant/Image_95.jpg"
    },
    {
      "embedding": [
        8.724334716796875,
        2.5472137928009033
      ],
      "label": 11,
      "category": "raddish",
      "sprite_path": "static/dump/umap/static/train/eggplant/Image_68.jpg"
    },
    {
      "embedding": [
        9.787787437438965,
        1.7748571634292603
      ],
      "label": 11,
      "category": "raddish",
      "sprite_path": "static/dump/umap/static/train/eggplant/Image_8.jpg"
    },
    {
      "embedding": [
        12.183300971984863,
        1.0383539199829102
      ],
      "label": 11,
      "category": "raddish",
      "sprite_path": "static/dump/umap/static/train/eggplant/Image_22.jpg"
    },
    {
      "embedding": [
        11.068486213684082,
        1.4156317710876465
      ],
      "label": 11,
      "category": "raddish",
      "sprite_path": "static/dump/umap/static/train/eggplant/Image_79.jpg"
    },
    {
      "embedding": [
        10.670916557312012,
        0.8751506209373474
      ],
      "label": 11,
      "category": "raddish",
      "sprite_path": "static/dump/umap/static/train/eggplant/Image_17.jpg"
    },
    {
      "embedding": [
        12.793387413024902,
        0.6995824575424194
      ],
      "label": 11,
      "category": "raddish",
      "sprite_path": "static/dump/umap/static/train/eggplant/Image_46.jpg"
    },
    {
      "embedding": [
        8.013888359069824,
        2.3447675704956055
      ],
      "label": 11,
      "category": "raddish",
      "sprite_path": "static/dump/umap/static/train/eggplant/Image_9.jpg"
    },
    {
      "embedding": [
        10.595335006713867,
        1.2779245376586914
      ],
      "label": 11,
      "category": "raddish",
      "sprite_path": "static/dump/umap/static/train/eggplant/Image_71.jpg"
    },
    {
      "embedding": [
        11.521768569946289,
        0.8408632278442383
      ],
      "label": 11,
      "category": "raddish",
      "sprite_path": "static/dump/umap/static/train/eggplant/Image_81.jpg"
    },
    {
      "embedding": [
        12.025799751281738,
        1.9867011308670044
      ],
      "label": 11,
      "category": "raddish",
      "sprite_path": "static/dump/umap/static/train/eggplant/Image_6.jpg"
    },
    {
      "embedding": [
        8.800393104553223,
        2.8260412216186523
      ],
      "label": 11,
      "category": "raddish",
      "sprite_path": "static/dump/umap/static/train/eggplant/Image_20.jpg"
    },
    {
      "embedding": [
        10.250360488891602,
        1.7442878484725952
      ],
      "label": 11,
      "category": "raddish",
      "sprite_path": "static/dump/umap/static/train/eggplant/Image_98.jpg"
    },
    {
      "embedding": [
        11.71882438659668,
        2.3850595951080322
      ],
      "label": 11,
      "category": "raddish",
      "sprite_path": "static/dump/umap/static/train/eggplant/Image_47.jpg"
    },
    {
      "embedding": [
        11.666732788085938,
        1.9486315250396729
      ],
      "label": 11,
      "category": "raddish",
      "sprite_path": "static/dump/umap/static/train/eggplant/Image_19.jpg"
    },
    {
      "embedding": [
        12.234272003173828,
        2.2164034843444824
      ],
      "label": 11,
      "category": "raddish",
      "sprite_path": "static/dump/umap/static/train/eggplant/Image_29.jpg"
    },
    {
      "embedding": [
        10.97461223602295,
        1.0636744499206543
      ],
      "label": 11,
      "category": "raddish",
      "sprite_path": "static/dump/umap/static/train/eggplant/Image_61.jpg"
    },
    {
      "embedding": [
        9.709784507751465,
        2.184868335723877
      ],
      "label": 11,
      "category": "raddish",
      "sprite_path": "static/dump/umap/static/train/eggplant/Image_84.jpg"
    },
    {
      "embedding": [
        11.640334129333496,
        0.8326217532157898
      ],
      "label": 11,
      "category": "raddish",
      "sprite_path": "static/dump/umap/static/train/eggplant/Image_74.jpg"
    },
    {
      "embedding": [
        9.146561622619629,
        2.35091233253479
      ],
      "label": 11,
      "category": "raddish",
      "sprite_path": "static/dump/umap/static/train/eggplant/Image_64.jpg"
    },
    {
      "embedding": [
        10.600982666015625,
        1.2821943759918213
      ],
      "label": 11,
      "category": "raddish",
      "sprite_path": "static/dump/umap/static/train/eggplant/Image_92.jpg"
    },
    {
      "embedding": [
        6.284167766571045,
        3.4459824562072754
      ],
      "label": 11,
      "category": "raddish",
      "sprite_path": "static/dump/umap/static/train/eggplant/Image_27.jpg"
    },
    {
      "embedding": [
        10.027618408203125,
        1.2484378814697266
      ],
      "label": 11,
      "category": "raddish",
      "sprite_path": "static/dump/umap/static/train/eggplant/Image_55.jpg"
    },
    {
      "embedding": [
        7.284097194671631,
        3.430086612701416
      ],
      "label": 11,
      "category": "raddish",
      "sprite_path": "static/dump/umap/static/train/eggplant/Image_44.jpg"
    },
    {
      "embedding": [
        12.132532119750977,
        0.9163009524345398
      ],
      "label": 11,
      "category": "raddish",
      "sprite_path": "static/dump/umap/static/train/eggplant/Image_72.jpg"
    },
    {
      "embedding": [
        9.342839241027832,
        2.4649813175201416
      ],
      "label": 11,
      "category": "raddish",
      "sprite_path": "static/dump/umap/static/train/eggplant/Image_73.jpg"
    },
    {
      "embedding": [
        6.08469295501709,
        3.535519599914551
      ],
      "label": 11,
      "category": "raddish",
      "sprite_path": "static/dump/umap/static/train/eggplant/Image_96.jpg"
    },
    {
      "embedding": [
        12.568862915039062,
        0.7325204610824585
      ],
      "label": 11,
      "category": "raddish",
      "sprite_path": "static/dump/umap/static/train/eggplant/Image_11.jpg"
    },
    {
      "embedding": [
        11.451056480407715,
        1.6335630416870117
      ],
      "label": 11,
      "category": "raddish",
      "sprite_path": "static/dump/umap/static/train/eggplant/Image_82.jpg"
    },
    {
      "embedding": [
        10.951976776123047,
        0.7332515120506287
      ],
      "label": 11,
      "category": "raddish",
      "sprite_path": "static/dump/umap/static/train/eggplant/Image_80.jpg"
    },
    {
      "embedding": [
        11.778292655944824,
        2.4348528385162354
      ],
      "label": 11,
      "category": "raddish",
      "sprite_path": "static/dump/umap/static/train/eggplant/Image_26.png"
    },
    {
      "embedding": [
        9.371161460876465,
        2.1058802604675293
      ],
      "label": 11,
      "category": "raddish",
      "sprite_path": "static/dump/umap/static/train/eggplant/Image_67.jpg"
    },
    {
      "embedding": [
        1.4062755107879639,
        5.068512439727783
      ],
      "label": 11,
      "category": "raddish",
      "sprite_path": "static/dump/umap/static/train/eggplant/Image_58.jpg"
    },
    {
      "embedding": [
        8.86108112335205,
        3.528425931930542
      ],
      "label": 11,
      "category": "raddish",
      "sprite_path": "static/dump/umap/static/train/eggplant/Image_97.jpg"
    },
    {
      "embedding": [
        10.500625610351562,
        1.1720198392868042
      ],
      "label": 11,
      "category": "raddish",
      "sprite_path": "static/dump/umap/static/train/eggplant/Image_62.jpg"
    },
    {
      "embedding": [
        10.580466270446777,
        0.4370897710323334
      ],
      "label": 11,
      "category": "raddish",
      "sprite_path": "static/dump/umap/static/train/eggplant/Image_30.jpg"
    },
    {
      "embedding": [
        7.344979763031006,
        3.5535449981689453
      ],
      "label": 11,
      "category": "raddish",
      "sprite_path": "static/dump/umap/static/train/eggplant/Image_5.jpg"
    },
    {
      "embedding": [
        6.500275135040283,
        2.2389211654663086
      ],
      "label": 11,
      "category": "raddish",
      "sprite_path": "static/dump/umap/static/train/eggplant/Image_100.jpg"
    },
    {
      "embedding": [
        0.9205762147903442,
        6.218636512756348
      ],
      "label": 11,
      "category": "raddish",
      "sprite_path": "static/dump/umap/static/train/eggplant/Image_38.png"
    },
    {
      "embedding": [
        11.366499900817871,
        0.7935479283332825
      ],
      "label": 11,
      "category": "raddish",
      "sprite_path": "static/dump/umap/static/train/eggplant/Image_15.jpg"
    },
    {
      "embedding": [
        11.722771644592285,
        0.7194657325744629
      ],
      "label": 11,
      "category": "raddish",
      "sprite_path": "static/dump/umap/static/train/eggplant/Image_35.jpg"
    },
    {
      "embedding": [
        9.766294479370117,
        2.355587959289551
      ],
      "label": 11,
      "category": "raddish",
      "sprite_path": "static/dump/umap/static/train/eggplant/Image_14.jpg"
    },
    {
      "embedding": [
        11.085274696350098,
        0.9232050776481628
      ],
      "label": 11,
      "category": "raddish",
      "sprite_path": "static/dump/umap/static/train/eggplant/Image_39.jpg"
    },
    {
      "embedding": [
        4.584905624389648,
        4.179536819458008
      ],
      "label": 11,
      "category": "raddish",
      "sprite_path": "static/dump/umap/static/train/eggplant/Image_63.jpg"
    },
    {
      "embedding": [
        11.651391983032227,
        0.8183835744857788
      ],
      "label": 11,
      "category": "raddish",
      "sprite_path": "static/dump/umap/static/train/eggplant/Image_24.jpg"
    },
    {
      "embedding": [
        10.966214179992676,
        1.0789971351623535
      ],
      "label": 11,
      "category": "raddish",
      "sprite_path": "static/dump/umap/static/train/eggplant/Image_99.jpg"
    },
    {
      "embedding": [
        13.112744331359863,
        0.9041703939437866
      ],
      "label": 11,
      "category": "raddish",
      "sprite_path": "static/dump/umap/static/train/eggplant/Image_32.jpg"
    },
    {
      "embedding": [
        11.073513984680176,
        1.1265079975128174
      ],
      "label": 11,
      "category": "raddish",
      "sprite_path": "static/dump/umap/static/train/eggplant/Image_37.jpg"
    },
    {
      "embedding": [
        9.138514518737793,
        2.424459934234619
      ],
      "label": 11,
      "category": "raddish",
      "sprite_path": "static/dump/umap/static/train/eggplant/Image_51.jpg"
    },
    {
      "embedding": [
        9.630813598632812,
        1.8166546821594238
      ],
      "label": 11,
      "category": "raddish",
      "sprite_path": "static/dump/umap/static/train/eggplant/Image_28.jpg"
    },
    {
      "embedding": [
        9.245057106018066,
        2.2288246154785156
      ],
      "label": 11,
      "category": "raddish",
      "sprite_path": "static/dump/umap/static/train/eggplant/Image_93.jpg"
    },
    {
      "embedding": [
        9.020814895629883,
        2.73506498336792
      ],
      "label": 11,
      "category": "raddish",
      "sprite_path": "static/dump/umap/static/train/eggplant/Image_36.jpg"
    },
    {
      "embedding": [
        11.013212203979492,
        1.12123703956604
      ],
      "label": 11,
      "category": "raddish",
      "sprite_path": "static/dump/umap/static/train/eggplant/Image_40.png"
    },
    {
      "embedding": [
        8.239224433898926,
        3.401322364807129
      ],
      "label": 11,
      "category": "raddish",
      "sprite_path": "static/dump/umap/static/train/eggplant/Image_42.jpg"
    },
    {
      "embedding": [
        10.563600540161133,
        1.5294623374938965
      ],
      "label": 11,
      "category": "raddish",
      "sprite_path": "static/dump/umap/static/train/eggplant/Image_31.jpg"
    },
    {
      "embedding": [
        8.816774368286133,
        2.2834975719451904
      ],
      "label": 11,
      "category": "raddish",
      "sprite_path": "static/dump/umap/static/train/eggplant/Image_2.jpg"
    },
    {
      "embedding": [
        5.735827445983887,
        3.155040979385376
      ],
      "label": 11,
      "category": "raddish",
      "sprite_path": "static/dump/umap/static/train/eggplant/Image_3.jpg"
    },
    {
      "embedding": [
        6.970793724060059,
        3.275322675704956
      ],
      "label": 11,
      "category": "raddish",
      "sprite_path": "static/dump/umap/static/train/eggplant/Image_66.jpg"
    },
    {
      "embedding": [
        3.3369765281677246,
        4.134943008422852
      ],
      "label": 11,
      "category": "raddish",
      "sprite_path": "static/dump/umap/static/train/eggplant/Image_87.jpg"
    },
    {
      "embedding": [
        4.703031063079834,
        4.265771389007568
      ],
      "label": 11,
      "category": "raddish",
      "sprite_path": "static/dump/umap/static/train/eggplant/Image_43.jpg"
    },
    {
      "embedding": [
        6.791763782501221,
        3.6886539459228516
      ],
      "label": 11,
      "category": "raddish",
      "sprite_path": "static/dump/umap/static/train/eggplant/Image_18.jpg"
    },
    {
      "embedding": [
        2.4996745586395264,
        4.49329137802124
      ],
      "label": 11,
      "category": "raddish",
      "sprite_path": "static/dump/umap/static/train/pomegranate/Image_65.jpg"
    },
    {
      "embedding": [
        12.647040367126465,
        0.7387545108795166
      ],
      "label": 11,
      "category": "raddish",
      "sprite_path": "static/dump/umap/static/train/pomegranate/Image_1.jpg"
    },
    {
      "embedding": [
        12.806024551391602,
        0.6796331405639648
      ],
      "label": 11,
      "category": "raddish",
      "sprite_path": "static/dump/umap/static/train/pomegranate/Image_16.jpg"
    },
    {
      "embedding": [
        10.522619247436523,
        1.276572823524475
      ],
      "label": 11,
      "category": "raddish",
      "sprite_path": "static/dump/umap/static/train/pomegranate/Image_57.jpg"
    },
    {
      "embedding": [
        8.798137664794922,
        2.174943208694458
      ],
      "label": 11,
      "category": "raddish",
      "sprite_path": "static/dump/umap/static/train/pomegranate/Image_12.jpg"
    },
    {
      "embedding": [
        9.893535614013672,
        0.09862731397151947
      ],
      "label": 11,
      "category": "raddish",
      "sprite_path": "static/dump/umap/static/train/pomegranate/Image_56.jpg"
    },
    {
      "embedding": [
        8.586712837219238,
        1.9719547033309937
      ],
      "label": 11,
      "category": "raddish",
      "sprite_path": "static/dump/umap/static/train/pomegranate/Image_33.jpg"
    },
    {
      "embedding": [
        11.35908031463623,
        0.7769574522972107
      ],
      "label": 11,
      "category": "raddish",
      "sprite_path": "static/dump/umap/static/train/pomegranate/Image_45.jpg"
    },
    {
      "embedding": [
        12.786680221557617,
        0.6291067600250244
      ],
      "label": 11,
      "category": "raddish",
      "sprite_path": "static/dump/umap/static/train/pomegranate/Image_40.jpg"
    },
    {
      "embedding": [
        11.49968433380127,
        1.776343822479248
      ],
      "label": 26,
      "category": "bell pepper",
      "sprite_path": "static/dump/umap/static/train/pomegranate/Image_10.jpg"
    },
    {
      "embedding": [
        3.9520299434661865,
        4.386490345001221
      ],
      "label": 26,
      "category": "bell pepper",
      "sprite_path": "static/dump/umap/static/train/pomegranate/Image_21.jpg"
    },
    {
      "embedding": [
        2.4298737049102783,
        4.558565139770508
      ],
      "label": 26,
      "category": "bell pepper",
      "sprite_path": "static/dump/umap/static/train/pomegranate/Image_59.jpg"
    },
    {
      "embedding": [
        8.546333312988281,
        3.1686511039733887
      ],
      "label": 26,
      "category": "bell pepper",
      "sprite_path": "static/dump/umap/static/train/pomegranate/Image_4.jpg"
    },
    {
      "embedding": [
        4.40392541885376,
        4.798878192901611
      ],
      "label": 26,
      "category": "bell pepper",
      "sprite_path": "static/dump/umap/static/train/pomegranate/Image_38.jpg"
    },
    {
      "embedding": [
        7.592985153198242,
        3.2825539112091064
      ],
      "label": 26,
      "category": "bell pepper",
      "sprite_path": "static/dump/umap/static/train/pomegranate/Image_41.jpg"
    },
    {
      "embedding": [
        3.5488924980163574,
        4.880150318145752
      ],
      "label": 26,
      "category": "bell pepper",
      "sprite_path": "static/dump/umap/static/train/pomegranate/Image_7.jpg"
    },
    {
      "embedding": [
        4.6573333740234375,
        4.685800075531006
      ],
      "label": 26,
      "category": "bell pepper",
      "sprite_path": "static/dump/umap/static/train/pomegranate/Image_69.jpg"
    },
    {
      "embedding": [
        8.41281795501709,
        0.7110260725021362
      ],
      "label": 26,
      "category": "bell pepper",
      "sprite_path": "static/dump/umap/static/train/pomegranate/Image_60.jpg"
    },
    {
      "embedding": [
        12.305055618286133,
        1.4040606021881104
      ],
      "label": 26,
      "category": "bell pepper",
      "sprite_path": "static/dump/umap/static/train/pomegranate/Image_13.jpg"
    },
    {
      "embedding": [
        2.3991377353668213,
        4.664292812347412
      ],
      "label": 26,
      "category": "bell pepper",
      "sprite_path": "static/dump/umap/static/train/pomegranate/Image_91.jpg"
    },
    {
      "embedding": [
        13.322705268859863,
        2.096898078918457
      ],
      "label": 26,
      "category": "bell pepper",
      "sprite_path": "static/dump/umap/static/train/pomegranate/Image_68.jpg"
    },
    {
      "embedding": [
        4.313233375549316,
        4.890805721282959
      ],
      "label": 26,
      "category": "bell pepper",
      "sprite_path": "static/dump/umap/static/train/pomegranate/Image_23.jpg"
    },
    {
      "embedding": [
        8.639284133911133,
        0.5991050004959106
      ],
      "label": 26,
      "category": "bell pepper",
      "sprite_path": "static/dump/umap/static/train/pomegranate/Image_8.jpg"
    },
    {
      "embedding": [
        8.886856079101562,
        1.7736798524856567
      ],
      "label": 26,
      "category": "bell pepper",
      "sprite_path": "static/dump/umap/static/train/pomegranate/Image_22.jpg"
    },
    {
      "embedding": [
        2.1910152435302734,
        4.747632026672363
      ],
      "label": 26,
      "category": "bell pepper",
      "sprite_path": "static/dump/umap/static/train/pomegranate/Image_79.jpg"
    },
    {
      "embedding": [
        6.551511764526367,
        3.458085060119629
      ],
      "label": 26,
      "category": "bell pepper",
      "sprite_path": "static/dump/umap/static/train/pomegranate/Image_17.jpg"
    },
    {
      "embedding": [
        12.709888458251953,
        0.944502592086792
      ],
      "label": 26,
      "category": "bell pepper",
      "sprite_path": "static/dump/umap/static/train/pomegranate/Image_77.jpg"
    },
    {
      "embedding": [
        2.740541696548462,
        4.485433101654053
      ],
      "label": 26,
      "category": "bell pepper",
      "sprite_path": "static/dump/umap/static/train/pomegranate/Image_25.jpg"
    },
    {
      "embedding": [
        9.849913597106934,
        0.03273870050907135
      ],
      "label": 26,
      "category": "bell pepper",
      "sprite_path": "static/dump/umap/static/train/pomegranate/Image_46.jpg"
    },
    {
      "embedding": [
        3.7475502490997314,
        4.94549560546875
      ],
      "label": 26,
      "category": "bell pepper",
      "sprite_path": "static/dump/umap/static/train/pomegranate/Image_9.jpg"
    },
    {
      "embedding": [
        8.629523277282715,
        1.3700251579284668
      ],
      "label": 26,
      "category": "bell pepper",
      "sprite_path": "static/dump/umap/static/train/pomegranate/Image_71.jpg"
    },
    {
      "embedding": [
        9.930787086486816,
        -0.10269974917173386
      ],
      "label": 26,
      "category": "bell pepper",
      "sprite_path": "static/dump/umap/static/train/pomegranate/Image_6.jpg"
    },
    {
      "embedding": [
        9.187176704406738,
        0.8308241963386536
      ],
      "label": 26,
      "category": "bell pepper",
      "sprite_path": "static/dump/umap/static/train/pomegranate/Image_20.jpg"
    },
    {
      "embedding": [
        9.303689956665039,
        -0.00015865114983171225
      ],
      "label": 26,
      "category": "bell pepper",
      "sprite_path": "static/dump/umap/static/train/pomegranate/Image_19.jpg"
    },
    {
      "embedding": [
        7.566349029541016,
        2.8593385219573975
      ],
      "label": 26,
      "category": "bell pepper",
      "sprite_path": "static/dump/umap/static/train/pomegranate/Image_88.jpg"
    },
    {
      "embedding": [
        4.464966297149658,
        4.799539089202881
      ],
      "label": 26,
      "category": "bell pepper",
      "sprite_path": "static/dump/umap/static/train/pomegranate/Image_29.jpg"
    },
    {
      "embedding": [
        10.313153266906738,
        1.617712378501892
      ],
      "label": 26,
      "category": "bell pepper",
      "sprite_path": "static/dump/umap/static/train/pomegranate/Image_61.jpg"
    },
    {
      "embedding": [
        12.90779972076416,
        0.6933534741401672
      ],
      "label": 26,
      "category": "bell pepper",
      "sprite_path": "static/dump/umap/static/train/pomegranate/Image_74.jpg"
    },
    {
      "embedding": [
        8.830094337463379,
        1.743784785270691
      ],
      "label": 26,
      "category": "bell pepper",
      "sprite_path": "static/dump/umap/static/train/pomegranate/Image_64.jpg"
    },
    {
      "embedding": [
        2.7985541820526123,
        4.364370822906494
      ],
      "label": 26,
      "category": "bell pepper",
      "sprite_path": "static/dump/umap/static/train/pomegranate/Image_89.png"
    },
    {
      "embedding": [
        3.0276825428009033,
        4.559671878814697
      ],
      "label": 26,
      "category": "bell pepper",
      "sprite_path": "static/dump/umap/static/train/pomegranate/Image_27.jpg"
    },
    {
      "embedding": [
        2.4674956798553467,
        4.5398640632629395
      ],
      "label": 26,
      "category": "bell pepper",
      "sprite_path": "static/dump/umap/static/train/pomegranate/Image_44.jpg"
    },
    {
      "embedding": [
        12.859334945678711,
        0.8787873983383179
      ],
      "label": 26,
      "category": "bell pepper",
      "sprite_path": "static/dump/umap/static/train/pomegranate/Image_72.jpg"
    },
    {
      "embedding": [
        8.897274017333984,
        1.6434394121170044
      ],
      "label": 26,
      "category": "bell pepper",
      "sprite_path": "static/dump/umap/static/train/pomegranate/Image_96.jpg"
    },
    {
      "embedding": [
        8.117745399475098,
        1.2356224060058594
      ],
      "label": 26,
      "category": "bell pepper",
      "sprite_path": "static/dump/umap/static/train/pomegranate/Image_52.jpg"
    },
    {
      "embedding": [
        2.765408992767334,
        4.307798385620117
      ],
      "label": 26,
      "category": "bell pepper",
      "sprite_path": "static/dump/umap/static/train/pomegranate/Image_83.jpg"
    },
    {
      "embedding": [
        9.17016315460205,
        1.0950385332107544
      ],
      "label": 26,
      "category": "bell pepper",
      "sprite_path": "static/dump/umap/static/train/pomegranate/Image_11.jpg"
    },
    {
      "embedding": [
        10.551495552062988,
        0.4023998975753784
      ],
      "label": 26,
      "category": "bell pepper",
      "sprite_path": "static/dump/umap/static/train/pomegranate/Image_50.jpg"
    },
    {
      "embedding": [
        13.371387481689453,
        1.3171857595443726
      ],
      "label": 26,
      "category": "bell pepper",
      "sprite_path": "static/dump/umap/static/train/pomegranate/Image_58.jpg"
    },
    {
      "embedding": [
        8.716294288635254,
        1.5688079595565796
      ],
      "label": 26,
      "category": "bell pepper",
      "sprite_path": "static/dump/umap/static/train/pomegranate/Image_97.jpg"
    },
    {
      "embedding": [
        7.121618270874023,
        3.2989113330841064
      ],
      "label": 26,
      "category": "bell pepper",
      "sprite_path": "static/dump/umap/static/train/pomegranate/Image_30.jpg"
    },
    {
      "embedding": [
        7.530813217163086,
        2.165311813354492
      ],
      "label": 26,
      "category": "bell pepper",
      "sprite_path": "static/dump/umap/static/train/pomegranate/Image_5.jpg"
    },
    {
      "embedding": [
        3.9599950313568115,
        4.430055141448975
      ],
      "label": 26,
      "category": "bell pepper",
      "sprite_path": "static/dump/umap/static/train/pomegranate/Image_100.jpg"
    },
    {
      "embedding": [
        8.214146614074707,
        1.1659507751464844
      ],
      "label": 26,
      "category": "bell pepper",
      "sprite_path": "static/dump/umap/static/train/pomegranate/Image_67.png"
    },
    {
      "embedding": [
        9.882110595703125,
        1.847040057182312
      ],
      "label": 26,
      "category": "bell pepper",
      "sprite_path": "static/dump/umap/static/train/pomegranate/Image_70.jpg"
    },
    {
      "embedding": [
        7.5321502685546875,
        2.874767780303955
      ],
      "label": 26,
      "category": "bell pepper",
      "sprite_path": "static/dump/umap/static/train/pomegranate/Image_15.jpg"
    },
    {
      "embedding": [
        8.31539535522461,
        0.6571667194366455
      ],
      "label": 26,
      "category": "bell pepper",
      "sprite_path": "static/dump/umap/static/train/pomegranate/Image_35.jpg"
    },
    {
      "embedding": [
        12.090494155883789,
        1.1628029346466064
      ],
      "label": 26,
      "category": "bell pepper",
      "sprite_path": "static/dump/umap/static/train/pomegranate/Image_28.jpeg"
    },
    {
      "embedding": [
        7.475590705871582,
        2.622098207473755
      ],
      "label": 26,
      "category": "bell pepper",
      "sprite_path": "static/dump/umap/static/train/pomegranate/Image_14.jpg"
    },
    {
      "embedding": [
        2.488915205001831,
        4.313328266143799
      ],
      "label": 26,
      "category": "bell pepper",
      "sprite_path": "static/dump/umap/static/train/pomegranate/Image_39.jpg"
    },
    {
      "embedding": [
        4.256964683532715,
        4.778663158416748
      ],
      "label": 26,
      "category": "bell pepper",
      "sprite_path": "static/dump/umap/static/train/pomegranate/Image_63.jpg"
    },
    {
      "embedding": [
        4.327707767486572,
        4.901710510253906
      ],
      "label": 26,
      "category": "bell pepper",
      "sprite_path": "static/dump/umap/static/train/pomegranate/Image_75.jpg"
    },
    {
      "embedding": [
        4.415065288543701,
        4.910565376281738
      ],
      "label": 26,
      "category": "bell pepper",
      "sprite_path": "static/dump/umap/static/train/pomegranate/Image_24.jpg"
    },
    {
      "embedding": [
        12.857437133789062,
        0.7632043361663818
      ],
      "label": 26,
      "category": "bell pepper",
      "sprite_path": "static/dump/umap/static/train/pomegranate/Image_99.jpg"
    },
    {
      "embedding": [
        7.3909592628479,
        3.1968894004821777
      ],
      "label": 26,
      "category": "bell pepper",
      "sprite_path": "static/dump/umap/static/train/pomegranate/Image_32.jpg"
    },
    {
      "embedding": [
        7.876770496368408,
        1.7937692403793335
      ],
      "label": 26,
      "category": "bell pepper",
      "sprite_path": "static/dump/umap/static/train/pomegranate/Image_80.png"
    },
    {
      "embedding": [
        10.11231803894043,
        1.0533932447433472
      ],
      "label": 26,
      "category": "bell pepper",
      "sprite_path": "static/dump/umap/static/train/pomegranate/Image_37.jpg"
    },
    {
      "embedding": [
        10.580426216125488,
        1.5282398462295532
      ],
      "label": 26,
      "category": "bell pepper",
      "sprite_path": "static/dump/umap/static/train/pomegranate/Image_51.jpg"
    },
    {
      "embedding": [
        4.475856781005859,
        4.784756660461426
      ],
      "label": 26,
      "category": "bell pepper",
      "sprite_path": "static/dump/umap/static/train/pomegranate/Image_54.jpg"
    },
    {
      "embedding": [
        12.937028884887695,
        0.9824286699295044
      ],
      "label": 26,
      "category": "bell pepper",
      "sprite_path": "static/dump/umap/static/train/pomegranate/Image_36.jpg"
    },
    {
      "embedding": [
        2.9027981758117676,
        4.507486343383789
      ],
      "label": 26,
      "category": "bell pepper",
      "sprite_path": "static/dump/umap/static/train/pomegranate/Image_31.jpg"
    },
    {
      "embedding": [
        12.412494659423828,
        0.9965770840644836
      ],
      "label": 26,
      "category": "bell pepper",
      "sprite_path": "static/dump/umap/static/train/pomegranate/Image_2.jpg"
    },
    {
      "embedding": [
        12.347146987915039,
        1.1601366996765137
      ],
      "label": 26,
      "category": "bell pepper",
      "sprite_path": "static/dump/umap/static/train/pomegranate/Image_3.jpg"
    },
    {
      "embedding": [
        4.372618198394775,
        4.915270805358887
      ],
      "label": 26,
      "category": "bell pepper",
      "sprite_path": "static/dump/umap/static/train/pomegranate/Image_26.jpg"
    },
    {
      "embedding": [
        9.679615020751953,
        0.4607328772544861
      ],
      "label": 26,
      "category": "bell pepper",
      "sprite_path": "static/dump/umap/static/train/pomegranate/Image_66.jpg"
    },
    {
      "embedding": [
        6.275610446929932,
        3.6415224075317383
      ],
      "label": 26,
      "category": "bell pepper",
      "sprite_path": "static/dump/umap/static/train/pomegranate/Image_87.jpg"
    },
    {
      "embedding": [
        8.78801155090332,
        2.3554141521453857
      ],
      "label": 26,
      "category": "bell pepper",
      "sprite_path": "static/dump/umap/static/train/pomegranate/Image_43.jpg"
    },
    {
      "embedding": [
        4.683072566986084,
        3.789633274078369
      ],
      "label": 26,
      "category": "bell pepper",
      "sprite_path": "static/dump/umap/static/train/pomegranate/Image_18.jpg"
    },
    {
      "embedding": [
        12.554683685302734,
        1.143578290939331
      ],
      "label": 26,
      "category": "bell pepper",
      "sprite_path": "static/dump/umap/static/train/spinach/Image_89.jpg"
    },
    {
      "embedding": [
        9.07050895690918,
        0.2053048014640808
      ],
      "label": 26,
      "category": "bell pepper",
      "sprite_path": "static/dump/umap/static/train/spinach/Image_65.jpg"
    },
    {
      "embedding": [
        9.295350074768066,
        1.0667524337768555
      ],
      "label": 26,
      "category": "bell pepper",
      "sprite_path": "static/dump/umap/static/train/spinach/Image_1.jpg"
    },
    {
      "embedding": [
        2.483760118484497,
        4.285231590270996
      ],
      "label": 26,
      "category": "bell pepper",
      "sprite_path": "static/dump/umap/static/train/spinach/Image_16.jpg"
    },
    {
      "embedding": [
        11.40708065032959,
        0.4779442846775055
      ],
      "label": 26,
      "category": "bell pepper",
      "sprite_path": "static/dump/umap/static/train/spinach/Image_57.jpg"
    },
    {
      "embedding": [
        10.958641052246094,
        1.6808449029922485
      ],
      "label": 26,
      "category": "bell pepper",
      "sprite_path": "static/dump/umap/static/train/spinach/Image_12.jpg"
    },
    {
      "embedding": [
        9.565160751342773,
        0.3218892812728882
      ],
      "label": 26,
      "category": "bell pepper",
      "sprite_path": "static/dump/umap/static/train/spinach/Image_33.jpg"
    },
    {
      "embedding": [
        8.569149017333984,
        1.1859341859817505
      ],
      "label": 26,
      "category": "bell pepper",
      "sprite_path": "static/dump/umap/static/train/spinach/Image_45.jpg"
    },
    {
      "embedding": [
        8.3406343460083,
        2.0117554664611816
      ],
      "label": 26,
      "category": "bell pepper",
      "sprite_path": "static/dump/umap/static/train/spinach/Image_94.jpg"
    },
    {
      "embedding": [
        12.816105842590332,
        0.7551175951957703
      ],
      "label": 26,
      "category": "bell pepper",
      "sprite_path": "static/dump/umap/static/train/spinach/Image_40.jpg"
    },
    {
      "embedding": [
        3.042961359024048,
        4.581993103027344
      ],
      "label": 30,
      "category": "corn",
      "sprite_path": "static/dump/umap/static/train/spinach/Image_90.png"
    },
    {
      "embedding": [
        2.5131685733795166,
        4.051571846008301
      ],
      "label": 30,
      "category": "corn",
      "sprite_path": "static/dump/umap/static/train/spinach/Image_10.jpg"
    },
    {
      "embedding": [
        8.602778434753418,
        1.5924264192581177
      ],
      "label": 30,
      "category": "corn",
      "sprite_path": "static/dump/umap/static/train/spinach/Image_21.jpg"
    },
    {
      "embedding": [
        4.536508560180664,
        3.8516697883605957
      ],
      "label": 30,
      "category": "corn",
      "sprite_path": "static/dump/umap/static/train/spinach/Image_78.jpg"
    },
    {
      "embedding": [
        2.0488405227661133,
        3.9816737174987793
      ],
      "label": 30,
      "category": "corn",
      "sprite_path": "static/dump/umap/static/train/spinach/Image_59.jpg"
    },
    {
      "embedding": [
        9.95512580871582,
        2.3622195720672607
      ],
      "label": 30,
      "category": "corn",
      "sprite_path": "static/dump/umap/static/train/spinach/Image_4.jpg"
    },
    {
      "embedding": [
        11.706748008728027,
        1.0989917516708374
      ],
      "label": 30,
      "category": "corn",
      "sprite_path": "static/dump/umap/static/train/spinach/Image_38.jpg"
    },
    {
      "embedding": [
        9.495089530944824,
        2.5579161643981934
      ],
      "label": 30,
      "category": "corn",
      "sprite_path": "static/dump/umap/static/train/spinach/Image_41.jpg"
    },
    {
      "embedding": [
        8.617380142211914,
        1.5555756092071533
      ],
      "label": 30,
      "category": "corn",
      "sprite_path": "static/dump/umap/static/train/spinach/Image_7.jpg"
    },
    {
      "embedding": [
        9.47152042388916,
        0.8520044684410095
      ],
      "label": 30,
      "category": "corn",
      "sprite_path": "static/dump/umap/static/train/spinach/Image_69.jpg"
    },
    {
      "embedding": [
        12.660745620727539,
        1.6014248132705688
      ],
      "label": 30,
      "category": "corn",
      "sprite_path": "static/dump/umap/static/train/spinach/Image_48.jpg"
    },
    {
      "embedding": [
        4.369267463684082,
        4.054813385009766
      ],
      "label": 30,
      "category": "corn",
      "sprite_path": "static/dump/umap/static/train/spinach/Image_60.jpg"
    },
    {
      "embedding": [
        10.658889770507812,
        1.1806015968322754
      ],
      "label": 30,
      "category": "corn",
      "sprite_path": "static/dump/umap/static/train/spinach/Image_63.png"
    },
    {
      "embedding": [
        9.067926406860352,
        2.2026877403259277
      ],
      "label": 30,
      "category": "corn",
      "sprite_path": "static/dump/umap/static/train/spinach/Image_13.jpg"
    },
    {
      "embedding": [
        7.317829608917236,
        3.612607479095459
      ],
      "label": 30,
      "category": "corn",
      "sprite_path": "static/dump/umap/static/train/spinach/Image_95.jpg"
    },
    {
      "embedding": [
        9.245340347290039,
        1.6462689638137817
      ],
      "label": 30,
      "category": "corn",
      "sprite_path": "static/dump/umap/static/train/spinach/Image_86.jpg"
    },
    {
      "embedding": [
        10.957691192626953,
        0.7457164525985718
      ],
      "label": 30,
      "category": "corn",
      "sprite_path": "static/dump/umap/static/train/spinach/Image_23.jpg"
    },
    {
      "embedding": [
        10.48779582977295,
        1.4622488021850586
      ],
      "label": 30,
      "category": "corn",
      "sprite_path": "static/dump/umap/static/train/spinach/Image_8.jpg"
    },
    {
      "embedding": [
        4.308269023895264,
        3.6985116004943848
      ],
      "label": 30,
      "category": "corn",
      "sprite_path": "static/dump/umap/static/train/spinach/Image_22.jpg"
    },
    {
      "embedding": [
        10.783452033996582,
        1.4405094385147095
      ],
      "label": 30,
      "category": "corn",
      "sprite_path": "static/dump/umap/static/train/spinach/Image_79.jpg"
    },
    {
      "embedding": [
        9.401422500610352,
        2.6111903190612793
      ],
      "label": 30,
      "category": "corn",
      "sprite_path": "static/dump/umap/static/train/spinach/Image_17.jpg"
    },
    {
      "embedding": [
        10.229205131530762,
        0.730800986289978
      ],
      "label": 30,
      "category": "corn",
      "sprite_path": "static/dump/umap/static/train/spinach/Image_77.jpg"
    },
    {
      "embedding": [
        11.030750274658203,
        0.830531120300293
      ],
      "label": 30,
      "category": "corn",
      "sprite_path": "static/dump/umap/static/train/spinach/Image_25.jpg"
    },
    {
      "embedding": [
        13.13982105255127,
        1.002453088760376
      ],
      "label": 30,
      "category": "corn",
      "sprite_path": "static/dump/umap/static/train/spinach/Image_46.jpg"
    },
    {
      "embedding": [
        4.126423358917236,
        4.132812023162842
      ],
      "label": 30,
      "category": "corn",
      "sprite_path": "static/dump/umap/static/train/spinach/Image_9.jpg"
    },
    {
      "embedding": [
        11.30840015411377,
        0.9287462830543518
      ],
      "label": 30,
      "category": "corn",
      "sprite_path": "static/dump/umap/static/train/spinach/Image_34.jpg"
    },
    {
      "embedding": [
        4.501521587371826,
        3.637493848800659
      ],
      "label": 30,
      "category": "corn",
      "sprite_path": "static/dump/umap/static/train/spinach/Image_81.jpg"
    },
    {
      "embedding": [
        11.797063827514648,
        0.8788406848907471
      ],
      "label": 30,
      "category": "corn",
      "sprite_path": "static/dump/umap/static/train/spinach/Image_52.jpeg"
    },
    {
      "embedding": [
        11.05940055847168,
        1.1007150411605835
      ],
      "label": 30,
      "category": "corn",
      "sprite_path": "static/dump/umap/static/train/spinach/Image_6.jpg"
    },
    {
      "embedding": [
        11.222894668579102,
        0.8315380215644836
      ],
      "label": 30,
      "category": "corn",
      "sprite_path": "static/dump/umap/static/train/spinach/Image_20.jpg"
    },
    {
      "embedding": [
        3.4766244888305664,
        3.96921968460083
      ],
      "label": 30,
      "category": "corn",
      "sprite_path": "static/dump/umap/static/train/spinach/Image_98.jpg"
    },
    {
      "embedding": [
        11.680642127990723,
        0.5965763330459595
      ],
      "label": 30,
      "category": "corn",
      "sprite_path": "static/dump/umap/static/train/spinach/Image_47.jpg"
    },
    {
      "embedding": [
        8.194973945617676,
        3.089162826538086
      ],
      "label": 30,
      "category": "corn",
      "sprite_path": "static/dump/umap/static/train/spinach/Image_19.jpg"
    },
    {
      "embedding": [
        4.524821758270264,
        4.179764270782471
      ],
      "label": 30,
      "category": "corn",
      "sprite_path": "static/dump/umap/static/train/spinach/Image_88.jpg"
    },
    {
      "embedding": [
        9.952390670776367,
        2.0784499645233154
      ],
      "label": 30,
      "category": "corn",
      "sprite_path": "static/dump/umap/static/train/spinach/Image_29.jpg"
    },
    {
      "embedding": [
        9.405108451843262,
        2.0751073360443115
      ],
      "label": 30,
      "category": "corn",
      "sprite_path": "static/dump/umap/static/train/spinach/Image_61.jpg"
    },
    {
      "embedding": [
        11.382563591003418,
        0.6200551986694336
      ],
      "label": 30,
      "category": "corn",
      "sprite_path": "static/dump/umap/static/train/spinach/Image_84.jpg"
    },
    {
      "embedding": [
        10.439266204833984,
        1.4756059646606445
      ],
      "label": 30,
      "category": "corn",
      "sprite_path": "static/dump/umap/static/train/spinach/Image_85.jpg"
    },
    {
      "embedding": [
        11.156221389770508,
        1.3487800359725952
      ],
      "label": 30,
      "category": "corn",
      "sprite_path": "static/dump/umap/static/train/spinach/Image_74.jpg"
    },
    {
      "embedding": [
        4.235077857971191,
        3.931684970855713
      ],
      "label": 30,
      "category": "corn",
      "sprite_path": "static/dump/umap/static/train/spinach/Image_53.jpg"
    },
    {
      "embedding": [
        11.818931579589844,
        0.8572105765342712
      ],
      "label": 30,
      "category": "corn",
      "sprite_path": "static/dump/umap/static/train/spinach/Image_92.jpg"
    },
    {
      "embedding": [
        10.870521545410156,
        1.3882824182510376
      ],
      "label": 30,
      "category": "corn",
      "sprite_path": "static/dump/umap/static/train/spinach/Image_27.jpg"
    },
    {
      "embedding": [
        9.706475257873535,
        0.8449066877365112
      ],
      "label": 30,
      "category": "corn",
      "sprite_path": "static/dump/umap/static/train/spinach/Image_55.jpg"
    },
    {
      "embedding": [
        6.8531999588012695,
        3.3158652782440186
      ],
      "label": 30,
      "category": "corn",
      "sprite_path": "static/dump/umap/static/train/spinach/Image_44.jpg"
    },
    {
      "embedding": [
        9.360316276550293,
        2.823328733444214
      ],
      "label": 30,
      "category": "corn",
      "sprite_path": "static/dump/umap/static/train/spinach/Image_72.jpg"
    },
    {
      "embedding": [
        8.575196266174316,
        1.8037396669387817
      ],
      "label": 30,
      "category": "corn",
      "sprite_path": "static/dump/umap/static/train/spinach/Image_73.jpg"
    },
    {
      "embedding": [
        11.259232521057129,
        0.7427656650543213
      ],
      "label": 30,
      "category": "corn",
      "sprite_path": "static/dump/umap/static/train/spinach/Image_96.jpg"
    },
    {
      "embedding": [
        10.806649208068848,
        1.4110684394836426
      ],
      "label": 30,
      "category": "corn",
      "sprite_path": "static/dump/umap/static/train/spinach/Image_83.jpg"
    },
    {
      "embedding": [
        1.8505632877349854,
        4.053819179534912
      ],
      "label": 30,
      "category": "corn",
      "sprite_path": "static/dump/umap/static/train/spinach/Image_11.jpg"
    },
    {
      "embedding": [
        7.682065486907959,
        3.3447887897491455
      ],
      "label": 30,
      "category": "corn",
      "sprite_path": "static/dump/umap/static/train/spinach/Image_82.jpg"
    },
    {
      "embedding": [
        10.661881446838379,
        1.3200618028640747
      ],
      "label": 30,
      "category": "corn",
      "sprite_path": "static/dump/umap/static/train/spinach/Image_50.jpg"
    },
    {
      "embedding": [
        10.161158561706543,
        1.7839055061340332
      ],
      "label": 30,
      "category": "corn",
      "sprite_path": "static/dump/umap/static/train/spinach/Image_58.jpg"
    },
    {
      "embedding": [
        10.71053695678711,
        2.0095083713531494
      ],
      "label": 30,
      "category": "corn",
      "sprite_path": "static/dump/umap/static/train/spinach/Image_97.jpg"
    },
    {
      "embedding": [
        11.81902027130127,
        0.6991066336631775
      ],
      "label": 30,
      "category": "corn",
      "sprite_path": "static/dump/umap/static/train/spinach/Image_68.png"
    },
    {
      "embedding": [
        5.831135272979736,
        3.884169340133667
      ],
      "label": 30,
      "category": "corn",
      "sprite_path": "static/dump/umap/static/train/spinach/Image_62.jpg"
    },
    {
      "embedding": [
        9.90754222869873,
        2.0889699459075928
      ],
      "label": 30,
      "category": "corn",
      "sprite_path": "static/dump/umap/static/train/spinach/Image_30.jpg"
    },
    {
      "embedding": [
        11.440923690795898,
        1.0181416273117065
      ],
      "label": 30,
      "category": "corn",
      "sprite_path": "static/dump/umap/static/train/spinach/Image_5.jpg"
    },
    {
      "embedding": [
        10.563529968261719,
        1.6462841033935547
      ],
      "label": 30,
      "category": "corn",
      "sprite_path": "static/dump/umap/static/train/spinach/Image_100.jpg"
    },
    {
      "embedding": [
        10.987154006958008,
        1.1550190448760986
      ],
      "label": 30,
      "category": "corn",
      "sprite_path": "static/dump/umap/static/train/spinach/Image_67.png"
    },
    {
      "embedding": [
        11.105072975158691,
        0.9466817378997803
      ],
      "label": 30,
      "category": "corn",
      "sprite_path": "static/dump/umap/static/train/spinach/Image_15.jpg"
    },
    {
      "embedding": [
        2.606957197189331,
        4.169633865356445
      ],
      "label": 30,
      "category": "corn",
      "sprite_path": "static/dump/umap/static/train/spinach/Image_35.jpg"
    },
    {
      "embedding": [
        11.097838401794434,
        1.1468812227249146
      ],
      "label": 30,
      "category": "corn",
      "sprite_path": "static/dump/umap/static/train/spinach/Image_14.jpg"
    },
    {
      "embedding": [
        3.2874562740325928,
        4.376864433288574
      ],
      "label": 30,
      "category": "corn",
      "sprite_path": "static/dump/umap/static/train/spinach/Image_39.jpg"
    },
    {
      "embedding": [
        10.214197158813477,
        1.2121411561965942
      ],
      "label": 30,
      "category": "corn",
      "sprite_path": "static/dump/umap/static/train/spinach/Image_76.jpg"
    },
    {
      "embedding": [
        4.228367805480957,
        4.370386600494385
      ],
      "label": 30,
      "category": "corn",
      "sprite_path": "static/dump/umap/static/train/spinach/Image_75.jpg"
    },
    {
      "embedding": [
        9.315135955810547,
        1.5726484060287476
      ],
      "label": 30,
      "category": "corn",
      "sprite_path": "static/dump/umap/static/train/spinach/Image_24.jpg"
    },
    {
      "embedding": [
        11.333067893981934,
        0.8403715491294861
      ],
      "label": 30,
      "category": "corn",
      "sprite_path": "static/dump/umap/static/train/spinach/Image_99.jpg"
    },
    {
      "embedding": [
        10.41641902923584,
        1.478197693824768
      ],
      "label": 30,
      "category": "corn",
      "sprite_path": "static/dump/umap/static/train/spinach/Image_32.jpg"
    },
    {
      "embedding": [
        6.329779624938965,
        3.407155990600586
      ],
      "label": 30,
      "category": "corn",
      "sprite_path": "static/dump/umap/static/train/spinach/Image_80.png"
    },
    {
      "embedding": [
        9.749155044555664,
        0.8493620157241821
      ],
      "label": 30,
      "category": "corn",
      "sprite_path": "static/dump/umap/static/train/spinach/Image_37.jpg"
    },
    {
      "embedding": [
        4.319767951965332,
        3.6959733963012695
      ],
      "label": 30,
      "category": "corn",
      "sprite_path": "static/dump/umap/static/train/spinach/Image_51.jpg"
    },
    {
      "embedding": [
        1.6337448358535767,
        4.063877105712891
      ],
      "label": 30,
      "category": "corn",
      "sprite_path": "static/dump/umap/static/train/spinach/Image_28.jpg"
    },
    {
      "embedding": [
        3.737035036087036,
        4.144479274749756
      ],
      "label": 30,
      "category": "corn",
      "sprite_path": "static/dump/umap/static/train/spinach/Image_54.jpg"
    },
    {
      "embedding": [
        10.751287460327148,
        1.5102434158325195
      ],
      "label": 30,
      "category": "corn",
      "sprite_path": "static/dump/umap/static/train/spinach/Image_93.jpg"
    },
    {
      "embedding": [
        11.068504333496094,
        0.7603060007095337
      ],
      "label": 30,
      "category": "corn",
      "sprite_path": "static/dump/umap/static/train/spinach/Image_36.jpg"
    },
    {
      "embedding": [
        10.689860343933105,
        1.1800681352615356
      ],
      "label": 30,
      "category": "corn",
      "sprite_path": "static/dump/umap/static/train/spinach/Image_42.jpg"
    },
    {
      "embedding": [
        11.054150581359863,
        1.0227954387664795
      ],
      "label": 30,
      "category": "corn",
      "sprite_path": "static/dump/umap/static/train/spinach/Image_31.jpg"
    },
    {
      "embedding": [
        11.533967971801758,
        0.7530139684677124
      ],
      "label": 30,
      "category": "corn",
      "sprite_path": "static/dump/umap/static/train/spinach/Image_49.png"
    },
    {
      "embedding": [
        10.77237319946289,
        1.3715921640396118
      ],
      "label": 30,
      "category": "corn",
      "sprite_path": "static/dump/umap/static/train/spinach/Image_2.jpg"
    },
    {
      "embedding": [
        11.732447624206543,
        0.9011932611465454
      ],
      "label": 30,
      "category": "corn",
      "sprite_path": "static/dump/umap/static/train/spinach/Image_3.jpg"
    },
    {
      "embedding": [
        8.767520904541016,
        3.6940009593963623
      ],
      "label": 30,
      "category": "corn",
      "sprite_path": "static/dump/umap/static/train/spinach/Image_26.jpg"
    },
    {
      "embedding": [
        13.127497673034668,
        1.0022236108779907
      ],
      "label": 30,
      "category": "corn",
      "sprite_path": "static/dump/umap/static/train/spinach/Image_66.jpg"
    },
    {
      "embedding": [
        11.534506797790527,
        0.6430356502532959
      ],
      "label": 30,
      "category": "corn",
      "sprite_path": "static/dump/umap/static/train/spinach/Image_43.jpg"
    },
    {
      "embedding": [
        10.967267990112305,
        1.1106075048446655
      ],
      "label": 30,
      "category": "corn",
      "sprite_path": "static/dump/umap/static/train/spinach/Image_18.jpg"
    },
    {
      "embedding": [
        2.285316228866577,
        4.18457555770874
      ],
      "label": 30,
      "category": "corn",
      "sprite_path": "static/dump/umap/static/train/onion/Image_89.jpg"
    },
    {
      "embedding": [
        10.544183731079102,
        1.6027894020080566
      ],
      "label": 30,
      "category": "corn",
      "sprite_path": "static/dump/umap/static/train/onion/Image_65.jpg"
    },
    {
      "embedding": [
        4.083516597747803,
        3.970707893371582
      ],
      "label": 30,
      "category": "corn",
      "sprite_path": "static/dump/umap/static/train/onion/Image_1.jpg"
    },
    {
      "embedding": [
        11.233101844787598,
        1.0228416919708252
      ],
      "label": 30,
      "category": "corn",
      "sprite_path": "static/dump/umap/static/train/onion/Image_71.png"
    },
    {
      "embedding": [
        3.6555914878845215,
        3.9219484329223633
      ],
      "label": 30,
      "category": "corn",
      "sprite_path": "static/dump/umap/static/train/onion/Image_16.jpg"
    },
    {
      "embedding": [
        5.1026611328125,
        4.211329936981201
      ],
      "label": 30,
      "category": "corn",
      "sprite_path": "static/dump/umap/static/train/onion/Image_12.jpg"
    },
    {
      "embedding": [
        12.718352317810059,
        1.0809615850448608
      ],
      "label": 30,
      "category": "corn",
      "sprite_path": "static/dump/umap/static/train/onion/Image_56.jpg"
    },
    {
      "embedding": [
        4.488935947418213,
        3.6618785858154297
      ],
      "label": 30,
      "category": "corn",
      "sprite_path": "static/dump/umap/static/train/onion/Image_45.jpg"
    },
    {
      "embedding": [
        11.065751075744629,
        0.8899566531181335
      ],
      "label": 30,
      "category": "corn",
      "sprite_path": "static/dump/umap/static/train/onion/Image_40.jpg"
    },
    {
      "embedding": [
        10.158426284790039,
        0.41767099499702454
      ],
      "label": 30,
      "category": "corn",
      "sprite_path": "static/dump/umap/static/train/onion/Image_10.jpg"
    },
    {
      "embedding": [
        7.42500638961792,
        3.214456796646118
      ],
      "label": 30,
      "category": "corn",
      "sprite_path": "static/dump/umap/static/train/onion/Image_21.jpg"
    },
    {
      "embedding": [
        8.871849060058594,
        3.5800516605377197
      ],
      "label": 30,
      "category": "corn",
      "sprite_path": "static/dump/umap/static/train/onion/Image_59.jpg"
    },
    {
      "embedding": [
        9.892984390258789,
        1.3842949867248535
      ],
      "label": 30,
      "category": "corn",
      "sprite_path": "static/dump/umap/static/train/onion/Image_4.jpg"
    },
    {
      "embedding": [
        12.831303596496582,
        0.7178974151611328
      ],
      "label": 20,
      "category": "soy beans",
      "sprite_path": "static/dump/umap/static/train/onion/Image_38.jpg"
    },
    {
      "embedding": [
        12.836627960205078,
        0.6488397717475891
      ],
      "label": 20,
      "category": "soy beans",
      "sprite_path": "static/dump/umap/static/train/onion/Image_41.jpg"
    },
    {
      "embedding": [
        2.002925157546997,
        5.603531837463379
      ],
      "label": 20,
      "category": "soy beans",
      "sprite_path": "static/dump/umap/static/train/onion/Image_7.jpg"
    },
    {
      "embedding": [
        13.349647521972656,
        1.287896752357483
      ],
      "label": 20,
      "category": "soy beans",
      "sprite_path": "static/dump/umap/static/train/onion/Image_69.jpg"
    },
    {
      "embedding": [
        1.3819156885147095,
        4.44966983795166
      ],
      "label": 20,
      "category": "soy beans",
      "sprite_path": "static/dump/umap/static/train/onion/Image_48.jpg"
    },
    {
      "embedding": [
        2.10323166847229,
        5.341975688934326
      ],
      "label": 20,
      "category": "soy beans",
      "sprite_path": "static/dump/umap/static/train/onion/Image_60.jpg"
    },
    {
      "embedding": [
        2.8384265899658203,
        4.136240482330322
      ],
      "label": 20,
      "category": "soy beans",
      "sprite_path": "static/dump/umap/static/train/onion/Image_63.png"
    },
    {
      "embedding": [
        12.809090614318848,
        0.6724066138267517
      ],
      "label": 20,
      "category": "soy beans",
      "sprite_path": "static/dump/umap/static/train/onion/Image_35.png"
    },
    {
      "embedding": [
        12.690926551818848,
        0.7211669087409973
      ],
      "label": 20,
      "category": "soy beans",
      "sprite_path": "static/dump/umap/static/train/onion/Image_13.jpg"
    },
    {
      "embedding": [
        2.704746723175049,
        4.037341117858887
      ],
      "label": 20,
      "category": "soy beans",
      "sprite_path": "static/dump/umap/static/train/onion/Image_91.jpg"
    },
    {
      "embedding": [
        1.7882736921310425,
        5.598311901092529
      ],
      "label": 20,
      "category": "soy beans",
      "sprite_path": "static/dump/umap/static/train/onion/Image_95.jpg"
    },
    {
      "embedding": [
        8.708537101745605,
        2.4616358280181885
      ],
      "label": 20,
      "category": "soy beans",
      "sprite_path": "static/dump/umap/static/train/onion/Image_86.jpg"
    },
    {
      "embedding": [
        8.65247917175293,
        2.202554941177368
      ],
      "label": 20,
      "category": "soy beans",
      "sprite_path": "static/dump/umap/static/train/onion/Image_23.jpg"
    },
    {
      "embedding": [
        6.964670658111572,
        2.6254022121429443
      ],
      "label": 20,
      "category": "soy beans",
      "sprite_path": "static/dump/umap/static/train/onion/Image_8.jpg"
    },
    {
      "embedding": [
        8.397083282470703,
        0.6521123051643372
      ],
      "label": 20,
      "category": "soy beans",
      "sprite_path": "static/dump/umap/static/train/onion/Image_22.jpg"
    },
    {
      "embedding": [
        9.709778785705566,
        1.7484655380249023
      ],
      "label": 20,
      "category": "soy beans",
      "sprite_path": "static/dump/umap/static/train/onion/Image_79.jpg"
    },
    {
      "embedding": [
        7.010389804840088,
        2.8743889331817627
      ],
      "label": 20,
      "category": "soy beans",
      "sprite_path": "static/dump/umap/static/train/onion/Image_17.jpg"
    },
    {
      "embedding": [
        13.075066566467285,
        1.7158061265945435
      ],
      "label": 20,
      "category": "soy beans",
      "sprite_path": "static/dump/umap/static/train/onion/Image_25.jpg"
    },
    {
      "embedding": [
        6.00760555267334,
        3.602217435836792
      ],
      "label": 20,
      "category": "soy beans",
      "sprite_path": "static/dump/umap/static/train/onion/Image_46.jpg"
    },
    {
      "embedding": [
        9.512052536010742,
        1.990738034248352
      ],
      "label": 20,
      "category": "soy beans",
      "sprite_path": "static/dump/umap/static/train/onion/Image_81.jpg"
    },
    {
      "embedding": [
        13.071706771850586,
        1.7684911489486694
      ],
      "label": 20,
      "category": "soy beans",
      "sprite_path": "static/dump/umap/static/train/onion/Image_9.png"
    },
    {
      "embedding": [
        12.804239273071289,
        2.722060441970825
      ],
      "label": 20,
      "category": "soy beans",
      "sprite_path": "static/dump/umap/static/train/onion/Image_6.jpg"
    },
    {
      "embedding": [
        12.158354759216309,
        2.7004787921905518
      ],
      "label": 20,
      "category": "soy beans",
      "sprite_path": "static/dump/umap/static/train/onion/Image_37.png"
    },
    {
      "embedding": [
        12.333368301391602,
        1.460835337638855
      ],
      "label": 20,
      "category": "soy beans",
      "sprite_path": "static/dump/umap/static/train/onion/Image_20.jpg"
    },
    {
      "embedding": [
        2.6887383460998535,
        4.025759220123291
      ],
      "label": 20,
      "category": "soy beans",
      "sprite_path": "static/dump/umap/static/train/onion/Image_78.png"
    },
    {
      "embedding": [
        6.097647666931152,
        3.8614375591278076
      ],
      "label": 20,
      "category": "soy beans",
      "sprite_path": "static/dump/umap/static/train/onion/Image_98.jpg"
    },
    {
      "embedding": [
        3.4005846977233887,
        4.953792572021484
      ],
      "label": 20,
      "category": "soy beans",
      "sprite_path": "static/dump/umap/static/train/onion/Image_47.jpg"
    },
    {
      "embedding": [
        1.2171342372894287,
        5.168221473693848
      ],
      "label": 20,
      "category": "soy beans",
      "sprite_path": "static/dump/umap/static/train/onion/Image_19.jpg"
    },
    {
      "embedding": [
        8.745269775390625,
        0.36845681071281433
      ],
      "label": 20,
      "category": "soy beans",
      "sprite_path": "static/dump/umap/static/train/onion/Image_88.jpg"
    },
    {
      "embedding": [
        12.285639762878418,
        2.109158515930176
      ],
      "label": 20,
      "category": "soy beans",
      "sprite_path": "static/dump/umap/static/train/onion/Image_29.jpg"
    },
    {
      "embedding": [
        3.089639663696289,
        4.925593376159668
      ],
      "label": 20,
      "category": "soy beans",
      "sprite_path": "static/dump/umap/static/train/onion/Image_61.jpg"
    },
    {
      "embedding": [
        2.6931867599487305,
        4.1321702003479
      ],
      "label": 20,
      "category": "soy beans",
      "sprite_path": "static/dump/umap/static/train/onion/Image_84.jpg"
    },
    {
      "embedding": [
        3.5741162300109863,
        4.650633811950684
      ],
      "label": 20,
      "category": "soy beans",
      "sprite_path": "static/dump/umap/static/train/onion/Image_85.jpg"
    },
    {
      "embedding": [
        4.99410343170166,
        4.290520191192627
      ],
      "label": 20,
      "category": "soy beans",
      "sprite_path": "static/dump/umap/static/train/onion/Image_74.jpg"
    },
    {
      "embedding": [
        13.203847885131836,
        2.4278945922851562
      ],
      "label": 20,
      "category": "soy beans",
      "sprite_path": "static/dump/umap/static/train/onion/Image_53.jpg"
    },
    {
      "embedding": [
        12.314251899719238,
        1.4363878965377808
      ],
      "label": 20,
      "category": "soy beans",
      "sprite_path": "static/dump/umap/static/train/onion/Image_92.jpg"
    },
    {
      "embedding": [
        5.244048118591309,
        3.7488443851470947
      ],
      "label": 20,
      "category": "soy beans",
      "sprite_path": "static/dump/umap/static/train/onion/Image_27.jpg"
    },
    {
      "embedding": [
        2.70466685295105,
        4.491474151611328
      ],
      "label": 20,
      "category": "soy beans",
      "sprite_path": "static/dump/umap/static/train/onion/Image_55.jpg"
    },
    {
      "embedding": [
        13.178939819335938,
        2.3837544918060303
      ],
      "label": 20,
      "category": "soy beans",
      "sprite_path": "static/dump/umap/static/train/onion/Image_72.jpg"
    },
    {
      "embedding": [
        12.112144470214844,
        2.7592246532440186
      ],
      "label": 20,
      "category": "soy beans",
      "sprite_path": "static/dump/umap/static/train/onion/Image_33.png"
    },
    {
      "embedding": [
        2.130916118621826,
        5.421521186828613
      ],
      "label": 20,
      "category": "soy beans",
      "sprite_path": "static/dump/umap/static/train/onion/Image_73.jpg"
    },
    {
      "embedding": [
        7.038037300109863,
        2.360414743423462
      ],
      "label": 20,
      "category": "soy beans",
      "sprite_path": "static/dump/umap/static/train/onion/Image_96.jpg"
    },
    {
      "embedding": [
        1.5691511631011963,
        5.804883003234863
      ],
      "label": 20,
      "category": "soy beans",
      "sprite_path": "static/dump/umap/static/train/onion/Image_52.jpg"
    },
    {
      "embedding": [
        9.954957962036133,
        2.99147629737854
      ],
      "label": 20,
      "category": "soy beans",
      "sprite_path": "static/dump/umap/static/train/onion/Image_90.jpg"
    },
    {
      "embedding": [
        5.6025285720825195,
        2.8629987239837646
      ],
      "label": 20,
      "category": "soy beans",
      "sprite_path": "static/dump/umap/static/train/onion/Image_83.jpg"
    },
    {
      "embedding": [
        9.143184661865234,
        2.5061705112457275
      ],
      "label": 20,
      "category": "soy beans",
      "sprite_path": "static/dump/umap/static/train/onion/Image_11.jpg"
    },
    {
      "embedding": [
        1.609703540802002,
        5.605226516723633
      ],
      "label": 20,
      "category": "soy beans",
      "sprite_path": "static/dump/umap/static/train/onion/Image_31.png"
    },
    {
      "embedding": [
        8.258394241333008,
        2.2362022399902344
      ],
      "label": 20,
      "category": "soy beans",
      "sprite_path": "static/dump/umap/static/train/onion/Image_82.jpg"
    },
    {
      "embedding": [
        0.7769173383712769,
        5.258297443389893
      ],
      "label": 20,
      "category": "soy beans",
      "sprite_path": "static/dump/umap/static/train/onion/Image_80.jpg"
    },
    {
      "embedding": [
        6.910734176635742,
        2.859086275100708
      ],
      "label": 20,
      "category": "soy beans",
      "sprite_path": "static/dump/umap/static/train/onion/Image_64.jpeg"
    },
    {
      "embedding": [
        1.3808361291885376,
        4.622452259063721
      ],
      "label": 20,
      "category": "soy beans",
      "sprite_path": "static/dump/umap/static/train/onion/Image_50.jpg"
    },
    {
      "embedding": [
        1.2236860990524292,
        4.793356418609619
      ],
      "label": 20,
      "category": "soy beans",
      "sprite_path": "static/dump/umap/static/train/onion/Image_34.png"
    },
    {
      "embedding": [
        12.728232383728027,
        0.7046731114387512
      ],
      "label": 20,
      "category": "soy beans",
      "sprite_path": "static/dump/umap/static/train/onion/Image_58.jpg"
    },
    {
      "embedding": [
        13.282258033752441,
        2.188739061355591
      ],
      "label": 20,
      "category": "soy beans",
      "sprite_path": "static/dump/umap/static/train/onion/Image_97.jpg"
    },
    {
      "embedding": [
        6.290331840515137,
        2.037125825881958
      ],
      "label": 20,
      "category": "soy beans",
      "sprite_path": "static/dump/umap/static/train/onion/Image_68.png"
    },
    {
      "embedding": [
        1.833745002746582,
        5.936587333679199
      ],
      "label": 20,
      "category": "soy beans",
      "sprite_path": "static/dump/umap/static/train/onion/Image_62.jpg"
    },
    {
      "embedding": [
        2.364654064178467,
        4.240232944488525
      ],
      "label": 20,
      "category": "soy beans",
      "sprite_path": "static/dump/umap/static/train/onion/Image_30.jpg"
    },
    {
      "embedding": [
        2.780731678009033,
        4.540647983551025
      ],
      "label": 20,
      "category": "soy beans",
      "sprite_path": "static/dump/umap/static/train/onion/Image_5.jpg"
    },
    {
      "embedding": [
        10.803240776062012,
        1.07172429561615
      ],
      "label": 20,
      "category": "soy beans",
      "sprite_path": "static/dump/umap/static/train/onion/Image_100.jpg"
    },
    {
      "embedding": [
        1.8046958446502686,
        5.946424961090088
      ],
      "label": 20,
      "category": "soy beans",
      "sprite_path": "static/dump/umap/static/train/onion/Image_70.jpg"
    },
    {
      "embedding": [
        12.344561576843262,
        1.7153048515319824
      ],
      "label": 20,
      "category": "soy beans",
      "sprite_path": "static/dump/umap/static/train/onion/Image_15.jpg"
    },
    {
      "embedding": [
        8.681120872497559,
        0.6911165714263916
      ],
      "label": 20,
      "category": "soy beans",
      "sprite_path": "static/dump/umap/static/train/onion/Image_94.png"
    },
    {
      "embedding": [
        3.399959087371826,
        4.381771087646484
      ],
      "label": 20,
      "category": "soy beans",
      "sprite_path": "static/dump/umap/static/train/onion/Image_14.jpg"
    },
    {
      "embedding": [
        4.562377452850342,
        4.507226467132568
      ],
      "label": 20,
      "category": "soy beans",
      "sprite_path": "static/dump/umap/static/train/onion/Image_39.jpg"
    },
    {
      "embedding": [
        3.7346980571746826,
        3.9699978828430176
      ],
      "label": 20,
      "category": "soy beans",
      "sprite_path": "static/dump/umap/static/train/onion/Image_75.jpg"
    },
    {
      "embedding": [
        8.07751178741455,
        2.6099982261657715
      ],
      "label": 20,
      "category": "soy beans",
      "sprite_path": "static/dump/umap/static/train/onion/Image_24.jpg"
    },
    {
      "embedding": [
        4.472952842712402,
        4.559797286987305
      ],
      "label": 20,
      "category": "soy beans",
      "sprite_path": "static/dump/umap/static/train/onion/Image_99.jpg"
    },
    {
      "embedding": [
        2.159040927886963,
        5.334183692932129
      ],
      "label": 20,
      "category": "soy beans",
      "sprite_path": "static/dump/umap/static/train/onion/Image_32.jpg"
    },
    {
      "embedding": [
        11.903697967529297,
        2.4718825817108154
      ],
      "label": 20,
      "category": "soy beans",
      "sprite_path": "static/dump/umap/static/train/onion/Image_28.jpg"
    },
    {
      "embedding": [
        12.230148315429688,
        1.9812620878219604
      ],
      "label": 20,
      "category": "soy beans",
      "sprite_path": "static/dump/umap/static/train/onion/Image_54.jpg"
    },
    {
      "embedding": [
        1.6759892702102661,
        4.972030162811279
      ],
      "label": 20,
      "category": "soy beans",
      "sprite_path": "static/dump/umap/static/train/onion/Image_93.jpg"
    },
    {
      "embedding": [
        2.7815651893615723,
        4.543379783630371
      ],
      "label": 20,
      "category": "soy beans",
      "sprite_path": "static/dump/umap/static/train/onion/Image_36.jpg"
    },
    {
      "embedding": [
        2.0825881958007812,
        5.642629146575928
      ],
      "label": 20,
      "category": "soy beans",
      "sprite_path": "static/dump/umap/static/train/onion/Image_49.png"
    },
    {
      "embedding": [
        1.599300742149353,
        4.203685283660889
      ],
      "label": 20,
      "category": "soy beans",
      "sprite_path": "static/dump/umap/static/train/onion/Image_2.jpg"
    },
    {
      "embedding": [
        2.054607629776001,
        5.583463668823242
      ],
      "label": 20,
      "category": "soy beans",
      "sprite_path": "static/dump/umap/static/train/onion/Image_3.jpg"
    },
    {
      "embedding": [
        13.217196464538574,
        2.3989388942718506
      ],
      "label": 20,
      "category": "soy beans",
      "sprite_path": "static/dump/umap/static/train/onion/Image_26.jpg"
    },
    {
      "embedding": [
        10.68718147277832,
        1.0126842260360718
      ],
      "label": 20,
      "category": "soy beans",
      "sprite_path": "static/dump/umap/static/train/onion/Image_66.jpg"
    },
    {
      "embedding": [
        6.022104740142822,
        3.871532917022705
      ],
      "label": 20,
      "category": "soy beans",
      "sprite_path": "static/dump/umap/static/train/onion/Image_87.jpg"
    },
    {
      "embedding": [
        1.5282063484191895,
        5.479590892791748
      ],
      "label": 20,
      "category": "soy beans",
      "sprite_path": "static/dump/umap/static/train/onion/Image_43.jpg"
    },
    {
      "embedding": [
        2.5165579319000244,
        4.311532974243164
      ],
      "label": 20,
      "category": "soy beans",
      "sprite_path": "static/dump/umap/static/train/onion/Image_18.jpg"
    },
    {
      "embedding": [
        10.576345443725586,
        0.9112716317176819
      ],
      "label": 20,
      "category": "soy beans",
      "sprite_path": "static/dump/umap/static/train/cauliflower/Image_89.jpg"
    },
    {
      "embedding": [
        7.353210926055908,
        2.05889630317688
      ],
      "label": 20,
      "category": "soy beans",
      "sprite_path": "static/dump/umap/static/train/cauliflower/Image_65.jpg"
    },
    {
      "embedding": [
        1.3972609043121338,
        5.566020965576172
      ],
      "label": 20,
      "category": "soy beans",
      "sprite_path": "static/dump/umap/static/train/cauliflower/Image_1.jpg"
    },
    {
      "embedding": [
        0.8892101049423218,
        4.303665637969971
      ],
      "label": 20,
      "category": "soy beans",
      "sprite_path": "static/dump/umap/static/train/cauliflower/Image_16.jpg"
    },
    {
      "embedding": [
        1.306495189666748,
        5.0928053855896
      ],
      "label": 20,
      "category": "soy beans",
      "sprite_path": "static/dump/umap/static/train/cauliflower/Image_57.jpg"
    },
    {
      "embedding": [
        1.8403023481369019,
        5.564596176147461
      ],
      "label": 20,
      "category": "soy beans",
      "sprite_path": "static/dump/umap/static/train/cauliflower/Image_12.jpg"
    },
    {
      "embedding": [
        12.9177827835083,
        2.269109010696411
      ],
      "label": 20,
      "category": "soy beans",
      "sprite_path": "static/dump/umap/static/train/cauliflower/Image_56.jpg"
    },
    {
      "embedding": [
        1.5633525848388672,
        5.7628493309021
      ],
      "label": 20,
      "category": "soy beans",
      "sprite_path": "static/dump/umap/static/train/cauliflower/Image_40.jpg"
    },
    {
      "embedding": [
        12.880532264709473,
        0.7367134690284729
      ],
      "label": 20,
      "category": "soy beans",
      "sprite_path": "static/dump/umap/static/train/cauliflower/Image_10.jpg"
    },
    {
      "embedding": [
        1.7708779573440552,
        5.35302734375
      ],
      "label": 20,
      "category": "soy beans",
      "sprite_path": "static/dump/umap/static/train/cauliflower/Image_59.jpg"
    },
    {
      "embedding": [
        6.378635406494141,
        3.3324978351593018
      ],
      "label": 20,
      "category": "soy beans",
      "sprite_path": "static/dump/umap/static/train/cauliflower/Image_4.jpg"
    },
    {
      "embedding": [
        2.0028932094573975,
        5.641033172607422
      ],
      "label": 20,
      "category": "soy beans",
      "sprite_path": "static/dump/umap/static/train/cauliflower/Image_38.jpg"
    },
    {
      "embedding": [
        2.739816904067993,
        4.93567419052124
      ],
      "label": 20,
      "category": "soy beans",
      "sprite_path": "static/dump/umap/static/train/cauliflower/Image_41.jpg"
    },
    {
      "embedding": [
        8.61208438873291,
        0.2800484597682953
      ],
      "label": 20,
      "category": "soy beans",
      "sprite_path": "static/dump/umap/static/train/cauliflower/Image_7.jpg"
    },
    {
      "embedding": [
        11.31635570526123,
        2.902215003967285
      ],
      "label": 7,
      "category": "pomegranate",
      "sprite_path": "static/dump/umap/static/train/cauliflower/Image_60.jpg"
    },
    {
      "embedding": [
        9.469952583312988,
        2.8357200622558594
      ],
      "label": 7,
      "category": "pomegranate",
      "sprite_path": "static/dump/umap/static/train/cauliflower/Image_13.jpg"
    },
    {
      "embedding": [
        8.031026840209961,
        3.392462730407715
      ],
      "label": 7,
      "category": "pomegranate",
      "sprite_path": "static/dump/umap/static/train/cauliflower/Image_49.jpg"
    },
    {
      "embedding": [
        11.038362503051758,
        1.631321668624878
      ],
      "label": 7,
      "category": "pomegranate",
      "sprite_path": "static/dump/umap/static/train/cauliflower/Image_95.jpg"
    },
    {
      "embedding": [
        12.01429557800293,
        1.2749054431915283
      ],
      "label": 7,
      "category": "pomegranate",
      "sprite_path": "static/dump/umap/static/train/cauliflower/Image_23.jpg"
    },
    {
      "embedding": [
        5.3436760902404785,
        3.2540924549102783
      ],
      "label": 7,
      "category": "pomegranate",
      "sprite_path": "static/dump/umap/static/train/cauliflower/Image_8.jpg"
    },
    {
      "embedding": [
        5.466384410858154,
        3.147772789001465
      ],
      "label": 7,
      "category": "pomegranate",
      "sprite_path": "static/dump/umap/static/train/cauliflower/Image_48.png"
    },
    {
      "embedding": [
        5.605626106262207,
        3.7022674083709717
      ],
      "label": 7,
      "category": "pomegranate",
      "sprite_path": "static/dump/umap/static/train/cauliflower/Image_22.jpg"
    },
    {
      "embedding": [
        10.46069622039795,
        2.5173439979553223
      ],
      "label": 7,
      "category": "pomegranate",
      "sprite_path": "static/dump/umap/static/train/cauliflower/Image_17.jpg"
    },
    {
      "embedding": [
        1.8322069644927979,
        5.682651996612549
      ],
      "label": 7,
      "category": "pomegranate",
      "sprite_path": "static/dump/umap/static/train/cauliflower/Image_77.jpg"
    },
    {
      "embedding": [
        1.8456518650054932,
        5.580769062042236
      ],
      "label": 7,
      "category": "pomegranate",
      "sprite_path": "static/dump/umap/static/train/cauliflower/Image_9.jpg"
    },
    {
      "embedding": [
        1.6047674417495728,
        5.621935844421387
      ],
      "label": 7,
      "category": "pomegranate",
      "sprite_path": "static/dump/umap/static/train/cauliflower/Image_71.jpg"
    },
    {
      "embedding": [
        1.6755280494689941,
        5.751951217651367
      ],
      "label": 7,
      "category": "pomegranate",
      "sprite_path": "static/dump/umap/static/train/cauliflower/Image_6.jpg"
    },
    {
      "embedding": [
        7.580451011657715,
        1.6245728731155396
      ],
      "label": 7,
      "category": "pomegranate",
      "sprite_path": "static/dump/umap/static/train/cauliflower/Image_20.jpg"
    },
    {
      "embedding": [
        6.346944332122803,
        1.5969271659851074
      ],
      "label": 7,
      "category": "pomegranate",
      "sprite_path": "static/dump/umap/static/train/cauliflower/Image_98.jpg"
    },
    {
      "embedding": [
        11.942790031433105,
        2.329019546508789
      ],
      "label": 7,
      "category": "pomegranate",
      "sprite_path": "static/dump/umap/static/train/cauliflower/Image_47.jpg"
    },
    {
      "embedding": [
        11.555203437805176,
        2.8897082805633545
      ],
      "label": 7,
      "category": "pomegranate",
      "sprite_path": "static/dump/umap/static/train/cauliflower/Image_19.jpg"
    },
    {
      "embedding": [
        9.837514877319336,
        1.543372392654419
      ],
      "label": 7,
      "category": "pomegranate",
      "sprite_path": "static/dump/umap/static/train/cauliflower/Image_88.jpg"
    },
    {
      "embedding": [
        5.701697826385498,
        2.842724323272705
      ],
      "label": 7,
      "category": "pomegranate",
      "sprite_path": "static/dump/umap/static/train/cauliflower/Image_29.jpg"
    },
    {
      "embedding": [
        0.994344174861908,
        5.56992769241333
      ],
      "label": 7,
      "category": "pomegranate",
      "sprite_path": "static/dump/umap/static/train/cauliflower/Image_61.jpg"
    },
    {
      "embedding": [
        11.209648132324219,
        3.0648653507232666
      ],
      "label": 7,
      "category": "pomegranate",
      "sprite_path": "static/dump/umap/static/train/cauliflower/Image_85.jpg"
    },
    {
      "embedding": [
        1.1425163745880127,
        5.375958442687988
      ],
      "label": 7,
      "category": "pomegranate",
      "sprite_path": "static/dump/umap/static/train/cauliflower/Image_74.jpg"
    },
    {
      "embedding": [
        1.7125914096832275,
        5.4667067527771
      ],
      "label": 7,
      "category": "pomegranate",
      "sprite_path": "static/dump/umap/static/train/cauliflower/Image_53.jpg"
    },
    {
      "embedding": [
        10.824024200439453,
        2.343305826187134
      ],
      "label": 7,
      "category": "pomegranate",
      "sprite_path": "static/dump/umap/static/train/cauliflower/Image_27.jpg"
    },
    {
      "embedding": [
        11.396993637084961,
        1.044978141784668
      ],
      "label": 7,
      "category": "pomegranate",
      "sprite_path": "static/dump/umap/static/train/cauliflower/Image_55.jpg"
    },
    {
      "embedding": [
        10.61967945098877,
        2.7578883171081543
      ],
      "label": 7,
      "category": "pomegranate",
      "sprite_path": "static/dump/umap/static/train/cauliflower/Image_44.jpg"
    },
    {
      "embedding": [
        11.41474723815918,
        2.8897998332977295
      ],
      "label": 7,
      "category": "pomegranate",
      "sprite_path": "static/dump/umap/static/train/cauliflower/Image_39.png"
    },
    {
      "embedding": [
        6.867574691772461,
        2.269200086593628
      ],
      "label": 7,
      "category": "pomegranate",
      "sprite_path": "static/dump/umap/static/train/cauliflower/Image_33.png"
    },
    {
      "embedding": [
        11.279458999633789,
        3.0190305709838867
      ],
      "label": 7,
      "category": "pomegranate",
      "sprite_path": "static/dump/umap/static/train/cauliflower/Image_73.jpg"
    },
    {
      "embedding": [
        1.8211344480514526,
        5.562637805938721
      ],
      "label": 7,
      "category": "pomegranate",
      "sprite_path": "static/dump/umap/static/train/cauliflower/Image_96.jpg"
    },
    {
      "embedding": [
        6.378239631652832,
        2.1820130348205566
      ],
      "label": 7,
      "category": "pomegranate",
      "sprite_path": "static/dump/umap/static/train/cauliflower/Image_11.jpg"
    },
    {
      "embedding": [
        2.8325836658477783,
        5.1555399894714355
      ],
      "label": 7,
      "category": "pomegranate",
      "sprite_path": "static/dump/umap/static/train/cauliflower/Image_82.jpg"
    },
    {
      "embedding": [
        3.418025493621826,
        4.64727258682251
      ],
      "label": 7,
      "category": "pomegranate",
      "sprite_path": "static/dump/umap/static/train/cauliflower/Image_50.jpg"
    },
    {
      "embedding": [
        1.2398004531860352,
        5.397612571716309
      ],
      "label": 7,
      "category": "pomegranate",
      "sprite_path": "static/dump/umap/static/train/cauliflower/Image_58.jpg"
    },
    {
      "embedding": [
        11.21906566619873,
        2.90116810798645
      ],
      "label": 7,
      "category": "pomegranate",
      "sprite_path": "static/dump/umap/static/train/cauliflower/Image_97.jpg"
    },
    {
      "embedding": [
        10.86990737915039,
        1.0332030057907104
      ],
      "label": 7,
      "category": "pomegranate",
      "sprite_path": "static/dump/umap/static/train/cauliflower/Image_62.jpg"
    },
    {
      "embedding": [
        11.388187408447266,
        1.8398762941360474
      ],
      "label": 7,
      "category": "pomegranate",
      "sprite_path": "static/dump/umap/static/train/cauliflower/Image_30.jpg"
    },
    {
      "embedding": [
        1.4739084243774414,
        5.150248050689697
      ],
      "label": 7,
      "category": "pomegranate",
      "sprite_path": "static/dump/umap/static/train/cauliflower/Image_100.jpg"
    },
    {
      "embedding": [
        9.56225299835205,
        2.238971471786499
      ],
      "label": 7,
      "category": "pomegranate",
      "sprite_path": "static/dump/umap/static/train/cauliflower/Image_70.jpg"
    },
    {
      "embedding": [
        10.230753898620605,
        2.5709874629974365
      ],
      "label": 7,
      "category": "pomegranate",
      "sprite_path": "static/dump/umap/static/train/cauliflower/Image_15.jpg"
    },
    {
      "embedding": [
        11.422054290771484,
        1.7372767925262451
      ],
      "label": 7,
      "category": "pomegranate",
      "sprite_path": "static/dump/umap/static/train/cauliflower/Image_35.jpg"
    },
    {
      "embedding": [
        2.871291399002075,
        4.048346996307373
      ],
      "label": 7,
      "category": "pomegranate",
      "sprite_path": "static/dump/umap/static/train/cauliflower/Image_52.png"
    },
    {
      "embedding": [
        2.5087010860443115,
        5.156929969787598
      ],
      "label": 7,
      "category": "pomegranate",
      "sprite_path": "static/dump/umap/static/train/cauliflower/Image_14.jpg"
    },
    {
      "embedding": [
        1.1352790594100952,
        5.431306838989258
      ],
      "label": 7,
      "category": "pomegranate",
      "sprite_path": "static/dump/umap/static/train/cauliflower/Image_21.png"
    },
    {
      "embedding": [
        5.598506927490234,
        3.0102853775024414
      ],
      "label": 7,
      "category": "pomegranate",
      "sprite_path": "static/dump/umap/static/train/cauliflower/Image_76.jpg"
    },
    {
      "embedding": [
        6.390881061553955,
        1.7437169551849365
      ],
      "label": 7,
      "category": "pomegranate",
      "sprite_path": "static/dump/umap/static/train/cauliflower/Image_63.jpg"
    },
    {
      "embedding": [
        3.4205267429351807,
        5.091086387634277
      ],
      "label": 7,
      "category": "pomegranate",
      "sprite_path": "static/dump/umap/static/train/cauliflower/Image_75.jpg"
    },
    {
      "embedding": [
        5.259321689605713,
        3.4857442378997803
      ],
      "label": 7,
      "category": "pomegranate",
      "sprite_path": "static/dump/umap/static/train/cauliflower/Image_24.jpg"
    },
    {
      "embedding": [
        3.2473561763763428,
        4.923629283905029
      ],
      "label": 7,
      "category": "pomegranate",
      "sprite_path": "static/dump/umap/static/train/cauliflower/Image_99.jpg"
    },
    {
      "embedding": [
        5.363898754119873,
        3.0653531551361084
      ],
      "label": 7,
      "category": "pomegranate",
      "sprite_path": "static/dump/umap/static/train/cauliflower/Image_32.jpg"
    },
    {
      "embedding": [
        7.99526309967041,
        3.3885042667388916
      ],
      "label": 7,
      "category": "pomegranate",
      "sprite_path": "static/dump/umap/static/train/cauliflower/Image_37.jpg"
    },
    {
      "embedding": [
        5.938648223876953,
        2.8003695011138916
      ],
      "label": 7,
      "category": "pomegranate",
      "sprite_path": "static/dump/umap/static/train/cauliflower/Image_28.jpg"
    },
    {
      "embedding": [
        5.285356521606445,
        3.5229949951171875
      ],
      "label": 7,
      "category": "pomegranate",
      "sprite_path": "static/dump/umap/static/train/cauliflower/Image_93.jpg"
    },
    {
      "embedding": [
        1.8505343198776245,
        5.554755210876465
      ],
      "label": 7,
      "category": "pomegranate",
      "sprite_path": "static/dump/umap/static/train/cauliflower/Image_36.jpg"
    },
    {
      "embedding": [
        11.280132293701172,
        2.974616289138794
      ],
      "label": 7,
      "category": "pomegranate",
      "sprite_path": "static/dump/umap/static/train/cauliflower/Image_42.jpg"
    },
    {
      "embedding": [
        12.913702964782715,
        1.87089204788208
      ],
      "label": 7,
      "category": "pomegranate",
      "sprite_path": "static/dump/umap/static/train/cauliflower/Image_31.jpg"
    },
    {
      "embedding": [
        11.080365180969238,
        2.9814751148223877
      ],
      "label": 7,
      "category": "pomegranate",
      "sprite_path": "static/dump/umap/static/train/cauliflower/Image_2.jpg"
    },
    {
      "embedding": [
        12.086780548095703,
        2.9440577030181885
      ],
      "label": 7,
      "category": "pomegranate",
      "sprite_path": "static/dump/umap/static/train/cauliflower/Image_3.jpg"
    },
    {
      "embedding": [
        9.823514938354492,
        2.334683895111084
      ],
      "label": 7,
      "category": "pomegranate",
      "sprite_path": "static/dump/umap/static/train/cauliflower/Image_26.jpg"
    },
    {
      "embedding": [
        12.1834716796875,
        2.9241132736206055
      ],
      "label": 7,
      "category": "pomegranate",
      "sprite_path": "static/dump/umap/static/train/cauliflower/Image_66.jpg"
    },
    {
      "embedding": [
        8.920281410217285,
        2.896961212158203
      ],
      "label": 7,
      "category": "pomegranate",
      "sprite_path": "static/dump/umap/static/train/cauliflower/Image_43.jpg"
    },
    {
      "embedding": [
        1.0336185693740845,
        5.40122127532959
      ],
      "label": 7,
      "category": "pomegranate",
      "sprite_path": "static/dump/umap/static/train/cauliflower/Image_18.jpg"
    },
    {
      "embedding": [
        8.372969627380371,
        0.8405793309211731
      ],
      "label": 7,
      "category": "pomegranate",
      "sprite_path": "static/dump/umap/static/train/raddish/Image_89.jpg"
    },
    {
      "embedding": [
        10.512609481811523,
        2.883944511413574
      ],
      "label": 7,
      "category": "pomegranate",
      "sprite_path": "static/dump/umap/static/train/raddish/Image_65.jpg"
    },
    {
      "embedding": [
        1.0740246772766113,
        5.586942672729492
      ],
      "label": 7,
      "category": "pomegranate",
      "sprite_path": "static/dump/umap/static/train/raddish/Image_1.jpg"
    },
    {
      "embedding": [
        10.685864448547363,
        2.740144968032837
      ],
      "label": 7,
      "category": "pomegranate",
      "sprite_path": "static/dump/umap/static/train/raddish/Image_71.png"
    },
    {
      "embedding": [
        7.929588317871094,
        2.9876067638397217
      ],
      "label": 7,
      "category": "pomegranate",
      "sprite_path": "static/dump/umap/static/train/raddish/Image_16.jpg"
    },
    {
      "embedding": [
        1.105765700340271,
        5.177302360534668
      ],
      "label": 7,
      "category": "pomegranate",
      "sprite_path": "static/dump/umap/static/train/raddish/Image_57.jpg"
    },
    {
      "embedding": [
        7.457109451293945,
        2.593907117843628
      ],
      "label": 7,
      "category": "pomegranate",
      "sprite_path": "static/dump/umap/static/train/raddish/Image_54.png"
    },
    {
      "embedding": [
        5.478722095489502,
        2.8867239952087402
      ],
      "label": 7,
      "category": "pomegranate",
      "sprite_path": "static/dump/umap/static/train/raddish/Image_12.jpg"
    },
    {
      "embedding": [
        11.501825332641602,
        1.9436380863189697
      ],
      "label": 7,
      "category": "pomegranate",
      "sprite_path": "static/dump/umap/static/train/raddish/Image_56.jpg"
    },
    {
      "embedding": [
        9.073271751403809,
        2.79439640045166
      ],
      "label": 7,
      "category": "pomegranate",
      "sprite_path": "static/dump/umap/static/train/raddish/Image_33.jpg"
    },
    {
      "embedding": [
        1.8111284971237183,
        5.596118927001953
      ],
      "label": 7,
      "category": "pomegranate",
      "sprite_path": "static/dump/umap/static/train/raddish/Image_45.jpg"
    },
    {
      "embedding": [
        1.032443642616272,
        5.586688041687012
      ],
      "label": 7,
      "category": "pomegranate",
      "sprite_path": "static/dump/umap/static/train/raddish/Image_40.jpg"
    },
    {
      "embedding": [
        4.8976664543151855,
        3.8048038482666016
      ],
      "label": 7,
      "category": "pomegranate",
      "sprite_path": "static/dump/umap/static/train/raddish/Image_10.jpg"
    },
    {
      "embedding": [
        11.384411811828613,
        3.036809206008911
      ],
      "label": 7,
      "category": "pomegranate",
      "sprite_path": "static/dump/umap/static/train/raddish/Image_21.jpg"
    },
    {
      "embedding": [
        5.477070331573486,
        2.8530280590057373
      ],
      "label": 7,
      "category": "pomegranate",
      "sprite_path": "static/dump/umap/static/train/raddish/Image_78.jpg"
    },
    {
      "embedding": [
        9.891144752502441,
        2.095609426498413
      ],
      "label": 7,
      "category": "pomegranate",
      "sprite_path": "static/dump/umap/static/train/raddish/Image_4.jpg"
    },
    {
      "embedding": [
        6.53990364074707,
        2.529883861541748
      ],
      "label": 7,
      "category": "pomegranate",
      "sprite_path": "static/dump/umap/static/train/raddish/Image_41.jpg"
    },
    {
      "embedding": [
        7.681051254272461,
        2.78802227973938
      ],
      "label": 28,
      "category": "peas",
      "sprite_path": "static/dump/umap/static/train/raddish/Image_7.jpg"
    },
    {
      "embedding": [
        0.7360628247261047,
        4.961720943450928
      ],
      "label": 28,
      "category": "peas",
      "sprite_path": "static/dump/umap/static/train/raddish/Image_69.jpg"
    },
    {
      "embedding": [
        6.004767417907715,
        2.4060966968536377
      ],
      "label": 28,
      "category": "peas",
      "sprite_path": "static/dump/umap/static/train/raddish/Image_60.jpg"
    },
    {
      "embedding": [
        9.21956729888916,
        2.8538832664489746
      ],
      "label": 28,
      "category": "peas",
      "sprite_path": "static/dump/umap/static/train/raddish/Image_13.jpg"
    },
    {
      "embedding": [
        7.370705604553223,
        3.1391243934631348
      ],
      "label": 28,
      "category": "peas",
      "sprite_path": "static/dump/umap/static/train/raddish/Image_49.jpg"
    },
    {
      "embedding": [
        11.973995208740234,
        2.3933041095733643
      ],
      "label": 28,
      "category": "peas",
      "sprite_path": "static/dump/umap/static/train/raddish/Image_91.jpg"
    },
    {
      "embedding": [
        0.6884805560112,
        4.903587341308594
      ],
      "label": 28,
      "category": "peas",
      "sprite_path": "static/dump/umap/static/train/raddish/Image_68.jpg"
    },
    {
      "embedding": [
        10.34335994720459,
        1.3159879446029663
      ],
      "label": 28,
      "category": "peas",
      "sprite_path": "static/dump/umap/static/train/raddish/Image_23.jpg"
    },
    {
      "embedding": [
        6.105604648590088,
        2.52750825881958
      ],
      "label": 28,
      "category": "peas",
      "sprite_path": "static/dump/umap/static/train/raddish/Image_48.png"
    },
    {
      "embedding": [
        12.3094482421875,
        1.8239803314208984
      ],
      "label": 28,
      "category": "peas",
      "sprite_path": "static/dump/umap/static/train/raddish/Image_22.jpg"
    },
    {
      "embedding": [
        5.558943271636963,
        3.180626392364502
      ],
      "label": 28,
      "category": "peas",
      "sprite_path": "static/dump/umap/static/train/raddish/Image_17.jpg"
    },
    {
      "embedding": [
        9.034232139587402,
        0.1513730138540268
      ],
      "label": 28,
      "category": "peas",
      "sprite_path": "static/dump/umap/static/train/raddish/Image_25.jpg"
    },
    {
      "embedding": [
        0.8491103053092957,
        5.418084144592285
      ],
      "label": 28,
      "category": "peas",
      "sprite_path": "static/dump/umap/static/train/raddish/Image_34.jpg"
    },
    {
      "embedding": [
        8.911611557006836,
        3.4654407501220703
      ],
      "label": 28,
      "category": "peas",
      "sprite_path": "static/dump/umap/static/train/raddish/Image_81.jpg"
    },
    {
      "embedding": [
        0.917209804058075,
        5.334211349487305
      ],
      "label": 28,
      "category": "peas",
      "sprite_path": "static/dump/umap/static/train/raddish/Image_9.png"
    },
    {
      "embedding": [
        6.332104682922363,
        2.452066421508789
      ],
      "label": 28,
      "category": "peas",
      "sprite_path": "static/dump/umap/static/train/raddish/Image_6.jpg"
    },
    {
      "embedding": [
        1.0326813459396362,
        5.422172546386719
      ],
      "label": 28,
      "category": "peas",
      "sprite_path": "static/dump/umap/static/train/raddish/Image_20.jpg"
    },
    {
      "embedding": [
        11.274518013000488,
        2.887413501739502
      ],
      "label": 28,
      "category": "peas",
      "sprite_path": "static/dump/umap/static/train/raddish/Image_98.jpg"
    },
    {
      "embedding": [
        13.057740211486816,
        0.932542085647583
      ],
      "label": 28,
      "category": "peas",
      "sprite_path": "static/dump/umap/static/train/raddish/Image_59.png"
    },
    {
      "embedding": [
        12.657217025756836,
        0.6046795845031738
      ],
      "label": 28,
      "category": "peas",
      "sprite_path": "static/dump/umap/static/train/raddish/Image_19.jpg"
    },
    {
      "embedding": [
        1.0928614139556885,
        5.257978439331055
      ],
      "label": 28,
      "category": "peas",
      "sprite_path": "static/dump/umap/static/train/raddish/Image_29.jpg"
    },
    {
      "embedding": [
        7.325921535491943,
        1.9592008590698242
      ],
      "label": 28,
      "category": "peas",
      "sprite_path": "static/dump/umap/static/train/raddish/Image_84.jpg"
    },
    {
      "embedding": [
        9.175745010375977,
        0.6940750479698181
      ],
      "label": 28,
      "category": "peas",
      "sprite_path": "static/dump/umap/static/train/raddish/Image_85.jpg"
    },
    {
      "embedding": [
        6.612979412078857,
        2.4538767337799072
      ],
      "label": 28,
      "category": "peas",
      "sprite_path": "static/dump/umap/static/train/raddish/Image_88.png"
    },
    {
      "embedding": [
        9.292350769042969,
        0.5242714881896973
      ],
      "label": 28,
      "category": "peas",
      "sprite_path": "static/dump/umap/static/train/raddish/Image_64.jpg"
    },
    {
      "embedding": [
        13.27982234954834,
        1.171248435974121
      ],
      "label": 28,
      "category": "peas",
      "sprite_path": "static/dump/umap/static/train/raddish/Image_27.jpg"
    },
    {
      "embedding": [
        9.65833854675293,
        0.5255813598632812
      ],
      "label": 28,
      "category": "peas",
      "sprite_path": "static/dump/umap/static/train/raddish/Image_55.jpg"
    },
    {
      "embedding": [
        0.7495810985565186,
        4.9550371170043945
      ],
      "label": 28,
      "category": "peas",
      "sprite_path": "static/dump/umap/static/train/raddish/Image_44.jpg"
    },
    {
      "embedding": [
        0.7525209784507751,
        5.024308204650879
      ],
      "label": 28,
      "category": "peas",
      "sprite_path": "static/dump/umap/static/train/raddish/Image_72.jpg"
    },
    {
      "embedding": [
        0.7035136818885803,
        5.108461380004883
      ],
      "label": 28,
      "category": "peas",
      "sprite_path": "static/dump/umap/static/train/raddish/Image_96.jpg"
    },
    {
      "embedding": [
        11.462982177734375,
        0.38794389367103577
      ],
      "label": 28,
      "category": "peas",
      "sprite_path": "static/dump/umap/static/train/raddish/Image_52.jpg"
    },
    {
      "embedding": [
        3.747894763946533,
        4.696442127227783
      ],
      "label": 28,
      "category": "peas",
      "sprite_path": "static/dump/umap/static/train/raddish/Image_90.jpg"
    },
    {
      "embedding": [
        7.405113697052002,
        2.9817628860473633
      ],
      "label": 28,
      "category": "peas",
      "sprite_path": "static/dump/umap/static/train/raddish/Image_82.jpg"
    },
    {
      "embedding": [
        12.864038467407227,
        1.2039612531661987
      ],
      "label": 28,
      "category": "peas",
      "sprite_path": "static/dump/umap/static/train/raddish/Image_67.jpg"
    },
    {
      "embedding": [
        0.6573188900947571,
        5.045745849609375
      ],
      "label": 28,
      "category": "peas",
      "sprite_path": "static/dump/umap/static/train/raddish/Image_50.jpg"
    },
    {
      "embedding": [
        11.0159330368042,
        3.096862554550171
      ],
      "label": 28,
      "category": "peas",
      "sprite_path": "static/dump/umap/static/train/raddish/Image_58.jpg"
    },
    {
      "embedding": [
        2.440804958343506,
        5.1762919425964355
      ],
      "label": 28,
      "category": "peas",
      "sprite_path": "static/dump/umap/static/train/raddish/Image_97.jpg"
    },
    {
      "embedding": [
        13.298937797546387,
        1.1394085884094238
      ],
      "label": 28,
      "category": "peas",
      "sprite_path": "static/dump/umap/static/train/raddish/Image_5.jpg"
    },
    {
      "embedding": [
        11.81499195098877,
        2.434173822402954
      ],
      "label": 28,
      "category": "peas",
      "sprite_path": "static/dump/umap/static/train/raddish/Image_100.jpg"
    },
    {
      "embedding": [
        8.60631275177002,
        1.6001302003860474
      ],
      "label": 28,
      "category": "peas",
      "sprite_path": "static/dump/umap/static/train/raddish/Image_70.jpg"
    },
    {
      "embedding": [
        9.748638153076172,
        2.096771478652954
      ],
      "label": 28,
      "category": "peas",
      "sprite_path": "static/dump/umap/static/train/raddish/Image_38.png"
    },
    {
      "embedding": [
        4.263121604919434,
        4.736268997192383
      ],
      "label": 28,
      "category": "peas",
      "sprite_path": "static/dump/umap/static/train/raddish/Image_15.jpg"
    },
    {
      "embedding": [
        9.192400932312012,
        2.9744889736175537
      ],
      "label": 28,
      "category": "peas",
      "sprite_path": "static/dump/umap/static/train/raddish/Image_35.jpg"
    },
    {
      "embedding": [
        8.994821548461914,
        -0.350013792514801
      ],
      "label": 28,
      "category": "peas",
      "sprite_path": "static/dump/umap/static/train/raddish/Image_14.jpg"
    },
    {
      "embedding": [
        12.193458557128906,
        1.6891435384750366
      ],
      "label": 28,
      "category": "peas",
      "sprite_path": "static/dump/umap/static/train/raddish/Image_39.jpg"
    },
    {
      "embedding": [
        3.5466389656066895,
        4.279387950897217
      ],
      "label": 28,
      "category": "peas",
      "sprite_path": "static/dump/umap/static/train/raddish/Image_8.jpeg"
    },
    {
      "embedding": [
        1.1936537027359009,
        4.8484296798706055
      ],
      "label": 28,
      "category": "peas",
      "sprite_path": "static/dump/umap/static/train/raddish/Image_63.jpg"
    },
    {
      "embedding": [
        9.722272872924805,
        0.44363126158714294
      ],
      "label": 28,
      "category": "peas",
      "sprite_path": "static/dump/umap/static/train/raddish/Image_75.jpg"
    },
    {
      "embedding": [
        1.809540033340454,
        4.6238298416137695
      ],
      "label": 28,
      "category": "peas",
      "sprite_path": "static/dump/umap/static/train/raddish/Image_99.jpg"
    },
    {
      "embedding": [
        12.776529312133789,
        1.4542148113250732
      ],
      "label": 28,
      "category": "peas",
      "sprite_path": "static/dump/umap/static/train/raddish/Image_32.jpg"
    },
    {
      "embedding": [
        11.166340827941895,
        2.9440863132476807
      ],
      "label": 28,
      "category": "peas",
      "sprite_path": "static/dump/umap/static/train/raddish/Image_37.jpg"
    },
    {
      "embedding": [
        3.365485429763794,
        3.8843882083892822
      ],
      "label": 28,
      "category": "peas",
      "sprite_path": "static/dump/umap/static/train/raddish/Image_28.jpg"
    },
    {
      "embedding": [
        2.043703317642212,
        4.497203826904297
      ],
      "label": 28,
      "category": "peas",
      "sprite_path": "static/dump/umap/static/train/raddish/Image_36.jpg"
    },
    {
      "embedding": [
        5.956919193267822,
        2.4152772426605225
      ],
      "label": 28,
      "category": "peas",
      "sprite_path": "static/dump/umap/static/train/raddish/Image_42.jpg"
    },
    {
      "embedding": [
        6.628578186035156,
        3.414341688156128
      ],
      "label": 28,
      "category": "peas",
      "sprite_path": "static/dump/umap/static/train/raddish/Image_31.jpg"
    },
    {
      "embedding": [
        6.314035415649414,
        2.432392120361328
      ],
      "label": 28,
      "category": "peas",
      "sprite_path": "static/dump/umap/static/train/raddish/Image_2.jpg"
    },
    {
      "embedding": [
        6.498841762542725,
        2.4879262447357178
      ],
      "label": 28,
      "category": "peas",
      "sprite_path": "static/dump/umap/static/train/raddish/Image_3.jpg"
    },
    {
      "embedding": [
        0.7520259022712708,
        4.7914814949035645
      ],
      "label": 28,
      "category": "peas",
      "sprite_path": "static/dump/umap/static/train/raddish/Image_26.jpg"
    },
    {
      "embedding": [
        12.778810501098633,
        1.5686525106430054
      ],
      "label": 28,
      "category": "peas",
      "sprite_path": "static/dump/umap/static/train/raddish/Image_66.jpg"
    },
    {
      "embedding": [
        1.1354048252105713,
        5.093053340911865
      ],
      "label": 28,
      "category": "peas",
      "sprite_path": "static/dump/umap/static/train/raddish/Image_11.png"
    },
    {
      "embedding": [
        12.744536399841309,
        1.6432358026504517
      ],
      "label": 28,
      "category": "peas",
      "sprite_path": "static/dump/umap/static/train/raddish/Image_43.jpg"
    },
    {
      "embedding": [
        0.7355564832687378,
        5.038676738739014
      ],
      "label": 28,
      "category": "peas",
      "sprite_path": "static/dump/umap/static/train/raddish/Image_18.jpg"
    },
    {
      "embedding": [
        7.065737724304199,
        3.2287144660949707
      ],
      "label": 28,
      "category": "peas",
      "sprite_path": "static/dump/umap/static/train/lemon/Image_65.jpg"
    },
    {
      "embedding": [
        5.985888481140137,
        2.3712446689605713
      ],
      "label": 28,
      "category": "peas",
      "sprite_path": "static/dump/umap/static/train/lemon/Image_16.jpg"
    },
    {
      "embedding": [
        6.288532257080078,
        1.7529799938201904
      ],
      "label": 28,
      "category": "peas",
      "sprite_path": "static/dump/umap/static/train/lemon/Image_57.jpg"
    },
    {
      "embedding": [
        0.8696740865707397,
        5.251864433288574
      ],
      "label": 28,
      "category": "peas",
      "sprite_path": "static/dump/umap/static/train/lemon/Image_12.jpg"
    },
    {
      "embedding": [
        9.86370849609375,
        3.1581802368164062
      ],
      "label": 28,
      "category": "peas",
      "sprite_path": "static/dump/umap/static/train/lemon/Image_56.jpg"
    },
    {
      "embedding": [
        11.145332336425781,
        3.0578980445861816
      ],
      "label": 28,
      "category": "peas",
      "sprite_path": "static/dump/umap/static/train/lemon/Image_94.jpg"
    },
    {
      "embedding": [
        11.98198413848877,
        1.5025763511657715
      ],
      "label": 28,
      "category": "peas",
      "sprite_path": "static/dump/umap/static/train/lemon/Image_10.jpg"
    },
    {
      "embedding": [
        0.7148647308349609,
        4.735796928405762
      ],
      "label": 28,
      "category": "peas",
      "sprite_path": "static/dump/umap/static/train/lemon/Image_21.jpg"
    },
    {
      "embedding": [
        11.905020713806152,
        1.1924046277999878
      ],
      "label": 28,
      "category": "peas",
      "sprite_path": "static/dump/umap/static/train/lemon/Image_78.jpg"
    },
    {
      "embedding": [
        9.712041854858398,
        0.39826086163520813
      ],
      "label": 28,
      "category": "peas",
      "sprite_path": "static/dump/umap/static/train/lemon/Image_4.jpg"
    },
    {
      "embedding": [
        2.348933219909668,
        4.327820301055908
      ],
      "label": 28,
      "category": "peas",
      "sprite_path": "static/dump/umap/static/train/lemon/Image_38.jpg"
    },
    {
      "embedding": [
        8.737542152404785,
        2.335584878921509
      ],
      "label": 28,
      "category": "peas",
      "sprite_path": "static/dump/umap/static/train/lemon/Image_41.jpg"
    },
    {
      "embedding": [
        0.6336846947669983,
        5.1199750900268555
      ],
      "label": 28,
      "category": "peas",
      "sprite_path": "static/dump/umap/static/train/lemon/Image_7.jpg"
    },
    {
      "embedding": [
        9.873123168945312,
        3.1633267402648926
      ],
      "label": 28,
      "category": "peas",
      "sprite_path": "static/dump/umap/static/train/lemon/Image_69.jpg"
    },
    {
      "embedding": [
        1.938392162322998,
        4.427319049835205
      ],
      "label": 28,
      "category": "peas",
      "sprite_path": "static/dump/umap/static/train/lemon/Image_48.jpg"
    },
    {
      "embedding": [
        1.5415444374084473,
        5.205260753631592
      ],
      "label": 28,
      "category": "peas",
      "sprite_path": "static/dump/umap/static/train/lemon/Image_60.jpg"
    },
    {
      "embedding": [
        0.5962327122688293,
        5.239657402038574
      ],
      "label": 28,
      "category": "peas",
      "sprite_path": "static/dump/umap/static/train/lemon/Image_13.jpg"
    },
    {
      "embedding": [
        10.520842552185059,
        0.42028558254241943
      ],
      "label": 28,
      "category": "peas",
      "sprite_path": "static/dump/umap/static/train/lemon/Image_49.jpg"
    },
    {
      "embedding": [
        9.264665603637695,
        2.1010043621063232
      ],
      "label": 28,
      "category": "peas",
      "sprite_path": "static/dump/umap/static/train/lemon/Image_23.jpg"
    },
    {
      "embedding": [
        6.112745761871338,
        1.7697356939315796
      ],
      "label": 17,
      "category": "jalepeno",
      "sprite_path": "static/dump/umap/static/train/lemon/Image_1.png"
    },
    {
      "embedding": [
        3.1038031578063965,
        5.301089286804199
      ],
      "label": 17,
      "category": "jalepeno",
      "sprite_path": "static/dump/umap/static/train/lemon/Image_22.jpg"
    },
    {
      "embedding": [
        12.02625560760498,
        1.5127232074737549
      ],
      "label": 17,
      "category": "jalepeno",
      "sprite_path": "static/dump/umap/static/train/lemon/Image_17.jpg"
    },
    {
      "embedding": [
        8.437239646911621,
        3.031419515609741
      ],
      "label": 17,
      "category": "jalepeno",
      "sprite_path": "static/dump/umap/static/train/lemon/Image_77.jpg"
    },
    {
      "embedding": [
        1.4427202939987183,
        5.462417125701904
      ],
      "label": 17,
      "category": "jalepeno",
      "sprite_path": "static/dump/umap/static/train/lemon/Image_25.jpg"
    },
    {
      "embedding": [
        5.2248215675354,
        3.314817190170288
      ],
      "label": 17,
      "category": "jalepeno",
      "sprite_path": "static/dump/umap/static/train/lemon/Image_9.jpg"
    },
    {
      "embedding": [
        9.432356834411621,
        2.400258779525757
      ],
      "label": 17,
      "category": "jalepeno",
      "sprite_path": "static/dump/umap/static/train/lemon/Image_71.jpg"
    },
    {
      "embedding": [
        12.044952392578125,
        2.362907886505127
      ],
      "label": 17,
      "category": "jalepeno",
      "sprite_path": "static/dump/umap/static/train/lemon/Image_34.jpg"
    },
    {
      "embedding": [
        2.677823781967163,
        4.852741718292236
      ],
      "label": 17,
      "category": "jalepeno",
      "sprite_path": "static/dump/umap/static/train/lemon/Image_36.png"
    },
    {
      "embedding": [
        7.934164047241211,
        1.4358186721801758
      ],
      "label": 17,
      "category": "jalepeno",
      "sprite_path": "static/dump/umap/static/train/lemon/Image_37.png"
    },
    {
      "embedding": [
        8.060931205749512,
        0.5789929032325745
      ],
      "label": 17,
      "category": "jalepeno",
      "sprite_path": "static/dump/umap/static/train/lemon/Image_98.jpg"
    },
    {
      "embedding": [
        3.0781021118164062,
        5.363770484924316
      ],
      "label": 17,
      "category": "jalepeno",
      "sprite_path": "static/dump/umap/static/train/lemon/Image_8.png"
    },
    {
      "embedding": [
        2.619258403778076,
        5.759404182434082
      ],
      "label": 17,
      "category": "jalepeno",
      "sprite_path": "static/dump/umap/static/train/lemon/Image_47.jpg"
    },
    {
      "embedding": [
        6.784700393676758,
        1.0018144845962524
      ],
      "label": 17,
      "category": "jalepeno",
      "sprite_path": "static/dump/umap/static/train/lemon/Image_19.jpg"
    },
    {
      "embedding": [
        11.666584968566895,
        0.7418339252471924
      ],
      "label": 17,
      "category": "jalepeno",
      "sprite_path": "static/dump/umap/static/train/lemon/Image_88.jpg"
    },
    {
      "embedding": [
        10.398285865783691,
        2.9027974605560303
      ],
      "label": 17,
      "category": "jalepeno",
      "sprite_path": "static/dump/umap/static/train/lemon/Image_33.jpeg"
    },
    {
      "embedding": [
        2.130852699279785,
        5.360171794891357
      ],
      "label": 17,
      "category": "jalepeno",
      "sprite_path": "static/dump/umap/static/train/lemon/Image_84.jpg"
    },
    {
      "embedding": [
        11.710830688476562,
        0.9662679433822632
      ],
      "label": 17,
      "category": "jalepeno",
      "sprite_path": "static/dump/umap/static/train/lemon/Image_85.jpg"
    },
    {
      "embedding": [
        2.651883840560913,
        5.657102584838867
      ],
      "label": 17,
      "category": "jalepeno",
      "sprite_path": "static/dump/umap/static/train/lemon/Image_74.jpg"
    },
    {
      "embedding": [
        13.121450424194336,
        2.5566978454589844
      ],
      "label": 17,
      "category": "jalepeno",
      "sprite_path": "static/dump/umap/static/train/lemon/Image_53.jpg"
    },
    {
      "embedding": [
        11.828319549560547,
        1.0753216743469238
      ],
      "label": 17,
      "category": "jalepeno",
      "sprite_path": "static/dump/umap/static/train/lemon/Image_92.jpg"
    },
    {
      "embedding": [
        12.332454681396484,
        1.518692970275879
      ],
      "label": 17,
      "category": "jalepeno",
      "sprite_path": "static/dump/umap/static/train/lemon/Image_27.jpg"
    },
    {
      "embedding": [
        5.090658187866211,
        2.881441593170166
      ],
      "label": 17,
      "category": "jalepeno",
      "sprite_path": "static/dump/umap/static/train/lemon/Image_55.jpg"
    },
    {
      "embedding": [
        6.623966217041016,
        0.8650151491165161
      ],
      "label": 17,
      "category": "jalepeno",
      "sprite_path": "static/dump/umap/static/train/lemon/Image_44.jpg"
    },
    {
      "embedding": [
        2.793186902999878,
        5.682577610015869
      ],
      "label": 17,
      "category": "jalepeno",
      "sprite_path": "static/dump/umap/static/train/lemon/Image_95.png"
    },
    {
      "embedding": [
        2.037719964981079,
        5.125027656555176
      ],
      "label": 17,
      "category": "jalepeno",
      "sprite_path": "static/dump/umap/static/train/lemon/Image_39.png"
    },
    {
      "embedding": [
        6.268374919891357,
        1.84513258934021
      ],
      "label": 17,
      "category": "jalepeno",
      "sprite_path": "static/dump/umap/static/train/lemon/Image_96.jpg"
    },
    {
      "embedding": [
        12.927875518798828,
        2.150409460067749
      ],
      "label": 17,
      "category": "jalepeno",
      "sprite_path": "static/dump/umap/static/train/lemon/Image_90.jpg"
    },
    {
      "embedding": [
        7.78590726852417,
        0.36873558163642883
      ],
      "label": 17,
      "category": "jalepeno",
      "sprite_path": "static/dump/umap/static/train/lemon/Image_11.jpg"
    },
    {
      "embedding": [
        12.893539428710938,
        2.7727713584899902
      ],
      "label": 17,
      "category": "jalepeno",
      "sprite_path": "static/dump/umap/static/train/lemon/Image_80.jpg"
    },
    {
      "embedding": [
        7.919991970062256,
        1.427636742591858
      ],
      "label": 17,
      "category": "jalepeno",
      "sprite_path": "static/dump/umap/static/train/lemon/Image_50.jpg"
    },
    {
      "embedding": [
        12.74427604675293,
        2.6248326301574707
      ],
      "label": 17,
      "category": "jalepeno",
      "sprite_path": "static/dump/umap/static/train/lemon/Image_58.jpg"
    },
    {
      "embedding": [
        8.264765739440918,
        0.877922773361206
      ],
      "label": 17,
      "category": "jalepeno",
      "sprite_path": "static/dump/umap/static/train/lemon/Image_97.jpg"
    },
    {
      "embedding": [
        6.1372575759887695,
        3.0935747623443604
      ],
      "label": 17,
      "category": "jalepeno",
      "sprite_path": "static/dump/umap/static/train/lemon/Image_30.jpg"
    },
    {
      "embedding": [
        5.167277812957764,
        2.882265567779541
      ],
      "label": 17,
      "category": "jalepeno",
      "sprite_path": "static/dump/umap/static/train/lemon/Image_5.jpg"
    },
    {
      "embedding": [
        12.54245376586914,
        2.693615674972534
      ],
      "label": 17,
      "category": "jalepeno",
      "sprite_path": "static/dump/umap/static/train/lemon/Image_70.jpg"
    },
    {
      "embedding": [
        2.958033561706543,
        5.446127891540527
      ],
      "label": 17,
      "category": "jalepeno",
      "sprite_path": "static/dump/umap/static/train/lemon/Image_35.jpg"
    },
    {
      "embedding": [
        2.3943307399749756,
        5.484096527099609
      ],
      "label": 17,
      "category": "jalepeno",
      "sprite_path": "static/dump/umap/static/train/lemon/Image_52.png"
    },
    {
      "embedding": [
        12.917878150939941,
        2.6973798274993896
      ],
      "label": 17,
      "category": "jalepeno",
      "sprite_path": "static/dump/umap/static/train/lemon/Image_61.png"
    },
    {
      "embedding": [
        8.11811351776123,
        0.8574377298355103
      ],
      "label": 17,
      "category": "jalepeno",
      "sprite_path": "static/dump/umap/static/train/lemon/Image_14.jpg"
    },
    {
      "embedding": [
        1.2492178678512573,
        4.817158222198486
      ],
      "label": 17,
      "category": "jalepeno",
      "sprite_path": "static/dump/umap/static/train/lemon/Image_6.png"
    },
    {
      "embedding": [
        7.820427894592285,
        2.6885063648223877
      ],
      "label": 17,
      "category": "jalepeno",
      "sprite_path": "static/dump/umap/static/train/lemon/Image_45.png"
    },
    {
      "embedding": [
        11.968506813049316,
        1.210553526878357
      ],
      "label": 17,
      "category": "jalepeno",
      "sprite_path": "static/dump/umap/static/train/lemon/Image_63.jpg"
    },
    {
      "embedding": [
        2.984161615371704,
        5.585773944854736
      ],
      "label": 17,
      "category": "jalepeno",
      "sprite_path": "static/dump/umap/static/train/lemon/Image_75.jpg"
    },
    {
      "embedding": [
        13.112698554992676,
        2.5472910404205322
      ],
      "label": 17,
      "category": "jalepeno",
      "sprite_path": "static/dump/umap/static/train/lemon/Image_29.jpeg"
    },
    {
      "embedding": [
        12.936521530151367,
        1.9517743587493896
      ],
      "label": 17,
      "category": "jalepeno",
      "sprite_path": "static/dump/umap/static/train/lemon/Image_43.jpeg"
    },
    {
      "embedding": [
        2.829029083251953,
        5.813201904296875
      ],
      "label": 17,
      "category": "jalepeno",
      "sprite_path": "static/dump/umap/static/train/lemon/Image_24.jpg"
    },
    {
      "embedding": [
        6.052639484405518,
        2.3152432441711426
      ],
      "label": 17,
      "category": "jalepeno",
      "sprite_path": "static/dump/umap/static/train/lemon/Image_99.jpg"
    },
    {
      "embedding": [
        2.892472505569458,
        5.594550132751465
      ],
      "label": 17,
      "category": "jalepeno",
      "sprite_path": "static/dump/umap/static/train/lemon/Image_32.jpg"
    },
    {
      "embedding": [
        0.6789839863777161,
        5.240118980407715
      ],
      "label": 17,
      "category": "jalepeno",
      "sprite_path": "static/dump/umap/static/train/lemon/Image_51.jpg"
    },
    {
      "embedding": [
        5.138047218322754,
        2.8545477390289307
      ],
      "label": 17,
      "category": "jalepeno",
      "sprite_path": "static/dump/umap/static/train/lemon/Image_28.jpg"
    },
    {
      "embedding": [
        9.770881652832031,
        1.6747230291366577
      ],
      "label": 17,
      "category": "jalepeno",
      "sprite_path": "static/dump/umap/static/train/lemon/Image_76.jpeg"
    },
    {
      "embedding": [
        6.353174686431885,
        1.9911757707595825
      ],
      "label": 17,
      "category": "jalepeno",
      "sprite_path": "static/dump/umap/static/train/lemon/Image_54.jpg"
    },
    {
      "embedding": [
        8.144716262817383,
        0.9007850885391235
      ],
      "label": 17,
      "category": "jalepeno",
      "sprite_path": "static/dump/umap/static/train/lemon/Image_93.jpg"
    },
    {
      "embedding": [
        7.593800067901611,
        0.6884273886680603
      ],
      "label": 17,
      "category": "jalepeno",
      "sprite_path": "static/dump/umap/static/train/lemon/Image_87.png"
    },
    {
      "embedding": [
        6.288395404815674,
        1.763338565826416
      ],
      "label": 17,
      "category": "jalepeno",
      "sprite_path": "static/dump/umap/static/train/lemon/Image_42.jpg"
    },
    {
      "embedding": [
        11.978272438049316,
        0.9272944331169128
      ],
      "label": 17,
      "category": "jalepeno",
      "sprite_path": "static/dump/umap/static/train/lemon/Image_31.jpg"
    },
    {
      "embedding": [
        12.887750625610352,
        2.6999051570892334
      ],
      "label": 17,
      "category": "jalepeno",
      "sprite_path": "static/dump/umap/static/train/lemon/Image_64.png"
    },
    {
      "embedding": [
        12.631416320800781,
        2.5714669227600098
      ],
      "label": 17,
      "category": "jalepeno",
      "sprite_path": "static/dump/umap/static/train/lemon/Image_2.jpg"
    },
    {
      "embedding": [
        2.4991161823272705,
        5.618043899536133
      ],
      "label": 17,
      "category": "jalepeno",
      "sprite_path": "static/dump/umap/static/train/lemon/Image_100.png"
    },
    {
      "embedding": [
        13.217435836791992,
        2.058262586593628
      ],
      "label": 17,
      "category": "jalepeno",
      "sprite_path": "static/dump/umap/static/train/lemon/Image_3.jpg"
    },
    {
      "embedding": [
        2.951352596282959,
        5.507550239562988
      ],
      "label": 17,
      "category": "jalepeno",
      "sprite_path": "static/dump/umap/static/train/lemon/Image_18.jpg"
    },
    {
      "embedding": [
        9.955602645874023,
        2.847929000854492
      ],
      "label": 17,
      "category": "jalepeno",
      "sprite_path": "static/dump/umap/static/train/cucumber/Image_89.jpg"
    },
    {
      "embedding": [
        7.1869988441467285,
        2.081968307495117
      ],
      "label": 17,
      "category": "jalepeno",
      "sprite_path": "static/dump/umap/static/train/cucumber/Image_1.jpg"
    },
    {
      "embedding": [
        12.45206356048584,
        1.69390869140625
      ],
      "label": 17,
      "category": "jalepeno",
      "sprite_path": "static/dump/umap/static/train/cucumber/Image_16.jpg"
    },
    {
      "embedding": [
        11.0028657913208,
        1.2385388612747192
      ],
      "label": 17,
      "category": "jalepeno",
      "sprite_path": "static/dump/umap/static/train/cucumber/Image_57.jpg"
    },
    {
      "embedding": [
        2.772834539413452,
        5.650505065917969
      ],
      "label": 17,
      "category": "jalepeno",
      "sprite_path": "static/dump/umap/static/train/cucumber/Image_54.png"
    },
    {
      "embedding": [
        7.607909679412842,
        0.6757792234420776
      ],
      "label": 17,
      "category": "jalepeno",
      "sprite_path": "static/dump/umap/static/train/cucumber/Image_12.jpg"
    },
    {
      "embedding": [
        1.5439094305038452,
        5.401501178741455
      ],
      "label": 17,
      "category": "jalepeno",
      "sprite_path": "static/dump/umap/static/train/cucumber/Image_56.jpg"
    },
    {
      "embedding": [
        6.896392345428467,
        1.6674822568893433
      ],
      "label": 17,
      "category": "jalepeno",
      "sprite_path": "static/dump/umap/static/train/cucumber/Image_33.jpg"
    },
    {
      "embedding": [
        2.884798288345337,
        5.368957042694092
      ],
      "label": 17,
      "category": "jalepeno",
      "sprite_path": "static/dump/umap/static/train/cucumber/Image_45.jpg"
    },
    {
      "embedding": [
        9.878039360046387,
        1.8287752866744995
      ],
      "label": 17,
      "category": "jalepeno",
      "sprite_path": "static/dump/umap/static/train/cucumber/Image_94.jpg"
    },
    {
      "embedding": [
        6.2069573402404785,
        1.751083254814148
      ],
      "label": 17,
      "category": "jalepeno",
      "sprite_path": "static/dump/umap/static/train/cucumber/Image_41.png"
    },
    {
      "embedding": [
        3.5952296257019043,
        4.974545001983643
      ],
      "label": 17,
      "category": "jalepeno",
      "sprite_path": "static/dump/umap/static/train/cucumber/Image_40.jpg"
    },
    {
      "embedding": [
        12.703768730163574,
        2.6951048374176025
      ],
      "label": 17,
      "category": "jalepeno",
      "sprite_path": "static/dump/umap/static/train/cucumber/Image_10.jpg"
    },
    {
      "embedding": [
        10.167131423950195,
        1.3047016859054565
      ],
      "label": 17,
      "category": "jalepeno",
      "sprite_path": "static/dump/umap/static/train/cucumber/Image_21.jpg"
    },
    {
      "embedding": [
        2.7213492393493652,
        5.731416702270508
      ],
      "label": 17,
      "category": "jalepeno",
      "sprite_path": "static/dump/umap/static/train/cucumber/Image_78.jpg"
    },
    {
      "embedding": [
        12.791587829589844,
        2.7984097003936768
      ],
      "label": 17,
      "category": "jalepeno",
      "sprite_path": "static/dump/umap/static/train/cucumber/Image_4.jpg"
    },
    {
      "embedding": [
        2.8025500774383545,
        5.805960178375244
      ],
      "label": 17,
      "category": "jalepeno",
      "sprite_path": "static/dump/umap/static/train/cucumber/Image_7.jpg"
    },
    {
      "embedding": [
        13.255179405212402,
        2.0862765312194824
      ],
      "label": 17,
      "category": "jalepeno",
      "sprite_path": "static/dump/umap/static/train/cucumber/Image_69.jpg"
    },
    {
      "embedding": [
        6.511294364929199,
        2.028017997741699
      ],
      "label": 17,
      "category": "jalepeno",
      "sprite_path": "static/dump/umap/static/train/cucumber/Image_48.jpg"
    },
    {
      "embedding": [
        5.86828088760376,
        2.7447073459625244
      ],
      "label": 17,
      "category": "jalepeno",
      "sprite_path": "static/dump/umap/static/train/cucumber/Image_95.jpg"
    },
    {
      "embedding": [
        9.835935592651367,
        1.7488912343978882
      ],
      "label": 10,
      "category": "cauliflower",
      "sprite_path": "static/dump/umap/static/train/cucumber/Image_86.jpg"
    },
    {
      "embedding": [
        9.331257820129395,
        1.6738587617874146
      ],
      "label": 10,
      "category": "cauliflower",
      "sprite_path": "static/dump/umap/static/train/cucumber/Image_68.jpg"
    },
    {
      "embedding": [
        6.979464530944824,
        3.0455620288848877
      ],
      "label": 10,
      "category": "cauliflower",
      "sprite_path": "static/dump/umap/static/train/cucumber/Image_23.jpg"
    },
    {
      "embedding": [
        4.8161301612854,
        4.1222357749938965
      ],
      "label": 10,
      "category": "cauliflower",
      "sprite_path": "static/dump/umap/static/train/cucumber/Image_8.jpg"
    },
    {
      "embedding": [
        7.380870819091797,
        2.0816516876220703
      ],
      "label": 10,
      "category": "cauliflower",
      "sprite_path": "static/dump/umap/static/train/cucumber/Image_22.jpg"
    },
    {
      "embedding": [
        13.093939781188965,
        1.1627607345581055
      ],
      "label": 10,
      "category": "cauliflower",
      "sprite_path": "static/dump/umap/static/train/cucumber/Image_79.jpg"
    },
    {
      "embedding": [
        2.836806058883667,
        4.9571404457092285
      ],
      "label": 10,
      "category": "cauliflower",
      "sprite_path": "static/dump/umap/static/train/cucumber/Image_17.jpg"
    },
    {
      "embedding": [
        11.44167423248291,
        1.0854846239089966
      ],
      "label": 10,
      "category": "cauliflower",
      "sprite_path": "static/dump/umap/static/train/cucumber/Image_77.jpg"
    },
    {
      "embedding": [
        10.744848251342773,
        1.4935274124145508
      ],
      "label": 10,
      "category": "cauliflower",
      "sprite_path": "static/dump/umap/static/train/cucumber/Image_25.jpg"
    },
    {
      "embedding": [
        9.464436531066895,
        1.294600486755371
      ],
      "label": 10,
      "category": "cauliflower",
      "sprite_path": "static/dump/umap/static/train/cucumber/Image_46.jpg"
    },
    {
      "embedding": [
        12.1234130859375,
        1.5688934326171875
      ],
      "label": 10,
      "category": "cauliflower",
      "sprite_path": "static/dump/umap/static/train/cucumber/Image_42.png"
    },
    {
      "embedding": [
        11.724370002746582,
        0.5719292163848877
      ],
      "label": 10,
      "category": "cauliflower",
      "sprite_path": "static/dump/umap/static/train/cucumber/Image_9.jpg"
    },
    {
      "embedding": [
        12.397602081298828,
        1.4863078594207764
      ],
      "label": 10,
      "category": "cauliflower",
      "sprite_path": "static/dump/umap/static/train/cucumber/Image_71.jpg"
    },
    {
      "embedding": [
        8.43699836730957,
        2.54369854927063
      ],
      "label": 10,
      "category": "cauliflower",
      "sprite_path": "static/dump/umap/static/train/cucumber/Image_34.jpg"
    },
    {
      "embedding": [
        10.786299705505371,
        1.659988284111023
      ],
      "label": 10,
      "category": "cauliflower",
      "sprite_path": "static/dump/umap/static/train/cucumber/Image_81.jpg"
    },
    {
      "embedding": [
        1.7927229404449463,
        4.51529598236084
      ],
      "label": 10,
      "category": "cauliflower",
      "sprite_path": "static/dump/umap/static/train/cucumber/Image_6.jpg"
    },
    {
      "embedding": [
        8.387773513793945,
        2.2957286834716797
      ],
      "label": 10,
      "category": "cauliflower",
      "sprite_path": "static/dump/umap/static/train/cucumber/Image_20.jpg"
    },
    {
      "embedding": [
        8.683773040771484,
        2.100487232208252
      ],
      "label": 10,
      "category": "cauliflower",
      "sprite_path": "static/dump/umap/static/train/cucumber/Image_98.jpg"
    },
    {
      "embedding": [
        2.2389278411865234,
        3.711610794067383
      ],
      "label": 10,
      "category": "cauliflower",
      "sprite_path": "static/dump/umap/static/train/cucumber/Image_47.jpg"
    },
    {
      "embedding": [
        1.758490800857544,
        4.432326793670654
      ],
      "label": 10,
      "category": "cauliflower",
      "sprite_path": "static/dump/umap/static/train/cucumber/Image_59.png"
    },
    {
      "embedding": [
        10.43095874786377,
        1.2670979499816895
      ],
      "label": 10,
      "category": "cauliflower",
      "sprite_path": "static/dump/umap/static/train/cucumber/Image_19.jpg"
    },
    {
      "embedding": [
        9.433886528015137,
        2.113365411758423
      ],
      "label": 10,
      "category": "cauliflower",
      "sprite_path": "static/dump/umap/static/train/cucumber/Image_88.jpg"
    },
    {
      "embedding": [
        10.628600120544434,
        1.1471900939941406
      ],
      "label": 10,
      "category": "cauliflower",
      "sprite_path": "static/dump/umap/static/train/cucumber/Image_29.jpg"
    },
    {
      "embedding": [
        3.584543228149414,
        4.183676242828369
      ],
      "label": 10,
      "category": "cauliflower",
      "sprite_path": "static/dump/umap/static/train/cucumber/Image_61.jpg"
    },
    {
      "embedding": [
        9.520968437194824,
        1.8139326572418213
      ],
      "label": 10,
      "category": "cauliflower",
      "sprite_path": "static/dump/umap/static/train/cucumber/Image_84.jpg"
    },
    {
      "embedding": [
        10.727121353149414,
        2.135176420211792
      ],
      "label": 10,
      "category": "cauliflower",
      "sprite_path": "static/dump/umap/static/train/cucumber/Image_85.jpg"
    },
    {
      "embedding": [
        8.593926429748535,
        2.448516368865967
      ],
      "label": 10,
      "category": "cauliflower",
      "sprite_path": "static/dump/umap/static/train/cucumber/Image_74.jpg"
    },
    {
      "embedding": [
        2.868425130844116,
        4.679158687591553
      ],
      "label": 10,
      "category": "cauliflower",
      "sprite_path": "static/dump/umap/static/train/cucumber/Image_64.jpg"
    },
    {
      "embedding": [
        9.301756858825684,
        2.468548536300659
      ],
      "label": 10,
      "category": "cauliflower",
      "sprite_path": "static/dump/umap/static/train/cucumber/Image_27.jpg"
    },
    {
      "embedding": [
        10.408513069152832,
        1.5103906393051147
      ],
      "label": 10,
      "category": "cauliflower",
      "sprite_path": "static/dump/umap/static/train/cucumber/Image_44.jpg"
    },
    {
      "embedding": [
        7.26407527923584,
        3.481666088104248
      ],
      "label": 10,
      "category": "cauliflower",
      "sprite_path": "static/dump/umap/static/train/cucumber/Image_73.jpg"
    },
    {
      "embedding": [
        0.9898672699928284,
        4.280630588531494
      ],
      "label": 10,
      "category": "cauliflower",
      "sprite_path": "static/dump/umap/static/train/cucumber/Image_96.jpg"
    },
    {
      "embedding": [
        8.502827644348145,
        2.957775115966797
      ],
      "label": 10,
      "category": "cauliflower",
      "sprite_path": "static/dump/umap/static/train/cucumber/Image_52.jpg"
    },
    {
      "embedding": [
        1.9643135070800781,
        3.9988956451416016
      ],
      "label": 10,
      "category": "cauliflower",
      "sprite_path": "static/dump/umap/static/train/cucumber/Image_90.jpg"
    },
    {
      "embedding": [
        8.102984428405762,
        3.0706193447113037
      ],
      "label": 10,
      "category": "cauliflower",
      "sprite_path": "static/dump/umap/static/train/cucumber/Image_83.jpg"
    },
    {
      "embedding": [
        11.167739868164062,
        0.7942863702774048
      ],
      "label": 10,
      "category": "cauliflower",
      "sprite_path": "static/dump/umap/static/train/cucumber/Image_11.jpg"
    },
    {
      "embedding": [
        7.4104413986206055,
        3.0443217754364014
      ],
      "label": 10,
      "category": "cauliflower",
      "sprite_path": "static/dump/umap/static/train/cucumber/Image_58.jpg"
    },
    {
      "embedding": [
        8.563939094543457,
        2.1804535388946533
      ],
      "label": 10,
      "category": "cauliflower",
      "sprite_path": "static/dump/umap/static/train/cucumber/Image_97.jpg"
    },
    {
      "embedding": [
        8.410451889038086,
        2.4986722469329834
      ],
      "label": 10,
      "category": "cauliflower",
      "sprite_path": "static/dump/umap/static/train/cucumber/Image_55.png"
    },
    {
      "embedding": [
        7.689985752105713,
        3.3070242404937744
      ],
      "label": 10,
      "category": "cauliflower",
      "sprite_path": "static/dump/umap/static/train/cucumber/Image_30.jpg"
    },
    {
      "embedding": [
        10.780234336853027,
        1.105865240097046
      ],
      "label": 10,
      "category": "cauliflower",
      "sprite_path": "static/dump/umap/static/train/cucumber/Image_5.jpg"
    },
    {
      "embedding": [
        7.654803276062012,
        3.3357300758361816
      ],
      "label": 10,
      "category": "cauliflower",
      "sprite_path": "static/dump/umap/static/train/cucumber/Image_100.jpg"
    },
    {
      "embedding": [
        10.202603340148926,
        2.4813878536224365
      ],
      "label": 10,
      "category": "cauliflower",
      "sprite_path": "static/dump/umap/static/train/cucumber/Image_82.png"
    },
    {
      "embedding": [
        13.088275909423828,
        1.0066266059875488
      ],
      "label": 10,
      "category": "cauliflower",
      "sprite_path": "static/dump/umap/static/train/cucumber/Image_70.jpg"
    },
    {
      "embedding": [
        7.341381549835205,
        3.5806374549865723
      ],
      "label": 10,
      "category": "cauliflower",
      "sprite_path": "static/dump/umap/static/train/cucumber/Image_38.png"
    },
    {
      "embedding": [
        2.4557230472564697,
        5.0923075675964355
      ],
      "label": 10,
      "category": "cauliflower",
      "sprite_path": "static/dump/umap/static/train/cucumber/Image_15.jpg"
    },
    {
      "embedding": [
        0.848007082939148,
        5.045281410217285
      ],
      "label": 10,
      "category": "cauliflower",
      "sprite_path": "static/dump/umap/static/train/cucumber/Image_35.jpg"
    },
    {
      "embedding": [
        2.402172565460205,
        4.433926582336426
      ],
      "label": 10,
      "category": "cauliflower",
      "sprite_path": "static/dump/umap/static/train/cucumber/Image_36.jpeg"
    },
    {
      "embedding": [
        2.7379956245422363,
        4.536186218261719
      ],
      "label": 10,
      "category": "cauliflower",
      "sprite_path": "static/dump/umap/static/train/cucumber/Image_14.jpg"
    },
    {
      "embedding": [
        11.22819709777832,
        1.0811762809753418
      ],
      "label": 10,
      "category": "cauliflower",
      "sprite_path": "static/dump/umap/static/train/cucumber/Image_39.jpg"
    },
    {
      "embedding": [
        6.658987045288086,
        2.2433431148529053
      ],
      "label": 10,
      "category": "cauliflower",
      "sprite_path": "static/dump/umap/static/train/cucumber/Image_63.jpg"
    },
    {
      "embedding": [
        11.367866516113281,
        1.0294320583343506
      ],
      "label": 10,
      "category": "cauliflower",
      "sprite_path": "static/dump/umap/static/train/cucumber/Image_75.jpg"
    },
    {
      "embedding": [
        0.9096083045005798,
        4.283588409423828
      ],
      "label": 10,
      "category": "cauliflower",
      "sprite_path": "static/dump/umap/static/train/cucumber/Image_91.jpeg"
    },
    {
      "embedding": [
        11.141480445861816,
        3.0435590744018555
      ],
      "label": 10,
      "category": "cauliflower",
      "sprite_path": "static/dump/umap/static/train/cucumber/Image_24.jpg"
    },
    {
      "embedding": [
        0.9809108972549438,
        5.487925052642822
      ],
      "label": 10,
      "category": "cauliflower",
      "sprite_path": "static/dump/umap/static/train/cucumber/Image_99.jpg"
    },
    {
      "embedding": [
        8.664796829223633,
        2.0831406116485596
      ],
      "label": 10,
      "category": "cauliflower",
      "sprite_path": "static/dump/umap/static/train/cucumber/Image_32.jpg"
    },
    {
      "embedding": [
        11.598479270935059,
        0.8004834651947021
      ],
      "label": 10,
      "category": "cauliflower",
      "sprite_path": "static/dump/umap/static/train/cucumber/Image_37.jpg"
    },
    {
      "embedding": [
        10.627617835998535,
        2.3939356803894043
      ],
      "label": 10,
      "category": "cauliflower",
      "sprite_path": "static/dump/umap/static/train/cucumber/Image_28.jpg"
    },
    {
      "embedding": [
        1.5410188436508179,
        4.575368404388428
      ],
      "label": 10,
      "category": "cauliflower",
      "sprite_path": "static/dump/umap/static/train/cucumber/Image_93.jpg"
    },
    {
      "embedding": [
        1.4958434104919434,
        5.181095123291016
      ],
      "label": 10,
      "category": "cauliflower",
      "sprite_path": "static/dump/umap/static/train/cucumber/Image_31.jpg"
    },
    {
      "embedding": [
        0.9255692362785339,
        6.140462398529053
      ],
      "label": 10,
      "category": "cauliflower",
      "sprite_path": "static/dump/umap/static/train/cucumber/Image_2.jpg"
    },
    {
      "embedding": [
        2.2652204036712646,
        3.695645809173584
      ],
      "label": 10,
      "category": "cauliflower",
      "sprite_path": "static/dump/umap/static/train/cucumber/Image_3.jpg"
    },
    {
      "embedding": [
        1.0219472646713257,
        4.4920759201049805
      ],
      "label": 10,
      "category": "cauliflower",
      "sprite_path": "static/dump/umap/static/train/cucumber/Image_26.jpg"
    },
    {
      "embedding": [
        11.173206329345703,
        0.9267553091049194
      ],
      "label": 10,
      "category": "cauliflower",
      "sprite_path": "static/dump/umap/static/train/cucumber/Image_66.jpg"
    },
    {
      "embedding": [
        2.3215577602386475,
        3.674215316772461
      ],
      "label": 10,
      "category": "cauliflower",
      "sprite_path": "static/dump/umap/static/train/cucumber/Image_87.jpg"
    },
    {
      "embedding": [
        2.8250250816345215,
        4.661096572875977
      ],
      "label": 10,
      "category": "cauliflower",
      "sprite_path": "static/dump/umap/static/train/cucumber/Image_80.jpeg"
    },
    {
      "embedding": [
        11.37018871307373,
        0.6332451701164246
      ],
      "label": 10,
      "category": "cauliflower",
      "sprite_path": "static/dump/umap/static/train/cucumber/Image_43.jpg"
    },
    {
      "embedding": [
        11.66857624053955,
        0.763495683670044
      ],
      "label": 10,
      "category": "cauliflower",
      "sprite_path": "static/dump/umap/static/train/cucumber/Image_18.jpg"
    },
    {
      "embedding": [
        2.5696024894714355,
        4.1942057609558105
      ],
      "label": 10,
      "category": "cauliflower",
      "sprite_path": "static/dump/umap/static/train/paprika/Image_89.jpg"
    },
    {
      "embedding": [
        0.9675901532173157,
        4.277833461761475
      ],
      "label": 10,
      "category": "cauliflower",
      "sprite_path": "static/dump/umap/static/train/paprika/Image_65.jpg"
    },
    {
      "embedding": [
        6.9524407386779785,
        1.8945974111557007
      ],
      "label": 10,
      "category": "cauliflower",
      "sprite_path": "static/dump/umap/static/train/paprika/Image_1.jpg"
    },
    {
      "embedding": [
        7.870696544647217,
        3.2442617416381836
      ],
      "label": 10,
      "category": "cauliflower",
      "sprite_path": "static/dump/umap/static/train/paprika/Image_16.jpg"
    },
    {
      "embedding": [
        11.075613975524902,
        1.2009645700454712
      ],
      "label": 10,
      "category": "cauliflower",
      "sprite_path": "static/dump/umap/static/train/paprika/Image_57.jpg"
    },
    {
      "embedding": [
        8.583449363708496,
        2.7005841732025146
      ],
      "label": 10,
      "category": "cauliflower",
      "sprite_path": "static/dump/umap/static/train/paprika/Image_12.jpg"
    },
    {
      "embedding": [
        11.037271499633789,
        0.8571290373802185
      ],
      "label": 10,
      "category": "cauliflower",
      "sprite_path": "static/dump/umap/static/train/paprika/Image_56.jpg"
    },
    {
      "embedding": [
        10.210186004638672,
        0.7479941844940186
      ],
      "label": 10,
      "category": "cauliflower",
      "sprite_path": "static/dump/umap/static/train/paprika/Image_45.jpg"
    },
    {
      "embedding": [
        7.781832218170166,
        3.084541082382202
      ],
      "label": 10,
      "category": "cauliflower",
      "sprite_path": "static/dump/umap/static/train/paprika/Image_94.jpg"
    },
    {
      "embedding": [
        10.113309860229492,
        1.8739162683486938
      ],
      "label": 10,
      "category": "cauliflower",
      "sprite_path": "static/dump/umap/static/train/paprika/Image_40.jpg"
    },
    {
      "embedding": [
        1.4901841878890991,
        4.021743297576904
      ],
      "label": 10,
      "category": "cauliflower",
      "sprite_path": "static/dump/umap/static/train/paprika/Image_21.jpg"
    },
    {
      "embedding": [
        2.2451395988464355,
        3.709116220474243
      ],
      "label": 10,
      "category": "cauliflower",
      "sprite_path": "static/dump/umap/static/train/paprika/Image_59.jpg"
    },
    {
      "embedding": [
        9.121644020080566,
        2.4975903034210205
      ],
      "label": 10,
      "category": "cauliflower",
      "sprite_path": "static/dump/umap/static/train/paprika/Image_4.jpg"
    },
    {
      "embedding": [
        1.5752781629562378,
        4.092204570770264
      ],
      "label": 10,
      "category": "cauliflower",
      "sprite_path": "static/dump/umap/static/train/paprika/Image_38.jpg"
    },
    {
      "embedding": [
        9.465313911437988,
        2.506312131881714
      ],
      "label": 10,
      "category": "cauliflower",
      "sprite_path": "static/dump/umap/static/train/paprika/Image_41.jpg"
    },
    {
      "embedding": [
        10.650080680847168,
        1.5107508897781372
      ],
      "label": 10,
      "category": "cauliflower",
      "sprite_path": "static/dump/umap/static/train/paprika/Image_7.jpg"
    },
    {
      "embedding": [
        6.922637462615967,
        3.043670892715454
      ],
      "label": 10,
      "category": "cauliflower",
      "sprite_path": "static/dump/umap/static/train/paprika/Image_60.jpg"
    },
    {
      "embedding": [
        1.2718256711959839,
        4.370584964752197
      ],
      "label": 10,
      "category": "cauliflower",
      "sprite_path": "static/dump/umap/static/train/paprika/Image_13.jpg"
    },
    {
      "embedding": [
        11.741530418395996,
        0.5321756601333618
      ],
      "label": 10,
      "category": "cauliflower",
      "sprite_path": "static/dump/umap/static/train/paprika/Image_91.jpg"
    },
    {
      "embedding": [
        3.5598952770233154,
        4.1621527671813965
      ],
      "label": 10,
      "category": "cauliflower",
      "sprite_path": "static/dump/umap/static/train/paprika/Image_95.jpg"
    },
    {
      "embedding": [
        11.945958137512207,
        1.0815184116363525
      ],
      "label": 10,
      "category": "cauliflower",
      "sprite_path": "static/dump/umap/static/train/paprika/Image_68.jpg"
    },
    {
      "embedding": [
        11.95989990234375,
        0.8795741200447083
      ],
      "label": 10,
      "category": "cauliflower",
      "sprite_path": "static/dump/umap/static/train/paprika/Image_8.jpg"
    },
    {
      "embedding": [
        10.075224876403809,
        1.5192776918411255
      ],
      "label": 10,
      "category": "cauliflower",
      "sprite_path": "static/dump/umap/static/train/paprika/Image_86.png"
    },
    {
      "embedding": [
        10.646001815795898,
        0.905109167098999
      ],
      "label": 10,
      "category": "cauliflower",
      "sprite_path": "static/dump/umap/static/train/paprika/Image_79.jpg"
    },
    {
      "embedding": [
        10.574361801147461,
        1.3048971891403198
      ],
      "label": 10,
      "category": "cauliflower",
      "sprite_path": "static/dump/umap/static/train/paprika/Image_17.jpg"
    },
    {
      "embedding": [
        8.167582511901855,
        3.111154794692993
      ],
      "label": 10,
      "category": "cauliflower",
      "sprite_path": "static/dump/umap/static/train/paprika/Image_77.jpg"
    },
    {
      "embedding": [
        12.2468900680542,
        2.0456228256225586
      ],
      "label": 22,
      "category": "beetroot",
      "sprite_path": "static/dump/umap/static/train/paprika/Image_25.jpg"
    },
    {
      "embedding": [
        6.55780553817749,
        2.8274502754211426
      ],
      "label": 22,
      "category": "beetroot",
      "sprite_path": "static/dump/umap/static/train/paprika/Image_46.jpg"
    },
    {
      "embedding": [
        2.2867817878723145,
        4.143605709075928
      ],
      "label": 22,
      "category": "beetroot",
      "sprite_path": "static/dump/umap/static/train/paprika/Image_9.jpg"
    },
    {
      "embedding": [
        3.9306387901306152,
        3.665436029434204
      ],
      "label": 22,
      "category": "beetroot",
      "sprite_path": "static/dump/umap/static/train/paprika/Image_71.jpg"
    },
    {
      "embedding": [
        7.219452857971191,
        2.0327506065368652
      ],
      "label": 22,
      "category": "beetroot",
      "sprite_path": "static/dump/umap/static/train/paprika/Image_34.jpg"
    },
    {
      "embedding": [
        2.641613245010376,
        4.797311305999756
      ],
      "label": 22,
      "category": "beetroot",
      "sprite_path": "static/dump/umap/static/train/paprika/Image_81.jpg"
    },
    {
      "embedding": [
        3.640151262283325,
        4.988981246948242
      ],
      "label": 22,
      "category": "beetroot",
      "sprite_path": "static/dump/umap/static/train/paprika/Image_6.jpg"
    },
    {
      "embedding": [
        4.60345458984375,
        4.726329326629639
      ],
      "label": 22,
      "category": "beetroot",
      "sprite_path": "static/dump/umap/static/train/paprika/Image_20.jpg"
    },
    {
      "embedding": [
        10.667258262634277,
        0.7063976526260376
      ],
      "label": 22,
      "category": "beetroot",
      "sprite_path": "static/dump/umap/static/train/paprika/Image_98.jpg"
    },
    {
      "embedding": [
        3.9456639289855957,
        3.6435141563415527
      ],
      "label": 22,
      "category": "beetroot",
      "sprite_path": "static/dump/umap/static/train/paprika/Image_47.jpg"
    },
    {
      "embedding": [
        8.424198150634766,
        -0.06682679057121277
      ],
      "label": 22,
      "category": "beetroot",
      "sprite_path": "static/dump/umap/static/train/paprika/Image_19.jpg"
    },
    {
      "embedding": [
        8.31264591217041,
        0.39912188053131104
      ],
      "label": 22,
      "category": "beetroot",
      "sprite_path": "static/dump/umap/static/train/paprika/Image_29.jpg"
    },
    {
      "embedding": [
        2.971102237701416,
        4.022626876831055
      ],
      "label": 22,
      "category": "beetroot",
      "sprite_path": "static/dump/umap/static/train/paprika/Image_61.jpg"
    },
    {
      "embedding": [
        8.85270881652832,
        -0.478283166885376
      ],
      "label": 22,
      "category": "beetroot",
      "sprite_path": "static/dump/umap/static/train/paprika/Image_84.jpg"
    },
    {
      "embedding": [
        3.0590169429779053,
        3.9678754806518555
      ],
      "label": 22,
      "category": "beetroot",
      "sprite_path": "static/dump/umap/static/train/paprika/Image_74.jpg"
    },
    {
      "embedding": [
        6.590541362762451,
        2.577409267425537
      ],
      "label": 22,
      "category": "beetroot",
      "sprite_path": "static/dump/umap/static/train/paprika/Image_64.jpg"
    },
    {
      "embedding": [
        8.887328147888184,
        -0.4766333997249603
      ],
      "label": 22,
      "category": "beetroot",
      "sprite_path": "static/dump/umap/static/train/paprika/Image_27.jpg"
    },
    {
      "embedding": [
        1.9531540870666504,
        4.370265483856201
      ],
      "label": 22,
      "category": "beetroot",
      "sprite_path": "static/dump/umap/static/train/paprika/Image_72.jpg"
    },
    {
      "embedding": [
        8.595121383666992,
        -0.2483905404806137
      ],
      "label": 22,
      "category": "beetroot",
      "sprite_path": "static/dump/umap/static/train/paprika/Image_73.jpg"
    },
    {
      "embedding": [
        3.528932571411133,
        5.33342170715332
      ],
      "label": 22,
      "category": "beetroot",
      "sprite_path": "static/dump/umap/static/train/paprika/Image_96.jpg"
    },
    {
      "embedding": [
        2.6289632320404053,
        4.539007663726807
      ],
      "label": 22,
      "category": "beetroot",
      "sprite_path": "static/dump/umap/static/train/paprika/Image_90.jpg"
    },
    {
      "embedding": [
        6.179611682891846,
        3.5226054191589355
      ],
      "label": 22,
      "category": "beetroot",
      "sprite_path": "static/dump/umap/static/train/paprika/Image_83.jpg"
    },
    {
      "embedding": [
        8.92766284942627,
        -0.3794685900211334
      ],
      "label": 22,
      "category": "beetroot",
      "sprite_path": "static/dump/umap/static/train/paprika/Image_11.jpg"
    },
    {
      "embedding": [
        13.111895561218262,
        1.1698672771453857
      ],
      "label": 22,
      "category": "beetroot",
      "sprite_path": "static/dump/umap/static/train/paprika/Image_82.jpg"
    },
    {
      "embedding": [
        11.737432479858398,
        2.0927226543426514
      ],
      "label": 22,
      "category": "beetroot",
      "sprite_path": "static/dump/umap/static/train/paprika/Image_80.jpg"
    },
    {
      "embedding": [
        2.294098377227783,
        4.666358470916748
      ],
      "label": 22,
      "category": "beetroot",
      "sprite_path": "static/dump/umap/static/train/paprika/Image_26.png"
    },
    {
      "embedding": [
        10.29858684539795,
        2.0715887546539307
      ],
      "label": 22,
      "category": "beetroot",
      "sprite_path": "static/dump/umap/static/train/paprika/Image_67.jpg"
    },
    {
      "embedding": [
        6.201182842254639,
        3.439307689666748
      ],
      "label": 22,
      "category": "beetroot",
      "sprite_path": "static/dump/umap/static/train/paprika/Image_58.jpg"
    },
    {
      "embedding": [
        8.163774490356445,
        2.3159425258636475
      ],
      "label": 22,
      "category": "beetroot",
      "sprite_path": "static/dump/umap/static/train/paprika/Image_97.jpg"
    },
    {
      "embedding": [
        9.768305778503418,
        1.9970252513885498
      ],
      "label": 22,
      "category": "beetroot",
      "sprite_path": "static/dump/umap/static/train/paprika/Image_30.jpg"
    },
    {
      "embedding": [
        8.90719223022461,
        -0.3021794557571411
      ],
      "label": 22,
      "category": "beetroot",
      "sprite_path": "static/dump/umap/static/train/paprika/Image_5.jpg"
    },
    {
      "embedding": [
        13.069414138793945,
        0.9418357610702515
      ],
      "label": 22,
      "category": "beetroot",
      "sprite_path": "static/dump/umap/static/train/paprika/Image_100.jpg"
    },
    {
      "embedding": [
        9.910408020019531,
        -0.00896275881677866
      ],
      "label": 22,
      "category": "beetroot",
      "sprite_path": "static/dump/umap/static/train/paprika/Image_70.jpg"
    },
    {
      "embedding": [
        12.08416748046875,
        1.6301239728927612
      ],
      "label": 22,
      "category": "beetroot",
      "sprite_path": "static/dump/umap/static/train/paprika/Image_15.jpg"
    },
    {
      "embedding": [
        1.0942964553833008,
        4.4957709312438965
      ],
      "label": 22,
      "category": "beetroot",
      "sprite_path": "static/dump/umap/static/train/paprika/Image_35.jpg"
    },
    {
      "embedding": [
        7.691145420074463,
        2.2775421142578125
      ],
      "label": 22,
      "category": "beetroot",
      "sprite_path": "static/dump/umap/static/train/paprika/Image_36.jpeg"
    },
    {
      "embedding": [
        8.736040115356445,
        2.0248658657073975
      ],
      "label": 22,
      "category": "beetroot",
      "sprite_path": "static/dump/umap/static/train/paprika/Image_39.jpg"
    },
    {
      "embedding": [
        3.638266086578369,
        5.232104778289795
      ],
      "label": 22,
      "category": "beetroot",
      "sprite_path": "static/dump/umap/static/train/paprika/Image_63.jpg"
    },
    {
      "embedding": [
        2.7939915657043457,
        4.622282981872559
      ],
      "label": 22,
      "category": "beetroot",
      "sprite_path": "static/dump/umap/static/train/paprika/Image_75.jpg"
    },
    {
      "embedding": [
        3.539684295654297,
        3.8129165172576904
      ],
      "label": 22,
      "category": "beetroot",
      "sprite_path": "static/dump/umap/static/train/paprika/Image_10.jpeg"
    },
    {
      "embedding": [
        1.4598215818405151,
        5.102609634399414
      ],
      "label": 22,
      "category": "beetroot",
      "sprite_path": "static/dump/umap/static/train/paprika/Image_24.jpg"
    },
    {
      "embedding": [
        1.4693807363510132,
        4.904515266418457
      ],
      "label": 22,
      "category": "beetroot",
      "sprite_path": "static/dump/umap/static/train/paprika/Image_14.png"
    },
    {
      "embedding": [
        11.289910316467285,
        1.2318023443222046
      ],
      "label": 22,
      "category": "beetroot",
      "sprite_path": "static/dump/umap/static/train/paprika/Image_99.jpg"
    },
    {
      "embedding": [
        5.30967903137207,
        2.845358371734619
      ],
      "label": 22,
      "category": "beetroot",
      "sprite_path": "static/dump/umap/static/train/paprika/Image_32.jpg"
    },
    {
      "embedding": [
        9.343774795532227,
        0.7041071057319641
      ],
      "label": 22,
      "category": "beetroot",
      "sprite_path": "static/dump/umap/static/train/paprika/Image_18.jpeg"
    },
    {
      "embedding": [
        8.729837417602539,
        0.11887598037719727
      ],
      "label": 22,
      "category": "beetroot",
      "sprite_path": "static/dump/umap/static/train/paprika/Image_37.jpg"
    },
    {
      "embedding": [
        10.619329452514648,
        0.8755926489830017
      ],
      "label": 22,
      "category": "beetroot",
      "sprite_path": "static/dump/umap/static/train/paprika/Image_22.png"
    },
    {
      "embedding": [
        4.509840965270996,
        4.662837505340576
      ],
      "label": 22,
      "category": "beetroot",
      "sprite_path": "static/dump/umap/static/train/paprika/Image_51.jpg"
    },
    {
      "embedding": [
        9.231088638305664,
        0.45241671800613403
      ],
      "label": 22,
      "category": "beetroot",
      "sprite_path": "static/dump/umap/static/train/paprika/Image_28.jpg"
    },
    {
      "embedding": [
        1.9746488332748413,
        4.457010746002197
      ],
      "label": 22,
      "category": "beetroot",
      "sprite_path": "static/dump/umap/static/train/paprika/Image_42.jpg"
    },
    {
      "embedding": [
        2.8915510177612305,
        3.971379041671753
      ],
      "label": 22,
      "category": "beetroot",
      "sprite_path": "static/dump/umap/static/train/paprika/Image_31.jpg"
    },
    {
      "embedding": [
        2.9460391998291016,
        4.620093822479248
      ],
      "label": 22,
      "category": "beetroot",
      "sprite_path": "static/dump/umap/static/train/paprika/Image_2.jpg"
    },
    {
      "embedding": [
        3.0892152786254883,
        4.014037609100342
      ],
      "label": 22,
      "category": "beetroot",
      "sprite_path": "static/dump/umap/static/train/paprika/Image_3.jpg"
    },
    {
      "embedding": [
        12.854856491088867,
        0.6106305122375488
      ],
      "label": 22,
      "category": "beetroot",
      "sprite_path": "static/dump/umap/static/train/paprika/Image_85.jpeg"
    },
    {
      "embedding": [
        4.274635314941406,
        4.355842113494873
      ],
      "label": 22,
      "category": "beetroot",
      "sprite_path": "static/dump/umap/static/train/paprika/Image_66.jpg"
    },
    {
      "embedding": [
        8.829095840454102,
        -0.5196160078048706
      ],
      "label": 22,
      "category": "beetroot",
      "sprite_path": "static/dump/umap/static/train/paprika/Image_87.jpg"
    },
    {
      "embedding": [
        6.763596534729004,
        3.2595224380493164
      ],
      "label": 22,
      "category": "beetroot",
      "sprite_path": "static/dump/umap/static/train/kiwi/Image_89.jpg"
    },
    {
      "embedding": [
        7.630955219268799,
        2.2641186714172363
      ],
      "label": 22,
      "category": "beetroot",
      "sprite_path": "static/dump/umap/static/train/kiwi/Image_1.jpg"
    },
    {
      "embedding": [
        8.861918449401855,
        -0.484743595123291
      ],
      "label": 22,
      "category": "beetroot",
      "sprite_path": "static/dump/umap/static/train/kiwi/Image_16.jpg"
    },
    {
      "embedding": [
        7.096198558807373,
        2.5253963470458984
      ],
      "label": 22,
      "category": "beetroot",
      "sprite_path": "static/dump/umap/static/train/kiwi/Image_57.jpg"
    },
    {
      "embedding": [
        4.2320451736450195,
        4.608612060546875
      ],
      "label": 22,
      "category": "beetroot",
      "sprite_path": "static/dump/umap/static/train/kiwi/Image_12.jpg"
    },
    {
      "embedding": [
        4.593619346618652,
        4.75200891494751
      ],
      "label": 22,
      "category": "beetroot",
      "sprite_path": "static/dump/umap/static/train/kiwi/Image_56.jpg"
    },
    {
      "embedding": [
        3.3277876377105713,
        3.8816139698028564
      ],
      "label": 22,
      "category": "beetroot",
      "sprite_path": "static/dump/umap/static/train/kiwi/Image_33.jpg"
    },
    {
      "embedding": [
        4.298480987548828,
        4.617435932159424
      ],
      "label": 22,
      "category": "beetroot",
      "sprite_path": "static/dump/umap/static/train/kiwi/Image_40.jpg"
    },
    {
      "embedding": [
        3.2019903659820557,
        4.322522163391113
      ],
      "label": 22,
      "category": "beetroot",
      "sprite_path": "static/dump/umap/static/train/kiwi/Image_10.jpg"
    },
    {
      "embedding": [
        7.193324565887451,
        2.5919501781463623
      ],
      "label": 22,
      "category": "beetroot",
      "sprite_path": "static/dump/umap/static/train/kiwi/Image_21.jpg"
    },
    {
      "embedding": [
        7.749783992767334,
        2.5580129623413086
      ],
      "label": 22,
      "category": "beetroot",
      "sprite_path": "static/dump/umap/static/train/kiwi/Image_78.jpg"
    },
    {
      "embedding": [
        4.341734886169434,
        4.439241409301758
      ],
      "label": 22,
      "category": "beetroot",
      "sprite_path": "static/dump/umap/static/train/kiwi/Image_59.jpg"
    },
    {
      "embedding": [
        13.389496803283691,
        2.169825315475464
      ],
      "label": 22,
      "category": "beetroot",
      "sprite_path": "static/dump/umap/static/train/kiwi/Image_4.jpg"
    },
    {
      "embedding": [
        12.094748497009277,
        1.5658657550811768
      ],
      "label": 22,
      "category": "beetroot",
      "sprite_path": "static/dump/umap/static/train/kiwi/Image_38.jpg"
    },
    {
      "embedding": [
        6.690084457397461,
        3.0918352603912354
      ],
      "label": 22,
      "category": "beetroot",
      "sprite_path": "static/dump/umap/static/train/kiwi/Image_41.jpg"
    },
    {
      "embedding": [
        8.77812385559082,
        0.6634312272071838
      ],
      "label": 22,
      "category": "beetroot",
      "sprite_path": "static/dump/umap/static/train/kiwi/Image_7.jpg"
    },
    {
      "embedding": [
        3.9537577629089355,
        3.6451592445373535
      ],
      "label": 22,
      "category": "beetroot",
      "sprite_path": "static/dump/umap/static/train/kiwi/Image_48.jpg"
    },
    {
      "embedding": [
        4.586490154266357,
        4.715470314025879
      ],
      "label": 22,
      "category": "beetroot",
      "sprite_path": "static/dump/umap/static/train/kiwi/Image_60.jpg"
    },
    {
      "embedding": [
        3.7932159900665283,
        3.863633394241333
      ],
      "label": 22,
      "category": "beetroot",
      "sprite_path": "static/dump/umap/static/train/kiwi/Image_63.png"
    },
    {
      "embedding": [
        2.2405378818511963,
        4.666237831115723
      ],
      "label": 22,
      "category": "beetroot",
      "sprite_path": "static/dump/umap/static/train/kiwi/Image_13.jpg"
    },
    {
      "embedding": [
        6.410262584686279,
        3.199066400527954
      ],
      "label": 22,
      "category": "beetroot",
      "sprite_path": "static/dump/umap/static/train/kiwi/Image_49.jpg"
    },
    {
      "embedding": [
        2.590069532394409,
        4.49727725982666
      ],
      "label": 22,
      "category": "beetroot",
      "sprite_path": "static/dump/umap/static/train/kiwi/Image_95.jpg"
    },
    {
      "embedding": [
        2.5282492637634277,
        4.542994976043701
      ],
      "label": 22,
      "category": "beetroot",
      "sprite_path": "static/dump/umap/static/train/kiwi/Image_68.jpg"
    },
    {
      "embedding": [
        10.570418357849121,
        1.0061829090118408
      ],
      "label": 22,
      "category": "beetroot",
      "sprite_path": "static/dump/umap/static/train/kiwi/Image_23.jpg"
    },
    {
      "embedding": [
        8.447580337524414,
        1.024189829826355
      ],
      "label": 22,
      "category": "beetroot",
      "sprite_path": "static/dump/umap/static/train/kiwi/Image_8.jpg"
    },
    {
      "embedding": [
        7.4517316818237305,
        2.7184078693389893
      ],
      "label": 22,
      "category": "beetroot",
      "sprite_path": "static/dump/umap/static/train/kiwi/Image_22.jpg"
    },
    {
      "embedding": [
        3.018981695175171,
        4.392940998077393
      ],
      "label": 22,
      "category": "beetroot",
      "sprite_path": "static/dump/umap/static/train/kiwi/Image_79.jpg"
    },
    {
      "embedding": [
        11.789326667785645,
        1.1933507919311523
      ],
      "label": 16,
      "category": "capsicum",
      "sprite_path": "static/dump/umap/static/train/kiwi/Image_17.jpg"
    },
    {
      "embedding": [
        0.9497573971748352,
        4.38547420501709
      ],
      "label": 16,
      "category": "capsicum",
      "sprite_path": "static/dump/umap/static/train/kiwi/Image_77.jpg"
    },
    {
      "embedding": [
        10.830798149108887,
        1.9541605710983276
      ],
      "label": 16,
      "category": "capsicum",
      "sprite_path": "static/dump/umap/static/train/kiwi/Image_25.jpg"
    },
    {
      "embedding": [
        4.567073822021484,
        4.286248207092285
      ],
      "label": 16,
      "category": "capsicum",
      "sprite_path": "static/dump/umap/static/train/kiwi/Image_9.jpg"
    },
    {
      "embedding": [
        2.9980711936950684,
        4.75548791885376
      ],
      "label": 16,
      "category": "capsicum",
      "sprite_path": "static/dump/umap/static/train/kiwi/Image_71.jpg"
    },
    {
      "embedding": [
        2.923229217529297,
        5.202545166015625
      ],
      "label": 16,
      "category": "capsicum",
      "sprite_path": "static/dump/umap/static/train/kiwi/Image_34.jpg"
    },
    {
      "embedding": [
        1.6737440824508667,
        4.150174140930176
      ],
      "label": 16,
      "category": "capsicum",
      "sprite_path": "static/dump/umap/static/train/kiwi/Image_6.jpg"
    },
    {
      "embedding": [
        3.332339286804199,
        5.212830543518066
      ],
      "label": 16,
      "category": "capsicum",
      "sprite_path": "static/dump/umap/static/train/kiwi/Image_37.png"
    },
    {
      "embedding": [
        3.287038803100586,
        4.7396368980407715
      ],
      "label": 16,
      "category": "capsicum",
      "sprite_path": "static/dump/umap/static/train/kiwi/Image_20.jpg"
    },
    {
      "embedding": [
        4.03727912902832,
        4.715792179107666
      ],
      "label": 16,
      "category": "capsicum",
      "sprite_path": "static/dump/umap/static/train/kiwi/Image_98.jpg"
    },
    {
      "embedding": [
        12.606236457824707,
        0.6968913078308105
      ],
      "label": 16,
      "category": "capsicum",
      "sprite_path": "static/dump/umap/static/train/kiwi/Image_19.jpg"
    },
    {
      "embedding": [
        10.523768424987793,
        1.2748844623565674
      ],
      "label": 16,
      "category": "capsicum",
      "sprite_path": "static/dump/umap/static/train/kiwi/Image_88.jpg"
    },
    {
      "embedding": [
        3.304476261138916,
        4.912730693817139
      ],
      "label": 16,
      "category": "capsicum",
      "sprite_path": "static/dump/umap/static/train/kiwi/Image_61.jpg"
    },
    {
      "embedding": [
        4.359432220458984,
        4.080829620361328
      ],
      "label": 16,
      "category": "capsicum",
      "sprite_path": "static/dump/umap/static/train/kiwi/Image_84.jpg"
    },
    {
      "embedding": [
        6.330885410308838,
        2.8403029441833496
      ],
      "label": 16,
      "category": "capsicum",
      "sprite_path": "static/dump/umap/static/train/kiwi/Image_85.jpg"
    },
    {
      "embedding": [
        3.3975796699523926,
        4.949576377868652
      ],
      "label": 16,
      "category": "capsicum",
      "sprite_path": "static/dump/umap/static/train/kiwi/Image_53.jpg"
    },
    {
      "embedding": [
        2.41674542427063,
        4.40064811706543
      ],
      "label": 16,
      "category": "capsicum",
      "sprite_path": "static/dump/umap/static/train/kiwi/Image_92.jpg"
    },
    {
      "embedding": [
        3.7032432556152344,
        4.03472900390625
      ],
      "label": 16,
      "category": "capsicum",
      "sprite_path": "static/dump/umap/static/train/kiwi/Image_27.jpg"
    },
    {
      "embedding": [
        13.20242977142334,
        2.0804758071899414
      ],
      "label": 16,
      "category": "capsicum",
      "sprite_path": "static/dump/umap/static/train/kiwi/Image_55.jpg"
    },
    {
      "embedding": [
        4.31346321105957,
        4.1791090965271
      ],
      "label": 16,
      "category": "capsicum",
      "sprite_path": "static/dump/umap/static/train/kiwi/Image_44.jpg"
    },
    {
      "embedding": [
        9.092436790466309,
        1.3340263366699219
      ],
      "label": 16,
      "category": "capsicum",
      "sprite_path": "static/dump/umap/static/train/kiwi/Image_72.jpg"
    },
    {
      "embedding": [
        3.5578150749206543,
        4.1729817390441895
      ],
      "label": 16,
      "category": "capsicum",
      "sprite_path": "static/dump/umap/static/train/kiwi/Image_73.jpg"
    },
    {
      "embedding": [
        9.354601860046387,
        1.5439847707748413
      ],
      "label": 16,
      "category": "capsicum",
      "sprite_path": "static/dump/umap/static/train/kiwi/Image_52.jpg"
    },
    {
      "embedding": [
        9.856348991394043,
        1.7159947156906128
      ],
      "label": 16,
      "category": "capsicum",
      "sprite_path": "static/dump/umap/static/train/kiwi/Image_90.jpg"
    },
    {
      "embedding": [
        3.643611192703247,
        3.982037305831909
      ],
      "label": 16,
      "category": "capsicum",
      "sprite_path": "static/dump/umap/static/train/kiwi/Image_83.jpg"
    },
    {
      "embedding": [
        3.128103256225586,
        5.146657466888428
      ],
      "label": 16,
      "category": "capsicum",
      "sprite_path": "static/dump/umap/static/train/kiwi/Image_11.jpg"
    },
    {
      "embedding": [
        3.906562328338623,
        4.672933101654053
      ],
      "label": 16,
      "category": "capsicum",
      "sprite_path": "static/dump/umap/static/train/kiwi/Image_82.jpg"
    },
    {
      "embedding": [
        9.414898872375488,
        1.6055940389633179
      ],
      "label": 16,
      "category": "capsicum",
      "sprite_path": "static/dump/umap/static/train/kiwi/Image_80.jpg"
    },
    {
      "embedding": [
        2.4789535999298096,
        4.412382125854492
      ],
      "label": 16,
      "category": "capsicum",
      "sprite_path": "static/dump/umap/static/train/kiwi/Image_67.jpg"
    },
    {
      "embedding": [
        3.153153896331787,
        4.84985876083374
      ],
      "label": 16,
      "category": "capsicum",
      "sprite_path": "static/dump/umap/static/train/kiwi/Image_50.jpg"
    },
    {
      "embedding": [
        3.607121467590332,
        4.378382682800293
      ],
      "label": 16,
      "category": "capsicum",
      "sprite_path": "static/dump/umap/static/train/kiwi/Image_97.jpg"
    },
    {
      "embedding": [
        6.534414291381836,
        3.407257318496704
      ],
      "label": 16,
      "category": "capsicum",
      "sprite_path": "static/dump/umap/static/train/kiwi/Image_29.png"
    },
    {
      "embedding": [
        10.958349227905273,
        1.4385747909545898
      ],
      "label": 16,
      "category": "capsicum",
      "sprite_path": "static/dump/umap/static/train/kiwi/Image_62.jpg"
    },
    {
      "embedding": [
        7.4004225730896,
        1.968144416809082
      ],
      "label": 16,
      "category": "capsicum",
      "sprite_path": "static/dump/umap/static/train/kiwi/Image_30.jpg"
    },
    {
      "embedding": [
        13.169135093688965,
        2.1623191833496094
      ],
      "label": 16,
      "category": "capsicum",
      "sprite_path": "static/dump/umap/static/train/kiwi/Image_5.jpg"
    },
    {
      "embedding": [
        8.370153427124023,
        0.9747546911239624
      ],
      "label": 16,
      "category": "capsicum",
      "sprite_path": "static/dump/umap/static/train/kiwi/Image_100.jpg"
    },
    {
      "embedding": [
        10.849324226379395,
        1.7491183280944824
      ],
      "label": 16,
      "category": "capsicum",
      "sprite_path": "static/dump/umap/static/train/kiwi/Image_70.jpg"
    },
    {
      "embedding": [
        4.499977111816406,
        4.4439849853515625
      ],
      "label": 16,
      "category": "capsicum",
      "sprite_path": "static/dump/umap/static/train/kiwi/Image_15.jpg"
    },
    {
      "embedding": [
        12.909613609313965,
        1.2498301267623901
      ],
      "label": 16,
      "category": "capsicum",
      "sprite_path": "static/dump/umap/static/train/kiwi/Image_35.jpg"
    },
    {
      "embedding": [
        4.007170677185059,
        4.5892205238342285
      ],
      "label": 16,
      "category": "capsicum",
      "sprite_path": "static/dump/umap/static/train/kiwi/Image_14.jpg"
    },
    {
      "embedding": [
        7.544140815734863,
        3.3711535930633545
      ],
      "label": 16,
      "category": "capsicum",
      "sprite_path": "static/dump/umap/static/train/kiwi/Image_76.jpg"
    },
    {
      "embedding": [
        8.118097305297852,
        1.2992630004882812
      ],
      "label": 16,
      "category": "capsicum",
      "sprite_path": "static/dump/umap/static/train/kiwi/Image_75.jpg"
    },
    {
      "embedding": [
        2.9931132793426514,
        4.725576877593994
      ],
      "label": 16,
      "category": "capsicum",
      "sprite_path": "static/dump/umap/static/train/kiwi/Image_24.jpg"
    },
    {
      "embedding": [
        11.987452507019043,
        1.2841224670410156
      ],
      "label": 16,
      "category": "capsicum",
      "sprite_path": "static/dump/umap/static/train/kiwi/Image_99.jpg"
    },
    {
      "embedding": [
        3.515834331512451,
        4.898080348968506
      ],
      "label": 16,
      "category": "capsicum",
      "sprite_path": "static/dump/umap/static/train/kiwi/Image_32.jpg"
    },
    {
      "embedding": [
        3.315131425857544,
        5.041274070739746
      ],
      "label": 16,
      "category": "capsicum",
      "sprite_path": "static/dump/umap/static/train/kiwi/Image_65.png"
    },
    {
      "embedding": [
        7.7384443283081055,
        2.6498117446899414
      ],
      "label": 16,
      "category": "capsicum",
      "sprite_path": "static/dump/umap/static/train/kiwi/Image_51.jpg"
    },
    {
      "embedding": [
        2.1746206283569336,
        4.972994804382324
      ],
      "label": 16,
      "category": "capsicum",
      "sprite_path": "static/dump/umap/static/train/kiwi/Image_28.jpg"
    },
    {
      "embedding": [
        10.535494804382324,
        0.9523922204971313
      ],
      "label": 16,
      "category": "capsicum",
      "sprite_path": "static/dump/umap/static/train/kiwi/Image_54.jpg"
    },
    {
      "embedding": [
        2.580904483795166,
        4.082918643951416
      ],
      "label": 16,
      "category": "capsicum",
      "sprite_path": "static/dump/umap/static/train/kiwi/Image_93.jpg"
    },
    {
      "embedding": [
        2.7386672496795654,
        4.734305381774902
      ],
      "label": 16,
      "category": "capsicum",
      "sprite_path": "static/dump/umap/static/train/kiwi/Image_36.jpg"
    },
    {
      "embedding": [
        4.695902347564697,
        4.369318008422852
      ],
      "label": 16,
      "category": "capsicum",
      "sprite_path": "static/dump/umap/static/train/kiwi/Image_87.png"
    },
    {
      "embedding": [
        4.218425750732422,
        4.566845417022705
      ],
      "label": 16,
      "category": "capsicum",
      "sprite_path": "static/dump/umap/static/train/kiwi/Image_42.jpg"
    },
    {
      "embedding": [
        7.383815288543701,
        3.3086421489715576
      ],
      "label": 16,
      "category": "capsicum",
      "sprite_path": "static/dump/umap/static/train/kiwi/Image_31.jpg"
    },
    {
      "embedding": [
        1.96303391456604,
        5.841047286987305
      ],
      "label": 16,
      "category": "capsicum",
      "sprite_path": "static/dump/umap/static/train/kiwi/Image_64.png"
    },
    {
      "embedding": [
        4.5676422119140625,
        4.288478851318359
      ],
      "label": 16,
      "category": "capsicum",
      "sprite_path": "static/dump/umap/static/train/kiwi/Image_2.jpg"
    },
    {
      "embedding": [
        11.035640716552734,
        1.1802599430084229
      ],
      "label": 16,
      "category": "capsicum",
      "sprite_path": "static/dump/umap/static/train/kiwi/Image_3.jpg"
    },
    {
      "embedding": [
        0.9092324376106262,
        4.347113132476807
      ],
      "label": 16,
      "category": "capsicum",
      "sprite_path": "static/dump/umap/static/train/kiwi/Image_26.jpg"
    },
    {
      "embedding": [
        13.211468696594238,
        2.1072514057159424
      ],
      "label": 16,
      "category": "capsicum",
      "sprite_path": "static/dump/umap/static/train/kiwi/Image_66.jpg"
    },
    {
      "embedding": [
        9.660512924194336,
        1.1851037740707397
      ],
      "label": 16,
      "category": "capsicum",
      "sprite_path": "static/dump/umap/static/train/kiwi/Image_43.jpg"
    },
    {
      "embedding": [
        3.946767568588257,
        4.790411472320557
      ],
      "label": 16,
      "category": "capsicum",
      "sprite_path": "static/dump/umap/static/train/kiwi/Image_18.jpg"
    },
    {
      "embedding": [
        3.9050724506378174,
        4.817158222198486
      ],
      "label": 16,
      "category": "capsicum",
      "sprite_path": "static/dump/umap/static/train/capsicum/Image_89.jpg"
    },
    {
      "embedding": [
        3.3194782733917236,
        4.962515354156494
      ],
      "label": 16,
      "category": "capsicum",
      "sprite_path": "static/dump/umap/static/train/capsicum/Image_65.jpg"
    },
    {
      "embedding": [
        3.696767807006836,
        4.846381664276123
      ],
      "label": 16,
      "category": "capsicum",
      "sprite_path": "static/dump/umap/static/train/capsicum/Image_1.jpg"
    },
    {
      "embedding": [
        9.24875545501709,
        1.5172507762908936
      ],
      "label": 16,
      "category": "capsicum",
      "sprite_path": "static/dump/umap/static/train/capsicum/Image_16.jpg"
    },
    {
      "embedding": [
        2.633941888809204,
        5.1901726722717285
      ],
      "label": 16,
      "category": "capsicum",
      "sprite_path": "static/dump/umap/static/train/capsicum/Image_12.jpg"
    },
    {
      "embedding": [
        10.066036224365234,
        1.0047324895858765
      ],
      "label": 16,
      "category": "capsicum",
      "sprite_path": "static/dump/umap/static/train/capsicum/Image_56.jpg"
    },
    {
      "embedding": [
        4.406837463378906,
        4.29406213760376
      ],
      "label": 16,
      "category": "capsicum",
      "sprite_path": "static/dump/umap/static/train/capsicum/Image_33.jpg"
    },
    {
      "embedding": [
        8.763742446899414,
        2.897568464279175
      ],
      "label": 16,
      "category": "capsicum",
      "sprite_path": "static/dump/umap/static/train/capsicum/Image_45.jpg"
    },
    {
      "embedding": [
        5.73484992980957,
        3.338728666305542
      ],
      "label": 16,
      "category": "capsicum",
      "sprite_path": "static/dump/umap/static/train/capsicum/Image_40.jpg"
    },
    {
      "embedding": [
        11.348251342773438,
        1.6320788860321045
      ],
      "label": 16,
      "category": "capsicum",
      "sprite_path": "static/dump/umap/static/train/capsicum/Image_10.jpg"
    },
    {
      "embedding": [
        9.531876564025879,
        1.4182136058807373
      ],
      "label": 16,
      "category": "capsicum",
      "sprite_path": "static/dump/umap/static/train/capsicum/Image_21.jpg"
    },
    {
      "embedding": [
        12.08487319946289,
        1.8224506378173828
      ],
      "label": 16,
      "category": "capsicum",
      "sprite_path": "static/dump/umap/static/train/capsicum/Image_78.jpg"
    },
    {
      "embedding": [
        0.8088700771331787,
        5.249048233032227
      ],
      "label": 16,
      "category": "capsicum",
      "sprite_path": "static/dump/umap/static/train/capsicum/Image_4.jpg"
    },
    {
      "embedding": [
        6.4973602294921875,
        3.2607531547546387
      ],
      "label": 16,
      "category": "capsicum",
      "sprite_path": "static/dump/umap/static/train/capsicum/Image_38.jpg"
    },
    {
      "embedding": [
        1.5837262868881226,
        4.099094390869141
      ],
      "label": 16,
      "category": "capsicum",
      "sprite_path": "static/dump/umap/static/train/capsicum/Image_41.jpg"
    },
    {
      "embedding": [
        10.083377838134766,
        0.5746434330940247
      ],
      "label": 16,
      "category": "capsicum",
      "sprite_path": "static/dump/umap/static/train/capsicum/Image_7.jpg"
    },
    {
      "embedding": [
        6.807512283325195,
        2.94183349609375
      ],
      "label": 16,
      "category": "capsicum",
      "sprite_path": "static/dump/umap/static/train/capsicum/Image_69.jpg"
    },
    {
      "embedding": [
        13.217284202575684,
        2.1929829120635986
      ],
      "label": 16,
      "category": "capsicum",
      "sprite_path": "static/dump/umap/static/train/capsicum/Image_48.jpg"
    },
    {
      "embedding": [
        8.618712425231934,
        1.1708080768585205
      ],
      "label": 16,
      "category": "capsicum",
      "sprite_path": "static/dump/umap/static/train/capsicum/Image_60.jpg"
    },
    {
      "embedding": [
        3.24312686920166,
        4.446249485015869
      ],
      "label": 16,
      "category": "capsicum",
      "sprite_path": "static/dump/umap/static/train/capsicum/Image_13.jpg"
    },
    {
      "embedding": [
        13.162609100341797,
        1.927773356437683
      ],
      "label": 16,
      "category": "capsicum",
      "sprite_path": "static/dump/umap/static/train/capsicum/Image_86.jpg"
    },
    {
      "embedding": [
        10.922625541687012,
        1.7215372323989868
      ],
      "label": 16,
      "category": "capsicum",
      "sprite_path": "static/dump/umap/static/train/capsicum/Image_68.jpg"
    },
    {
      "embedding": [
        11.37010383605957,
        1.6638140678405762
      ],
      "label": 16,
      "category": "capsicum",
      "sprite_path": "static/dump/umap/static/train/capsicum/Image_23.jpg"
    },
    {
      "embedding": [
        2.844172716140747,
        5.194285869598389
      ],
      "label": 16,
      "category": "capsicum",
      "sprite_path": "static/dump/umap/static/train/capsicum/Image_8.jpg"
    },
    {
      "embedding": [
        9.436983108520508,
        2.0908615589141846
      ],
      "label": 16,
      "category": "capsicum",
      "sprite_path": "static/dump/umap/static/train/capsicum/Image_22.jpg"
    },
    {
      "embedding": [
        7.444210052490234,
        1.6492620706558228
      ],
      "label": 16,
      "category": "capsicum",
      "sprite_path": "static/dump/umap/static/train/capsicum/Image_17.jpg"
    },
    {
      "embedding": [
        6.111537456512451,
        2.2116787433624268
      ],
      "label": 16,
      "category": "capsicum",
      "sprite_path": "static/dump/umap/static/train/capsicum/Image_25.jpg"
    },
    {
      "embedding": [
        2.885010004043579,
        4.733551979064941
      ],
      "label": 5,
      "category": "orange",
      "sprite_path": "static/dump/umap/static/train/capsicum/Image_46.jpg"
    },
    {
      "embedding": [
        8.138936996459961,
        0.08013567328453064
      ],
      "label": 5,
      "category": "orange",
      "sprite_path": "static/dump/umap/static/train/capsicum/Image_9.jpg"
    },
    {
      "embedding": [
        8.283123016357422,
        0.057977188378572464
      ],
      "label": 5,
      "category": "orange",
      "sprite_path": "static/dump/umap/static/train/capsicum/Image_34.jpg"
    },
    {
      "embedding": [
        12.674314498901367,
        0.6828364729881287
      ],
      "label": 5,
      "category": "orange",
      "sprite_path": "static/dump/umap/static/train/capsicum/Image_81.jpg"
    },
    {
      "embedding": [
        4.744925498962402,
        4.46802282333374
      ],
      "label": 5,
      "category": "orange",
      "sprite_path": "static/dump/umap/static/train/capsicum/Image_6.jpg"
    },
    {
      "embedding": [
        10.296541213989258,
        1.5820595026016235
      ],
      "label": 5,
      "category": "orange",
      "sprite_path": "static/dump/umap/static/train/capsicum/Image_20.jpg"
    },
    {
      "embedding": [
        1.552300214767456,
        4.580543041229248
      ],
      "label": 5,
      "category": "orange",
      "sprite_path": "static/dump/umap/static/train/capsicum/Image_98.jpg"
    },
    {
      "embedding": [
        8.139986038208008,
        0.016987169161438942
      ],
      "label": 5,
      "category": "orange",
      "sprite_path": "static/dump/umap/static/train/capsicum/Image_47.jpg"
    },
    {
      "embedding": [
        2.8099796772003174,
        3.879283905029297
      ],
      "label": 5,
      "category": "orange",
      "sprite_path": "static/dump/umap/static/train/capsicum/Image_19.jpg"
    },
    {
      "embedding": [
        3.3547885417938232,
        4.349737167358398
      ],
      "label": 5,
      "category": "orange",
      "sprite_path": "static/dump/umap/static/train/capsicum/Image_88.jpeg"
    },
    {
      "embedding": [
        10.804994583129883,
        0.8921011090278625
      ],
      "label": 5,
      "category": "orange",
      "sprite_path": "static/dump/umap/static/train/capsicum/Image_29.jpg"
    },
    {
      "embedding": [
        8.075739860534668,
        1.2571898698806763
      ],
      "label": 5,
      "category": "orange",
      "sprite_path": "static/dump/umap/static/train/capsicum/Image_84.jpg"
    },
    {
      "embedding": [
        2.700134038925171,
        4.467606067657471
      ],
      "label": 5,
      "category": "orange",
      "sprite_path": "static/dump/umap/static/train/capsicum/Image_85.jpg"
    },
    {
      "embedding": [
        3.8763234615325928,
        3.835824966430664
      ],
      "label": 5,
      "category": "orange",
      "sprite_path": "static/dump/umap/static/train/capsicum/Image_74.jpg"
    },
    {
      "embedding": [
        4.298573970794678,
        4.735482692718506
      ],
      "label": 5,
      "category": "orange",
      "sprite_path": "static/dump/umap/static/train/capsicum/Image_53.jpg"
    },
    {
      "embedding": [
        2.4713590145111084,
        5.639171600341797
      ],
      "label": 5,
      "category": "orange",
      "sprite_path": "static/dump/umap/static/train/capsicum/Image_64.jpg"
    },
    {
      "embedding": [
        2.9801526069641113,
        3.8027713298797607
      ],
      "label": 5,
      "category": "orange",
      "sprite_path": "static/dump/umap/static/train/capsicum/Image_92.jpg"
    },
    {
      "embedding": [
        9.287487030029297,
        -0.21641413867473602
      ],
      "label": 5,
      "category": "orange",
      "sprite_path": "static/dump/umap/static/train/capsicum/Image_27.jpg"
    },
    {
      "embedding": [
        2.549750328063965,
        4.714763164520264
      ],
      "label": 5,
      "category": "orange",
      "sprite_path": "static/dump/umap/static/train/capsicum/Image_55.jpg"
    },
    {
      "embedding": [
        6.90138053894043,
        3.08746600151062
      ],
      "label": 5,
      "category": "orange",
      "sprite_path": "static/dump/umap/static/train/capsicum/Image_95.png"
    },
    {
      "embedding": [
        9.442428588867188,
        2.992987632751465
      ],
      "label": 5,
      "category": "orange",
      "sprite_path": "static/dump/umap/static/train/capsicum/Image_73.jpg"
    },
    {
      "embedding": [
        9.684102058410645,
        0.708012044429779
      ],
      "label": 5,
      "category": "orange",
      "sprite_path": "static/dump/umap/static/train/capsicum/Image_71.jpeg"
    },
    {
      "embedding": [
        8.092460632324219,
        3.268812656402588
      ],
      "label": 5,
      "category": "orange",
      "sprite_path": "static/dump/umap/static/train/capsicum/Image_90.jpg"
    },
    {
      "embedding": [
        12.733701705932617,
        0.7364076972007751
      ],
      "label": 5,
      "category": "orange",
      "sprite_path": "static/dump/umap/static/train/capsicum/Image_83.jpg"
    },
    {
      "embedding": [
        8.67417049407959,
        0.22966237366199493
      ],
      "label": 5,
      "category": "orange",
      "sprite_path": "static/dump/umap/static/train/capsicum/Image_82.jpg"
    },
    {
      "embedding": [
        12.381277084350586,
        0.9337708950042725
      ],
      "label": 5,
      "category": "orange",
      "sprite_path": "static/dump/umap/static/train/capsicum/Image_80.jpg"
    },
    {
      "embedding": [
        8.098980903625488,
        2.3466787338256836
      ],
      "label": 5,
      "category": "orange",
      "sprite_path": "static/dump/umap/static/train/capsicum/Image_67.jpg"
    },
    {
      "embedding": [
        4.536506175994873,
        4.228982925415039
      ],
      "label": 5,
      "category": "orange",
      "sprite_path": "static/dump/umap/static/train/capsicum/Image_50.jpg"
    },
    {
      "embedding": [
        5.677584171295166,
        3.0329082012176514
      ],
      "label": 5,
      "category": "orange",
      "sprite_path": "static/dump/umap/static/train/capsicum/Image_97.jpg"
    },
    {
      "embedding": [
        3.5382168292999268,
        4.501760482788086
      ],
      "label": 5,
      "category": "orange",
      "sprite_path": "static/dump/umap/static/train/capsicum/Image_62.jpg"
    },
    {
      "embedding": [
        9.01375675201416,
        0.5753507614135742
      ],
      "label": 5,
      "category": "orange",
      "sprite_path": "static/dump/umap/static/train/capsicum/Image_30.jpg"
    },
    {
      "embedding": [
        8.686699867248535,
        -0.3840300738811493
      ],
      "label": 5,
      "category": "orange",
      "sprite_path": "static/dump/umap/static/train/capsicum/Image_5.jpg"
    },
    {
      "embedding": [
        10.573776245117188,
        1.2433310747146606
      ],
      "label": 5,
      "category": "orange",
      "sprite_path": "static/dump/umap/static/train/capsicum/Image_70.jpg"
    },
    {
      "embedding": [
        3.3488385677337646,
        5.62320613861084
      ],
      "label": 5,
      "category": "orange",
      "sprite_path": "static/dump/umap/static/train/capsicum/Image_15.jpg"
    },
    {
      "embedding": [
        4.414041042327881,
        4.690110683441162
      ],
      "label": 5,
      "category": "orange",
      "sprite_path": "static/dump/umap/static/train/capsicum/Image_35.jpg"
    },
    {
      "embedding": [
        8.375277519226074,
        -0.0864664614200592
      ],
      "label": 5,
      "category": "orange",
      "sprite_path": "static/dump/umap/static/train/capsicum/Image_14.jpg"
    },
    {
      "embedding": [
        8.272835731506348,
        0.022471081465482712
      ],
      "label": 5,
      "category": "orange",
      "sprite_path": "static/dump/umap/static/train/capsicum/Image_39.jpg"
    },
    {
      "embedding": [
        3.715742826461792,
        3.9335999488830566
      ],
      "label": 5,
      "category": "orange",
      "sprite_path": "static/dump/umap/static/train/capsicum/Image_76.jpg"
    },
    {
      "embedding": [
        11.36172103881836,
        0.7799191474914551
      ],
      "label": 5,
      "category": "orange",
      "sprite_path": "static/dump/umap/static/train/capsicum/Image_75.jpg"
    },
    {
      "embedding": [
        11.66185474395752,
        1.5661334991455078
      ],
      "label": 5,
      "category": "orange",
      "sprite_path": "static/dump/umap/static/train/capsicum/Image_24.jpg"
    },
    {
      "embedding": [
        6.359527111053467,
        3.3531880378723145
      ],
      "label": 5,
      "category": "orange",
      "sprite_path": "static/dump/umap/static/train/capsicum/Image_99.jpg"
    },
    {
      "embedding": [
        8.172159194946289,
        0.05769121274352074
      ],
      "label": 5,
      "category": "orange",
      "sprite_path": "static/dump/umap/static/train/capsicum/Image_32.jpg"
    },
    {
      "embedding": [
        7.536025524139404,
        0.7818116545677185
      ],
      "label": 5,
      "category": "orange",
      "sprite_path": "static/dump/umap/static/train/capsicum/Image_37.jpg"
    },
    {
      "embedding": [
        2.9546046257019043,
        4.740669250488281
      ],
      "label": 5,
      "category": "orange",
      "sprite_path": "static/dump/umap/static/train/capsicum/Image_51.jpg"
    },
    {
      "embedding": [
        3.7875828742980957,
        4.139869689941406
      ],
      "label": 5,
      "category": "orange",
      "sprite_path": "static/dump/umap/static/train/capsicum/Image_28.jpg"
    },
    {
      "embedding": [
        2.4114389419555664,
        5.539806842803955
      ],
      "label": 5,
      "category": "orange",
      "sprite_path": "static/dump/umap/static/train/capsicum/Image_54.jpg"
    },
    {
      "embedding": [
        2.6419222354888916,
        3.9846527576446533
      ],
      "label": 5,
      "category": "orange",
      "sprite_path": "static/dump/umap/static/train/capsicum/Image_93.jpg"
    },
    {
      "embedding": [
        3.4843077659606934,
        4.932399749755859
      ],
      "label": 5,
      "category": "orange",
      "sprite_path": "static/dump/umap/static/train/capsicum/Image_36.jpg"
    },
    {
      "embedding": [
        1.4950302839279175,
        4.0794830322265625
      ],
      "label": 5,
      "category": "orange",
      "sprite_path": "static/dump/umap/static/train/capsicum/Image_42.jpg"
    },
    {
      "embedding": [
        13.30834674835205,
        2.0894341468811035
      ],
      "label": 5,
      "category": "orange",
      "sprite_path": "static/dump/umap/static/train/capsicum/Image_31.jpg"
    },
    {
      "embedding": [
        8.185701370239258,
        -0.0749649778008461
      ],
      "label": 5,
      "category": "orange",
      "sprite_path": "static/dump/umap/static/train/capsicum/Image_49.png"
    },
    {
      "embedding": [
        8.425917625427246,
        2.2265782356262207
      ],
      "label": 5,
      "category": "orange",
      "sprite_path": "static/dump/umap/static/train/capsicum/Image_2.jpg"
    },
    {
      "embedding": [
        8.585797309875488,
        2.4388339519500732
      ],
      "label": 5,
      "category": "orange",
      "sprite_path": "static/dump/umap/static/train/capsicum/Image_26.jpg"
    },
    {
      "embedding": [
        2.8544859886169434,
        3.849769115447998
      ],
      "label": 5,
      "category": "orange",
      "sprite_path": "static/dump/umap/static/train/capsicum/Image_66.jpg"
    },
    {
      "embedding": [
        9.144726753234863,
        -0.08823271840810776
      ],
      "label": 5,
      "category": "orange",
      "sprite_path": "static/dump/umap/static/train/capsicum/Image_87.jpg"
    },
    {
      "embedding": [
        1.4066836833953857,
        4.446500301361084
      ],
      "label": 5,
      "category": "orange",
      "sprite_path": "static/dump/umap/static/train/capsicum/Image_43.jpg"
    },
    {
      "embedding": [
        10.217634201049805,
        1.2083269357681274
      ],
      "label": 5,
      "category": "orange",
      "sprite_path": "static/dump/umap/static/train/capsicum/Image_18.jpg"
    },
    {
      "embedding": [
        5.550882816314697,
        3.3587772846221924
      ],
      "label": 5,
      "category": "orange",
      "sprite_path": "static/dump/umap/static/train/jalepeno/Image_89.jpg"
    },
    {
      "embedding": [
        10.821746826171875,
        1.0933722257614136
      ],
      "label": 5,
      "category": "orange",
      "sprite_path": "static/dump/umap/static/train/jalepeno/Image_65.jpg"
    },
    {
      "embedding": [
        7.682002544403076,
        2.4299938678741455
      ],
      "label": 5,
      "category": "orange",
      "sprite_path": "static/dump/umap/static/train/jalepeno/Image_16.jpg"
    },
    {
      "embedding": [
        1.5812554359436035,
        4.170626640319824
      ],
      "label": 5,
      "category": "orange",
      "sprite_path": "static/dump/umap/static/train/jalepeno/Image_57.jpg"
    },
    {
      "embedding": [
        11.40225601196289,
        0.7251758575439453
      ],
      "label": 5,
      "category": "orange",
      "sprite_path": "static/dump/umap/static/train/jalepeno/Image_12.jpg"
    },
    {
      "embedding": [
        2.8619754314422607,
        5.263235569000244
      ],
      "label": 5,
      "category": "orange",
      "sprite_path": "static/dump/umap/static/train/jalepeno/Image_56.jpg"
    },
    {
      "embedding": [
        10.774045944213867,
        1.3787683248519897
      ],
      "label": 5,
      "category": "orange",
      "sprite_path": "static/dump/umap/static/train/jalepeno/Image_33.jpg"
    },
    {
      "embedding": [
        8.75236988067627,
        -0.448434054851532
      ],
      "label": 5,
      "category": "orange",
      "sprite_path": "static/dump/umap/static/train/jalepeno/Image_45.jpg"
    },
    {
      "embedding": [
        10.087705612182617,
        1.9475157260894775
      ],
      "label": 5,
      "category": "orange",
      "sprite_path": "static/dump/umap/static/train/jalepeno/Image_40.jpg"
    },
    {
      "embedding": [
        9.050719261169434,
        0.4478014409542084
      ],
      "label": 5,
      "category": "orange",
      "sprite_path": "static/dump/umap/static/train/jalepeno/Image_10.jpg"
    },
    {
      "embedding": [
        2.7220335006713867,
        3.987031936645508
      ],
      "label": 5,
      "category": "orange",
      "sprite_path": "static/dump/umap/static/train/jalepeno/Image_21.jpg"
    },
    {
      "embedding": [
        12.204595565795898,
        0.7339659333229065
      ],
      "label": 5,
      "category": "orange",
      "sprite_path": "static/dump/umap/static/train/jalepeno/Image_78.jpg"
    },
    {
      "embedding": [
        10.789839744567871,
        0.9972588419914246
      ],
      "label": 5,
      "category": "orange",
      "sprite_path": "static/dump/umap/static/train/jalepeno/Image_59.jpg"
    },
    {
      "embedding": [
        2.6609482765197754,
        5.571254730224609
      ],
      "label": 5,
      "category": "orange",
      "sprite_path": "static/dump/umap/static/train/jalepeno/Image_4.jpg"
    },
    {
      "embedding": [
        8.855694770812988,
        -0.39275476336479187
      ],
      "label": 5,
      "category": "orange",
      "sprite_path": "static/dump/umap/static/train/jalepeno/Image_38.jpg"
    },
    {
      "embedding": [
        1.5264852046966553,
        4.430850982666016
      ],
      "label": 5,
      "category": "orange",
      "sprite_path": "static/dump/umap/static/train/jalepeno/Image_41.jpg"
    },
    {
      "embedding": [
        4.072624206542969,
        4.328159332275391
      ],
      "label": 5,
      "category": "orange",
      "sprite_path": "static/dump/umap/static/train/jalepeno/Image_7.jpg"
    },
    {
      "embedding": [
        8.002099990844727,
        0.572126567363739
      ],
      "label": 5,
      "category": "orange",
      "sprite_path": "static/dump/umap/static/train/jalepeno/Image_69.jpg"
    },
    {
      "embedding": [
        11.92025089263916,
        0.5409128665924072
      ],
      "label": 5,
      "category": "orange",
      "sprite_path": "static/dump/umap/static/train/jalepeno/Image_60.jpg"
    },
    {
      "embedding": [
        8.412238121032715,
        -0.122572161257267
      ],
      "label": 5,
      "category": "orange",
      "sprite_path": "static/dump/umap/static/train/jalepeno/Image_11.jpeg"
    },
    {
      "embedding": [
        9.301420211791992,
        2.7793681621551514
      ],
      "label": 5,
      "category": "orange",
      "sprite_path": "static/dump/umap/static/train/jalepeno/Image_13.jpg"
    },
    {
      "embedding": [
        8.657955169677734,
        1.3670458793640137
      ],
      "label": 5,
      "category": "orange",
      "sprite_path": "static/dump/umap/static/train/jalepeno/Image_19.png"
    },
    {
      "embedding": [
        2.89323091506958,
        3.8101000785827637
      ],
      "label": 5,
      "category": "orange",
      "sprite_path": "static/dump/umap/static/train/jalepeno/Image_68.jpg"
    },
    {
      "embedding": [
        3.3419833183288574,
        4.990273952484131
      ],
      "label": 5,
      "category": "orange",
      "sprite_path": "static/dump/umap/static/train/jalepeno/Image_23.jpg"
    },
    {
      "embedding": [
        3.9385242462158203,
        3.72963547706604
      ],
      "label": 5,
      "category": "orange",
      "sprite_path": "static/dump/umap/static/train/jalepeno/Image_8.jpg"
    },
    {
      "embedding": [
        8.25633430480957,
        1.529472827911377
      ],
      "label": 5,
      "category": "orange",
      "sprite_path": "static/dump/umap/static/train/jalepeno/Image_55.jpeg"
    },
    {
      "embedding": [
        1.5674941539764404,
        4.471105098724365
      ],
      "label": 5,
      "category": "orange",
      "sprite_path": "static/dump/umap/static/train/jalepeno/Image_1.jpeg"
    },
    {
      "embedding": [
        11.731256484985352,
        0.3869141936302185
      ],
      "label": 5,
      "category": "orange",
      "sprite_path": "static/dump/umap/static/train/jalepeno/Image_22.jpg"
    },
    {
      "embedding": [
        3.7490861415863037,
        4.234384536743164
      ],
      "label": 5,
      "category": "orange",
      "sprite_path": "static/dump/umap/static/train/jalepeno/Image_79.jpg"
    },
    {
      "embedding": [
        12.709175109863281,
        0.6637347936630249
      ],
      "label": 5,
      "category": "orange",
      "sprite_path": "static/dump/umap/static/train/jalepeno/Image_17.jpg"
    },
    {
      "embedding": [
        2.4098916053771973,
        5.580097198486328
      ],
      "label": 5,
      "category": "orange",
      "sprite_path": "static/dump/umap/static/train/jalepeno/Image_77.jpg"
    },
    {
      "embedding": [
        10.373600006103516,
        0.8948622345924377
      ],
      "label": 5,
      "category": "orange",
      "sprite_path": "static/dump/umap/static/train/jalepeno/Image_25.jpg"
    },
    {
      "embedding": [
        9.580269813537598,
        2.3395333290100098
      ],
      "label": 15,
      "category": "kiwi",
      "sprite_path": "static/dump/umap/static/train/jalepeno/Image_46.jpg"
    },
    {
      "embedding": [
        11.958845138549805,
        1.8024017810821533
      ],
      "label": 15,
      "category": "kiwi",
      "sprite_path": "static/dump/umap/static/train/jalepeno/Image_9.jpg"
    },
    {
      "embedding": [
        7.357241153717041,
        3.3359737396240234
      ],
      "label": 15,
      "category": "kiwi",
      "sprite_path": "static/dump/umap/static/train/jalepeno/Image_71.jpg"
    },
    {
      "embedding": [
        9.756985664367676,
        2.192124843597412
      ],
      "label": 15,
      "category": "kiwi",
      "sprite_path": "static/dump/umap/static/train/jalepeno/Image_34.jpg"
    },
    {
      "embedding": [
        2.2200703620910645,
        4.7709879875183105
      ],
      "label": 15,
      "category": "kiwi",
      "sprite_path": "static/dump/umap/static/train/jalepeno/Image_81.jpg"
    },
    {
      "embedding": [
        7.881174087524414,
        2.680086612701416
      ],
      "label": 15,
      "category": "kiwi",
      "sprite_path": "static/dump/umap/static/train/jalepeno/Image_6.jpg"
    },
    {
      "embedding": [
        5.410102844238281,
        3.0292491912841797
      ],
      "label": 15,
      "category": "kiwi",
      "sprite_path": "static/dump/umap/static/train/jalepeno/Image_20.jpg"
    },
    {
      "embedding": [
        3.913331985473633,
        4.78570556640625
      ],
      "label": 15,
      "category": "kiwi",
      "sprite_path": "static/dump/umap/static/train/jalepeno/Image_47.jpg"
    },
    {
      "embedding": [
        10.639348030090332,
        1.2637993097305298
      ],
      "label": 15,
      "category": "kiwi",
      "sprite_path": "static/dump/umap/static/train/jalepeno/Image_70.png"
    },
    {
      "embedding": [
        11.7865629196167,
        0.5587073564529419
      ],
      "label": 15,
      "category": "kiwi",
      "sprite_path": "static/dump/umap/static/train/jalepeno/Image_88.jpg"
    },
    {
      "embedding": [
        9.294944763183594,
        1.1421058177947998
      ],
      "label": 15,
      "category": "kiwi",
      "sprite_path": "static/dump/umap/static/train/jalepeno/Image_98.jpeg"
    },
    {
      "embedding": [
        8.227036476135254,
        2.736356496810913
      ],
      "label": 15,
      "category": "kiwi",
      "sprite_path": "static/dump/umap/static/train/jalepeno/Image_29.jpg"
    },
    {
      "embedding": [
        9.46781063079834,
        2.367185115814209
      ],
      "label": 15,
      "category": "kiwi",
      "sprite_path": "static/dump/umap/static/train/jalepeno/Image_76.png"
    },
    {
      "embedding": [
        0.9271539449691772,
        4.313235282897949
      ],
      "label": 15,
      "category": "kiwi",
      "sprite_path": "static/dump/umap/static/train/jalepeno/Image_61.jpg"
    },
    {
      "embedding": [
        9.618247985839844,
        1.9226077795028687
      ],
      "label": 15,
      "category": "kiwi",
      "sprite_path": "static/dump/umap/static/train/jalepeno/Image_84.jpg"
    },
    {
      "embedding": [
        1.3903777599334717,
        4.833094596862793
      ],
      "label": 15,
      "category": "kiwi",
      "sprite_path": "static/dump/umap/static/train/jalepeno/Image_85.jpg"
    },
    {
      "embedding": [
        2.402665138244629,
        3.960383653640747
      ],
      "label": 15,
      "category": "kiwi",
      "sprite_path": "static/dump/umap/static/train/jalepeno/Image_74.jpg"
    },
    {
      "embedding": [
        10.814224243164062,
        1.1202635765075684
      ],
      "label": 15,
      "category": "kiwi",
      "sprite_path": "static/dump/umap/static/train/jalepeno/Image_53.jpg"
    },
    {
      "embedding": [
        11.711803436279297,
        0.4760536253452301
      ],
      "label": 15,
      "category": "kiwi",
      "sprite_path": "static/dump/umap/static/train/jalepeno/Image_64.jpg"
    },
    {
      "embedding": [
        8.125527381896973,
        3.0247466564178467
      ],
      "label": 15,
      "category": "kiwi",
      "sprite_path": "static/dump/umap/static/train/jalepeno/Image_27.jpg"
    },
    {
      "embedding": [
        6.739055633544922,
        3.5549442768096924
      ],
      "label": 15,
      "category": "kiwi",
      "sprite_path": "static/dump/umap/static/train/jalepeno/Image_44.jpg"
    },
    {
      "embedding": [
        13.374286651611328,
        1.226912260055542
      ],
      "label": 15,
      "category": "kiwi",
      "sprite_path": "static/dump/umap/static/train/jalepeno/Image_72.jpg"
    },
    {
      "embedding": [
        1.379706621170044,
        5.702157020568848
      ],
      "label": 15,
      "category": "kiwi",
      "sprite_path": "static/dump/umap/static/train/jalepeno/Image_52.jpg"
    },
    {
      "embedding": [
        9.426753044128418,
        1.7867451906204224
      ],
      "label": 15,
      "category": "kiwi",
      "sprite_path": "static/dump/umap/static/train/jalepeno/Image_90.jpg"
    },
    {
      "embedding": [
        0.8183934688568115,
        6.131471157073975
      ],
      "label": 15,
      "category": "kiwi",
      "sprite_path": "static/dump/umap/static/train/jalepeno/Image_83.jpg"
    },
    {
      "embedding": [
        11.751222610473633,
        0.657372236251831
      ],
      "label": 15,
      "category": "kiwi",
      "sprite_path": "static/dump/umap/static/train/jalepeno/Image_82.jpg"
    },
    {
      "embedding": [
        11.082560539245605,
        1.6904654502868652
      ],
      "label": 15,
      "category": "kiwi",
      "sprite_path": "static/dump/umap/static/train/jalepeno/Image_80.jpg"
    },
    {
      "embedding": [
        10.54746150970459,
        0.8956599831581116
      ],
      "label": 15,
      "category": "kiwi",
      "sprite_path": "static/dump/umap/static/train/jalepeno/Image_67.jpg"
    },
    {
      "embedding": [
        9.196063995361328,
        1.3330196142196655
      ],
      "label": 15,
      "category": "kiwi",
      "sprite_path": "static/dump/umap/static/train/jalepeno/Image_50.jpg"
    },
    {
      "embedding": [
        2.8460428714752197,
        4.002071857452393
      ],
      "label": 15,
      "category": "kiwi",
      "sprite_path": "static/dump/umap/static/train/jalepeno/Image_58.jpg"
    },
    {
      "embedding": [
        10.284363746643066,
        1.4964107275009155
      ],
      "label": 15,
      "category": "kiwi",
      "sprite_path": "static/dump/umap/static/train/jalepeno/Image_62.jpg"
    },
    {
      "embedding": [
        10.083566665649414,
        2.148082733154297
      ],
      "label": 15,
      "category": "kiwi",
      "sprite_path": "static/dump/umap/static/train/jalepeno/Image_30.jpg"
    },
    {
      "embedding": [
        10.253074645996094,
        1.8336371183395386
      ],
      "label": 15,
      "category": "kiwi",
      "sprite_path": "static/dump/umap/static/train/jalepeno/Image_5.jpg"
    },
    {
      "embedding": [
        11.194884300231934,
        0.722928524017334
      ],
      "label": 15,
      "category": "kiwi",
      "sprite_path": "static/dump/umap/static/train/jalepeno/Image_100.jpg"
    },
    {
      "embedding": [
        10.434700965881348,
        1.5661919116973877
      ],
      "label": 15,
      "category": "kiwi",
      "sprite_path": "static/dump/umap/static/train/jalepeno/Image_35.jpg"
    },
    {
      "embedding": [
        11.000589370727539,
        1.5033155679702759
      ],
      "label": 15,
      "category": "kiwi",
      "sprite_path": "static/dump/umap/static/train/jalepeno/Image_15.png"
    },
    {
      "embedding": [
        5.607457160949707,
        2.887850522994995
      ],
      "label": 15,
      "category": "kiwi",
      "sprite_path": "static/dump/umap/static/train/jalepeno/Image_14.jpg"
    },
    {
      "embedding": [
        0.8579528331756592,
        4.85922908782959
      ],
      "label": 15,
      "category": "kiwi",
      "sprite_path": "static/dump/umap/static/train/jalepeno/Image_39.jpg"
    },
    {
      "embedding": [
        7.981838703155518,
        2.91268253326416
      ],
      "label": 15,
      "category": "kiwi",
      "sprite_path": "static/dump/umap/static/train/jalepeno/Image_63.jpg"
    },
    {
      "embedding": [
        2.188662528991699,
        4.076334476470947
      ],
      "label": 15,
      "category": "kiwi",
      "sprite_path": "static/dump/umap/static/train/jalepeno/Image_75.jpg"
    },
    {
      "embedding": [
        12.553272247314453,
        1.2170201539993286
      ],
      "label": 15,
      "category": "kiwi",
      "sprite_path": "static/dump/umap/static/train/jalepeno/Image_24.jpg"
    },
    {
      "embedding": [
        9.515741348266602,
        1.5857117176055908
      ],
      "label": 15,
      "category": "kiwi",
      "sprite_path": "static/dump/umap/static/train/jalepeno/Image_99.jpg"
    },
    {
      "embedding": [
        10.986930847167969,
        1.546694278717041
      ],
      "label": 15,
      "category": "kiwi",
      "sprite_path": "static/dump/umap/static/train/jalepeno/Image_37.jpg"
    },
    {
      "embedding": [
        0.8448076844215393,
        5.430897235870361
      ],
      "label": 15,
      "category": "kiwi",
      "sprite_path": "static/dump/umap/static/train/jalepeno/Image_51.jpg"
    },
    {
      "embedding": [
        13.118500709533691,
        1.0505670309066772
      ],
      "label": 15,
      "category": "kiwi",
      "sprite_path": "static/dump/umap/static/train/jalepeno/Image_28.jpg"
    },
    {
      "embedding": [
        9.053362846374512,
        0.3921479880809784
      ],
      "label": 15,
      "category": "kiwi",
      "sprite_path": "static/dump/umap/static/train/jalepeno/Image_54.jpg"
    },
    {
      "embedding": [
        3.6752548217773438,
        5.060065746307373
      ],
      "label": 15,
      "category": "kiwi",
      "sprite_path": "static/dump/umap/static/train/jalepeno/Image_36.jpg"
    },
    {
      "embedding": [
        10.650308609008789,
        1.5771503448486328
      ],
      "label": 15,
      "category": "kiwi",
      "sprite_path": "static/dump/umap/static/train/jalepeno/Image_42.jpg"
    },
    {
      "embedding": [
        8.6787691116333,
        2.3874497413635254
      ],
      "label": 15,
      "category": "kiwi",
      "sprite_path": "static/dump/umap/static/train/jalepeno/Image_31.jpg"
    },
    {
      "embedding": [
        8.851287841796875,
        2.241379737854004
      ],
      "label": 15,
      "category": "kiwi",
      "sprite_path": "static/dump/umap/static/train/jalepeno/Image_2.jpg"
    },
    {
      "embedding": [
        10.849837303161621,
        0.8561993837356567
      ],
      "label": 15,
      "category": "kiwi",
      "sprite_path": "static/dump/umap/static/train/jalepeno/Image_3.jpg"
    },
    {
      "embedding": [
        8.414959907531738,
        2.037153720855713
      ],
      "label": 15,
      "category": "kiwi",
      "sprite_path": "static/dump/umap/static/train/jalepeno/Image_26.jpg"
    },
    {
      "embedding": [
        12.276529312133789,
        0.5803994536399841
      ],
      "label": 15,
      "category": "kiwi",
      "sprite_path": "static/dump/umap/static/train/jalepeno/Image_66.jpg"
    },
    {
      "embedding": [
        4.259593486785889,
        4.703432083129883
      ],
      "label": 15,
      "category": "kiwi",
      "sprite_path": "static/dump/umap/static/train/jalepeno/Image_87.jpg"
    },
    {
      "embedding": [
        9.338473320007324,
        0.7350639700889587
      ],
      "label": 15,
      "category": "kiwi",
      "sprite_path": "static/dump/umap/static/train/jalepeno/Image_18.jpg"
    },
    {
      "embedding": [
        11.35291862487793,
        0.6608999967575073
      ],
      "label": 15,
      "category": "kiwi",
      "sprite_path": "static/dump/umap/static/train/lettuce/Image_89.jpg"
    },
    {
      "embedding": [
        3.350550651550293,
        4.360004425048828
      ],
      "label": 15,
      "category": "kiwi",
      "sprite_path": "static/dump/umap/static/train/lettuce/Image_65.jpg"
    },
    {
      "embedding": [
        10.857034683227539,
        1.053436279296875
      ],
      "label": 15,
      "category": "kiwi",
      "sprite_path": "static/dump/umap/static/train/lettuce/Image_81.png"
    },
    {
      "embedding": [
        10.600726127624512,
        0.7008645534515381
      ],
      "label": 15,
      "category": "kiwi",
      "sprite_path": "static/dump/umap/static/train/lettuce/Image_1.jpg"
    },
    {
      "embedding": [
        11.477555274963379,
        1.0239627361297607
      ],
      "label": 15,
      "category": "kiwi",
      "sprite_path": "static/dump/umap/static/train/lettuce/Image_16.jpg"
    },
    {
      "embedding": [
        10.630419731140137,
        0.5538699626922607
      ],
      "label": 15,
      "category": "kiwi",
      "sprite_path": "static/dump/umap/static/train/lettuce/Image_23.jpeg"
    },
    {
      "embedding": [
        9.2098388671875,
        2.080887794494629
      ],
      "label": 15,
      "category": "kiwi",
      "sprite_path": "static/dump/umap/static/train/lettuce/Image_57.jpg"
    },
    {
      "embedding": [
        8.740874290466309,
        1.8491153717041016
      ],
      "label": 15,
      "category": "kiwi",
      "sprite_path": "static/dump/umap/static/train/lettuce/Image_12.jpg"
    },
    {
      "embedding": [
        10.67231559753418,
        1.2994463443756104
      ],
      "label": 15,
      "category": "kiwi",
      "sprite_path": "static/dump/umap/static/train/lettuce/Image_56.jpg"
    },
    {
      "embedding": [
        0.92421954870224,
        4.671838283538818
      ],
      "label": 15,
      "category": "kiwi",
      "sprite_path": "static/dump/umap/static/train/lettuce/Image_33.jpg"
    },
    {
      "embedding": [
        11.46479606628418,
        0.763737142086029
      ],
      "label": 15,
      "category": "kiwi",
      "sprite_path": "static/dump/umap/static/train/lettuce/Image_45.jpg"
    },
    {
      "embedding": [
        8.736726760864258,
        1.7776514291763306
      ],
      "label": 15,
      "category": "kiwi",
      "sprite_path": "static/dump/umap/static/train/lettuce/Image_94.jpg"
    },
    {
      "embedding": [
        9.795221328735352,
        1.9452509880065918
      ],
      "label": 15,
      "category": "kiwi",
      "sprite_path": "static/dump/umap/static/train/lettuce/Image_40.jpg"
    },
    {
      "embedding": [
        9.379863739013672,
        2.7192676067352295
      ],
      "label": 15,
      "category": "kiwi",
      "sprite_path": "static/dump/umap/static/train/lettuce/Image_10.jpg"
    },
    {
      "embedding": [
        7.826520919799805,
        2.2883129119873047
      ],
      "label": 15,
      "category": "kiwi",
      "sprite_path": "static/dump/umap/static/train/lettuce/Image_21.jpg"
    },
    {
      "embedding": [
        9.68079662322998,
        2.345818519592285
      ],
      "label": 15,
      "category": "kiwi",
      "sprite_path": "static/dump/umap/static/train/lettuce/Image_78.jpg"
    },
    {
      "embedding": [
        10.22421932220459,
        0.8841004371643066
      ],
      "label": 15,
      "category": "kiwi",
      "sprite_path": "static/dump/umap/static/train/lettuce/Image_4.jpg"
    },
    {
      "embedding": [
        7.144250392913818,
        1.8020685911178589
      ],
      "label": 15,
      "category": "kiwi",
      "sprite_path": "static/dump/umap/static/train/lettuce/Image_38.jpg"
    },
    {
      "embedding": [
        1.5698219537734985,
        4.044500350952148
      ],
      "label": 15,
      "category": "kiwi",
      "sprite_path": "static/dump/umap/static/train/lettuce/Image_74.png"
    },
    {
      "embedding": [
        9.212631225585938,
        2.3842580318450928
      ],
      "label": 15,
      "category": "kiwi",
      "sprite_path": "static/dump/umap/static/train/lettuce/Image_41.jpg"
    },
    {
      "embedding": [
        10.321793556213379,
        0.7834973335266113
      ],
      "label": 15,
      "category": "kiwi",
      "sprite_path": "static/dump/umap/static/train/lettuce/Image_7.jpg"
    },
    {
      "embedding": [
        10.588151931762695,
        1.523582935333252
      ],
      "label": 15,
      "category": "kiwi",
      "sprite_path": "static/dump/umap/static/train/lettuce/Image_69.jpg"
    },
    {
      "embedding": [
        10.821311950683594,
        1.2294793128967285
      ],
      "label": 15,
      "category": "kiwi",
      "sprite_path": "static/dump/umap/static/train/lettuce/Image_48.jpg"
    },
    {
      "embedding": [
        7.653771877288818,
        2.9293739795684814
      ],
      "label": 15,
      "category": "kiwi",
      "sprite_path": "static/dump/umap/static/train/lettuce/Image_60.jpg"
    },
    {
      "embedding": [
        8.617696762084961,
        1.7458547353744507
      ],
      "label": 15,
      "category": "kiwi",
      "sprite_path": "static/dump/umap/static/train/lettuce/Image_13.jpg"
    },
    {
      "embedding": [
        0.9619535803794861,
        4.609106540679932
      ],
      "label": 15,
      "category": "kiwi",
      "sprite_path": "static/dump/umap/static/train/lettuce/Image_49.jpg"
    },
    {
      "embedding": [
        11.5410795211792,
        0.5410871505737305
      ],
      "label": 15,
      "category": "kiwi",
      "sprite_path": "static/dump/umap/static/train/lettuce/Image_91.jpg"
    },
    {
      "embedding": [
        9.245800971984863,
        2.422851324081421
      ],
      "label": 15,
      "category": "kiwi",
      "sprite_path": "static/dump/umap/static/train/lettuce/Image_95.jpg"
    },
    {
      "embedding": [
        8.70637035369873,
        1.7987762689590454
      ],
      "label": 15,
      "category": "kiwi",
      "sprite_path": "static/dump/umap/static/train/lettuce/Image_86.jpg"
    },
    {
      "embedding": [
        11.543902397155762,
        0.6302986145019531
      ],
      "label": 15,
      "category": "kiwi",
      "sprite_path": "static/dump/umap/static/train/lettuce/Image_8.jpg"
    },
    {
      "embedding": [
        6.1724534034729,
        3.887470006942749
      ],
      "label": 15,
      "category": "kiwi",
      "sprite_path": "static/dump/umap/static/train/lettuce/Image_22.jpg"
    },
    {
      "embedding": [
        11.395672798156738,
        0.7884848117828369
      ],
      "label": 15,
      "category": "kiwi",
      "sprite_path": "static/dump/umap/static/train/lettuce/Image_79.jpg"
    },
    {
      "embedding": [
        11.390889167785645,
        0.693633496761322
      ],
      "label": 15,
      "category": "kiwi",
      "sprite_path": "static/dump/umap/static/train/lettuce/Image_17.jpg"
    },
    {
      "embedding": [
        3.8977904319763184,
        4.155036926269531
      ],
      "label": 18,
      "category": "lettuce",
      "sprite_path": "static/dump/umap/static/train/lettuce/Image_77.jpg"
    },
    {
      "embedding": [
        7.350750923156738,
        3.6056251525878906
      ],
      "label": 18,
      "category": "lettuce",
      "sprite_path": "static/dump/umap/static/train/lettuce/Image_25.jpg"
    },
    {
      "embedding": [
        13.167520523071289,
        1.715689778327942
      ],
      "label": 18,
      "category": "lettuce",
      "sprite_path": "static/dump/umap/static/train/lettuce/Image_46.jpg"
    },
    {
      "embedding": [
        10.859501838684082,
        1.538630723953247
      ],
      "label": 18,
      "category": "lettuce",
      "sprite_path": "static/dump/umap/static/train/lettuce/Image_9.jpg"
    },
    {
      "embedding": [
        11.927877426147461,
        0.9677695035934448
      ],
      "label": 18,
      "category": "lettuce",
      "sprite_path": "static/dump/umap/static/train/lettuce/Image_71.jpg"
    },
    {
      "embedding": [
        9.775931358337402,
        1.4523518085479736
      ],
      "label": 18,
      "category": "lettuce",
      "sprite_path": "static/dump/umap/static/train/lettuce/Image_34.jpg"
    },
    {
      "embedding": [
        10.728854179382324,
        1.1748361587524414
      ],
      "label": 18,
      "category": "lettuce",
      "sprite_path": "static/dump/umap/static/train/lettuce/Image_6.jpg"
    },
    {
      "embedding": [
        11.06358528137207,
        1.119383692741394
      ],
      "label": 18,
      "category": "lettuce",
      "sprite_path": "static/dump/umap/static/train/lettuce/Image_20.jpg"
    },
    {
      "embedding": [
        9.950139045715332,
        1.6040455102920532
      ],
      "label": 18,
      "category": "lettuce",
      "sprite_path": "static/dump/umap/static/train/lettuce/Image_98.jpg"
    },
    {
      "embedding": [
        10.884063720703125,
        1.365328073501587
      ],
      "label": 18,
      "category": "lettuce",
      "sprite_path": "static/dump/umap/static/train/lettuce/Image_92.png"
    },
    {
      "embedding": [
        9.092077255249023,
        2.109983205795288
      ],
      "label": 18,
      "category": "lettuce",
      "sprite_path": "static/dump/umap/static/train/lettuce/Image_47.jpg"
    },
    {
      "embedding": [
        6.919917106628418,
        2.5963752269744873
      ],
      "label": 18,
      "category": "lettuce",
      "sprite_path": "static/dump/umap/static/train/lettuce/Image_70.png"
    },
    {
      "embedding": [
        4.200053691864014,
        4.0787200927734375
      ],
      "label": 18,
      "category": "lettuce",
      "sprite_path": "static/dump/umap/static/train/lettuce/Image_19.jpg"
    },
    {
      "embedding": [
        10.900976181030273,
        0.9502262473106384
      ],
      "label": 18,
      "category": "lettuce",
      "sprite_path": "static/dump/umap/static/train/lettuce/Image_88.jpg"
    },
    {
      "embedding": [
        9.376538276672363,
        1.5260089635849
      ],
      "label": 18,
      "category": "lettuce",
      "sprite_path": "static/dump/umap/static/train/lettuce/Image_29.jpg"
    },
    {
      "embedding": [
        11.009492874145508,
        0.6276503205299377
      ],
      "label": 18,
      "category": "lettuce",
      "sprite_path": "static/dump/umap/static/train/lettuce/Image_61.jpg"
    },
    {
      "embedding": [
        9.468822479248047,
        2.013859272003174
      ],
      "label": 18,
      "category": "lettuce",
      "sprite_path": "static/dump/umap/static/train/lettuce/Image_84.jpg"
    },
    {
      "embedding": [
        4.152822494506836,
        4.126399040222168
      ],
      "label": 18,
      "category": "lettuce",
      "sprite_path": "static/dump/umap/static/train/lettuce/Image_85.jpg"
    },
    {
      "embedding": [
        11.211433410644531,
        0.9272090196609497
      ],
      "label": 18,
      "category": "lettuce",
      "sprite_path": "static/dump/umap/static/train/lettuce/Image_53.jpg"
    },
    {
      "embedding": [
        10.536286354064941,
        1.457513451576233
      ],
      "label": 18,
      "category": "lettuce",
      "sprite_path": "static/dump/umap/static/train/lettuce/Image_64.jpg"
    },
    {
      "embedding": [
        7.417820930480957,
        3.3611159324645996
      ],
      "label": 18,
      "category": "lettuce",
      "sprite_path": "static/dump/umap/static/train/lettuce/Image_27.jpg"
    },
    {
      "embedding": [
        9.34729290008545,
        2.980168342590332
      ],
      "label": 18,
      "category": "lettuce",
      "sprite_path": "static/dump/umap/static/train/lettuce/Image_55.jpg"
    },
    {
      "embedding": [
        11.53665828704834,
        0.9892735481262207
      ],
      "label": 18,
      "category": "lettuce",
      "sprite_path": "static/dump/umap/static/train/lettuce/Image_44.jpg"
    },
    {
      "embedding": [
        8.171711921691895,
        3.1827101707458496
      ],
      "label": 18,
      "category": "lettuce",
      "sprite_path": "static/dump/umap/static/train/lettuce/Image_72.jpg"
    },
    {
      "embedding": [
        11.452054023742676,
        0.8257573246955872
      ],
      "label": 18,
      "category": "lettuce",
      "sprite_path": "static/dump/umap/static/train/lettuce/Image_73.jpg"
    },
    {
      "embedding": [
        3.4595561027526855,
        3.9400269985198975
      ],
      "label": 18,
      "category": "lettuce",
      "sprite_path": "static/dump/umap/static/train/lettuce/Image_96.jpg"
    },
    {
      "embedding": [
        12.120366096496582,
        2.218712091445923
      ],
      "label": 18,
      "category": "lettuce",
      "sprite_path": "static/dump/umap/static/train/lettuce/Image_52.jpg"
    },
    {
      "embedding": [
        7.651777267456055,
        3.3291826248168945
      ],
      "label": 18,
      "category": "lettuce",
      "sprite_path": "static/dump/umap/static/train/lettuce/Image_90.jpg"
    },
    {
      "embedding": [
        9.13176441192627,
        1.8948346376419067
      ],
      "label": 18,
      "category": "lettuce",
      "sprite_path": "static/dump/umap/static/train/lettuce/Image_83.jpg"
    },
    {
      "embedding": [
        11.563446044921875,
        0.758389413356781
      ],
      "label": 18,
      "category": "lettuce",
      "sprite_path": "static/dump/umap/static/train/lettuce/Image_11.jpg"
    },
    {
      "embedding": [
        10.521401405334473,
        0.954215407371521
      ],
      "label": 18,
      "category": "lettuce",
      "sprite_path": "static/dump/umap/static/train/lettuce/Image_100.jpeg"
    },
    {
      "embedding": [
        10.90322208404541,
        0.8340091109275818
      ],
      "label": 18,
      "category": "lettuce",
      "sprite_path": "static/dump/umap/static/train/lettuce/Image_82.jpg"
    },
    {
      "embedding": [
        10.26407241821289,
        1.6836519241333008
      ],
      "label": 18,
      "category": "lettuce",
      "sprite_path": "static/dump/umap/static/train/lettuce/Image_80.jpg"
    },
    {
      "embedding": [
        11.279073715209961,
        1.2525254487991333
      ],
      "label": 18,
      "category": "lettuce",
      "sprite_path": "static/dump/umap/static/train/lettuce/Image_67.jpg"
    },
    {
      "embedding": [
        8.380940437316895,
        1.0492912530899048
      ],
      "label": 18,
      "category": "lettuce",
      "sprite_path": "static/dump/umap/static/train/lettuce/Image_50.jpg"
    },
    {
      "embedding": [
        3.6966638565063477,
        4.122686862945557
      ],
      "label": 18,
      "category": "lettuce",
      "sprite_path": "static/dump/umap/static/train/lettuce/Image_58.jpg"
    },
    {
      "embedding": [
        4.767694473266602,
        4.141927242279053
      ],
      "label": 18,
      "category": "lettuce",
      "sprite_path": "static/dump/umap/static/train/lettuce/Image_97.jpg"
    },
    {
      "embedding": [
        10.300515174865723,
        1.6087453365325928
      ],
      "label": 18,
      "category": "lettuce",
      "sprite_path": "static/dump/umap/static/train/lettuce/Image_62.jpg"
    },
    {
      "embedding": [
        4.704411029815674,
        4.158668041229248
      ],
      "label": 18,
      "category": "lettuce",
      "sprite_path": "static/dump/umap/static/train/lettuce/Image_30.jpg"
    },
    {
      "embedding": [
        9.96864128112793,
        1.2779295444488525
      ],
      "label": 18,
      "category": "lettuce",
      "sprite_path": "static/dump/umap/static/train/lettuce/Image_15.jpg"
    },
    {
      "embedding": [
        10.489487648010254,
        1.2805951833724976
      ],
      "label": 18,
      "category": "lettuce",
      "sprite_path": "static/dump/umap/static/train/lettuce/Image_35.jpg"
    },
    {
      "embedding": [
        11.239928245544434,
        0.6146457195281982
      ],
      "label": 18,
      "category": "lettuce",
      "sprite_path": "static/dump/umap/static/train/lettuce/Image_5.jpeg"
    },
    {
      "embedding": [
        3.978649139404297,
        3.912635564804077
      ],
      "label": 18,
      "category": "lettuce",
      "sprite_path": "static/dump/umap/static/train/lettuce/Image_14.jpg"
    },
    {
      "embedding": [
        11.791360855102539,
        1.14617919921875
      ],
      "label": 18,
      "category": "lettuce",
      "sprite_path": "static/dump/umap/static/train/lettuce/Image_39.jpg"
    },
    {
      "embedding": [
        1.8972374200820923,
        4.9067301750183105
      ],
      "label": 18,
      "category": "lettuce",
      "sprite_path": "static/dump/umap/static/train/lettuce/Image_76.jpg"
    },
    {
      "embedding": [
        3.7380762100219727,
        4.345445156097412
      ],
      "label": 18,
      "category": "lettuce",
      "sprite_path": "static/dump/umap/static/train/lettuce/Image_63.jpg"
    },
    {
      "embedding": [
        11.177068710327148,
        1.2397959232330322
      ],
      "label": 18,
      "category": "lettuce",
      "sprite_path": "static/dump/umap/static/train/lettuce/Image_24.jpg"
    },
    {
      "embedding": [
        4.467895984649658,
        4.189266681671143
      ],
      "label": 18,
      "category": "lettuce",
      "sprite_path": "static/dump/umap/static/train/lettuce/Image_99.jpg"
    },
    {
      "embedding": [
        9.863759994506836,
        1.9299230575561523
      ],
      "label": 18,
      "category": "lettuce",
      "sprite_path": "static/dump/umap/static/train/lettuce/Image_32.jpg"
    },
    {
      "embedding": [
        11.187516212463379,
        0.4497441351413727
      ],
      "label": 18,
      "category": "lettuce",
      "sprite_path": "static/dump/umap/static/train/lettuce/Image_37.jpg"
    },
    {
      "embedding": [
        4.106442928314209,
        4.760523319244385
      ],
      "label": 18,
      "category": "lettuce",
      "sprite_path": "static/dump/umap/static/train/lettuce/Image_51.jpg"
    },
    {
      "embedding": [
        8.922554016113281,
        3.4788267612457275
      ],
      "label": 18,
      "category": "lettuce",
      "sprite_path": "static/dump/umap/static/train/lettuce/Image_54.jpg"
    },
    {
      "embedding": [
        10.401966094970703,
        1.251237392425537
      ],
      "label": 18,
      "category": "lettuce",
      "sprite_path": "static/dump/umap/static/train/lettuce/Image_93.jpg"
    },
    {
      "embedding": [
        3.239948034286499,
        4.521026611328125
      ],
      "label": 18,
      "category": "lettuce",
      "sprite_path": "static/dump/umap/static/train/lettuce/Image_87.png"
    },
    {
      "embedding": [
        9.75383472442627,
        1.3147112131118774
      ],
      "label": 18,
      "category": "lettuce",
      "sprite_path": "static/dump/umap/static/train/lettuce/Image_42.jpg"
    },
    {
      "embedding": [
        3.495032787322998,
        4.445871829986572
      ],
      "label": 18,
      "category": "lettuce",
      "sprite_path": "static/dump/umap/static/train/lettuce/Image_31.jpg"
    },
    {
      "embedding": [
        10.95899486541748,
        1.2867677211761475
      ],
      "label": 18,
      "category": "lettuce",
      "sprite_path": "static/dump/umap/static/train/lettuce/Image_2.jpg"
    },
    {
      "embedding": [
        1.9396308660507202,
        4.889169216156006
      ],
      "label": 18,
      "category": "lettuce",
      "sprite_path": "static/dump/umap/static/train/lettuce/Image_3.jpg"
    },
    {
      "embedding": [
        7.510247230529785,
        2.483668565750122
      ],
      "label": 18,
      "category": "lettuce",
      "sprite_path": "static/dump/umap/static/train/lettuce/Image_26.jpg"
    },
    {
      "embedding": [
        10.823213577270508,
        1.5726603269577026
      ],
      "label": 18,
      "category": "lettuce",
      "sprite_path": "static/dump/umap/static/train/lettuce/Image_66.jpg"
    },
    {
      "embedding": [
        4.396902084350586,
        3.8098671436309814
      ],
      "label": 18,
      "category": "lettuce",
      "sprite_path": "static/dump/umap/static/train/lettuce/Image_43.jpg"
    },
    {
      "embedding": [
        12.014592170715332,
        1.5140995979309082
      ],
      "label": 18,
      "category": "lettuce",
      "sprite_path": "static/dump/umap/static/train/lettuce/Image_18.jpg"
    },
    {
      "embedding": [
        11.456778526306152,
        0.4766026437282562
      ],
      "label": 18,
      "category": "lettuce",
      "sprite_path": "static/dump/umap/static/train/potato/Image_89.jpg"
    },
    {
      "embedding": [
        10.088263511657715,
        1.6362138986587524
      ],
      "label": 18,
      "category": "lettuce",
      "sprite_path": "static/dump/umap/static/train/potato/Image_1.jpg"
    },
    {
      "embedding": [
        3.6119582653045654,
        4.219061851501465
      ],
      "label": 18,
      "category": "lettuce",
      "sprite_path": "static/dump/umap/static/train/potato/Image_16.jpg"
    },
    {
      "embedding": [
        9.774927139282227,
        1.7449597120285034
      ],
      "label": 18,
      "category": "lettuce",
      "sprite_path": "static/dump/umap/static/train/potato/Image_57.jpg"
    },
    {
      "embedding": [
        8.753247261047363,
        2.5179717540740967
      ],
      "label": 18,
      "category": "lettuce",
      "sprite_path": "static/dump/umap/static/train/potato/Image_12.jpg"
    },
    {
      "embedding": [
        8.983814239501953,
        3.3867108821868896
      ],
      "label": 18,
      "category": "lettuce",
      "sprite_path": "static/dump/umap/static/train/potato/Image_56.jpg"
    },
    {
      "embedding": [
        7.662452220916748,
        3.114351511001587
      ],
      "label": 18,
      "category": "lettuce",
      "sprite_path": "static/dump/umap/static/train/potato/Image_33.jpg"
    },
    {
      "embedding": [
        10.43229866027832,
        1.6204432249069214
      ],
      "label": 18,
      "category": "lettuce",
      "sprite_path": "static/dump/umap/static/train/potato/Image_45.jpg"
    },
    {
      "embedding": [
        9.872257232666016,
        1.9865046739578247
      ],
      "label": 18,
      "category": "lettuce",
      "sprite_path": "static/dump/umap/static/train/potato/Image_94.jpg"
    },
    {
      "embedding": [
        3.348841667175293,
        4.174685955047607
      ],
      "label": 18,
      "category": "lettuce",
      "sprite_path": "static/dump/umap/static/train/potato/Image_90.png"
    },
    {
      "embedding": [
        11.51859188079834,
        0.5439631342887878
      ],
      "label": 18,
      "category": "lettuce",
      "sprite_path": "static/dump/umap/static/train/potato/Image_10.jpg"
    },
    {
      "embedding": [
        3.6195688247680664,
        4.197872161865234
      ],
      "label": 18,
      "category": "lettuce",
      "sprite_path": "static/dump/umap/static/train/potato/Image_30.jpeg"
    },
    {
      "embedding": [
        10.339567184448242,
        1.1287555694580078
      ],
      "label": 18,
      "category": "lettuce",
      "sprite_path": "static/dump/umap/static/train/potato/Image_78.jpg"
    },
    {
      "embedding": [
        3.5951080322265625,
        4.251427173614502
      ],
      "label": 18,
      "category": "lettuce",
      "sprite_path": "static/dump/umap/static/train/potato/Image_4.jpg"
    },
    {
      "embedding": [
        9.276695251464844,
        1.6140024662017822
      ],
      "label": 18,
      "category": "lettuce",
      "sprite_path": "static/dump/umap/static/train/potato/Image_38.jpg"
    },
    {
      "embedding": [
        1.7813364267349243,
        4.764593124389648
      ],
      "label": 18,
      "category": "lettuce",
      "sprite_path": "static/dump/umap/static/train/potato/Image_7.jpg"
    },
    {
      "embedding": [
        2.0864779949188232,
        4.202419281005859
      ],
      "label": 18,
      "category": "lettuce",
      "sprite_path": "static/dump/umap/static/train/potato/Image_48.jpg"
    },
    {
      "embedding": [
        10.620680809020996,
        1.333767294883728
      ],
      "label": 18,
      "category": "lettuce",
      "sprite_path": "static/dump/umap/static/train/potato/Image_60.jpg"
    },
    {
      "embedding": [
        10.400160789489746,
        1.2911311388015747
      ],
      "label": 18,
      "category": "lettuce",
      "sprite_path": "static/dump/umap/static/train/potato/Image_13.jpg"
    },
    {
      "embedding": [
        9.544967651367188,
        2.0632240772247314
      ],
      "label": 18,
      "category": "lettuce",
      "sprite_path": "static/dump/umap/static/train/potato/Image_49.jpg"
    },
    {
      "embedding": [
        3.7832581996917725,
        3.92032790184021
      ],
      "label": 18,
      "category": "lettuce",
      "sprite_path": "static/dump/umap/static/train/potato/Image_91.jpg"
    },
    {
      "embedding": [
        11.69776725769043,
        0.4889886975288391
      ],
      "label": 18,
      "category": "lettuce",
      "sprite_path": "static/dump/umap/static/train/potato/Image_95.jpg"
    },
    {
      "embedding": [
        11.834860801696777,
        0.5234992504119873
      ],
      "label": 18,
      "category": "lettuce",
      "sprite_path": "static/dump/umap/static/train/potato/Image_69.png"
    },
    {
      "embedding": [
        2.2720749378204346,
        4.354164123535156
      ],
      "label": 18,
      "category": "lettuce",
      "sprite_path": "static/dump/umap/static/train/potato/Image_86.jpg"
    },
    {
      "embedding": [
        9.038704872131348,
        2.7405741214752197
      ],
      "label": 18,
      "category": "lettuce",
      "sprite_path": "static/dump/umap/static/train/potato/Image_68.jpg"
    },
    {
      "embedding": [
        8.881726264953613,
        1.8225491046905518
      ],
      "label": 18,
      "category": "lettuce",
      "sprite_path": "static/dump/umap/static/train/potato/Image_23.jpg"
    },
    {
      "embedding": [
        1.7376371622085571,
        5.064065933227539
      ],
      "label": 18,
      "category": "lettuce",
      "sprite_path": "static/dump/umap/static/train/potato/Image_8.jpg"
    },
    {
      "embedding": [
        11.096210479736328,
        1.238599419593811
      ],
      "label": 18,
      "category": "lettuce",
      "sprite_path": "static/dump/umap/static/train/potato/Image_79.jpg"
    },
    {
      "embedding": [
        3.751142740249634,
        4.006004333496094
      ],
      "label": 18,
      "category": "lettuce",
      "sprite_path": "static/dump/umap/static/train/potato/Image_77.jpg"
    },
    {
      "embedding": [
        9.95079231262207,
        1.9656283855438232
      ],
      "label": 18,
      "category": "lettuce",
      "sprite_path": "static/dump/umap/static/train/potato/Image_71.jpg"
    },
    {
      "embedding": [
        4.039645195007324,
        3.9569296836853027
      ],
      "label": 18,
      "category": "lettuce",
      "sprite_path": "static/dump/umap/static/train/potato/Image_34.jpg"
    },
    {
      "embedding": [
        8.45404052734375,
        1.8110918998718262
      ],
      "label": 18,
      "category": "lettuce",
      "sprite_path": "static/dump/umap/static/train/potato/Image_81.jpg"
    },
    {
      "embedding": [
        4.032585144042969,
        4.544261932373047
      ],
      "label": 18,
      "category": "lettuce",
      "sprite_path": "static/dump/umap/static/train/potato/Image_6.jpg"
    },
    {
      "embedding": [
        4.26234769821167,
        4.167845249176025
      ],
      "label": 18,
      "category": "lettuce",
      "sprite_path": "static/dump/umap/static/train/potato/Image_20.jpg"
    },
    {
      "embedding": [
        9.910202980041504,
        1.9573453664779663
      ],
      "label": 18,
      "category": "lettuce",
      "sprite_path": "static/dump/umap/static/train/potato/Image_98.jpg"
    },
    {
      "embedding": [
        10.410585403442383,
        1.9237899780273438
      ],
      "label": 27,
      "category": "chilli pepper",
      "sprite_path": "static/dump/umap/static/train/potato/Image_47.jpg"
    },
    {
      "embedding": [
        3.1957907676696777,
        5.796871662139893
      ],
      "label": 27,
      "category": "chilli pepper",
      "sprite_path": "static/dump/umap/static/train/potato/Image_88.jpeg"
    },
    {
      "embedding": [
        4.38646936416626,
        4.733603477478027
      ],
      "label": 27,
      "category": "chilli pepper",
      "sprite_path": "static/dump/umap/static/train/potato/Image_29.jpg"
    },
    {
      "embedding": [
        3.0921499729156494,
        5.638469696044922
      ],
      "label": 27,
      "category": "chilli pepper",
      "sprite_path": "static/dump/umap/static/train/potato/Image_61.jpg"
    },
    {
      "embedding": [
        5.8043341636657715,
        3.3664135932922363
      ],
      "label": 27,
      "category": "chilli pepper",
      "sprite_path": "static/dump/umap/static/train/potato/Image_85.jpg"
    },
    {
      "embedding": [
        3.6832120418548584,
        4.991644859313965
      ],
      "label": 27,
      "category": "chilli pepper",
      "sprite_path": "static/dump/umap/static/train/potato/Image_74.jpg"
    },
    {
      "embedding": [
        8.638044357299805,
        1.4360238313674927
      ],
      "label": 27,
      "category": "chilli pepper",
      "sprite_path": "static/dump/umap/static/train/potato/Image_53.jpg"
    },
    {
      "embedding": [
        5.016476631164551,
        4.105498790740967
      ],
      "label": 27,
      "category": "chilli pepper",
      "sprite_path": "static/dump/umap/static/train/potato/Image_64.jpg"
    },
    {
      "embedding": [
        9.172670364379883,
        1.0751389265060425
      ],
      "label": 27,
      "category": "chilli pepper",
      "sprite_path": "static/dump/umap/static/train/potato/Image_92.jpg"
    },
    {
      "embedding": [
        12.33314037322998,
        2.625844717025757
      ],
      "label": 27,
      "category": "chilli pepper",
      "sprite_path": "static/dump/umap/static/train/potato/Image_55.jpg"
    },
    {
      "embedding": [
        12.927084922790527,
        1.5394313335418701
      ],
      "label": 27,
      "category": "chilli pepper",
      "sprite_path": "static/dump/umap/static/train/potato/Image_44.jpg"
    },
    {
      "embedding": [
        2.7496566772460938,
        4.6157426834106445
      ],
      "label": 27,
      "category": "chilli pepper",
      "sprite_path": "static/dump/umap/static/train/potato/Image_72.jpg"
    },
    {
      "embedding": [
        3.0519182682037354,
        5.802207946777344
      ],
      "label": 27,
      "category": "chilli pepper",
      "sprite_path": "static/dump/umap/static/train/potato/Image_73.jpg"
    },
    {
      "embedding": [
        8.370853424072266,
        2.399160861968994
      ],
      "label": 27,
      "category": "chilli pepper",
      "sprite_path": "static/dump/umap/static/train/potato/Image_52.jpg"
    },
    {
      "embedding": [
        7.16107702255249,
        1.151835322380066
      ],
      "label": 27,
      "category": "chilli pepper",
      "sprite_path": "static/dump/umap/static/train/potato/Image_83.jpg"
    },
    {
      "embedding": [
        6.963219165802002,
        1.7579381465911865
      ],
      "label": 27,
      "category": "chilli pepper",
      "sprite_path": "static/dump/umap/static/train/potato/Image_11.jpg"
    },
    {
      "embedding": [
        8.239228248596191,
        -0.07983188331127167
      ],
      "label": 27,
      "category": "chilli pepper",
      "sprite_path": "static/dump/umap/static/train/potato/Image_82.jpg"
    },
    {
      "embedding": [
        7.970064640045166,
        0.31413066387176514
      ],
      "label": 27,
      "category": "chilli pepper",
      "sprite_path": "static/dump/umap/static/train/potato/Image_67.jpg"
    },
    {
      "embedding": [
        5.336414813995361,
        3.4027135372161865
      ],
      "label": 27,
      "category": "chilli pepper",
      "sprite_path": "static/dump/umap/static/train/potato/Image_50.jpg"
    },
    {
      "embedding": [
        8.43249797821045,
        0.08020523190498352
      ],
      "label": 27,
      "category": "chilli pepper",
      "sprite_path": "static/dump/umap/static/train/potato/Image_46.png"
    },
    {
      "embedding": [
        8.786763191223145,
        1.8555642366409302
      ],
      "label": 27,
      "category": "chilli pepper",
      "sprite_path": "static/dump/umap/static/train/potato/Image_58.jpg"
    },
    {
      "embedding": [
        1.9189929962158203,
        5.44202995300293
      ],
      "label": 27,
      "category": "chilli pepper",
      "sprite_path": "static/dump/umap/static/train/potato/Image_97.jpg"
    },
    {
      "embedding": [
        3.176103115081787,
        5.791456699371338
      ],
      "label": 27,
      "category": "chilli pepper",
      "sprite_path": "static/dump/umap/static/train/potato/Image_62.jpg"
    },
    {
      "embedding": [
        12.788294792175293,
        2.4018356800079346
      ],
      "label": 27,
      "category": "chilli pepper",
      "sprite_path": "static/dump/umap/static/train/potato/Image_100.jpg"
    },
    {
      "embedding": [
        5.3585076332092285,
        3.155912160873413
      ],
      "label": 27,
      "category": "chilli pepper",
      "sprite_path": "static/dump/umap/static/train/potato/Image_15.jpg"
    },
    {
      "embedding": [
        4.323123931884766,
        4.5700507164001465
      ],
      "label": 27,
      "category": "chilli pepper",
      "sprite_path": "static/dump/umap/static/train/potato/Image_14.jpg"
    },
    {
      "embedding": [
        6.9106292724609375,
        3.117598295211792
      ],
      "label": 27,
      "category": "chilli pepper",
      "sprite_path": "static/dump/umap/static/train/potato/Image_76.jpg"
    },
    {
      "embedding": [
        12.55652141571045,
        2.0159478187561035
      ],
      "label": 27,
      "category": "chilli pepper",
      "sprite_path": "static/dump/umap/static/train/potato/Image_63.jpg"
    },
    {
      "embedding": [
        1.835537314414978,
        5.630250453948975
      ],
      "label": 27,
      "category": "chilli pepper",
      "sprite_path": "static/dump/umap/static/train/potato/Image_32.jpg"
    },
    {
      "embedding": [
        8.450106620788574,
        2.4499542713165283
      ],
      "label": 27,
      "category": "chilli pepper",
      "sprite_path": "static/dump/umap/static/train/potato/Image_80.png"
    },
    {
      "embedding": [
        10.641026496887207,
        0.41137897968292236
      ],
      "label": 27,
      "category": "chilli pepper",
      "sprite_path": "static/dump/umap/static/train/potato/Image_65.png"
    },
    {
      "embedding": [
        4.415614604949951,
        4.49375057220459
      ],
      "label": 27,
      "category": "chilli pepper",
      "sprite_path": "static/dump/umap/static/train/potato/Image_22.png"
    },
    {
      "embedding": [
        8.519801139831543,
        0.7891044020652771
      ],
      "label": 27,
      "category": "chilli pepper",
      "sprite_path": "static/dump/umap/static/train/potato/Image_51.jpg"
    },
    {
      "embedding": [
        8.229411125183105,
        0.26594671607017517
      ],
      "label": 27,
      "category": "chilli pepper",
      "sprite_path": "static/dump/umap/static/train/potato/Image_28.jpg"
    },
    {
      "embedding": [
        7.905808448791504,
        1.0743510723114014
      ],
      "label": 27,
      "category": "chilli pepper",
      "sprite_path": "static/dump/umap/static/train/potato/Image_54.jpg"
    },
    {
      "embedding": [
        6.9463276863098145,
        0.9266695380210876
      ],
      "label": 27,
      "category": "chilli pepper",
      "sprite_path": "static/dump/umap/static/train/potato/Image_84.png"
    },
    {
      "embedding": [
        7.135078430175781,
        1.113876223564148
      ],
      "label": 27,
      "category": "chilli pepper",
      "sprite_path": "static/dump/umap/static/train/potato/Image_31.jpg"
    },
    {
      "embedding": [
        12.479881286621094,
        2.027639627456665
      ],
      "label": 27,
      "category": "chilli pepper",
      "sprite_path": "static/dump/umap/static/train/potato/Image_3.jpg"
    },
    {
      "embedding": [
        5.640748500823975,
        3.3003602027893066
      ],
      "label": 27,
      "category": "chilli pepper",
      "sprite_path": "static/dump/umap/static/train/potato/Image_66.jpg"
    },
    {
      "embedding": [
        10.235030174255371,
        2.2396721839904785
      ],
      "label": 27,
      "category": "chilli pepper",
      "sprite_path": "static/dump/umap/static/train/potato/Image_43.jpg"
    },
    {
      "embedding": [
        1.0994925498962402,
        5.978874683380127
      ],
      "label": 27,
      "category": "chilli pepper",
      "sprite_path": "static/dump/umap/static/train/soy beans/Image_89.jpg"
    },
    {
      "embedding": [
        8.808762550354004,
        1.3176857233047485
      ],
      "label": 27,
      "category": "chilli pepper",
      "sprite_path": "static/dump/umap/static/train/soy beans/Image_65.jpg"
    },
    {
      "embedding": [
        6.752591133117676,
        2.107433795928955
      ],
      "label": 27,
      "category": "chilli pepper",
      "sprite_path": "static/dump/umap/static/train/soy beans/Image_1.jpg"
    },
    {
      "embedding": [
        3.1458985805511475,
        5.727147579193115
      ],
      "label": 27,
      "category": "chilli pepper",
      "sprite_path": "static/dump/umap/static/train/soy beans/Image_16.jpg"
    },
    {
      "embedding": [
        11.170790672302246,
        2.4742465019226074
      ],
      "label": 27,
      "category": "chilli pepper",
      "sprite_path": "static/dump/umap/static/train/soy beans/Image_57.jpg"
    },
    {
      "embedding": [
        3.5299313068389893,
        3.8263843059539795
      ],
      "label": 27,
      "category": "chilli pepper",
      "sprite_path": "static/dump/umap/static/train/soy beans/Image_12.jpg"
    },
    {
      "embedding": [
        7.965564250946045,
        0.7220467329025269
      ],
      "label": 27,
      "category": "chilli pepper",
      "sprite_path": "static/dump/umap/static/train/soy beans/Image_56.jpg"
    },
    {
      "embedding": [
        2.819209337234497,
        5.167301177978516
      ],
      "label": 27,
      "category": "chilli pepper",
      "sprite_path": "static/dump/umap/static/train/soy beans/Image_33.jpg"
    },
    {
      "embedding": [
        2.9772746562957764,
        4.686219692230225
      ],
      "label": 27,
      "category": "chilli pepper",
      "sprite_path": "static/dump/umap/static/train/soy beans/Image_45.jpg"
    },
    {
      "embedding": [
        11.953551292419434,
        0.9942204356193542
      ],
      "label": 27,
      "category": "chilli pepper",
      "sprite_path": "static/dump/umap/static/train/soy beans/Image_94.jpg"
    },
    {
      "embedding": [
        8.641474723815918,
        3.590200424194336
      ],
      "label": 27,
      "category": "chilli pepper",
      "sprite_path": "static/dump/umap/static/train/soy beans/Image_40.jpg"
    },
    {
      "embedding": [
        6.8983917236328125,
        1.8093984127044678
      ],
      "label": 27,
      "category": "chilli pepper",
      "sprite_path": "static/dump/umap/static/train/soy beans/Image_10.jpg"
    },
    {
      "embedding": [
        2.087120532989502,
        4.7902374267578125
      ],
      "label": 27,
      "category": "chilli pepper",
      "sprite_path": "static/dump/umap/static/train/soy beans/Image_21.jpg"
    },
    {
      "embedding": [
        3.180642604827881,
        4.438259601593018
      ],
      "label": 27,
      "category": "chilli pepper",
      "sprite_path": "static/dump/umap/static/train/soy beans/Image_78.jpg"
    },
    {
      "embedding": [
        7.179440498352051,
        1.8914906978607178
      ],
      "label": 27,
      "category": "chilli pepper",
      "sprite_path": "static/dump/umap/static/train/soy beans/Image_59.jpg"
    },
    {
      "embedding": [
        6.884469032287598,
        2.118479013442993
      ],
      "label": 27,
      "category": "chilli pepper",
      "sprite_path": "static/dump/umap/static/train/soy beans/Image_4.jpg"
    },
    {
      "embedding": [
        13.297494888305664,
        2.135044813156128
      ],
      "label": 27,
      "category": "chilli pepper",
      "sprite_path": "static/dump/umap/static/train/soy beans/Image_38.jpg"
    },
    {
      "embedding": [
        8.964223861694336,
        3.3768115043640137
      ],
      "label": 27,
      "category": "chilli pepper",
      "sprite_path": "static/dump/umap/static/train/soy beans/Image_41.jpg"
    },
    {
      "embedding": [
        12.209824562072754,
        0.7765709757804871
      ],
      "label": 27,
      "category": "chilli pepper",
      "sprite_path": "static/dump/umap/static/train/soy beans/Image_7.jpg"
    },
    {
      "embedding": [
        2.540123224258423,
        5.196722030639648
      ],
      "label": 27,
      "category": "chilli pepper",
      "sprite_path": "static/dump/umap/static/train/soy beans/Image_69.jpg"
    },
    {
      "embedding": [
        7.890111446380615,
        0.9858717322349548
      ],
      "label": 27,
      "category": "chilli pepper",
      "sprite_path": "static/dump/umap/static/train/soy beans/Image_48.jpg"
    },
    {
      "embedding": [
        9.927008628845215,
        1.6380847692489624
      ],
      "label": 27,
      "category": "chilli pepper",
      "sprite_path": "static/dump/umap/static/train/soy beans/Image_60.jpg"
    },
    {
      "embedding": [
        8.668671607971191,
        0.38849446177482605
      ],
      "label": 27,
      "category": "chilli pepper",
      "sprite_path": "static/dump/umap/static/train/soy beans/Image_49.jpg"
    },
    {
      "embedding": [
        4.062154769897461,
        4.672661781311035
      ],
      "label": 27,
      "category": "chilli pepper",
      "sprite_path": "static/dump/umap/static/train/soy beans/Image_91.jpg"
    },
    {
      "embedding": [
        2.0096542835235596,
        4.336255073547363
      ],
      "label": 27,
      "category": "chilli pepper",
      "sprite_path": "static/dump/umap/static/train/soy beans/Image_95.jpg"
    },
    {
      "embedding": [
        9.08051872253418,
        0.9711251258850098
      ],
      "label": 27,
      "category": "chilli pepper",
      "sprite_path": "static/dump/umap/static/train/soy beans/Image_32.png"
    },
    {
      "embedding": [
        3.0955629348754883,
        5.630593299865723
      ],
      "label": 27,
      "category": "chilli pepper",
      "sprite_path": "static/dump/umap/static/train/soy beans/Image_86.jpg"
    },
    {
      "embedding": [
        8.889410018920898,
        1.451014757156372
      ],
      "label": 27,
      "category": "chilli pepper",
      "sprite_path": "static/dump/umap/static/train/soy beans/Image_68.jpg"
    },
    {
      "embedding": [
        12.86557674407959,
        2.5803918838500977
      ],
      "label": 27,
      "category": "chilli pepper",
      "sprite_path": "static/dump/umap/static/train/soy beans/Image_23.jpg"
    },
    {
      "embedding": [
        12.326525688171387,
        2.5371828079223633
      ],
      "label": 27,
      "category": "chilli pepper",
      "sprite_path": "static/dump/umap/static/train/soy beans/Image_8.jpg"
    },
    {
      "embedding": [
        11.378131866455078,
        1.4524314403533936
      ],
      "label": 27,
      "category": "chilli pepper",
      "sprite_path": "static/dump/umap/static/train/soy beans/Image_22.jpg"
    },
    {
      "embedding": [
        6.258848190307617,
        1.800003170967102
      ],
      "label": 27,
      "category": "chilli pepper",
      "sprite_path": "static/dump/umap/static/train/soy beans/Image_79.jpg"
    },
    {
      "embedding": [
        13.021068572998047,
        2.619823455810547
      ],
      "label": 27,
      "category": "chilli pepper",
      "sprite_path": "static/dump/umap/static/train/soy beans/Image_17.jpg"
    },
    {
      "embedding": [
        7.709198951721191,
        2.2234959602355957
      ],
      "label": 27,
      "category": "chilli pepper",
      "sprite_path": "static/dump/umap/static/train/soy beans/Image_77.jpg"
    },
    {
      "embedding": [
        12.1329345703125,
        0.7853031158447266
      ],
      "label": 27,
      "category": "chilli pepper",
      "sprite_path": "static/dump/umap/static/train/soy beans/Image_25.jpg"
    },
    {
      "embedding": [
        2.827047348022461,
        4.442923545837402
      ],
      "label": 27,
      "category": "chilli pepper",
      "sprite_path": "static/dump/umap/static/train/soy beans/Image_46.jpg"
    },
    {
      "embedding": [
        6.762237071990967,
        1.0079628229141235
      ],
      "label": 27,
      "category": "chilli pepper",
      "sprite_path": "static/dump/umap/static/train/soy beans/Image_42.png"
    },
    {
      "embedding": [
        8.556296348571777,
        1.0881785154342651
      ],
      "label": 29,
      "category": "watermelon",
      "sprite_path": "static/dump/umap/static/train/soy beans/Image_9.jpg"
    },
    {
      "embedding": [
        6.3254852294921875,
        1.8554452657699585
      ],
      "label": 29,
      "category": "watermelon",
      "sprite_path": "static/dump/umap/static/train/soy beans/Image_71.jpg"
    },
    {
      "embedding": [
        7.947849273681641,
        1.1876389980316162
      ],
      "label": 29,
      "category": "watermelon",
      "sprite_path": "static/dump/umap/static/train/soy beans/Image_81.jpg"
    },
    {
      "embedding": [
        8.539443016052246,
        2.229362726211548
      ],
      "label": 29,
      "category": "watermelon",
      "sprite_path": "static/dump/umap/static/train/soy beans/Image_6.jpg"
    },
    {
      "embedding": [
        8.456342697143555,
        3.5675783157348633
      ],
      "label": 29,
      "category": "watermelon",
      "sprite_path": "static/dump/umap/static/train/soy beans/Image_20.jpg"
    },
    {
      "embedding": [
        9.538022994995117,
        2.9403975009918213
      ],
      "label": 29,
      "category": "watermelon",
      "sprite_path": "static/dump/umap/static/train/soy beans/Image_98.jpg"
    },
    {
      "embedding": [
        1.3313374519348145,
        4.128241539001465
      ],
      "label": 29,
      "category": "watermelon",
      "sprite_path": "static/dump/umap/static/train/soy beans/Image_47.jpg"
    },
    {
      "embedding": [
        6.6224846839904785,
        1.8719823360443115
      ],
      "label": 29,
      "category": "watermelon",
      "sprite_path": "static/dump/umap/static/train/soy beans/Image_19.jpg"
    },
    {
      "embedding": [
        8.731943130493164,
        3.5614562034606934
      ],
      "label": 29,
      "category": "watermelon",
      "sprite_path": "static/dump/umap/static/train/soy beans/Image_88.jpg"
    },
    {
      "embedding": [
        9.91283130645752,
        2.088991403579712
      ],
      "label": 29,
      "category": "watermelon",
      "sprite_path": "static/dump/umap/static/train/soy beans/Image_29.jpg"
    },
    {
      "embedding": [
        6.875007629394531,
        2.3575143814086914
      ],
      "label": 29,
      "category": "watermelon",
      "sprite_path": "static/dump/umap/static/train/soy beans/Image_61.jpg"
    },
    {
      "embedding": [
        2.726454496383667,
        4.739660739898682
      ],
      "label": 29,
      "category": "watermelon",
      "sprite_path": "static/dump/umap/static/train/soy beans/Image_84.jpg"
    },
    {
      "embedding": [
        2.4346635341644287,
        5.178784370422363
      ],
      "label": 29,
      "category": "watermelon",
      "sprite_path": "static/dump/umap/static/train/soy beans/Image_85.jpg"
    },
    {
      "embedding": [
        10.673032760620117,
        1.0538631677627563
      ],
      "label": 29,
      "category": "watermelon",
      "sprite_path": "static/dump/umap/static/train/soy beans/Image_74.jpg"
    },
    {
      "embedding": [
        7.069626808166504,
        1.8266175985336304
      ],
      "label": 29,
      "category": "watermelon",
      "sprite_path": "static/dump/umap/static/train/soy beans/Image_64.jpg"
    },
    {
      "embedding": [
        1.418847918510437,
        4.727018356323242
      ],
      "label": 29,
      "category": "watermelon",
      "sprite_path": "static/dump/umap/static/train/soy beans/Image_92.jpg"
    },
    {
      "embedding": [
        8.634722709655762,
        0.6510876417160034
      ],
      "label": 29,
      "category": "watermelon",
      "sprite_path": "static/dump/umap/static/train/soy beans/Image_27.jpg"
    },
    {
      "embedding": [
        4.790403366088867,
        4.09678840637207
      ],
      "label": 29,
      "category": "watermelon",
      "sprite_path": "static/dump/umap/static/train/soy beans/Image_55.jpg"
    },
    {
      "embedding": [
        6.58786153793335,
        2.072305202484131
      ],
      "label": 29,
      "category": "watermelon",
      "sprite_path": "static/dump/umap/static/train/soy beans/Image_44.jpg"
    },
    {
      "embedding": [
        8.460725784301758,
        0.707957923412323
      ],
      "label": 29,
      "category": "watermelon",
      "sprite_path": "static/dump/umap/static/train/soy beans/Image_72.jpg"
    },
    {
      "embedding": [
        7.375575065612793,
        2.9563403129577637
      ],
      "label": 29,
      "category": "watermelon",
      "sprite_path": "static/dump/umap/static/train/soy beans/Image_73.jpg"
    },
    {
      "embedding": [
        8.528181076049805,
        0.19927066564559937
      ],
      "label": 29,
      "category": "watermelon",
      "sprite_path": "static/dump/umap/static/train/soy beans/Image_52.jpg"
    },
    {
      "embedding": [
        6.564573764801025,
        2.41713547706604
      ],
      "label": 29,
      "category": "watermelon",
      "sprite_path": "static/dump/umap/static/train/soy beans/Image_90.jpg"
    },
    {
      "embedding": [
        9.627195358276367,
        2.9633610248565674
      ],
      "label": 29,
      "category": "watermelon",
      "sprite_path": "static/dump/umap/static/train/soy beans/Image_83.jpg"
    },
    {
      "embedding": [
        6.6839776039123535,
        1.749314785003662
      ],
      "label": 29,
      "category": "watermelon",
      "sprite_path": "static/dump/umap/static/train/soy beans/Image_11.jpg"
    },
    {
      "embedding": [
        8.903335571289062,
        0.3870687186717987
      ],
      "label": 29,
      "category": "watermelon",
      "sprite_path": "static/dump/umap/static/train/soy beans/Image_80.jpg"
    },
    {
      "embedding": [
        4.261145114898682,
        4.42453670501709
      ],
      "label": 29,
      "category": "watermelon",
      "sprite_path": "static/dump/umap/static/train/soy beans/Image_67.jpg"
    },
    {
      "embedding": [
        11.97704792022705,
        0.8076731562614441
      ],
      "label": 29,
      "category": "watermelon",
      "sprite_path": "static/dump/umap/static/train/soy beans/Image_50.jpg"
    },
    {
      "embedding": [
        6.417086601257324,
        2.0667564868927
      ],
      "label": 29,
      "category": "watermelon",
      "sprite_path": "static/dump/umap/static/train/soy beans/Image_34.png"
    },
    {
      "embedding": [
        11.781375885009766,
        1.9141532182693481
      ],
      "label": 29,
      "category": "watermelon",
      "sprite_path": "static/dump/umap/static/train/soy beans/Image_58.jpg"
    },
    {
      "embedding": [
        2.6550588607788086,
        5.292179584503174
      ],
      "label": 29,
      "category": "watermelon",
      "sprite_path": "static/dump/umap/static/train/soy beans/Image_97.jpg"
    },
    {
      "embedding": [
        7.517317295074463,
        3.1130483150482178
      ],
      "label": 29,
      "category": "watermelon",
      "sprite_path": "static/dump/umap/static/train/soy beans/Image_62.jpg"
    },
    {
      "embedding": [
        4.522667407989502,
        3.6368043422698975
      ],
      "label": 29,
      "category": "watermelon",
      "sprite_path": "static/dump/umap/static/train/soy beans/Image_30.jpg"
    },
    {
      "embedding": [
        7.1486124992370605,
        1.2875603437423706
      ],
      "label": 29,
      "category": "watermelon",
      "sprite_path": "static/dump/umap/static/train/soy beans/Image_5.jpg"
    },
    {
      "embedding": [
        1.1968176364898682,
        4.275075912475586
      ],
      "label": 29,
      "category": "watermelon",
      "sprite_path": "static/dump/umap/static/train/soy beans/Image_100.jpg"
    },
    {
      "embedding": [
        10.94405460357666,
        1.0836507081985474
      ],
      "label": 29,
      "category": "watermelon",
      "sprite_path": "static/dump/umap/static/train/soy beans/Image_70.jpg"
    },
    {
      "embedding": [
        11.679659843444824,
        2.153240919113159
      ],
      "label": 29,
      "category": "watermelon",
      "sprite_path": "static/dump/umap/static/train/soy beans/Image_15.jpg"
    },
    {
      "embedding": [
        8.00429916381836,
        1.0139415264129639
      ],
      "label": 29,
      "category": "watermelon",
      "sprite_path": "static/dump/umap/static/train/soy beans/Image_35.jpg"
    },
    {
      "embedding": [
        2.978102207183838,
        4.930759906768799
      ],
      "label": 29,
      "category": "watermelon",
      "sprite_path": "static/dump/umap/static/train/soy beans/Image_14.jpg"
    },
    {
      "embedding": [
        11.1082181930542,
        2.007117986679077
      ],
      "label": 29,
      "category": "watermelon",
      "sprite_path": "static/dump/umap/static/train/soy beans/Image_39.jpg"
    },
    {
      "embedding": [
        2.211634397506714,
        5.290414333343506
      ],
      "label": 29,
      "category": "watermelon",
      "sprite_path": "static/dump/umap/static/train/soy beans/Image_76.jpg"
    },
    {
      "embedding": [
        9.147397994995117,
        1.6771904230117798
      ],
      "label": 29,
      "category": "watermelon",
      "sprite_path": "static/dump/umap/static/train/soy beans/Image_63.jpg"
    },
    {
      "embedding": [
        7.962287425994873,
        0.7558889985084534
      ],
      "label": 29,
      "category": "watermelon",
      "sprite_path": "static/dump/umap/static/train/soy beans/Image_75.jpg"
    },
    {
      "embedding": [
        9.55026626586914,
        1.5755101442337036
      ],
      "label": 29,
      "category": "watermelon",
      "sprite_path": "static/dump/umap/static/train/soy beans/Image_24.jpg"
    },
    {
      "embedding": [
        10.847119331359863,
        2.8570644855499268
      ],
      "label": 29,
      "category": "watermelon",
      "sprite_path": "static/dump/umap/static/train/soy beans/Image_13.png"
    },
    {
      "embedding": [
        10.585471153259277,
        1.2868833541870117
      ],
      "label": 29,
      "category": "watermelon",
      "sprite_path": "static/dump/umap/static/train/soy beans/Image_99.jpg"
    },
    {
      "embedding": [
        6.5183916091918945,
        1.9298979043960571
      ],
      "label": 29,
      "category": "watermelon",
      "sprite_path": "static/dump/umap/static/train/soy beans/Image_37.jpg"
    },
    {
      "embedding": [
        1.1132556200027466,
        4.526941776275635
      ],
      "label": 29,
      "category": "watermelon",
      "sprite_path": "static/dump/umap/static/train/soy beans/Image_51.jpg"
    },
    {
      "embedding": [
        9.652464866638184,
        2.2904155254364014
      ],
      "label": 29,
      "category": "watermelon",
      "sprite_path": "static/dump/umap/static/train/soy beans/Image_28.jpg"
    },
    {
      "embedding": [
        6.301994323730469,
        2.091526985168457
      ],
      "label": 29,
      "category": "watermelon",
      "sprite_path": "static/dump/umap/static/train/soy beans/Image_54.jpg"
    },
    {
      "embedding": [
        9.83596134185791,
        1.5283851623535156
      ],
      "label": 29,
      "category": "watermelon",
      "sprite_path": "static/dump/umap/static/train/soy beans/Image_93.jpg"
    },
    {
      "embedding": [
        10.789163589477539,
        1.588555932044983
      ],
      "label": 29,
      "category": "watermelon",
      "sprite_path": "static/dump/umap/static/train/soy beans/Image_36.jpg"
    },
    {
      "embedding": [
        8.997040748596191,
        3.4821994304656982
      ],
      "label": 29,
      "category": "watermelon",
      "sprite_path": "static/dump/umap/static/train/soy beans/Image_31.jpg"
    },
    {
      "embedding": [
        8.801241874694824,
        0.8110686540603638
      ],
      "label": 29,
      "category": "watermelon",
      "sprite_path": "static/dump/umap/static/train/soy beans/Image_2.jpg"
    },
    {
      "embedding": [
        9.149377822875977,
        1.940722107887268
      ],
      "label": 29,
      "category": "watermelon",
      "sprite_path": "static/dump/umap/static/train/soy beans/Image_3.jpg"
    },
    {
      "embedding": [
        2.204064130783081,
        5.5770463943481445
      ],
      "label": 29,
      "category": "watermelon",
      "sprite_path": "static/dump/umap/static/train/soy beans/Image_26.jpg"
    },
    {
      "embedding": [
        6.375115871429443,
        3.2494232654571533
      ],
      "label": 29,
      "category": "watermelon",
      "sprite_path": "static/dump/umap/static/train/soy beans/Image_66.jpg"
    },
    {
      "embedding": [
        8.007946014404297,
        0.8958120942115784
      ],
      "label": 29,
      "category": "watermelon",
      "sprite_path": "static/dump/umap/static/train/soy beans/Image_87.jpg"
    },
    {
      "embedding": [
        10.875950813293457,
        1.3264758586883545
      ],
      "label": 29,
      "category": "watermelon",
      "sprite_path": "static/dump/umap/static/train/soy beans/Image_43.jpg"
    },
    {
      "embedding": [
        9.633604049682617,
        0.7185579538345337
      ],
      "label": 29,
      "category": "watermelon",
      "sprite_path": "static/dump/umap/static/train/cabbage/Image_89.jpg"
    },
    {
      "embedding": [
        2.215244770050049,
        4.065125465393066
      ],
      "label": 29,
      "category": "watermelon",
      "sprite_path": "static/dump/umap/static/train/cabbage/Image_65.jpg"
    },
    {
      "embedding": [
        11.111069679260254,
        3.067746162414551
      ],
      "label": 29,
      "category": "watermelon",
      "sprite_path": "static/dump/umap/static/train/cabbage/Image_1.jpg"
    },
    {
      "embedding": [
        7.4161505699157715,
        1.4874725341796875
      ],
      "label": 29,
      "category": "watermelon",
      "sprite_path": "static/dump/umap/static/train/cabbage/Image_16.jpg"
    },
    {
      "embedding": [
        6.0720672607421875,
        2.2974071502685547
      ],
      "label": 29,
      "category": "watermelon",
      "sprite_path": "static/dump/umap/static/train/cabbage/Image_57.jpg"
    },
    {
      "embedding": [
        8.804289817810059,
        1.3079639673233032
      ],
      "label": 29,
      "category": "watermelon",
      "sprite_path": "static/dump/umap/static/train/cabbage/Image_12.jpg"
    },
    {
      "embedding": [
        6.098804473876953,
        3.083036422729492
      ],
      "label": 29,
      "category": "watermelon",
      "sprite_path": "static/dump/umap/static/train/cabbage/Image_56.jpg"
    },
    {
      "embedding": [
        9.102169036865234,
        1.6839581727981567
      ],
      "label": 29,
      "category": "watermelon",
      "sprite_path": "static/dump/umap/static/train/cabbage/Image_33.jpg"
    },
    {
      "embedding": [
        7.9101409912109375,
        1.1854530572891235
      ],
      "label": 29,
      "category": "watermelon",
      "sprite_path": "static/dump/umap/static/train/cabbage/Image_45.jpg"
    },
    {
      "embedding": [
        9.317195892333984,
        2.5969018936157227
      ],
      "label": 29,
      "category": "watermelon",
      "sprite_path": "static/dump/umap/static/train/cabbage/Image_94.jpg"
    },
    {
      "embedding": [
        7.07825231552124,
        1.6260277032852173
      ],
      "label": 29,
      "category": "watermelon",
      "sprite_path": "static/dump/umap/static/train/cabbage/Image_10.jpg"
    },
    {
      "embedding": [
        7.660883903503418,
        1.07549250125885
      ],
      "label": 29,
      "category": "watermelon",
      "sprite_path": "static/dump/umap/static/train/cabbage/Image_21.jpg"
    },
    {
      "embedding": [
        1.4166163206100464,
        4.6948723793029785
      ],
      "label": 29,
      "category": "watermelon",
      "sprite_path": "static/dump/umap/static/train/cabbage/Image_78.jpg"
    },
    {
      "embedding": [
        6.8962249755859375,
        2.8902347087860107
      ],
      "label": 29,
      "category": "watermelon",
      "sprite_path": "static/dump/umap/static/train/cabbage/Image_59.jpg"
    },
    {
      "embedding": [
        10.096693992614746,
        1.5710393190383911
      ],
      "label": 29,
      "category": "watermelon",
      "sprite_path": "static/dump/umap/static/train/cabbage/Image_4.jpg"
    },
    {
      "embedding": [
        6.481940269470215,
        1.7091985940933228
      ],
      "label": 29,
      "category": "watermelon",
      "sprite_path": "static/dump/umap/static/train/cabbage/Image_38.jpg"
    },
    {
      "embedding": [
        7.223212718963623,
        2.030616044998169
      ],
      "label": 29,
      "category": "watermelon",
      "sprite_path": "static/dump/umap/static/train/cabbage/Image_7.jpg"
    },
    {
      "embedding": [
        6.557468414306641,
        2.097369432449341
      ],
      "label": 29,
      "category": "watermelon",
      "sprite_path": "static/dump/umap/static/train/cabbage/Image_48.jpg"
    },
    {
      "embedding": [
        1.7887070178985596,
        5.136440753936768
      ],
      "label": 29,
      "category": "watermelon",
      "sprite_path": "static/dump/umap/static/train/cabbage/Image_63.png"
    },
    {
      "embedding": [
        5.037949085235596,
        3.260002374649048
      ],
      "label": 29,
      "category": "watermelon",
      "sprite_path": "static/dump/umap/static/train/cabbage/Image_13.jpg"
    },
    {
      "embedding": [
        8.397910118103027,
        0.37622350454330444
      ],
      "label": 29,
      "category": "watermelon",
      "sprite_path": "static/dump/umap/static/train/cabbage/Image_91.jpg"
    },
    {
      "embedding": [
        10.439990043640137,
        1.5791606903076172
      ],
      "label": 29,
      "category": "watermelon",
      "sprite_path": "static/dump/umap/static/train/cabbage/Image_95.jpg"
    },
    {
      "embedding": [
        10.095850944519043,
        2.5258917808532715
      ],
      "label": 29,
      "category": "watermelon",
      "sprite_path": "static/dump/umap/static/train/cabbage/Image_68.jpg"
    },
    {
      "embedding": [
        6.683213710784912,
        1.6984148025512695
      ],
      "label": 29,
      "category": "watermelon",
      "sprite_path": "static/dump/umap/static/train/cabbage/Image_23.jpg"
    },
    {
      "embedding": [
        9.104018211364746,
        0.9609828591346741
      ],
      "label": 29,
      "category": "watermelon",
      "sprite_path": "static/dump/umap/static/train/cabbage/Image_8.jpg"
    },
    {
      "embedding": [
        5.079104900360107,
        2.913290500640869
      ],
      "label": 29,
      "category": "watermelon",
      "sprite_path": "static/dump/umap/static/train/cabbage/Image_22.jpg"
    },
    {
      "embedding": [
        6.513101577758789,
        3.3106460571289062
      ],
      "label": 29,
      "category": "watermelon",
      "sprite_path": "static/dump/umap/static/train/cabbage/Image_79.jpg"
    },
    {
      "embedding": [
        6.384860992431641,
        1.7960370779037476
      ],
      "label": 29,
      "category": "watermelon",
      "sprite_path": "static/dump/umap/static/train/cabbage/Image_17.jpg"
    },
    {
      "embedding": [
        6.148288726806641,
        2.0669596195220947
      ],
      "label": 29,
      "category": "watermelon",
      "sprite_path": "static/dump/umap/static/train/cabbage/Image_77.jpg"
    },
    {
      "embedding": [
        11.002180099487305,
        1.3846213817596436
      ],
      "label": 29,
      "category": "watermelon",
      "sprite_path": "static/dump/umap/static/train/cabbage/Image_25.jpg"
    },
    {
      "embedding": [
        1.782685399055481,
        5.0760369300842285
      ],
      "label": 29,
      "category": "watermelon",
      "sprite_path": "static/dump/umap/static/train/cabbage/Image_46.jpg"
    },
    {
      "embedding": [
        9.201703071594238,
        1.1697360277175903
      ],
      "label": 29,
      "category": "watermelon",
      "sprite_path": "static/dump/umap/static/train/cabbage/Image_9.jpg"
    },
    {
      "embedding": [
        7.9150824546813965,
        0.8261012434959412
      ],
      "label": 29,
      "category": "watermelon",
      "sprite_path": "static/dump/umap/static/train/cabbage/Image_71.jpg"
    },
    {
      "embedding": [
        9.109526634216309,
        1.0066567659378052
      ],
      "label": 29,
      "category": "watermelon",
      "sprite_path": "static/dump/umap/static/train/cabbage/Image_34.jpg"
    },
    {
      "embedding": [
        7.9538750648498535,
        1.349921703338623
      ],
      "label": 29,
      "category": "watermelon",
      "sprite_path": "static/dump/umap/static/train/cabbage/Image_81.jpg"
    },
    {
      "embedding": [
        7.507512092590332,
        1.7185262441635132
      ],
      "label": 29,
      "category": "watermelon",
      "sprite_path": "static/dump/umap/static/train/cabbage/Image_6.jpg"
    },
    {
      "embedding": [
        8.805116653442383,
        3.532646894454956
      ],
      "label": 29,
      "category": "watermelon",
      "sprite_path": "static/dump/umap/static/train/cabbage/Image_20.jpg"
    },
    {
      "embedding": [
        8.799031257629395,
        0.8186380863189697
      ],
      "label": 29,
      "category": "watermelon",
      "sprite_path": "static/dump/umap/static/train/cabbage/Image_86.jpeg"
    },
    {
      "embedding": [
        10.681556701660156,
        1.695607304573059
      ],
      "label": 4,
      "category": "carrot",
      "sprite_path": "static/dump/umap/static/train/cabbage/Image_98.jpg"
    },
    {
      "embedding": [
        4.398545742034912,
        4.176076412200928
      ],
      "label": 4,
      "category": "carrot",
      "sprite_path": "static/dump/umap/static/train/cabbage/Image_88.jpg"
    },
    {
      "embedding": [
        11.454504013061523,
        1.5912388563156128
      ],
      "label": 4,
      "category": "carrot",
      "sprite_path": "static/dump/umap/static/train/cabbage/Image_29.jpg"
    },
    {
      "embedding": [
        10.416863441467285,
        2.049154043197632
      ],
      "label": 4,
      "category": "carrot",
      "sprite_path": "static/dump/umap/static/train/cabbage/Image_61.jpg"
    },
    {
      "embedding": [
        4.698949813842773,
        4.110518455505371
      ],
      "label": 4,
      "category": "carrot",
      "sprite_path": "static/dump/umap/static/train/cabbage/Image_85.jpg"
    },
    {
      "embedding": [
        11.492789268493652,
        2.7197275161743164
      ],
      "label": 4,
      "category": "carrot",
      "sprite_path": "static/dump/umap/static/train/cabbage/Image_74.jpg"
    },
    {
      "embedding": [
        3.5970265865325928,
        4.357955455780029
      ],
      "label": 4,
      "category": "carrot",
      "sprite_path": "static/dump/umap/static/train/cabbage/Image_53.jpg"
    },
    {
      "embedding": [
        11.112071990966797,
        2.9948935508728027
      ],
      "label": 4,
      "category": "carrot",
      "sprite_path": "static/dump/umap/static/train/cabbage/Image_92.jpg"
    },
    {
      "embedding": [
        9.437265396118164,
        2.99603009223938
      ],
      "label": 4,
      "category": "carrot",
      "sprite_path": "static/dump/umap/static/train/cabbage/Image_27.jpg"
    },
    {
      "embedding": [
        11.16397476196289,
        1.6762901544570923
      ],
      "label": 4,
      "category": "carrot",
      "sprite_path": "static/dump/umap/static/train/cabbage/Image_55.jpg"
    },
    {
      "embedding": [
        10.249611854553223,
        2.1962568759918213
      ],
      "label": 4,
      "category": "carrot",
      "sprite_path": "static/dump/umap/static/train/cabbage/Image_44.jpg"
    },
    {
      "embedding": [
        10.506447792053223,
        2.3574366569519043
      ],
      "label": 4,
      "category": "carrot",
      "sprite_path": "static/dump/umap/static/train/cabbage/Image_72.jpg"
    },
    {
      "embedding": [
        8.995314598083496,
        1.5238820314407349
      ],
      "label": 4,
      "category": "carrot",
      "sprite_path": "static/dump/umap/static/train/cabbage/Image_73.jpg"
    },
    {
      "embedding": [
        4.40369176864624,
        4.190998077392578
      ],
      "label": 4,
      "category": "carrot",
      "sprite_path": "static/dump/umap/static/train/cabbage/Image_96.jpg"
    },
    {
      "embedding": [
        9.775289535522461,
        2.3156020641326904
      ],
      "label": 4,
      "category": "carrot",
      "sprite_path": "static/dump/umap/static/train/cabbage/Image_52.jpg"
    },
    {
      "embedding": [
        8.671051979064941,
        3.3727166652679443
      ],
      "label": 4,
      "category": "carrot",
      "sprite_path": "static/dump/umap/static/train/cabbage/Image_90.jpg"
    },
    {
      "embedding": [
        10.526400566101074,
        2.390774726867676
      ],
      "label": 4,
      "category": "carrot",
      "sprite_path": "static/dump/umap/static/train/cabbage/Image_11.jpg"
    },
    {
      "embedding": [
        4.608544826507568,
        4.181586265563965
      ],
      "label": 4,
      "category": "carrot",
      "sprite_path": "static/dump/umap/static/train/cabbage/Image_80.jpg"
    },
    {
      "embedding": [
        9.56469440460205,
        1.59172785282135
      ],
      "label": 4,
      "category": "carrot",
      "sprite_path": "static/dump/umap/static/train/cabbage/Image_67.jpg"
    },
    {
      "embedding": [
        11.572751998901367,
        1.6363558769226074
      ],
      "label": 4,
      "category": "carrot",
      "sprite_path": "static/dump/umap/static/train/cabbage/Image_50.jpg"
    },
    {
      "embedding": [
        6.28096342086792,
        3.7027595043182373
      ],
      "label": 4,
      "category": "carrot",
      "sprite_path": "static/dump/umap/static/train/cabbage/Image_58.jpg"
    },
    {
      "embedding": [
        6.222537040710449,
        2.313875675201416
      ],
      "label": 4,
      "category": "carrot",
      "sprite_path": "static/dump/umap/static/train/cabbage/Image_97.jpg"
    },
    {
      "embedding": [
        10.449069023132324,
        2.0405445098876953
      ],
      "label": 4,
      "category": "carrot",
      "sprite_path": "static/dump/umap/static/train/cabbage/Image_30.jpg"
    },
    {
      "embedding": [
        11.497806549072266,
        1.5876749753952026
      ],
      "label": 4,
      "category": "carrot",
      "sprite_path": "static/dump/umap/static/train/cabbage/Image_5.jpg"
    },
    {
      "embedding": [
        10.203822135925293,
        2.9098262786865234
      ],
      "label": 4,
      "category": "carrot",
      "sprite_path": "static/dump/umap/static/train/cabbage/Image_100.jpg"
    },
    {
      "embedding": [
        9.515957832336426,
        2.547362804412842
      ],
      "label": 4,
      "category": "carrot",
      "sprite_path": "static/dump/umap/static/train/cabbage/Image_70.jpg"
    },
    {
      "embedding": [
        8.949856758117676,
        2.971453905105591
      ],
      "label": 4,
      "category": "carrot",
      "sprite_path": "static/dump/umap/static/train/cabbage/Image_15.jpg"
    },
    {
      "embedding": [
        1.576483964920044,
        4.462271690368652
      ],
      "label": 4,
      "category": "carrot",
      "sprite_path": "static/dump/umap/static/train/cabbage/Image_35.jpg"
    },
    {
      "embedding": [
        11.12675952911377,
        0.8811174035072327
      ],
      "label": 4,
      "category": "carrot",
      "sprite_path": "static/dump/umap/static/train/cabbage/Image_36.jpeg"
    },
    {
      "embedding": [
        9.300590515136719,
        2.6954681873321533
      ],
      "label": 4,
      "category": "carrot",
      "sprite_path": "static/dump/umap/static/train/cabbage/Image_14.jpg"
    },
    {
      "embedding": [
        10.517012596130371,
        2.2541098594665527
      ],
      "label": 4,
      "category": "carrot",
      "sprite_path": "static/dump/umap/static/train/cabbage/Image_39.jpg"
    },
    {
      "embedding": [
        10.96047306060791,
        1.8899043798446655
      ],
      "label": 4,
      "category": "carrot",
      "sprite_path": "static/dump/umap/static/train/cabbage/Image_76.jpg"
    },
    {
      "embedding": [
        10.524026870727539,
        3.0058908462524414
      ],
      "label": 4,
      "category": "carrot",
      "sprite_path": "static/dump/umap/static/train/cabbage/Image_75.jpg"
    },
    {
      "embedding": [
        9.61580753326416,
        2.155963659286499
      ],
      "label": 4,
      "category": "carrot",
      "sprite_path": "static/dump/umap/static/train/cabbage/Image_24.jpg"
    },
    {
      "embedding": [
        11.14819622039795,
        2.572819232940674
      ],
      "label": 4,
      "category": "carrot",
      "sprite_path": "static/dump/umap/static/train/cabbage/Image_99.jpg"
    },
    {
      "embedding": [
        9.997288703918457,
        2.4992854595184326
      ],
      "label": 4,
      "category": "carrot",
      "sprite_path": "static/dump/umap/static/train/cabbage/Image_32.jpg"
    },
    {
      "embedding": [
        4.223811149597168,
        4.307618618011475
      ],
      "label": 4,
      "category": "carrot",
      "sprite_path": "static/dump/umap/static/train/cabbage/Image_37.jpg"
    },
    {
      "embedding": [
        10.876338958740234,
        2.5143964290618896
      ],
      "label": 4,
      "category": "carrot",
      "sprite_path": "static/dump/umap/static/train/cabbage/Image_51.jpg"
    },
    {
      "embedding": [
        9.644081115722656,
        2.2245025634765625
      ],
      "label": 4,
      "category": "carrot",
      "sprite_path": "static/dump/umap/static/train/cabbage/Image_28.jpg"
    },
    {
      "embedding": [
        3.4871034622192383,
        4.219758033752441
      ],
      "label": 4,
      "category": "carrot",
      "sprite_path": "static/dump/umap/static/train/cabbage/Image_54.jpg"
    },
    {
      "embedding": [
        8.939175605773926,
        2.9307901859283447
      ],
      "label": 4,
      "category": "carrot",
      "sprite_path": "static/dump/umap/static/train/cabbage/Image_93.jpg"
    },
    {
      "embedding": [
        9.850255966186523,
        2.2835657596588135
      ],
      "label": 4,
      "category": "carrot",
      "sprite_path": "static/dump/umap/static/train/cabbage/Image_42.jpg"
    },
    {
      "embedding": [
        4.490742206573486,
        3.5510783195495605
      ],
      "label": 4,
      "category": "carrot",
      "sprite_path": "static/dump/umap/static/train/cabbage/Image_31.jpg"
    },
    {
      "embedding": [
        1.6108214855194092,
        4.938961505889893
      ],
      "label": 4,
      "category": "carrot",
      "sprite_path": "static/dump/umap/static/train/cabbage/Image_2.jpg"
    },
    {
      "embedding": [
        11.790912628173828,
        2.474107027053833
      ],
      "label": 4,
      "category": "carrot",
      "sprite_path": "static/dump/umap/static/train/cabbage/Image_3.jpg"
    },
    {
      "embedding": [
        1.395813226699829,
        5.117934703826904
      ],
      "label": 4,
      "category": "carrot",
      "sprite_path": "static/dump/umap/static/train/cabbage/Image_66.jpg"
    },
    {
      "embedding": [
        11.470115661621094,
        0.944843053817749
      ],
      "label": 4,
      "category": "carrot",
      "sprite_path": "static/dump/umap/static/train/cabbage/Image_87.jpg"
    },
    {
      "embedding": [
        3.7060370445251465,
        4.022344589233398
      ],
      "label": 4,
      "category": "carrot",
      "sprite_path": "static/dump/umap/static/train/cabbage/Image_43.jpg"
    },
    {
      "embedding": [
        10.839858055114746,
        1.9524428844451904
      ],
      "label": 4,
      "category": "carrot",
      "sprite_path": "static/dump/umap/static/train/cabbage/Image_18.jpg"
    },
    {
      "embedding": [
        9.208281517028809,
        2.360274076461792
      ],
      "label": 4,
      "category": "carrot",
      "sprite_path": "static/dump/umap/static/train/beetroot/Image_89.jpg"
    },
    {
      "embedding": [
        10.882853507995605,
        0.7863389849662781
      ],
      "label": 4,
      "category": "carrot",
      "sprite_path": "static/dump/umap/static/train/beetroot/Image_65.jpg"
    },
    {
      "embedding": [
        8.679763793945312,
        3.658475399017334
      ],
      "label": 4,
      "category": "carrot",
      "sprite_path": "static/dump/umap/static/train/beetroot/Image_1.jpg"
    },
    {
      "embedding": [
        6.920321464538574,
        3.241617202758789
      ],
      "label": 4,
      "category": "carrot",
      "sprite_path": "static/dump/umap/static/train/beetroot/Image_16.jpg"
    },
    {
      "embedding": [
        11.468871116638184,
        1.2912840843200684
      ],
      "label": 4,
      "category": "carrot",
      "sprite_path": "static/dump/umap/static/train/beetroot/Image_54.png"
    },
    {
      "embedding": [
        9.406631469726562,
        2.295836925506592
      ],
      "label": 4,
      "category": "carrot",
      "sprite_path": "static/dump/umap/static/train/beetroot/Image_12.jpg"
    },
    {
      "embedding": [
        10.898183822631836,
        2.516310691833496
      ],
      "label": 4,
      "category": "carrot",
      "sprite_path": "static/dump/umap/static/train/beetroot/Image_56.jpg"
    },
    {
      "embedding": [
        9.41545295715332,
        2.5858044624328613
      ],
      "label": 4,
      "category": "carrot",
      "sprite_path": "static/dump/umap/static/train/beetroot/Image_33.jpg"
    },
    {
      "embedding": [
        6.70144510269165,
        2.267752170562744
      ],
      "label": 4,
      "category": "carrot",
      "sprite_path": "static/dump/umap/static/train/beetroot/Image_45.jpg"
    },
    {
      "embedding": [
        10.337811470031738,
        2.622791290283203
      ],
      "label": 4,
      "category": "carrot",
      "sprite_path": "static/dump/umap/static/train/beetroot/Image_94.jpg"
    },
    {
      "embedding": [
        1.6112258434295654,
        4.597386360168457
      ],
      "label": 4,
      "category": "carrot",
      "sprite_path": "static/dump/umap/static/train/beetroot/Image_40.jpg"
    },
    {
      "embedding": [
        9.413783073425293,
        2.567864418029785
      ],
      "label": 4,
      "category": "carrot",
      "sprite_path": "static/dump/umap/static/train/beetroot/Image_10.jpg"
    },
    {
      "embedding": [
        10.757948875427246,
        2.168292284011841
      ],
      "label": 4,
      "category": "carrot",
      "sprite_path": "static/dump/umap/static/train/beetroot/Image_78.jpg"
    },
    {
      "embedding": [
        10.483696937561035,
        2.002326250076294
      ],
      "label": 4,
      "category": "carrot",
      "sprite_path": "static/dump/umap/static/train/beetroot/Image_4.jpg"
    },
    {
      "embedding": [
        9.580031394958496,
        1.598354697227478
      ],
      "label": 4,
      "category": "carrot",
      "sprite_path": "static/dump/umap/static/train/beetroot/Image_38.jpg"
    },
    {
      "embedding": [
        10.918424606323242,
        2.8505353927612305
      ],
      "label": 4,
      "category": "carrot",
      "sprite_path": "static/dump/umap/static/train/beetroot/Image_41.jpg"
    },
    {
      "embedding": [
        11.480615615844727,
        1.6233820915222168
      ],
      "label": 4,
      "category": "carrot",
      "sprite_path": "static/dump/umap/static/train/beetroot/Image_7.jpg"
    },
    {
      "embedding": [
        9.000541687011719,
        1.6223549842834473
      ],
      "label": 4,
      "category": "carrot",
      "sprite_path": "static/dump/umap/static/train/beetroot/Image_69.jpg"
    },
    {
      "embedding": [
        12.225883483886719,
        1.9042390584945679
      ],
      "label": 4,
      "category": "carrot",
      "sprite_path": "static/dump/umap/static/train/beetroot/Image_48.jpg"
    },
    {
      "embedding": [
        7.6231231689453125,
        2.4062647819519043
      ],
      "label": 4,
      "category": "carrot",
      "sprite_path": "static/dump/umap/static/train/beetroot/Image_13.jpg"
    },
    {
      "embedding": [
        11.882512092590332,
        2.3069241046905518
      ],
      "label": 4,
      "category": "carrot",
      "sprite_path": "static/dump/umap/static/train/beetroot/Image_49.jpg"
    },
    {
      "embedding": [
        10.691143035888672,
        2.1237165927886963
      ],
      "label": 4,
      "category": "carrot",
      "sprite_path": "static/dump/umap/static/train/beetroot/Image_91.jpg"
    },
    {
      "embedding": [
        3.013078451156616,
        4.836472034454346
      ],
      "label": 4,
      "category": "carrot",
      "sprite_path": "static/dump/umap/static/train/beetroot/Image_95.jpg"
    },
    {
      "embedding": [
        10.777552604675293,
        2.3565354347229004
      ],
      "label": 4,
      "category": "carrot",
      "sprite_path": "static/dump/umap/static/train/beetroot/Image_68.jpg"
    },
    {
      "embedding": [
        12.003320693969727,
        1.2631627321243286
      ],
      "label": 4,
      "category": "carrot",
      "sprite_path": "static/dump/umap/static/train/beetroot/Image_23.jpg"
    },
    {
      "embedding": [
        3.6659798622131348,
        4.232491493225098
      ],
      "label": 4,
      "category": "carrot",
      "sprite_path": "static/dump/umap/static/train/beetroot/Image_8.jpg"
    },
    {
      "embedding": [
        4.032257080078125,
        4.249272346496582
      ],
      "label": 4,
      "category": "carrot",
      "sprite_path": "static/dump/umap/static/train/beetroot/Image_22.jpg"
    },
    {
      "embedding": [
        1.6197102069854736,
        4.42886209487915
      ],
      "label": 4,
      "category": "carrot",
      "sprite_path": "static/dump/umap/static/train/beetroot/Image_86.png"
    },
    {
      "embedding": [
        9.698176383972168,
        2.1012651920318604
      ],
      "label": 4,
      "category": "carrot",
      "sprite_path": "static/dump/umap/static/train/beetroot/Image_79.jpg"
    },
    {
      "embedding": [
        4.593866348266602,
        4.1902756690979
      ],
      "label": 4,
      "category": "carrot",
      "sprite_path": "static/dump/umap/static/train/beetroot/Image_17.jpg"
    },
    {
      "embedding": [
        8.75915241241455,
        2.4590635299682617
      ],
      "label": 4,
      "category": "carrot",
      "sprite_path": "static/dump/umap/static/train/beetroot/Image_77.jpg"
    },
    {
      "embedding": [
        8.686766624450684,
        3.540229082107544
      ],
      "label": 4,
      "category": "carrot",
      "sprite_path": "static/dump/umap/static/train/beetroot/Image_25.jpg"
    },
    {
      "embedding": [
        11.385322570800781,
        2.684211254119873
      ],
      "label": 4,
      "category": "carrot",
      "sprite_path": "static/dump/umap/static/train/beetroot/Image_46.jpg"
    },
    {
      "embedding": [
        10.191683769226074,
        2.484391927719116
      ],
      "label": 4,
      "category": "carrot",
      "sprite_path": "static/dump/umap/static/train/beetroot/Image_9.jpg"
    },
    {
      "embedding": [
        9.019213676452637,
        2.877958059310913
      ],
      "label": 4,
      "category": "carrot",
      "sprite_path": "static/dump/umap/static/train/beetroot/Image_34.jpg"
    },
    {
      "embedding": [
        4.50998592376709,
        4.248916149139404
      ],
      "label": 4,
      "category": "carrot",
      "sprite_path": "static/dump/umap/static/train/beetroot/Image_81.jpg"
    },
    {
      "embedding": [
        7.264430999755859,
        3.4566421508789062
      ],
      "label": 4,
      "category": "carrot",
      "sprite_path": "static/dump/umap/static/train/beetroot/Image_6.jpg"
    },
    {
      "embedding": [
        10.845808982849121,
        2.020678997039795
      ],
      "label": 4,
      "category": "carrot",
      "sprite_path": "static/dump/umap/static/train/beetroot/Image_20.jpg"
    },
    {
      "embedding": [
        9.004836082458496,
        2.9196715354919434
      ],
      "label": 4,
      "category": "carrot",
      "sprite_path": "static/dump/umap/static/train/beetroot/Image_98.jpg"
    },
    {
      "embedding": [
        11.517265319824219,
        1.1391088962554932
      ],
      "label": 4,
      "category": "carrot",
      "sprite_path": "static/dump/umap/static/train/beetroot/Image_47.jpg"
    },
    {
      "embedding": [
        1.3344851732254028,
        5.7424445152282715
      ],
      "label": 4,
      "category": "carrot",
      "sprite_path": "static/dump/umap/static/train/beetroot/Image_19.jpg"
    },
    {
      "embedding": [
        8.747511863708496,
        2.9072623252868652
      ],
      "label": 4,
      "category": "carrot",
      "sprite_path": "static/dump/umap/static/train/beetroot/Image_29.jpg"
    },
    {
      "embedding": [
        11.231337547302246,
        2.1664700508117676
      ],
      "label": 4,
      "category": "carrot",
      "sprite_path": "static/dump/umap/static/train/beetroot/Image_61.jpg"
    },
    {
      "embedding": [
        11.511924743652344,
        1.675472378730774
      ],
      "label": 2,
      "category": "sweetpotato",
      "sprite_path": "static/dump/umap/static/train/beetroot/Image_53.jpg"
    },
    {
      "embedding": [
        0.9586291313171387,
        6.0423736572265625
      ],
      "label": 2,
      "category": "sweetpotato",
      "sprite_path": "static/dump/umap/static/train/beetroot/Image_64.jpg"
    },
    {
      "embedding": [
        12.800966262817383,
        0.5402759313583374
      ],
      "label": 2,
      "category": "sweetpotato",
      "sprite_path": "static/dump/umap/static/train/beetroot/Image_92.jpg"
    },
    {
      "embedding": [
        8.63208293914795,
        1.3056249618530273
      ],
      "label": 2,
      "category": "sweetpotato",
      "sprite_path": "static/dump/umap/static/train/beetroot/Image_27.jpg"
    },
    {
      "embedding": [
        8.612898826599121,
        2.540104627609253
      ],
      "label": 2,
      "category": "sweetpotato",
      "sprite_path": "static/dump/umap/static/train/beetroot/Image_55.jpg"
    },
    {
      "embedding": [
        4.506242275238037,
        3.7979896068573
      ],
      "label": 2,
      "category": "sweetpotato",
      "sprite_path": "static/dump/umap/static/train/beetroot/Image_44.jpg"
    },
    {
      "embedding": [
        9.75613021850586,
        -0.1276414394378662
      ],
      "label": 2,
      "category": "sweetpotato",
      "sprite_path": "static/dump/umap/static/train/beetroot/Image_72.jpg"
    },
    {
      "embedding": [
        9.178261756896973,
        1.1772794723510742
      ],
      "label": 2,
      "category": "sweetpotato",
      "sprite_path": "static/dump/umap/static/train/beetroot/Image_96.jpg"
    },
    {
      "embedding": [
        1.2584052085876465,
        5.882026672363281
      ],
      "label": 2,
      "category": "sweetpotato",
      "sprite_path": "static/dump/umap/static/train/beetroot/Image_52.jpg"
    },
    {
      "embedding": [
        9.871554374694824,
        0.3814903795719147
      ],
      "label": 2,
      "category": "sweetpotato",
      "sprite_path": "static/dump/umap/static/train/beetroot/Image_90.jpg"
    },
    {
      "embedding": [
        3.8883934020996094,
        4.458725929260254
      ],
      "label": 2,
      "category": "sweetpotato",
      "sprite_path": "static/dump/umap/static/train/beetroot/Image_83.jpg"
    },
    {
      "embedding": [
        8.541096687316895,
        1.9766799211502075
      ],
      "label": 2,
      "category": "sweetpotato",
      "sprite_path": "static/dump/umap/static/train/beetroot/Image_11.jpg"
    },
    {
      "embedding": [
        3.8172366619110107,
        4.378032207489014
      ],
      "label": 2,
      "category": "sweetpotato",
      "sprite_path": "static/dump/umap/static/train/beetroot/Image_50.jpg"
    },
    {
      "embedding": [
        9.883841514587402,
        0.38116875290870667
      ],
      "label": 2,
      "category": "sweetpotato",
      "sprite_path": "static/dump/umap/static/train/beetroot/Image_58.jpg"
    },
    {
      "embedding": [
        7.113215923309326,
        3.060206174850464
      ],
      "label": 2,
      "category": "sweetpotato",
      "sprite_path": "static/dump/umap/static/train/beetroot/Image_97.jpg"
    },
    {
      "embedding": [
        3.2138731479644775,
        4.35554313659668
      ],
      "label": 2,
      "category": "sweetpotato",
      "sprite_path": "static/dump/umap/static/train/beetroot/Image_62.jpg"
    },
    {
      "embedding": [
        10.460193634033203,
        0.28068870306015015
      ],
      "label": 2,
      "category": "sweetpotato",
      "sprite_path": "static/dump/umap/static/train/beetroot/Image_30.jpg"
    },
    {
      "embedding": [
        10.774662017822266,
        0.21594399213790894
      ],
      "label": 2,
      "category": "sweetpotato",
      "sprite_path": "static/dump/umap/static/train/beetroot/Image_5.jpg"
    },
    {
      "embedding": [
        4.38007926940918,
        4.261523246765137
      ],
      "label": 2,
      "category": "sweetpotato",
      "sprite_path": "static/dump/umap/static/train/beetroot/Image_100.jpg"
    },
    {
      "embedding": [
        11.547069549560547,
        0.22080689668655396
      ],
      "label": 2,
      "category": "sweetpotato",
      "sprite_path": "static/dump/umap/static/train/beetroot/Image_15.jpg"
    },
    {
      "embedding": [
        6.373428821563721,
        3.1850571632385254
      ],
      "label": 2,
      "category": "sweetpotato",
      "sprite_path": "static/dump/umap/static/train/beetroot/Image_35.jpg"
    },
    {
      "embedding": [
        12.791421890258789,
        0.5461863875389099
      ],
      "label": 2,
      "category": "sweetpotato",
      "sprite_path": "static/dump/umap/static/train/beetroot/Image_14.jpg"
    },
    {
      "embedding": [
        6.803764343261719,
        3.2456071376800537
      ],
      "label": 2,
      "category": "sweetpotato",
      "sprite_path": "static/dump/umap/static/train/beetroot/Image_39.jpg"
    },
    {
      "embedding": [
        5.274862289428711,
        4.10655403137207
      ],
      "label": 2,
      "category": "sweetpotato",
      "sprite_path": "static/dump/umap/static/train/beetroot/Image_76.jpg"
    },
    {
      "embedding": [
        7.232189178466797,
        3.17343807220459
      ],
      "label": 2,
      "category": "sweetpotato",
      "sprite_path": "static/dump/umap/static/train/beetroot/Image_63.jpg"
    },
    {
      "embedding": [
        9.801223754882812,
        0.42789721488952637
      ],
      "label": 2,
      "category": "sweetpotato",
      "sprite_path": "static/dump/umap/static/train/beetroot/Image_75.jpg"
    },
    {
      "embedding": [
        1.177099585533142,
        5.942272663116455
      ],
      "label": 2,
      "category": "sweetpotato",
      "sprite_path": "static/dump/umap/static/train/beetroot/Image_24.jpg"
    },
    {
      "embedding": [
        12.913742065429688,
        0.7554655075073242
      ],
      "label": 2,
      "category": "sweetpotato",
      "sprite_path": "static/dump/umap/static/train/beetroot/Image_99.jpg"
    },
    {
      "embedding": [
        2.7136361598968506,
        4.138463497161865
      ],
      "label": 2,
      "category": "sweetpotato",
      "sprite_path": "static/dump/umap/static/train/beetroot/Image_32.jpg"
    },
    {
      "embedding": [
        6.40972375869751,
        3.2691826820373535
      ],
      "label": 2,
      "category": "sweetpotato",
      "sprite_path": "static/dump/umap/static/train/beetroot/Image_37.jpg"
    },
    {
      "embedding": [
        8.707512855529785,
        1.1172322034835815
      ],
      "label": 2,
      "category": "sweetpotato",
      "sprite_path": "static/dump/umap/static/train/beetroot/Image_51.jpg"
    },
    {
      "embedding": [
        2.666135787963867,
        4.260645866394043
      ],
      "label": 2,
      "category": "sweetpotato",
      "sprite_path": "static/dump/umap/static/train/beetroot/Image_28.jpg"
    },
    {
      "embedding": [
        2.4966342449188232,
        4.0249176025390625
      ],
      "label": 2,
      "category": "sweetpotato",
      "sprite_path": "static/dump/umap/static/train/beetroot/Image_93.jpg"
    },
    {
      "embedding": [
        6.89988899230957,
        2.6907289028167725
      ],
      "label": 2,
      "category": "sweetpotato",
      "sprite_path": "static/dump/umap/static/train/beetroot/Image_36.jpg"
    },
    {
      "embedding": [
        7.817833423614502,
        2.0217297077178955
      ],
      "label": 2,
      "category": "sweetpotato",
      "sprite_path": "static/dump/umap/static/train/beetroot/Image_84.png"
    },
    {
      "embedding": [
        11.670344352722168,
        1.207045316696167
      ],
      "label": 2,
      "category": "sweetpotato",
      "sprite_path": "static/dump/umap/static/train/beetroot/Image_42.jpg"
    },
    {
      "embedding": [
        6.5898756980896,
        3.463376522064209
      ],
      "label": 2,
      "category": "sweetpotato",
      "sprite_path": "static/dump/umap/static/train/beetroot/Image_31.jpg"
    },
    {
      "embedding": [
        9.683032035827637,
        -0.026046179234981537
      ],
      "label": 2,
      "category": "sweetpotato",
      "sprite_path": "static/dump/umap/static/train/beetroot/Image_2.jpg"
    },
    {
      "embedding": [
        9.840173721313477,
        0.4418233633041382
      ],
      "label": 2,
      "category": "sweetpotato",
      "sprite_path": "static/dump/umap/static/train/beetroot/Image_3.jpg"
    },
    {
      "embedding": [
        4.333408832550049,
        3.587799310684204
      ],
      "label": 2,
      "category": "sweetpotato",
      "sprite_path": "static/dump/umap/static/train/beetroot/Image_26.jpg"
    },
    {
      "embedding": [
        10.39013957977295,
        0.2421286553144455
      ],
      "label": 2,
      "category": "sweetpotato",
      "sprite_path": "static/dump/umap/static/train/beetroot/Image_66.jpg"
    },
    {
      "embedding": [
        12.27011775970459,
        0.5990680456161499
      ],
      "label": 2,
      "category": "sweetpotato",
      "sprite_path": "static/dump/umap/static/train/beetroot/Image_87.jpg"
    },
    {
      "embedding": [
        3.840703248977661,
        4.310616493225098
      ],
      "label": 2,
      "category": "sweetpotato",
      "sprite_path": "static/dump/umap/static/train/beetroot/Image_43.jpg"
    },
    {
      "embedding": [
        7.034827709197998,
        3.076387405395508
      ],
      "label": 2,
      "category": "sweetpotato",
      "sprite_path": "static/dump/umap/static/train/beetroot/Image_18.jpg"
    },
    {
      "embedding": [
        6.985428333282471,
        3.5062882900238037
      ],
      "label": 2,
      "category": "sweetpotato",
      "sprite_path": "static/dump/umap/static/train/mango/Image_1.jpg"
    },
    {
      "embedding": [
        12.11804485321045,
        0.3640943765640259
      ],
      "label": 2,
      "category": "sweetpotato",
      "sprite_path": "static/dump/umap/static/train/mango/Image_16.jpg"
    },
    {
      "embedding": [
        8.727010726928711,
        1.8129384517669678
      ],
      "label": 2,
      "category": "sweetpotato",
      "sprite_path": "static/dump/umap/static/train/mango/Image_12.jpg"
    },
    {
      "embedding": [
        7.658414363861084,
        2.9343807697296143
      ],
      "label": 2,
      "category": "sweetpotato",
      "sprite_path": "static/dump/umap/static/train/mango/Image_33.jpg"
    },
    {
      "embedding": [
        7.404401779174805,
        3.5143465995788574
      ],
      "label": 2,
      "category": "sweetpotato",
      "sprite_path": "static/dump/umap/static/train/mango/Image_45.jpg"
    },
    {
      "embedding": [
        10.504144668579102,
        0.4974265992641449
      ],
      "label": 2,
      "category": "sweetpotato",
      "sprite_path": "static/dump/umap/static/train/mango/Image_94.jpg"
    },
    {
      "embedding": [
        7.435834884643555,
        2.9025938510894775
      ],
      "label": 2,
      "category": "sweetpotato",
      "sprite_path": "static/dump/umap/static/train/mango/Image_90.png"
    },
    {
      "embedding": [
        6.5518364906311035,
        3.5212528705596924
      ],
      "label": 2,
      "category": "sweetpotato",
      "sprite_path": "static/dump/umap/static/train/mango/Image_10.jpg"
    },
    {
      "embedding": [
        7.151488780975342,
        3.2190747261047363
      ],
      "label": 2,
      "category": "sweetpotato",
      "sprite_path": "static/dump/umap/static/train/mango/Image_21.jpg"
    },
    {
      "embedding": [
        4.414490699768066,
        4.769124507904053
      ],
      "label": 2,
      "category": "sweetpotato",
      "sprite_path": "static/dump/umap/static/train/mango/Image_59.jpg"
    },
    {
      "embedding": [
        9.594381332397461,
        2.5704801082611084
      ],
      "label": 2,
      "category": "sweetpotato",
      "sprite_path": "static/dump/umap/static/train/mango/Image_4.jpg"
    },
    {
      "embedding": [
        1.7052074670791626,
        4.485754013061523
      ],
      "label": 2,
      "category": "sweetpotato",
      "sprite_path": "static/dump/umap/static/train/mango/Image_38.jpg"
    },
    {
      "embedding": [
        12.620097160339355,
        0.5111076235771179
      ],
      "label": 2,
      "category": "sweetpotato",
      "sprite_path": "static/dump/umap/static/train/mango/Image_41.jpg"
    },
    {
      "embedding": [
        8.759819030761719,
        0.8133015036582947
      ],
      "label": 2,
      "category": "sweetpotato",
      "sprite_path": "static/dump/umap/static/train/mango/Image_7.jpg"
    },
    {
      "embedding": [
        10.49536418914795,
        0.3189072608947754
      ],
      "label": 2,
      "category": "sweetpotato",
      "sprite_path": "static/dump/umap/static/train/mango/Image_69.jpg"
    },
    {
      "embedding": [
        3.449293375015259,
        4.257930755615234
      ],
      "label": 2,
      "category": "sweetpotato",
      "sprite_path": "static/dump/umap/static/train/mango/Image_48.jpg"
    },
    {
      "embedding": [
        10.617632865905762,
        2.3052613735198975
      ],
      "label": 2,
      "category": "sweetpotato",
      "sprite_path": "static/dump/umap/static/train/mango/Image_79.png"
    },
    {
      "embedding": [
        6.81168270111084,
        3.241295099258423
      ],
      "label": 2,
      "category": "sweetpotato",
      "sprite_path": "static/dump/umap/static/train/mango/Image_13.jpg"
    },
    {
      "embedding": [
        8.508197784423828,
        1.9760304689407349
      ],
      "label": 2,
      "category": "sweetpotato",
      "sprite_path": "static/dump/umap/static/train/mango/Image_49.jpg"
    },
    {
      "embedding": [
        10.124411582946777,
        2.7125256061553955
      ],
      "label": 2,
      "category": "sweetpotato",
      "sprite_path": "static/dump/umap/static/train/mango/Image_91.jpg"
    },
    {
      "embedding": [
        5.099907398223877,
        3.176729917526245
      ],
      "label": 2,
      "category": "sweetpotato",
      "sprite_path": "static/dump/umap/static/train/mango/Image_95.jpg"
    },
    {
      "embedding": [
        5.393902778625488,
        3.418124198913574
      ],
      "label": 2,
      "category": "sweetpotato",
      "sprite_path": "static/dump/umap/static/train/mango/Image_86.jpg"
    },
    {
      "embedding": [
        10.486509323120117,
        0.3125050365924835
      ],
      "label": 2,
      "category": "sweetpotato",
      "sprite_path": "static/dump/umap/static/train/mango/Image_68.jpg"
    },
    {
      "embedding": [
        12.746416091918945,
        2.045438289642334
      ],
      "label": 2,
      "category": "sweetpotato",
      "sprite_path": "static/dump/umap/static/train/mango/Image_8.jpg"
    },
    {
      "embedding": [
        6.426977634429932,
        3.713772773742676
      ],
      "label": 2,
      "category": "sweetpotato",
      "sprite_path": "static/dump/umap/static/train/mango/Image_22.jpg"
    },
    {
      "embedding": [
        1.0353927612304688,
        5.995055675506592
      ],
      "label": 2,
      "category": "sweetpotato",
      "sprite_path": "static/dump/umap/static/train/mango/Image_77.jpg"
    },
    {
      "embedding": [
        10.835564613342285,
        0.5116716623306274
      ],
      "label": 2,
      "category": "sweetpotato",
      "sprite_path": "static/dump/umap/static/train/mango/Image_25.jpg"
    },
    {
      "embedding": [
        6.863834857940674,
        2.7142786979675293
      ],
      "label": 2,
      "category": "sweetpotato",
      "sprite_path": "static/dump/umap/static/train/mango/Image_46.jpg"
    },
    {
      "embedding": [
        10.566686630249023,
        0.5201377868652344
      ],
      "label": 2,
      "category": "sweetpotato",
      "sprite_path": "static/dump/umap/static/train/mango/Image_9.jpg"
    },
    {
      "embedding": [
        7.293181419372559,
        2.7331912517547607
      ],
      "label": 2,
      "category": "sweetpotato",
      "sprite_path": "static/dump/umap/static/train/mango/Image_71.jpg"
    },
    {
      "embedding": [
        12.83907413482666,
        0.6467973589897156
      ],
      "label": 2,
      "category": "sweetpotato",
      "sprite_path": "static/dump/umap/static/train/mango/Image_34.jpg"
    },
    {
      "embedding": [
        9.681106567382812,
        1.8263767957687378
      ],
      "label": 2,
      "category": "sweetpotato",
      "sprite_path": "static/dump/umap/static/train/mango/Image_81.jpg"
    },
    {
      "embedding": [
        9.360868453979492,
        2.1934640407562256
      ],
      "label": 2,
      "category": "sweetpotato",
      "sprite_path": "static/dump/umap/static/train/mango/Image_23.png"
    },
    {
      "embedding": [
        1.1361299753189087,
        4.34246826171875
      ],
      "label": 2,
      "category": "sweetpotato",
      "sprite_path": "static/dump/umap/static/train/mango/Image_51.png"
    },
    {
      "embedding": [
        2.717010498046875,
        4.144720077514648
      ],
      "label": 2,
      "category": "sweetpotato",
      "sprite_path": "static/dump/umap/static/train/mango/Image_6.jpg"
    },
    {
      "embedding": [
        8.399221420288086,
        2.539520025253296
      ],
      "label": 2,
      "category": "sweetpotato",
      "sprite_path": "static/dump/umap/static/train/mango/Image_20.jpg"
    },
    {
      "embedding": [
        4.285923957824707,
        4.7324724197387695
      ],
      "label": 2,
      "category": "sweetpotato",
      "sprite_path": "static/dump/umap/static/train/mango/Image_98.jpg"
    },
    {
      "embedding": [
        12.04490852355957,
        0.34837567806243896
      ],
      "label": 2,
      "category": "sweetpotato",
      "sprite_path": "static/dump/umap/static/train/mango/Image_47.jpg"
    },
    {
      "embedding": [
        9.295896530151367,
        2.247964382171631
      ],
      "label": 2,
      "category": "sweetpotato",
      "sprite_path": "static/dump/umap/static/train/mango/Image_19.jpg"
    },
    {
      "embedding": [
        6.521801471710205,
        3.2676713466644287
      ],
      "label": 2,
      "category": "sweetpotato",
      "sprite_path": "static/dump/umap/static/train/mango/Image_88.jpg"
    },
    {
      "embedding": [
        12.662627220153809,
        0.5917341113090515
      ],
      "label": 2,
      "category": "sweetpotato",
      "sprite_path": "static/dump/umap/static/train/mango/Image_61.jpg"
    },
    {
      "embedding": [
        4.484364032745361,
        3.8514881134033203
      ],
      "label": 2,
      "category": "sweetpotato",
      "sprite_path": "static/dump/umap/static/train/mango/Image_85.jpg"
    },
    {
      "embedding": [
        10.140198707580566,
        0.11339272558689117
      ],
      "label": 2,
      "category": "sweetpotato",
      "sprite_path": "static/dump/umap/static/train/mango/Image_56.png"
    },
    {
      "embedding": [
        1.2733259201049805,
        5.356979846954346
      ],
      "label": 2,
      "category": "sweetpotato",
      "sprite_path": "static/dump/umap/static/train/mango/Image_53.jpg"
    },
    {
      "embedding": [
        12.899518966674805,
        1.7689980268478394
      ],
      "label": 19,
      "category": "potato",
      "sprite_path": "static/dump/umap/static/train/mango/Image_64.jpg"
    },
    {
      "embedding": [
        12.077722549438477,
        1.2780416011810303
      ],
      "label": 19,
      "category": "potato",
      "sprite_path": "static/dump/umap/static/train/mango/Image_92.jpg"
    },
    {
      "embedding": [
        7.70309591293335,
        0.6870498657226562
      ],
      "label": 19,
      "category": "potato",
      "sprite_path": "static/dump/umap/static/train/mango/Image_27.jpg"
    },
    {
      "embedding": [
        10.825008392333984,
        1.2212319374084473
      ],
      "label": 19,
      "category": "potato",
      "sprite_path": "static/dump/umap/static/train/mango/Image_44.jpg"
    },
    {
      "embedding": [
        7.227118015289307,
        1.455783724784851
      ],
      "label": 19,
      "category": "potato",
      "sprite_path": "static/dump/umap/static/train/mango/Image_73.jpg"
    },
    {
      "embedding": [
        11.931089401245117,
        0.637353777885437
      ],
      "label": 19,
      "category": "potato",
      "sprite_path": "static/dump/umap/static/train/mango/Image_96.jpg"
    },
    {
      "embedding": [
        7.02062463760376,
        2.483259439468384
      ],
      "label": 19,
      "category": "potato",
      "sprite_path": "static/dump/umap/static/train/mango/Image_52.jpg"
    },
    {
      "embedding": [
        12.320321083068848,
        1.5004258155822754
      ],
      "label": 19,
      "category": "potato",
      "sprite_path": "static/dump/umap/static/train/mango/Image_83.jpg"
    },
    {
      "embedding": [
        2.396956443786621,
        4.664270877838135
      ],
      "label": 19,
      "category": "potato",
      "sprite_path": "static/dump/umap/static/train/mango/Image_67.jpg"
    },
    {
      "embedding": [
        9.481413841247559,
        1.2886260747909546
      ],
      "label": 19,
      "category": "potato",
      "sprite_path": "static/dump/umap/static/train/mango/Image_50.jpg"
    },
    {
      "embedding": [
        2.826509714126587,
        5.685049533843994
      ],
      "label": 19,
      "category": "potato",
      "sprite_path": "static/dump/umap/static/train/mango/Image_97.jpg"
    },
    {
      "embedding": [
        6.977014541625977,
        2.4421253204345703
      ],
      "label": 19,
      "category": "potato",
      "sprite_path": "static/dump/umap/static/train/mango/Image_29.png"
    },
    {
      "embedding": [
        12.322505950927734,
        1.4226692914962769
      ],
      "label": 19,
      "category": "potato",
      "sprite_path": "static/dump/umap/static/train/mango/Image_62.jpg"
    },
    {
      "embedding": [
        1.5731350183486938,
        4.058300971984863
      ],
      "label": 19,
      "category": "potato",
      "sprite_path": "static/dump/umap/static/train/mango/Image_30.jpg"
    },
    {
      "embedding": [
        1.4367367029190063,
        4.575606822967529
      ],
      "label": 19,
      "category": "potato",
      "sprite_path": "static/dump/umap/static/train/mango/Image_5.jpg"
    },
    {
      "embedding": [
        6.707784652709961,
        2.3951871395111084
      ],
      "label": 19,
      "category": "potato",
      "sprite_path": "static/dump/umap/static/train/mango/Image_100.jpg"
    },
    {
      "embedding": [
        9.869673728942871,
        0.9451203942298889
      ],
      "label": 19,
      "category": "potato",
      "sprite_path": "static/dump/umap/static/train/mango/Image_15.jpg"
    },
    {
      "embedding": [
        12.941341400146484,
        2.4183032512664795
      ],
      "label": 19,
      "category": "potato",
      "sprite_path": "static/dump/umap/static/train/mango/Image_35.jpg"
    },
    {
      "embedding": [
        7.439096450805664,
        0.4052000939846039
      ],
      "label": 19,
      "category": "potato",
      "sprite_path": "static/dump/umap/static/train/mango/Image_14.jpg"
    },
    {
      "embedding": [
        3.059216260910034,
        5.466329574584961
      ],
      "label": 19,
      "category": "potato",
      "sprite_path": "static/dump/umap/static/train/mango/Image_39.jpg"
    },
    {
      "embedding": [
        12.047582626342773,
        1.1910393238067627
      ],
      "label": 19,
      "category": "potato",
      "sprite_path": "static/dump/umap/static/train/mango/Image_63.jpg"
    },
    {
      "embedding": [
        7.821748733520508,
        0.874531090259552
      ],
      "label": 19,
      "category": "potato",
      "sprite_path": "static/dump/umap/static/train/mango/Image_75.jpg"
    },
    {
      "embedding": [
        9.646798133850098,
        1.733953833580017
      ],
      "label": 19,
      "category": "potato",
      "sprite_path": "static/dump/umap/static/train/mango/Image_24.jpg"
    },
    {
      "embedding": [
        12.426576614379883,
        1.902424693107605
      ],
      "label": 19,
      "category": "potato",
      "sprite_path": "static/dump/umap/static/train/mango/Image_99.jpg"
    },
    {
      "embedding": [
        2.901212453842163,
        5.469034194946289
      ],
      "label": 19,
      "category": "potato",
      "sprite_path": "static/dump/umap/static/train/mango/Image_32.jpg"
    },
    {
      "embedding": [
        9.465694427490234,
        2.5325725078582764
      ],
      "label": 19,
      "category": "potato",
      "sprite_path": "static/dump/umap/static/train/mango/Image_37.jpg"
    },
    {
      "embedding": [
        6.943856239318848,
        2.19650936126709
      ],
      "label": 19,
      "category": "potato",
      "sprite_path": "static/dump/umap/static/train/mango/Image_28.jpg"
    },
    {
      "embedding": [
        10.005874633789062,
        0.9389070868492126
      ],
      "label": 19,
      "category": "potato",
      "sprite_path": "static/dump/umap/static/train/mango/Image_54.jpg"
    },
    {
      "embedding": [
        11.556421279907227,
        1.0770045518875122
      ],
      "label": 19,
      "category": "potato",
      "sprite_path": "static/dump/umap/static/train/mango/Image_93.jpg"
    },
    {
      "embedding": [
        2.5678861141204834,
        5.808779716491699
      ],
      "label": 19,
      "category": "potato",
      "sprite_path": "static/dump/umap/static/train/mango/Image_36.jpg"
    },
    {
      "embedding": [
        6.682048320770264,
        0.8334571719169617
      ],
      "label": 19,
      "category": "potato",
      "sprite_path": "static/dump/umap/static/train/mango/Image_42.jpg"
    },
    {
      "embedding": [
        3.288578987121582,
        5.366867542266846
      ],
      "label": 19,
      "category": "potato",
      "sprite_path": "static/dump/umap/static/train/mango/Image_31.jpg"
    },
    {
      "embedding": [
        7.838906764984131,
        0.4715973734855652
      ],
      "label": 19,
      "category": "potato",
      "sprite_path": "static/dump/umap/static/train/mango/Image_2.jpg"
    },
    {
      "embedding": [
        13.264971733093262,
        1.9443296194076538
      ],
      "label": 19,
      "category": "potato",
      "sprite_path": "static/dump/umap/static/train/mango/Image_3.jpg"
    },
    {
      "embedding": [
        8.350393295288086,
        0.42340409755706787
      ],
      "label": 19,
      "category": "potato",
      "sprite_path": "static/dump/umap/static/train/mango/Image_26.jpg"
    },
    {
      "embedding": [
        5.2421088218688965,
        3.217282772064209
      ],
      "label": 19,
      "category": "potato",
      "sprite_path": "static/dump/umap/static/train/mango/Image_66.jpg"
    },
    {
      "embedding": [
        6.612834453582764,
        2.851551055908203
      ],
      "label": 19,
      "category": "potato",
      "sprite_path": "static/dump/umap/static/train/mango/Image_87.jpg"
    },
    {
      "embedding": [
        2.9027090072631836,
        5.517714023590088
      ],
      "label": 19,
      "category": "potato",
      "sprite_path": "static/dump/umap/static/train/mango/Image_11.png"
    },
    {
      "embedding": [
        11.26693058013916,
        1.2208470106124878
      ],
      "label": 19,
      "category": "potato",
      "sprite_path": "static/dump/umap/static/train/mango/Image_43.jpg"
    },
    {
      "embedding": [
        11.998869895935059,
        2.3705129623413086
      ],
      "label": 19,
      "category": "potato",
      "sprite_path": "static/dump/umap/static/train/mango/Image_18.jpg"
    },
    {
      "embedding": [
        8.3715238571167,
        0.5122379660606384
      ],
      "label": 19,
      "category": "potato",
      "sprite_path": "static/dump/umap/static/train/garlic/Image_65.jpg"
    },
    {
      "embedding": [
        2.894296407699585,
        4.337095260620117
      ],
      "label": 19,
      "category": "potato",
      "sprite_path": "static/dump/umap/static/train/garlic/Image_1.jpg"
    },
    {
      "embedding": [
        11.391883850097656,
        1.5478975772857666
      ],
      "label": 19,
      "category": "potato",
      "sprite_path": "static/dump/umap/static/train/garlic/Image_16.jpg"
    },
    {
      "embedding": [
        13.330992698669434,
        2.104882001876831
      ],
      "label": 19,
      "category": "potato",
      "sprite_path": "static/dump/umap/static/train/garlic/Image_57.jpg"
    },
    {
      "embedding": [
        11.746192932128906,
        1.3536491394042969
      ],
      "label": 19,
      "category": "potato",
      "sprite_path": "static/dump/umap/static/train/garlic/Image_12.jpg"
    },
    {
      "embedding": [
        6.6827545166015625,
        1.9328721761703491
      ],
      "label": 19,
      "category": "potato",
      "sprite_path": "static/dump/umap/static/train/garlic/Image_33.jpg"
    },
    {
      "embedding": [
        8.15442180633545,
        0.9686997532844543
      ],
      "label": 19,
      "category": "potato",
      "sprite_path": "static/dump/umap/static/train/garlic/Image_94.jpg"
    },
    {
      "embedding": [
        12.186735153198242,
        1.051727056503296
      ],
      "label": 19,
      "category": "potato",
      "sprite_path": "static/dump/umap/static/train/garlic/Image_40.jpg"
    },
    {
      "embedding": [
        12.127629280090332,
        0.48360225558280945
      ],
      "label": 19,
      "category": "potato",
      "sprite_path": "static/dump/umap/static/train/garlic/Image_10.jpg"
    },
    {
      "embedding": [
        9.740740776062012,
        1.3861514329910278
      ],
      "label": 19,
      "category": "potato",
      "sprite_path": "static/dump/umap/static/train/garlic/Image_21.jpg"
    },
    {
      "embedding": [
        5.284524917602539,
        3.191371202468872
      ],
      "label": 19,
      "category": "potato",
      "sprite_path": "static/dump/umap/static/train/garlic/Image_78.jpg"
    },
    {
      "embedding": [
        2.997619867324829,
        5.493098735809326
      ],
      "label": 19,
      "category": "potato",
      "sprite_path": "static/dump/umap/static/train/garlic/Image_4.jpg"
    },
    {
      "embedding": [
        11.597476959228516,
        0.6871575117111206
      ],
      "label": 19,
      "category": "potato",
      "sprite_path": "static/dump/umap/static/train/garlic/Image_38.jpg"
    },
    {
      "embedding": [
        11.376255989074707,
        1.7446086406707764
      ],
      "label": 19,
      "category": "potato",
      "sprite_path": "static/dump/umap/static/train/garlic/Image_41.jpg"
    },
    {
      "embedding": [
        12.650553703308105,
        1.6135656833648682
      ],
      "label": 19,
      "category": "potato",
      "sprite_path": "static/dump/umap/static/train/garlic/Image_7.jpg"
    },
    {
      "embedding": [
        1.4386193752288818,
        4.556429862976074
      ],
      "label": 19,
      "category": "potato",
      "sprite_path": "static/dump/umap/static/train/garlic/Image_69.jpg"
    },
    {
      "embedding": [
        3.430157423019409,
        5.440306663513184
      ],
      "label": 19,
      "category": "potato",
      "sprite_path": "static/dump/umap/static/train/garlic/Image_48.jpg"
    },
    {
      "embedding": [
        9.610841751098633,
        2.8973183631896973
      ],
      "label": 19,
      "category": "potato",
      "sprite_path": "static/dump/umap/static/train/garlic/Image_60.jpg"
    },
    {
      "embedding": [
        9.869019508361816,
        2.843397855758667
      ],
      "label": 19,
      "category": "potato",
      "sprite_path": "static/dump/umap/static/train/garlic/Image_35.png"
    },
    {
      "embedding": [
        7.804206371307373,
        0.7988450527191162
      ],
      "label": 19,
      "category": "potato",
      "sprite_path": "static/dump/umap/static/train/garlic/Image_13.jpg"
    },
    {
      "embedding": [
        2.4678235054016113,
        4.670841693878174
      ],
      "label": 19,
      "category": "potato",
      "sprite_path": "static/dump/umap/static/train/garlic/Image_56.jpeg"
    },
    {
      "embedding": [
        4.895743370056152,
        4.248662948608398
      ],
      "label": 19,
      "category": "potato",
      "sprite_path": "static/dump/umap/static/train/garlic/Image_49.jpg"
    },
    {
      "embedding": [
        6.847168922424316,
        0.8175662159919739
      ],
      "label": 19,
      "category": "potato",
      "sprite_path": "static/dump/umap/static/train/garlic/Image_91.jpg"
    },
    {
      "embedding": [
        2.8664872646331787,
        5.6614789962768555
      ],
      "label": 19,
      "category": "potato",
      "sprite_path": "static/dump/umap/static/train/garlic/Image_95.jpg"
    },
    {
      "embedding": [
        2.011014461517334,
        5.76735258102417
      ],
      "label": 19,
      "category": "potato",
      "sprite_path": "static/dump/umap/static/train/garlic/Image_86.jpg"
    },
    {
      "embedding": [
        8.191160202026367,
        0.8349530696868896
      ],
      "label": 19,
      "category": "potato",
      "sprite_path": "static/dump/umap/static/train/garlic/Image_68.jpg"
    },
    {
      "embedding": [
        9.67109203338623,
        1.0618764162063599
      ],
      "label": 19,
      "category": "potato",
      "sprite_path": "static/dump/umap/static/train/garlic/Image_23.jpg"
    },
    {
      "embedding": [
        9.911465644836426,
        2.7955734729766846
      ],
      "label": 19,
      "category": "potato",
      "sprite_path": "static/dump/umap/static/train/garlic/Image_8.jpg"
    },
    {
      "embedding": [
        8.846869468688965,
        0.9833947420120239
      ],
      "label": 19,
      "category": "potato",
      "sprite_path": "static/dump/umap/static/train/garlic/Image_22.jpg"
    },
    {
      "embedding": [
        2.518949270248413,
        5.7697319984436035
      ],
      "label": 19,
      "category": "potato",
      "sprite_path": "static/dump/umap/static/train/garlic/Image_17.jpg"
    },
    {
      "embedding": [
        11.172186851501465,
        1.9546809196472168
      ],
      "label": 19,
      "category": "potato",
      "sprite_path": "static/dump/umap/static/train/garlic/Image_77.jpg"
    },
    {
      "embedding": [
        6.668720245361328,
        0.8835799098014832
      ],
      "label": 19,
      "category": "potato",
      "sprite_path": "static/dump/umap/static/train/garlic/Image_46.jpg"
    },
    {
      "embedding": [
        12.03779125213623,
        0.8488699793815613
      ],
      "label": 19,
      "category": "potato",
      "sprite_path": "static/dump/umap/static/train/garlic/Image_42.png"
    },
    {
      "embedding": [
        8.043660163879395,
        0.5702744126319885
      ],
      "label": 19,
      "category": "potato",
      "sprite_path": "static/dump/umap/static/train/garlic/Image_9.jpg"
    },
    {
      "embedding": [
        7.197173595428467,
        0.6477488875389099
      ],
      "label": 19,
      "category": "potato",
      "sprite_path": "static/dump/umap/static/train/garlic/Image_71.jpg"
    },
    {
      "embedding": [
        2.837125301361084,
        5.477375507354736
      ],
      "label": 19,
      "category": "potato",
      "sprite_path": "static/dump/umap/static/train/garlic/Image_34.jpg"
    },
    {
      "embedding": [
        6.616305828094482,
        1.052038311958313
      ],
      "label": 19,
      "category": "potato",
      "sprite_path": "static/dump/umap/static/train/garlic/Image_81.jpg"
    },
    {
      "embedding": [
        12.626834869384766,
        1.8207483291625977
      ],
      "label": 19,
      "category": "potato",
      "sprite_path": "static/dump/umap/static/train/garlic/Image_36.png"
    },
    {
      "embedding": [
        8.245945930480957,
        1.048516035079956
      ],
      "label": 19,
      "category": "potato",
      "sprite_path": "static/dump/umap/static/train/garlic/Image_6.jpg"
    },
    {
      "embedding": [
        7.204177379608154,
        0.6479679346084595
      ],
      "label": 19,
      "category": "potato",
      "sprite_path": "static/dump/umap/static/train/garlic/Image_20.jpg"
    },
    {
      "embedding": [
        5.882913112640381,
        2.812647819519043
      ],
      "label": 19,
      "category": "potato",
      "sprite_path": "static/dump/umap/static/train/garlic/Image_98.jpg"
    },
    {
      "embedding": [
        9.857998847961426,
        1.638044834136963
      ],
      "label": 19,
      "category": "potato",
      "sprite_path": "static/dump/umap/static/train/garlic/Image_59.png"
    },
    {
      "embedding": [
        7.011903762817383,
        1.5000672340393066
      ],
      "label": 19,
      "category": "potato",
      "sprite_path": "static/dump/umap/static/train/garlic/Image_19.jpg"
    },
    {
      "embedding": [
        2.7754266262054443,
        5.572082996368408
      ],
      "label": 19,
      "category": "potato",
      "sprite_path": "static/dump/umap/static/train/garlic/Image_88.jpg"
    },
    {
      "embedding": [
        6.758404731750488,
        1.803056001663208
      ],
      "label": 19,
      "category": "potato",
      "sprite_path": "static/dump/umap/static/train/garlic/Image_29.jpg"
    },
    {
      "embedding": [
        3.3585851192474365,
        4.700178623199463
      ],
      "label": 19,
      "category": "potato",
      "sprite_path": "static/dump/umap/static/train/garlic/Image_24.png"
    },
    {
      "embedding": [
        13.352248191833496,
        1.3594037294387817
      ],
      "label": 12,
      "category": "lemon",
      "sprite_path": "static/dump/umap/static/train/garlic/Image_61.jpg"
    },
    {
      "embedding": [
        12.007230758666992,
        2.439089059829712
      ],
      "label": 12,
      "category": "lemon",
      "sprite_path": "static/dump/umap/static/train/garlic/Image_84.jpg"
    },
    {
      "embedding": [
        10.254377365112305,
        2.7276628017425537
      ],
      "label": 12,
      "category": "lemon",
      "sprite_path": "static/dump/umap/static/train/garlic/Image_85.jpg"
    },
    {
      "embedding": [
        11.179259300231934,
        2.0232346057891846
      ],
      "label": 12,
      "category": "lemon",
      "sprite_path": "static/dump/umap/static/train/garlic/Image_74.jpg"
    },
    {
      "embedding": [
        5.079841613769531,
        3.2258119583129883
      ],
      "label": 12,
      "category": "lemon",
      "sprite_path": "static/dump/umap/static/train/garlic/Image_25.jpeg"
    },
    {
      "embedding": [
        11.482723236083984,
        1.9311493635177612
      ],
      "label": 12,
      "category": "lemon",
      "sprite_path": "static/dump/umap/static/train/garlic/Image_53.jpg"
    },
    {
      "embedding": [
        9.688329696655273,
        2.494314193725586
      ],
      "label": 12,
      "category": "lemon",
      "sprite_path": "static/dump/umap/static/train/garlic/Image_64.jpg"
    },
    {
      "embedding": [
        8.94769287109375,
        2.7495813369750977
      ],
      "label": 12,
      "category": "lemon",
      "sprite_path": "static/dump/umap/static/train/garlic/Image_27.jpg"
    },
    {
      "embedding": [
        2.7203338146209717,
        5.091773986816406
      ],
      "label": 12,
      "category": "lemon",
      "sprite_path": "static/dump/umap/static/train/garlic/Image_55.jpg"
    },
    {
      "embedding": [
        5.338176250457764,
        2.9918880462646484
      ],
      "label": 12,
      "category": "lemon",
      "sprite_path": "static/dump/umap/static/train/garlic/Image_44.jpg"
    },
    {
      "embedding": [
        11.870721817016602,
        1.2112168073654175
      ],
      "label": 12,
      "category": "lemon",
      "sprite_path": "static/dump/umap/static/train/garlic/Image_96.jpg"
    },
    {
      "embedding": [
        11.585661888122559,
        2.6051933765411377
      ],
      "label": 12,
      "category": "lemon",
      "sprite_path": "static/dump/umap/static/train/garlic/Image_52.jpg"
    },
    {
      "embedding": [
        4.670117378234863,
        3.946402072906494
      ],
      "label": 12,
      "category": "lemon",
      "sprite_path": "static/dump/umap/static/train/garlic/Image_90.jpg"
    },
    {
      "embedding": [
        0.8094149827957153,
        5.3297624588012695
      ],
      "label": 12,
      "category": "lemon",
      "sprite_path": "static/dump/umap/static/train/garlic/Image_83.jpg"
    },
    {
      "embedding": [
        7.271816253662109,
        2.7576193809509277
      ],
      "label": 12,
      "category": "lemon",
      "sprite_path": "static/dump/umap/static/train/garlic/Image_11.jpg"
    },
    {
      "embedding": [
        9.539863586425781,
        2.753138780593872
      ],
      "label": 12,
      "category": "lemon",
      "sprite_path": "static/dump/umap/static/train/garlic/Image_82.jpg"
    },
    {
      "embedding": [
        1.1438802480697632,
        5.563142776489258
      ],
      "label": 12,
      "category": "lemon",
      "sprite_path": "static/dump/umap/static/train/garlic/Image_67.jpg"
    },
    {
      "embedding": [
        1.2499715089797974,
        5.313296794891357
      ],
      "label": 12,
      "category": "lemon",
      "sprite_path": "static/dump/umap/static/train/garlic/Image_50.jpg"
    },
    {
      "embedding": [
        11.391458511352539,
        3.0526885986328125
      ],
      "label": 12,
      "category": "lemon",
      "sprite_path": "static/dump/umap/static/train/garlic/Image_58.jpg"
    },
    {
      "embedding": [
        12.742940902709961,
        1.965283989906311
      ],
      "label": 12,
      "category": "lemon",
      "sprite_path": "static/dump/umap/static/train/garlic/Image_97.jpg"
    },
    {
      "embedding": [
        12.281750679016113,
        2.131734609603882
      ],
      "label": 12,
      "category": "lemon",
      "sprite_path": "static/dump/umap/static/train/garlic/Image_62.jpg"
    },
    {
      "embedding": [
        8.794692039489746,
        1.945574164390564
      ],
      "label": 12,
      "category": "lemon",
      "sprite_path": "static/dump/umap/static/train/garlic/Image_30.jpg"
    },
    {
      "embedding": [
        11.90783405303955,
        1.3477917909622192
      ],
      "label": 12,
      "category": "lemon",
      "sprite_path": "static/dump/umap/static/train/garlic/Image_5.jpg"
    },
    {
      "embedding": [
        6.11540412902832,
        2.509018898010254
      ],
      "label": 12,
      "category": "lemon",
      "sprite_path": "static/dump/umap/static/train/garlic/Image_100.jpg"
    },
    {
      "embedding": [
        11.146904945373535,
        2.0349292755126953
      ],
      "label": 12,
      "category": "lemon",
      "sprite_path": "static/dump/umap/static/train/garlic/Image_15.jpg"
    },
    {
      "embedding": [
        1.094982624053955,
        5.282871723175049
      ],
      "label": 12,
      "category": "lemon",
      "sprite_path": "static/dump/umap/static/train/garlic/Image_14.jpg"
    },
    {
      "embedding": [
        0.9870193600654602,
        5.35116720199585
      ],
      "label": 12,
      "category": "lemon",
      "sprite_path": "static/dump/umap/static/train/garlic/Image_39.jpg"
    },
    {
      "embedding": [
        7.054256439208984,
        2.9087741374969482
      ],
      "label": 12,
      "category": "lemon",
      "sprite_path": "static/dump/umap/static/train/garlic/Image_45.png"
    },
    {
      "embedding": [
        5.35088586807251,
        2.9665896892547607
      ],
      "label": 12,
      "category": "lemon",
      "sprite_path": "static/dump/umap/static/train/garlic/Image_76.jpg"
    },
    {
      "embedding": [
        9.31936264038086,
        1.8691587448120117
      ],
      "label": 12,
      "category": "lemon",
      "sprite_path": "static/dump/umap/static/train/garlic/Image_63.jpg"
    },
    {
      "embedding": [
        11.647441864013672,
        1.2089085578918457
      ],
      "label": 12,
      "category": "lemon",
      "sprite_path": "static/dump/umap/static/train/garlic/Image_75.jpg"
    },
    {
      "embedding": [
        10.154869079589844,
        2.792600154876709
      ],
      "label": 12,
      "category": "lemon",
      "sprite_path": "static/dump/umap/static/train/garlic/Image_99.jpg"
    },
    {
      "embedding": [
        11.905165672302246,
        2.9385271072387695
      ],
      "label": 12,
      "category": "lemon",
      "sprite_path": "static/dump/umap/static/train/garlic/Image_32.jpg"
    },
    {
      "embedding": [
        4.8386077880859375,
        3.4088096618652344
      ],
      "label": 12,
      "category": "lemon",
      "sprite_path": "static/dump/umap/static/train/garlic/Image_37.jpg"
    },
    {
      "embedding": [
        8.957159996032715,
        2.843622922897339
      ],
      "label": 12,
      "category": "lemon",
      "sprite_path": "static/dump/umap/static/train/garlic/Image_51.jpg"
    },
    {
      "embedding": [
        10.181447982788086,
        1.8650189638137817
      ],
      "label": 12,
      "category": "lemon",
      "sprite_path": "static/dump/umap/static/train/garlic/Image_28.jpg"
    },
    {
      "embedding": [
        8.009804725646973,
        1.2305625677108765
      ],
      "label": 12,
      "category": "lemon",
      "sprite_path": "static/dump/umap/static/train/garlic/Image_54.jpg"
    },
    {
      "embedding": [
        11.96130657196045,
        2.494859218597412
      ],
      "label": 12,
      "category": "lemon",
      "sprite_path": "static/dump/umap/static/train/garlic/Image_93.jpg"
    },
    {
      "embedding": [
        6.508509159088135,
        2.4573380947113037
      ],
      "label": 12,
      "category": "lemon",
      "sprite_path": "static/dump/umap/static/train/garlic/Image_31.jpg"
    },
    {
      "embedding": [
        9.858519554138184,
        2.962097644805908
      ],
      "label": 12,
      "category": "lemon",
      "sprite_path": "static/dump/umap/static/train/garlic/Image_2.jpg"
    },
    {
      "embedding": [
        1.0925840139389038,
        5.30877685546875
      ],
      "label": 12,
      "category": "lemon",
      "sprite_path": "static/dump/umap/static/train/garlic/Image_3.jpg"
    },
    {
      "embedding": [
        1.1469818353652954,
        5.537024021148682
      ],
      "label": 12,
      "category": "lemon",
      "sprite_path": "static/dump/umap/static/train/garlic/Image_26.jpg"
    },
    {
      "embedding": [
        9.078248023986816,
        2.807206153869629
      ],
      "label": 12,
      "category": "lemon",
      "sprite_path": "static/dump/umap/static/train/garlic/Image_66.jpg"
    },
    {
      "embedding": [
        10.085179328918457,
        2.9295809268951416
      ],
      "label": 12,
      "category": "lemon",
      "sprite_path": "static/dump/umap/static/train/garlic/Image_43.jpg"
    },
    {
      "embedding": [
        5.833348274230957,
        2.658076286315918
      ],
      "label": 12,
      "category": "lemon",
      "sprite_path": "static/dump/umap/static/train/garlic/Image_18.jpg"
    },
    {
      "embedding": [
        13.184128761291504,
        2.3089985847473145
      ],
      "label": 12,
      "category": "lemon",
      "sprite_path": "static/dump/umap/static/train/apple/Image_81.png"
    },
    {
      "embedding": [
        6.127840042114258,
        2.648778200149536
      ],
      "label": 12,
      "category": "lemon",
      "sprite_path": "static/dump/umap/static/train/apple/Image_1.jpg"
    },
    {
      "embedding": [
        9.93911075592041,
        2.9578423500061035
      ],
      "label": 12,
      "category": "lemon",
      "sprite_path": "static/dump/umap/static/train/apple/Image_71.png"
    },
    {
      "embedding": [
        11.96885871887207,
        0.8451949954032898
      ],
      "label": 12,
      "category": "lemon",
      "sprite_path": "static/dump/umap/static/train/apple/Image_16.jpg"
    },
    {
      "embedding": [
        9.131853103637695,
        2.7199831008911133
      ],
      "label": 12,
      "category": "lemon",
      "sprite_path": "static/dump/umap/static/train/apple/Image_57.jpg"
    },
    {
      "embedding": [
        5.219848155975342,
        2.929389238357544
      ],
      "label": 12,
      "category": "lemon",
      "sprite_path": "static/dump/umap/static/train/apple/Image_56.jpg"
    },
    {
      "embedding": [
        11.888907432556152,
        2.25643253326416
      ],
      "label": 12,
      "category": "lemon",
      "sprite_path": "static/dump/umap/static/train/apple/Image_33.jpg"
    },
    {
      "embedding": [
        12.519747734069824,
        1.9739580154418945
      ],
      "label": 12,
      "category": "lemon",
      "sprite_path": "static/dump/umap/static/train/apple/Image_45.jpg"
    },
    {
      "embedding": [
        2.052182912826538,
        5.113596439361572
      ],
      "label": 12,
      "category": "lemon",
      "sprite_path": "static/dump/umap/static/train/apple/Image_40.jpg"
    },
    {
      "embedding": [
        5.331088066101074,
        2.9413304328918457
      ],
      "label": 12,
      "category": "lemon",
      "sprite_path": "static/dump/umap/static/train/apple/Image_10.jpg"
    },
    {
      "embedding": [
        6.605151176452637,
        2.5735645294189453
      ],
      "label": 12,
      "category": "lemon",
      "sprite_path": "static/dump/umap/static/train/apple/Image_21.jpg"
    },
    {
      "embedding": [
        10.333070755004883,
        2.437976837158203
      ],
      "label": 12,
      "category": "lemon",
      "sprite_path": "static/dump/umap/static/train/apple/Image_78.jpg"
    },
    {
      "embedding": [
        12.025678634643555,
        2.4106481075286865
      ],
      "label": 12,
      "category": "lemon",
      "sprite_path": "static/dump/umap/static/train/apple/Image_38.jpg"
    },
    {
      "embedding": [
        11.446584701538086,
        2.6681556701660156
      ],
      "label": 12,
      "category": "lemon",
      "sprite_path": "static/dump/umap/static/train/apple/Image_41.jpg"
    },
    {
      "embedding": [
        11.9661226272583,
        1.0632895231246948
      ],
      "label": 12,
      "category": "lemon",
      "sprite_path": "static/dump/umap/static/train/apple/Image_7.jpg"
    },
    {
      "embedding": [
        8.951187133789062,
        2.937703847885132
      ],
      "label": 12,
      "category": "lemon",
      "sprite_path": "static/dump/umap/static/train/apple/Image_69.jpg"
    },
    {
      "embedding": [
        0.8809996247291565,
        5.346617698669434
      ],
      "label": 12,
      "category": "lemon",
      "sprite_path": "static/dump/umap/static/train/apple/Image_48.jpg"
    },
    {
      "embedding": [
        9.63524341583252,
        2.2329938411712646
      ],
      "label": 12,
      "category": "lemon",
      "sprite_path": "static/dump/umap/static/train/apple/Image_60.jpg"
    },
    {
      "embedding": [
        1.4301762580871582,
        5.618155002593994
      ],
      "label": 12,
      "category": "lemon",
      "sprite_path": "static/dump/umap/static/train/apple/Image_35.png"
    },
    {
      "embedding": [
        7.793729782104492,
        3.3086471557617188
      ],
      "label": 12,
      "category": "lemon",
      "sprite_path": "static/dump/umap/static/train/apple/Image_49.jpg"
    },
    {
      "embedding": [
        9.241743087768555,
        2.8073387145996094
      ],
      "label": 12,
      "category": "lemon",
      "sprite_path": "static/dump/umap/static/train/apple/Image_86.jpg"
    },
    {
      "embedding": [
        0.9206733703613281,
        5.4579901695251465
      ],
      "label": 12,
      "category": "lemon",
      "sprite_path": "static/dump/umap/static/train/apple/Image_68.jpg"
    },
    {
      "embedding": [
        1.0294889211654663,
        5.477773666381836
      ],
      "label": 12,
      "category": "lemon",
      "sprite_path": "static/dump/umap/static/train/apple/Image_23.jpg"
    },
    {
      "embedding": [
        9.692632675170898,
        2.7069849967956543
      ],
      "label": 12,
      "category": "lemon",
      "sprite_path": "static/dump/umap/static/train/apple/Image_17.jpg"
    },
    {
      "embedding": [
        12.80435562133789,
        2.030665159225464
      ],
      "label": 12,
      "category": "lemon",
      "sprite_path": "static/dump/umap/static/train/apple/Image_25.jpg"
    },
    {
      "embedding": [
        12.860211372375488,
        1.9756195545196533
      ],
      "label": 12,
      "category": "lemon",
      "sprite_path": "static/dump/umap/static/train/apple/Image_9.jpg"
    },
    {
      "embedding": [
        1.5555845499038696,
        5.431728839874268
      ],
      "label": 12,
      "category": "lemon",
      "sprite_path": "static/dump/umap/static/train/apple/Image_34.jpg"
    },
    {
      "embedding": [
        12.01398754119873,
        2.3845674991607666
      ],
      "label": 12,
      "category": "lemon",
      "sprite_path": "static/dump/umap/static/train/apple/Image_6.jpg"
    },
    {
      "embedding": [
        11.150282859802246,
        1.9049562215805054
      ],
      "label": 12,
      "category": "lemon",
      "sprite_path": "static/dump/umap/static/train/apple/Image_20.jpg"
    },
    {
      "embedding": [
        12.360298156738281,
        2.0743682384490967
      ],
      "label": 12,
      "category": "lemon",
      "sprite_path": "static/dump/umap/static/train/apple/Image_53.png"
    },
    {
      "embedding": [
        0.897105872631073,
        5.447692394256592
      ],
      "label": 12,
      "category": "lemon",
      "sprite_path": "static/dump/umap/static/train/apple/Image_92.png"
    },
    {
      "embedding": [
        10.273038864135742,
        2.886991262435913
      ],
      "label": 12,
      "category": "lemon",
      "sprite_path": "static/dump/umap/static/train/apple/Image_47.jpg"
    },
    {
      "embedding": [
        11.068638801574707,
        3.054865598678589
      ],
      "label": 12,
      "category": "lemon",
      "sprite_path": "static/dump/umap/static/train/apple/Image_59.png"
    },
    {
      "embedding": [
        11.598932266235352,
        2.6354570388793945
      ],
      "label": 12,
      "category": "lemon",
      "sprite_path": "static/dump/umap/static/train/apple/Image_19.jpg"
    },
    {
      "embedding": [
        1.2632527351379395,
        5.752671241760254
      ],
      "label": 12,
      "category": "lemon",
      "sprite_path": "static/dump/umap/static/train/apple/Image_76.png"
    },
    {
      "embedding": [
        12.44202995300293,
        1.9125112295150757
      ],
      "label": 12,
      "category": "lemon",
      "sprite_path": "static/dump/umap/static/train/apple/Image_61.jpg"
    },
    {
      "embedding": [
        10.403420448303223,
        2.9304540157318115
      ],
      "label": 12,
      "category": "lemon",
      "sprite_path": "static/dump/umap/static/train/apple/Image_64.jpg"
    },
    {
      "embedding": [
        1.2199130058288574,
        5.4194793701171875
      ],
      "label": 12,
      "category": "lemon",
      "sprite_path": "static/dump/umap/static/train/apple/Image_27.jpg"
    },
    {
      "embedding": [
        10.446840286254883,
        1.2890205383300781
      ],
      "label": 12,
      "category": "lemon",
      "sprite_path": "static/dump/umap/static/train/apple/Image_55.jpg"
    },
    {
      "embedding": [
        11.122363090515137,
        2.057967185974121
      ],
      "label": 12,
      "category": "lemon",
      "sprite_path": "static/dump/umap/static/train/apple/Image_44.jpg"
    },
    {
      "embedding": [
        12.238646507263184,
        1.0286486148834229
      ],
      "label": 12,
      "category": "lemon",
      "sprite_path": "static/dump/umap/static/train/apple/Image_52.jpg"
    },
    {
      "embedding": [
        0.9544302225112915,
        5.560365200042725
      ],
      "label": 12,
      "category": "lemon",
      "sprite_path": "static/dump/umap/static/train/apple/Image_90.jpg"
    },
    {
      "embedding": [
        1.0939544439315796,
        5.223592281341553
      ],
      "label": 12,
      "category": "lemon",
      "sprite_path": "static/dump/umap/static/train/apple/Image_82.jpg"
    },
    {
      "embedding": [
        10.128411293029785,
        3.025850772857666
      ],
      "label": 12,
      "category": "lemon",
      "sprite_path": "static/dump/umap/static/train/apple/Image_80.jpg"
    },
    {
      "embedding": [
        1.4901186227798462,
        5.669798374176025
      ],
      "label": 12,
      "category": "lemon",
      "sprite_path": "static/dump/umap/static/train/apple/Image_67.jpg"
    },
    {
      "embedding": [
        1.3937722444534302,
        5.39973783493042
      ],
      "label": 12,
      "category": "lemon",
      "sprite_path": "static/dump/umap/static/train/apple/Image_50.jpg"
    },
    {
      "embedding": [
        9.093714714050293,
        2.7904040813446045
      ],
      "label": 12,
      "category": "lemon",
      "sprite_path": "static/dump/umap/static/train/apple/Image_58.jpg"
    },
    {
      "embedding": [
        13.241378784179688,
        2.0334606170654297
      ],
      "label": 0,
      "category": "ginger",
      "sprite_path": "static/dump/umap/static/train/apple/Image_62.jpg"
    },
    {
      "embedding": [
        2.907031536102295,
        3.842749834060669
      ],
      "label": 0,
      "category": "ginger",
      "sprite_path": "static/dump/umap/static/train/apple/Image_39.jpg"
    },
    {
      "embedding": [
        11.54901123046875,
        1.4570587873458862
      ],
      "label": 0,
      "category": "ginger",
      "sprite_path": "static/dump/umap/static/train/apple/Image_63.jpg"
    },
    {
      "embedding": [
        3.065098762512207,
        4.027633190155029
      ],
      "label": 0,
      "category": "ginger",
      "sprite_path": "static/dump/umap/static/train/apple/Image_83.png"
    },
    {
      "embedding": [
        9.139691352844238,
        0.7086392045021057
      ],
      "label": 0,
      "category": "ginger",
      "sprite_path": "static/dump/umap/static/train/apple/Image_24.jpg"
    },
    {
      "embedding": [
        3.389371633529663,
        4.176274299621582
      ],
      "label": 0,
      "category": "ginger",
      "sprite_path": "static/dump/umap/static/train/apple/Image_32.jpg"
    },
    {
      "embedding": [
        2.5945940017700195,
        3.9388675689697266
      ],
      "label": 0,
      "category": "ginger",
      "sprite_path": "static/dump/umap/static/train/apple/Image_65.png"
    },
    {
      "embedding": [
        12.712541580200195,
        0.7138741612434387
      ],
      "label": 0,
      "category": "ginger",
      "sprite_path": "static/dump/umap/static/train/apple/Image_37.jpg"
    },
    {
      "embedding": [
        8.796055793762207,
        0.5058867335319519
      ],
      "label": 0,
      "category": "ginger",
      "sprite_path": "static/dump/umap/static/train/apple/Image_51.jpg"
    },
    {
      "embedding": [
        2.829158306121826,
        4.0394134521484375
      ],
      "label": 0,
      "category": "ginger",
      "sprite_path": "static/dump/umap/static/train/apple/Image_28.jpg"
    },
    {
      "embedding": [
        2.51568341255188,
        5.685782432556152
      ],
      "label": 0,
      "category": "ginger",
      "sprite_path": "static/dump/umap/static/train/apple/Image_54.jpg"
    },
    {
      "embedding": [
        11.551889419555664,
        0.4733785092830658
      ],
      "label": 0,
      "category": "ginger",
      "sprite_path": "static/dump/umap/static/train/apple/Image_36.jpg"
    },
    {
      "embedding": [
        3.0250542163848877,
        3.8105225563049316
      ],
      "label": 0,
      "category": "ginger",
      "sprite_path": "static/dump/umap/static/train/apple/Image_42.jpg"
    },
    {
      "embedding": [
        3.1760122776031494,
        3.8795979022979736
      ],
      "label": 0,
      "category": "ginger",
      "sprite_path": "static/dump/umap/static/train/apple/Image_31.jpg"
    },
    {
      "embedding": [
        0.7871536016464233,
        5.346772193908691
      ],
      "label": 0,
      "category": "ginger",
      "sprite_path": "static/dump/umap/static/train/apple/Image_2.jpg"
    },
    {
      "embedding": [
        2.854217290878296,
        4.923773288726807
      ],
      "label": 0,
      "category": "ginger",
      "sprite_path": "static/dump/umap/static/train/apple/Image_3.jpg"
    },
    {
      "embedding": [
        12.739322662353516,
        1.7079416513442993
      ],
      "label": 0,
      "category": "ginger",
      "sprite_path": "static/dump/umap/static/train/apple/Image_26.jpg"
    },
    {
      "embedding": [
        10.303958892822266,
        1.73197603225708
      ],
      "label": 0,
      "category": "ginger",
      "sprite_path": "static/dump/umap/static/train/apple/Image_87.jpg"
    },
    {
      "embedding": [
        13.355974197387695,
        1.62632417678833
      ],
      "label": 0,
      "category": "ginger",
      "sprite_path": "static/dump/umap/static/train/apple/Image_43.jpg"
    },
    {
      "embedding": [
        5.093328475952148,
        3.022264242172241
      ],
      "label": 0,
      "category": "ginger",
      "sprite_path": "static/dump/umap/static/train/apple/Image_18.jpg"
    },
    {
      "embedding": [
        9.394149780273438,
        0.9187651872634888
      ],
      "label": 0,
      "category": "ginger",
      "sprite_path": "static/dump/umap/static/train/bell pepper/Image_89.jpg"
    },
    {
      "embedding": [
        12.740625381469727,
        0.5675841569900513
      ],
      "label": 0,
      "category": "ginger",
      "sprite_path": "static/dump/umap/static/train/bell pepper/Image_65.jpg"
    },
    {
      "embedding": [
        13.082952499389648,
        1.773643136024475
      ],
      "label": 0,
      "category": "ginger",
      "sprite_path": "static/dump/umap/static/train/bell pepper/Image_1.jpg"
    },
    {
      "embedding": [
        10.650903701782227,
        0.7723093032836914
      ],
      "label": 0,
      "category": "ginger",
      "sprite_path": "static/dump/umap/static/train/bell pepper/Image_16.jpg"
    },
    {
      "embedding": [
        13.359733581542969,
        1.6207692623138428
      ],
      "label": 0,
      "category": "ginger",
      "sprite_path": "static/dump/umap/static/train/bell pepper/Image_57.jpg"
    },
    {
      "embedding": [
        1.678617238998413,
        4.80993127822876
      ],
      "label": 0,
      "category": "ginger",
      "sprite_path": "static/dump/umap/static/train/bell pepper/Image_12.jpg"
    },
    {
      "embedding": [
        12.280914306640625,
        1.7241148948669434
      ],
      "label": 0,
      "category": "ginger",
      "sprite_path": "static/dump/umap/static/train/bell pepper/Image_56.jpg"
    },
    {
      "embedding": [
        3.933551788330078,
        4.454861640930176
      ],
      "label": 0,
      "category": "ginger",
      "sprite_path": "static/dump/umap/static/train/bell pepper/Image_33.jpg"
    },
    {
      "embedding": [
        12.828997611999512,
        0.5454745292663574
      ],
      "label": 0,
      "category": "ginger",
      "sprite_path": "static/dump/umap/static/train/bell pepper/Image_45.jpg"
    },
    {
      "embedding": [
        3.0631842613220215,
        4.089821815490723
      ],
      "label": 0,
      "category": "ginger",
      "sprite_path": "static/dump/umap/static/train/bell pepper/Image_94.jpg"
    },
    {
      "embedding": [
        9.382257461547852,
        1.3286986351013184
      ],
      "label": 0,
      "category": "ginger",
      "sprite_path": "static/dump/umap/static/train/bell pepper/Image_41.png"
    },
    {
      "embedding": [
        12.537595748901367,
        0.520601212978363
      ],
      "label": 0,
      "category": "ginger",
      "sprite_path": "static/dump/umap/static/train/bell pepper/Image_40.jpg"
    },
    {
      "embedding": [
        12.720555305480957,
        1.131945252418518
      ],
      "label": 0,
      "category": "ginger",
      "sprite_path": "static/dump/umap/static/train/bell pepper/Image_10.jpg"
    },
    {
      "embedding": [
        13.05742359161377,
        1.2115036249160767
      ],
      "label": 0,
      "category": "ginger",
      "sprite_path": "static/dump/umap/static/train/bell pepper/Image_21.jpg"
    },
    {
      "embedding": [
        7.615642070770264,
        3.298358678817749
      ],
      "label": 0,
      "category": "ginger",
      "sprite_path": "static/dump/umap/static/train/bell pepper/Image_78.jpg"
    },
    {
      "embedding": [
        3.409649610519409,
        4.0402116775512695
      ],
      "label": 0,
      "category": "ginger",
      "sprite_path": "static/dump/umap/static/train/bell pepper/Image_4.jpg"
    },
    {
      "embedding": [
        13.29542064666748,
        1.1276735067367554
      ],
      "label": 0,
      "category": "ginger",
      "sprite_path": "static/dump/umap/static/train/bell pepper/Image_38.jpg"
    },
    {
      "embedding": [
        2.9987986087799072,
        3.844369649887085
      ],
      "label": 0,
      "category": "ginger",
      "sprite_path": "static/dump/umap/static/train/bell pepper/Image_7.jpg"
    },
    {
      "embedding": [
        8.093576431274414,
        2.676459312438965
      ],
      "label": 0,
      "category": "ginger",
      "sprite_path": "static/dump/umap/static/train/bell pepper/Image_69.jpg"
    },
    {
      "embedding": [
        5.0195794105529785,
        3.327893018722534
      ],
      "label": 0,
      "category": "ginger",
      "sprite_path": "static/dump/umap/static/train/bell pepper/Image_60.jpg"
    },
    {
      "embedding": [
        11.162378311157227,
        1.8070647716522217
      ],
      "label": 0,
      "category": "ginger",
      "sprite_path": "static/dump/umap/static/train/bell pepper/Image_13.jpg"
    },
    {
      "embedding": [
        12.220977783203125,
        1.4625051021575928
      ],
      "label": 0,
      "category": "ginger",
      "sprite_path": "static/dump/umap/static/train/bell pepper/Image_49.jpg"
    },
    {
      "embedding": [
        0.6296379566192627,
        5.346542835235596
      ],
      "label": 0,
      "category": "ginger",
      "sprite_path": "static/dump/umap/static/train/bell pepper/Image_95.jpg"
    },
    {
      "embedding": [
        12.385028839111328,
        1.8074367046356201
      ],
      "label": 0,
      "category": "ginger",
      "sprite_path": "static/dump/umap/static/train/bell pepper/Image_86.jpg"
    },
    {
      "embedding": [
        12.049854278564453,
        2.297672748565674
      ],
      "label": 0,
      "category": "ginger",
      "sprite_path": "static/dump/umap/static/train/bell pepper/Image_23.jpg"
    },
    {
      "embedding": [
        8.609131813049316,
        0.8754182457923889
      ],
      "label": 0,
      "category": "ginger",
      "sprite_path": "static/dump/umap/static/train/bell pepper/Image_72.png"
    },
    {
      "embedding": [
        8.415390968322754,
        2.3016560077667236
      ],
      "label": 0,
      "category": "ginger",
      "sprite_path": "static/dump/umap/static/train/bell pepper/Image_8.jpg"
    },
    {
      "embedding": [
        2.813619613647461,
        5.012394905090332
      ],
      "label": 0,
      "category": "ginger",
      "sprite_path": "static/dump/umap/static/train/bell pepper/Image_48.png"
    },
    {
      "embedding": [
        2.769545793533325,
        4.114840030670166
      ],
      "label": 0,
      "category": "ginger",
      "sprite_path": "static/dump/umap/static/train/bell pepper/Image_22.jpg"
    },
    {
      "embedding": [
        2.040910005569458,
        4.52249813079834
      ],
      "label": 0,
      "category": "ginger",
      "sprite_path": "static/dump/umap/static/train/bell pepper/Image_77.jpg"
    },
    {
      "embedding": [
        11.962104797363281,
        1.6573601961135864
      ],
      "label": 0,
      "category": "ginger",
      "sprite_path": "static/dump/umap/static/train/bell pepper/Image_25.jpg"
    },
    {
      "embedding": [
        8.204338073730469,
        0.5124022960662842
      ],
      "label": 0,
      "category": "ginger",
      "sprite_path": "static/dump/umap/static/train/bell pepper/Image_9.jpg"
    },
    {
      "embedding": [
        0.9912123084068298,
        5.780801773071289
      ],
      "label": 0,
      "category": "ginger",
      "sprite_path": "static/dump/umap/static/train/bell pepper/Image_71.jpg"
    },
    {
      "embedding": [
        4.537747859954834,
        4.5937628746032715
      ],
      "label": 0,
      "category": "ginger",
      "sprite_path": "static/dump/umap/static/train/bell pepper/Image_34.jpg"
    },
    {
      "embedding": [
        13.273427963256836,
        1.629215955734253
      ],
      "label": 0,
      "category": "ginger",
      "sprite_path": "static/dump/umap/static/train/bell pepper/Image_6.jpg"
    },
    {
      "embedding": [
        0.983799397945404,
        5.9680681228637695
      ],
      "label": 0,
      "category": "ginger",
      "sprite_path": "static/dump/umap/static/train/bell pepper/Image_20.jpg"
    },
    {
      "embedding": [
        11.074074745178223,
        0.5909846425056458
      ],
      "label": 0,
      "category": "ginger",
      "sprite_path": "static/dump/umap/static/train/bell pepper/Image_98.jpg"
    },
    {
      "embedding": [
        2.1264805793762207,
        4.615966320037842
      ],
      "label": 0,
      "category": "ginger",
      "sprite_path": "static/dump/umap/static/train/bell pepper/Image_19.jpg"
    },
    {
      "embedding": [
        9.814014434814453,
        2.2119181156158447
      ],
      "label": 0,
      "category": "ginger",
      "sprite_path": "static/dump/umap/static/train/bell pepper/Image_88.jpg"
    },
    {
      "embedding": [
        7.122806072235107,
        1.895655870437622
      ],
      "label": 0,
      "category": "ginger",
      "sprite_path": "static/dump/umap/static/train/bell pepper/Image_29.jpg"
    },
    {
      "embedding": [
        2.7520971298217773,
        4.294126510620117
      ],
      "label": 0,
      "category": "ginger",
      "sprite_path": "static/dump/umap/static/train/bell pepper/Image_61.jpg"
    },
    {
      "embedding": [
        2.9416141510009766,
        3.800940990447998
      ],
      "label": 0,
      "category": "ginger",
      "sprite_path": "static/dump/umap/static/train/bell pepper/Image_84.jpg"
    },
    {
      "embedding": [
        8.074543952941895,
        2.622891664505005
      ],
      "label": 0,
      "category": "ginger",
      "sprite_path": "static/dump/umap/static/train/bell pepper/Image_85.jpg"
    },
    {
      "embedding": [
        4.269608020782471,
        4.779049873352051
      ],
      "label": 0,
      "category": "ginger",
      "sprite_path": "static/dump/umap/static/train/bell pepper/Image_74.jpg"
    },
    {
      "embedding": [
        8.48202896118164,
        0.5130378007888794
      ],
      "label": 0,
      "category": "ginger",
      "sprite_path": "static/dump/umap/static/train/bell pepper/Image_99.jpeg"
    },
    {
      "embedding": [
        10.093608856201172,
        2.1132571697235107
      ],
      "label": 0,
      "category": "ginger",
      "sprite_path": "static/dump/umap/static/train/bell pepper/Image_3.jpeg"
    },
    {
      "embedding": [
        10.68685531616211,
        0.37954819202423096
      ],
      "label": 0,
      "category": "ginger",
      "sprite_path": "static/dump/umap/static/train/bell pepper/Image_53.jpg"
    },
    {
      "embedding": [
        3.0140416622161865,
        3.717510223388672
      ],
      "label": 0,
      "category": "ginger",
      "sprite_path": "static/dump/umap/static/train/bell pepper/Image_64.jpg"
    },
    {
      "embedding": [
        8.74790096282959,
        0.056008756160736084
      ],
      "label": 3,
      "category": "sweetcorn",
      "sprite_path": "static/dump/umap/static/train/bell pepper/Image_27.jpg"
    },
    {
      "embedding": [
        10.416007041931152,
        1.6340091228485107
      ],
      "label": 3,
      "category": "sweetcorn",
      "sprite_path": "static/dump/umap/static/train/bell pepper/Image_55.jpg"
    },
    {
      "embedding": [
        2.7441673278808594,
        5.0901360511779785
      ],
      "label": 3,
      "category": "sweetcorn",
      "sprite_path": "static/dump/umap/static/train/bell pepper/Image_44.jpg"
    },
    {
      "embedding": [
        9.24435043334961,
        0.6747532486915588
      ],
      "label": 3,
      "category": "sweetcorn",
      "sprite_path": "static/dump/umap/static/train/bell pepper/Image_31.jpeg"
    },
    {
      "embedding": [
        1.2520190477371216,
        4.232491970062256
      ],
      "label": 3,
      "category": "sweetcorn",
      "sprite_path": "static/dump/umap/static/train/bell pepper/Image_73.jpg"
    },
    {
      "embedding": [
        7.612058162689209,
        3.1443378925323486
      ],
      "label": 3,
      "category": "sweetcorn",
      "sprite_path": "static/dump/umap/static/train/bell pepper/Image_52.jpg"
    },
    {
      "embedding": [
        7.286334037780762,
        3.7092220783233643
      ],
      "label": 3,
      "category": "sweetcorn",
      "sprite_path": "static/dump/umap/static/train/bell pepper/Image_90.jpg"
    },
    {
      "embedding": [
        8.38928508758545,
        -0.05708451196551323
      ],
      "label": 3,
      "category": "sweetcorn",
      "sprite_path": "static/dump/umap/static/train/bell pepper/Image_83.jpg"
    },
    {
      "embedding": [
        3.7761197090148926,
        4.8995771408081055
      ],
      "label": 3,
      "category": "sweetcorn",
      "sprite_path": "static/dump/umap/static/train/bell pepper/Image_11.jpg"
    },
    {
      "embedding": [
        8.709646224975586,
        0.7165348529815674
      ],
      "label": 3,
      "category": "sweetcorn",
      "sprite_path": "static/dump/umap/static/train/bell pepper/Image_82.jpg"
    },
    {
      "embedding": [
        4.897632598876953,
        4.124537467956543
      ],
      "label": 3,
      "category": "sweetcorn",
      "sprite_path": "static/dump/umap/static/train/bell pepper/Image_50.jpg"
    },
    {
      "embedding": [
        3.799147129058838,
        3.866077184677124
      ],
      "label": 3,
      "category": "sweetcorn",
      "sprite_path": "static/dump/umap/static/train/bell pepper/Image_46.png"
    },
    {
      "embedding": [
        9.341962814331055,
        2.0630977153778076
      ],
      "label": 3,
      "category": "sweetcorn",
      "sprite_path": "static/dump/umap/static/train/bell pepper/Image_97.jpg"
    },
    {
      "embedding": [
        12.267298698425293,
        1.2120121717453003
      ],
      "label": 3,
      "category": "sweetcorn",
      "sprite_path": "static/dump/umap/static/train/bell pepper/Image_62.jpg"
    },
    {
      "embedding": [
        12.60237979888916,
        1.6893991231918335
      ],
      "label": 3,
      "category": "sweetcorn",
      "sprite_path": "static/dump/umap/static/train/bell pepper/Image_30.jpg"
    },
    {
      "embedding": [
        3.17850923538208,
        4.552573204040527
      ],
      "label": 3,
      "category": "sweetcorn",
      "sprite_path": "static/dump/umap/static/train/bell pepper/Image_5.jpg"
    },
    {
      "embedding": [
        9.4872407913208,
        2.901437997817993
      ],
      "label": 3,
      "category": "sweetcorn",
      "sprite_path": "static/dump/umap/static/train/bell pepper/Image_100.jpg"
    },
    {
      "embedding": [
        9.299413681030273,
        -0.22562816739082336
      ],
      "label": 3,
      "category": "sweetcorn",
      "sprite_path": "static/dump/umap/static/train/bell pepper/Image_67.png"
    },
    {
      "embedding": [
        2.78629207611084,
        3.9935970306396484
      ],
      "label": 3,
      "category": "sweetcorn",
      "sprite_path": "static/dump/umap/static/train/bell pepper/Image_70.jpg"
    },
    {
      "embedding": [
        12.370224952697754,
        0.9299479722976685
      ],
      "label": 3,
      "category": "sweetcorn",
      "sprite_path": "static/dump/umap/static/train/bell pepper/Image_15.jpg"
    },
    {
      "embedding": [
        9.727659225463867,
        0.7937678098678589
      ],
      "label": 3,
      "category": "sweetcorn",
      "sprite_path": "static/dump/umap/static/train/bell pepper/Image_35.jpg"
    },
    {
      "embedding": [
        4.57312536239624,
        4.786074638366699
      ],
      "label": 3,
      "category": "sweetcorn",
      "sprite_path": "static/dump/umap/static/train/bell pepper/Image_68.jpeg"
    },
    {
      "embedding": [
        8.535593032836914,
        0.33302736282348633
      ],
      "label": 3,
      "category": "sweetcorn",
      "sprite_path": "static/dump/umap/static/train/bell pepper/Image_47.png"
    },
    {
      "embedding": [
        9.3278169631958,
        2.901113271713257
      ],
      "label": 3,
      "category": "sweetcorn",
      "sprite_path": "static/dump/umap/static/train/bell pepper/Image_14.jpg"
    },
    {
      "embedding": [
        11.110917091369629,
        0.7904917001724243
      ],
      "label": 3,
      "category": "sweetcorn",
      "sprite_path": "static/dump/umap/static/train/bell pepper/Image_39.jpg"
    },
    {
      "embedding": [
        3.716770648956299,
        3.891623020172119
      ],
      "label": 3,
      "category": "sweetcorn",
      "sprite_path": "static/dump/umap/static/train/bell pepper/Image_76.jpg"
    },
    {
      "embedding": [
        9.833600044250488,
        1.4502123594284058
      ],
      "label": 3,
      "category": "sweetcorn",
      "sprite_path": "static/dump/umap/static/train/bell pepper/Image_63.jpg"
    },
    {
      "embedding": [
        13.121092796325684,
        1.189031958580017
      ],
      "label": 3,
      "category": "sweetcorn",
      "sprite_path": "static/dump/umap/static/train/bell pepper/Image_75.jpg"
    },
    {
      "embedding": [
        8.561260223388672,
        -0.01599453203380108
      ],
      "label": 3,
      "category": "sweetcorn",
      "sprite_path": "static/dump/umap/static/train/bell pepper/Image_24.jpg"
    },
    {
      "embedding": [
        8.233735084533691,
        0.2995052933692932
      ],
      "label": 3,
      "category": "sweetcorn",
      "sprite_path": "static/dump/umap/static/train/bell pepper/Image_37.jpg"
    },
    {
      "embedding": [
        3.152498483657837,
        4.5846848487854
      ],
      "label": 3,
      "category": "sweetcorn",
      "sprite_path": "static/dump/umap/static/train/bell pepper/Image_51.jpg"
    },
    {
      "embedding": [
        8.124123573303223,
        0.8517736196517944
      ],
      "label": 3,
      "category": "sweetcorn",
      "sprite_path": "static/dump/umap/static/train/bell pepper/Image_28.jpg"
    },
    {
      "embedding": [
        10.427249908447266,
        1.3629770278930664
      ],
      "label": 3,
      "category": "sweetcorn",
      "sprite_path": "static/dump/umap/static/train/bell pepper/Image_54.jpg"
    },
    {
      "embedding": [
        7.271075248718262,
        3.675553560256958
      ],
      "label": 3,
      "category": "sweetcorn",
      "sprite_path": "static/dump/umap/static/train/bell pepper/Image_93.jpg"
    },
    {
      "embedding": [
        8.959212303161621,
        1.038735032081604
      ],
      "label": 3,
      "category": "sweetcorn",
      "sprite_path": "static/dump/umap/static/train/bell pepper/Image_36.jpg"
    },
    {
      "embedding": [
        7.688194274902344,
        0.9466021060943604
      ],
      "label": 3,
      "category": "sweetcorn",
      "sprite_path": "static/dump/umap/static/train/bell pepper/Image_42.jpg"
    },
    {
      "embedding": [
        6.676023483276367,
        3.4674153327941895
      ],
      "label": 3,
      "category": "sweetcorn",
      "sprite_path": "static/dump/umap/static/train/bell pepper/Image_2.jpg"
    },
    {
      "embedding": [
        2.4898133277893066,
        5.789200305938721
      ],
      "label": 3,
      "category": "sweetcorn",
      "sprite_path": "static/dump/umap/static/train/bell pepper/Image_26.jpg"
    },
    {
      "embedding": [
        3.3347837924957275,
        5.598484516143799
      ],
      "label": 3,
      "category": "sweetcorn",
      "sprite_path": "static/dump/umap/static/train/bell pepper/Image_66.jpg"
    },
    {
      "embedding": [
        11.318553924560547,
        0.7404899001121521
      ],
      "label": 3,
      "category": "sweetcorn",
      "sprite_path": "static/dump/umap/static/train/bell pepper/Image_43.jpg"
    },
    {
      "embedding": [
        11.667508125305176,
        0.6525822877883911
      ],
      "label": 3,
      "category": "sweetcorn",
      "sprite_path": "static/dump/umap/static/train/chilli pepper/Image_89.jpg"
    },
    {
      "embedding": [
        8.098599433898926,
        2.639712333679199
      ],
      "label": 3,
      "category": "sweetcorn",
      "sprite_path": "static/dump/umap/static/train/chilli pepper/Image_65.jpg"
    },
    {
      "embedding": [
        2.3245036602020264,
        5.130946159362793
      ],
      "label": 3,
      "category": "sweetcorn",
      "sprite_path": "static/dump/umap/static/train/chilli pepper/Image_1.jpg"
    },
    {
      "embedding": [
        11.196682929992676,
        0.4143676161766052
      ],
      "label": 3,
      "category": "sweetcorn",
      "sprite_path": "static/dump/umap/static/train/chilli pepper/Image_57.jpg"
    },
    {
      "embedding": [
        6.6566972732543945,
        3.433809995651245
      ],
      "label": 3,
      "category": "sweetcorn",
      "sprite_path": "static/dump/umap/static/train/chilli pepper/Image_56.jpg"
    },
    {
      "embedding": [
        6.688027858734131,
        3.5059359073638916
      ],
      "label": 3,
      "category": "sweetcorn",
      "sprite_path": "static/dump/umap/static/train/chilli pepper/Image_33.jpg"
    },
    {
      "embedding": [
        10.540282249450684,
        1.4665379524230957
      ],
      "label": 3,
      "category": "sweetcorn",
      "sprite_path": "static/dump/umap/static/train/chilli pepper/Image_45.jpg"
    },
    {
      "embedding": [
        10.348099708557129,
        0.8688206672668457
      ],
      "label": 3,
      "category": "sweetcorn",
      "sprite_path": "static/dump/umap/static/train/chilli pepper/Image_94.jpg"
    },
    {
      "embedding": [
        8.361828804016113,
        0.46917790174484253
      ],
      "label": 3,
      "category": "sweetcorn",
      "sprite_path": "static/dump/umap/static/train/chilli pepper/Image_40.jpg"
    },
    {
      "embedding": [
        11.753226280212402,
        0.9601447582244873
      ],
      "label": 3,
      "category": "sweetcorn",
      "sprite_path": "static/dump/umap/static/train/chilli pepper/Image_10.jpg"
    },
    {
      "embedding": [
        9.418732643127441,
        0.5536504983901978
      ],
      "label": 3,
      "category": "sweetcorn",
      "sprite_path": "static/dump/umap/static/train/chilli pepper/Image_21.jpg"
    },
    {
      "embedding": [
        3.801396608352661,
        3.9008986949920654
      ],
      "label": 3,
      "category": "sweetcorn",
      "sprite_path": "static/dump/umap/static/train/chilli pepper/Image_59.jpg"
    },
    {
      "embedding": [
        8.901748657226562,
        -0.0017886999994516373
      ],
      "label": 3,
      "category": "sweetcorn",
      "sprite_path": "static/dump/umap/static/train/chilli pepper/Image_4.jpg"
    },
    {
      "embedding": [
        7.326718330383301,
        2.993993043899536
      ],
      "label": 3,
      "category": "sweetcorn",
      "sprite_path": "static/dump/umap/static/train/chilli pepper/Image_38.jpg"
    },
    {
      "embedding": [
        12.763263702392578,
        1.3732435703277588
      ],
      "label": 3,
      "category": "sweetcorn",
      "sprite_path": "static/dump/umap/static/train/chilli pepper/Image_41.jpg"
    },
    {
      "embedding": [
        7.280273914337158,
        3.666647434234619
      ],
      "label": 3,
      "category": "sweetcorn",
      "sprite_path": "static/dump/umap/static/train/chilli pepper/Image_69.jpg"
    },
    {
      "embedding": [
        9.830241203308105,
        -0.10222604125738144
      ],
      "label": 3,
      "category": "sweetcorn",
      "sprite_path": "static/dump/umap/static/train/chilli pepper/Image_48.jpg"
    },
    {
      "embedding": [
        2.4436285495758057,
        4.445507526397705
      ],
      "label": 3,
      "category": "sweetcorn",
      "sprite_path": "static/dump/umap/static/train/chilli pepper/Image_28.png"
    },
    {
      "embedding": [
        11.648391723632812,
        0.4786643385887146
      ],
      "label": 3,
      "category": "sweetcorn",
      "sprite_path": "static/dump/umap/static/train/chilli pepper/Image_60.jpg"
    },
    {
      "embedding": [
        10.804938316345215,
        2.4284873008728027
      ],
      "label": 3,
      "category": "sweetcorn",
      "sprite_path": "static/dump/umap/static/train/chilli pepper/Image_13.jpg"
    },
    {
      "embedding": [
        7.343907356262207,
        3.67132306098938
      ],
      "label": 3,
      "category": "sweetcorn",
      "sprite_path": "static/dump/umap/static/train/chilli pepper/Image_49.jpg"
    },
    {
      "embedding": [
        2.712813377380371,
        5.038795471191406
      ],
      "label": 3,
      "category": "sweetcorn",
      "sprite_path": "static/dump/umap/static/train/chilli pepper/Image_91.jpg"
    },
    {
      "embedding": [
        3.175661087036133,
        5.221743583679199
      ],
      "label": 3,
      "category": "sweetcorn",
      "sprite_path": "static/dump/umap/static/train/chilli pepper/Image_68.jpg"
    },
    {
      "embedding": [
        4.34841251373291,
        4.798457145690918
      ],
      "label": 3,
      "category": "sweetcorn",
      "sprite_path": "static/dump/umap/static/train/chilli pepper/Image_23.jpg"
    },
    {
      "embedding": [
        7.770721912384033,
        1.8620487451553345
      ],
      "label": 3,
      "category": "sweetcorn",
      "sprite_path": "static/dump/umap/static/train/chilli pepper/Image_8.jpg"
    },
    {
      "embedding": [
        5.687490940093994,
        2.9173829555511475
      ],
      "label": 3,
      "category": "sweetcorn",
      "sprite_path": "static/dump/umap/static/train/chilli pepper/Image_22.jpg"
    },
    {
      "embedding": [
        3.2336618900299072,
        4.514267444610596
      ],
      "label": 3,
      "category": "sweetcorn",
      "sprite_path": "static/dump/umap/static/train/chilli pepper/Image_79.jpg"
    },
    {
      "embedding": [
        7.328229904174805,
        3.676814079284668
      ],
      "label": 3,
      "category": "sweetcorn",
      "sprite_path": "static/dump/umap/static/train/chilli pepper/Image_17.jpg"
    },
    {
      "embedding": [
        10.045884132385254,
        2.0557315349578857
      ],
      "label": 3,
      "category": "sweetcorn",
      "sprite_path": "static/dump/umap/static/train/chilli pepper/Image_25.jpg"
    },
    {
      "embedding": [
        11.732037544250488,
        0.4928664267063141
      ],
      "label": 3,
      "category": "sweetcorn",
      "sprite_path": "static/dump/umap/static/train/chilli pepper/Image_9.jpg"
    },
    {
      "embedding": [
        11.162310600280762,
        0.8316327929496765
      ],
      "label": 3,
      "category": "sweetcorn",
      "sprite_path": "static/dump/umap/static/train/chilli pepper/Image_71.jpg"
    },
    {
      "embedding": [
        8.805303573608398,
        0.014721624553203583
      ],
      "label": 3,
      "category": "sweetcorn",
      "sprite_path": "static/dump/umap/static/train/chilli pepper/Image_34.jpg"
    },
    {
      "embedding": [
        4.581053733825684,
        4.784473419189453
      ],
      "label": 3,
      "category": "sweetcorn",
      "sprite_path": "static/dump/umap/static/train/chilli pepper/Image_81.jpg"
    },
    {
      "embedding": [
        10.209456443786621,
        1.6636486053466797
      ],
      "label": 3,
      "category": "sweetcorn",
      "sprite_path": "static/dump/umap/static/train/chilli pepper/Image_20.jpg"
    },
    {
      "embedding": [
        8.355674743652344,
        0.7412592172622681
      ],
      "label": 3,
      "category": "sweetcorn",
      "sprite_path": "static/dump/umap/static/train/chilli pepper/Image_98.jpg"
    },
    {
      "embedding": [
        11.657602310180664,
        1.3760162591934204
      ],
      "label": 3,
      "category": "sweetcorn",
      "sprite_path": "static/dump/umap/static/train/chilli pepper/Image_29.jpg"
    },
    {
      "embedding": [
        10.557512283325195,
        0.27688246965408325
      ],
      "label": 3,
      "category": "sweetcorn",
      "sprite_path": "static/dump/umap/static/train/chilli pepper/Image_61.jpg"
    },
    {
      "embedding": [
        4.595700740814209,
        3.9387457370758057
      ],
      "label": 3,
      "category": "sweetcorn",
      "sprite_path": "static/dump/umap/static/train/chilli pepper/Image_84.jpg"
    },
    {
      "embedding": [
        12.316826820373535,
        0.9584611654281616
      ],
      "label": 3,
      "category": "sweetcorn",
      "sprite_path": "static/dump/umap/static/train/chilli pepper/Image_74.jpg"
    },
    {
      "embedding": [
        3.327632188796997,
        5.54555606842041
      ],
      "label": 3,
      "category": "sweetcorn",
      "sprite_path": "static/dump/umap/static/train/chilli pepper/Image_53.jpg"
    },
    {
      "embedding": [
        10.203989028930664,
        1.8103442192077637
      ],
      "label": 3,
      "category": "sweetcorn",
      "sprite_path": "static/dump/umap/static/train/chilli pepper/Image_64.jpg"
    },
    {
      "embedding": [
        8.403043746948242,
        0.8070979714393616
      ],
      "label": 3,
      "category": "sweetcorn",
      "sprite_path": "static/dump/umap/static/train/chilli pepper/Image_92.jpg"
    },
    {
      "embedding": [
        12.285665512084961,
        1.5739238262176514
      ],
      "label": 3,
      "category": "sweetcorn",
      "sprite_path": "static/dump/umap/static/train/chilli pepper/Image_27.jpg"
    },
    {
      "embedding": [
        10.356437683105469,
        1.4252643585205078
      ],
      "label": 3,
      "category": "sweetcorn",
      "sprite_path": "static/dump/umap/static/train/chilli pepper/Image_55.jpg"
    },
    {
      "embedding": [
        4.614578723907471,
        4.370343208312988
      ],
      "label": 3,
      "category": "sweetcorn",
      "sprite_path": "static/dump/umap/static/train/chilli pepper/Image_72.jpg"
    },
    {
      "embedding": [
        6.3112101554870605,
        1.873607873916626
      ],
      "label": 3,
      "category": "sweetcorn",
      "sprite_path": "static/dump/umap/static/train/chilli pepper/Image_95.png"
    },
    {
      "embedding": [
        6.7442731857299805,
        3.4974613189697266
      ],
      "label": 3,
      "category": "sweetcorn",
      "sprite_path": "static/dump/umap/static/train/chilli pepper/Image_73.jpg"
    },
    {
      "embedding": [
        10.874120712280273,
        1.423828363418579
      ],
      "label": 3,
      "category": "sweetcorn",
      "sprite_path": "static/dump/umap/static/train/chilli pepper/Image_96.jpg"
    },
    {
      "embedding": [
        8.207698822021484,
        2.704465627670288
      ],
      "label": 3,
      "category": "sweetcorn",
      "sprite_path": "static/dump/umap/static/train/chilli pepper/Image_52.jpg"
    },
    {
      "embedding": [
        8.02011489868164,
        0.2841474115848541
      ],
      "label": 3,
      "category": "sweetcorn",
      "sprite_path": "static/dump/umap/static/train/chilli pepper/Image_90.jpg"
    },
    {
      "embedding": [
        11.889710426330566,
        1.4251922369003296
      ],
      "label": 8,
      "category": "spinach",
      "sprite_path": "static/dump/umap/static/train/chilli pepper/Image_83.jpg"
    },
    {
      "embedding": [
        8.91779899597168,
        0.4667704105377197
      ],
      "label": 8,
      "category": "spinach",
      "sprite_path": "static/dump/umap/static/train/chilli pepper/Image_11.jpg"
    },
    {
      "embedding": [
        3.0008373260498047,
        5.4178338050842285
      ],
      "label": 8,
      "category": "spinach",
      "sprite_path": "static/dump/umap/static/train/chilli pepper/Image_67.jpg"
    },
    {
      "embedding": [
        10.214839935302734,
        1.3453680276870728
      ],
      "label": 8,
      "category": "spinach",
      "sprite_path": "static/dump/umap/static/train/chilli pepper/Image_50.jpg"
    },
    {
      "embedding": [
        8.902361869812012,
        2.2324941158294678
      ],
      "label": 8,
      "category": "spinach",
      "sprite_path": "static/dump/umap/static/train/chilli pepper/Image_97.jpg"
    },
    {
      "embedding": [
        1.1649452447891235,
        4.388118267059326
      ],
      "label": 8,
      "category": "spinach",
      "sprite_path": "static/dump/umap/static/train/chilli pepper/Image_62.jpg"
    },
    {
      "embedding": [
        6.46252965927124,
        3.3492424488067627
      ],
      "label": 8,
      "category": "spinach",
      "sprite_path": "static/dump/umap/static/train/chilli pepper/Image_30.jpg"
    },
    {
      "embedding": [
        10.433513641357422,
        0.54751056432724
      ],
      "label": 8,
      "category": "spinach",
      "sprite_path": "static/dump/umap/static/train/chilli pepper/Image_5.jpg"
    },
    {
      "embedding": [
        10.14396858215332,
        1.6461701393127441
      ],
      "label": 8,
      "category": "spinach",
      "sprite_path": "static/dump/umap/static/train/chilli pepper/Image_70.jpg"
    },
    {
      "embedding": [
        8.994616508483887,
        2.298342227935791
      ],
      "label": 8,
      "category": "spinach",
      "sprite_path": "static/dump/umap/static/train/chilli pepper/Image_15.jpg"
    },
    {
      "embedding": [
        10.06104850769043,
        1.5659626722335815
      ],
      "label": 8,
      "category": "spinach",
      "sprite_path": "static/dump/umap/static/train/chilli pepper/Image_35.jpg"
    },
    {
      "embedding": [
        9.12331771850586,
        1.6533292531967163
      ],
      "label": 8,
      "category": "spinach",
      "sprite_path": "static/dump/umap/static/train/chilli pepper/Image_7.jpeg"
    },
    {
      "embedding": [
        0.9922212362289429,
        5.148952484130859
      ],
      "label": 8,
      "category": "spinach",
      "sprite_path": "static/dump/umap/static/train/chilli pepper/Image_14.jpg"
    },
    {
      "embedding": [
        8.085163116455078,
        2.7872519493103027
      ],
      "label": 8,
      "category": "spinach",
      "sprite_path": "static/dump/umap/static/train/chilli pepper/Image_39.jpg"
    },
    {
      "embedding": [
        10.63683795928955,
        1.3795115947723389
      ],
      "label": 8,
      "category": "spinach",
      "sprite_path": "static/dump/umap/static/train/chilli pepper/Image_6.png"
    },
    {
      "embedding": [
        1.439651370048523,
        5.697375774383545
      ],
      "label": 8,
      "category": "spinach",
      "sprite_path": "static/dump/umap/static/train/chilli pepper/Image_63.jpg"
    },
    {
      "embedding": [
        7.542463302612305,
        2.416203260421753
      ],
      "label": 8,
      "category": "spinach",
      "sprite_path": "static/dump/umap/static/train/chilli pepper/Image_24.jpg"
    },
    {
      "embedding": [
        8.351456642150879,
        1.188323974609375
      ],
      "label": 8,
      "category": "spinach",
      "sprite_path": "static/dump/umap/static/train/chilli pepper/Image_99.jpg"
    },
    {
      "embedding": [
        1.2412471771240234,
        4.4440484046936035
      ],
      "label": 8,
      "category": "spinach",
      "sprite_path": "static/dump/umap/static/train/chilli pepper/Image_32.jpg"
    },
    {
      "embedding": [
        11.11845874786377,
        1.339561939239502
      ],
      "label": 8,
      "category": "spinach",
      "sprite_path": "static/dump/umap/static/train/chilli pepper/Image_37.jpg"
    },
    {
      "embedding": [
        10.559008598327637,
        1.0959088802337646
      ],
      "label": 8,
      "category": "spinach",
      "sprite_path": "static/dump/umap/static/train/chilli pepper/Image_51.jpg"
    },
    {
      "embedding": [
        8.541028022766113,
        2.962618827819824
      ],
      "label": 8,
      "category": "spinach",
      "sprite_path": "static/dump/umap/static/train/chilli pepper/Image_36.jpg"
    },
    {
      "embedding": [
        8.84697437286377,
        1.0528758764266968
      ],
      "label": 8,
      "category": "spinach",
      "sprite_path": "static/dump/umap/static/train/chilli pepper/Image_42.jpg"
    },
    {
      "embedding": [
        1.1644935607910156,
        4.215248107910156
      ],
      "label": 8,
      "category": "spinach",
      "sprite_path": "static/dump/umap/static/train/chilli pepper/Image_31.jpg"
    },
    {
      "embedding": [
        11.03304386138916,
        0.8288863897323608
      ],
      "label": 8,
      "category": "spinach",
      "sprite_path": "static/dump/umap/static/train/chilli pepper/Image_3.jpg"
    },
    {
      "embedding": [
        1.8856854438781738,
        4.494132041931152
      ],
      "label": 8,
      "category": "spinach",
      "sprite_path": "static/dump/umap/static/train/chilli pepper/Image_26.jpg"
    },
    {
      "embedding": [
        9.225541114807129,
        0.11604312807321548
      ],
      "label": 8,
      "category": "spinach",
      "sprite_path": "static/dump/umap/static/train/chilli pepper/Image_66.jpg"
    },
    {
      "embedding": [
        11.767909049987793,
        1.5032484531402588
      ],
      "label": 8,
      "category": "spinach",
      "sprite_path": "static/dump/umap/static/train/chilli pepper/Image_87.jpg"
    },
    {
      "embedding": [
        1.0305513143539429,
        4.432115077972412
      ],
      "label": 8,
      "category": "spinach",
      "sprite_path": "static/dump/umap/static/train/chilli pepper/Image_54.jpeg"
    },
    {
      "embedding": [
        8.396899223327637,
        0.4883454144001007
      ],
      "label": 8,
      "category": "spinach",
      "sprite_path": "static/dump/umap/static/train/chilli pepper/Image_43.jpg"
    },
    {
      "embedding": [
        9.775193214416504,
        0.16573159396648407
      ],
      "label": 8,
      "category": "spinach",
      "sprite_path": "static/dump/umap/static/train/chilli pepper/Image_18.jpg"
    },
    {
      "embedding": [
        9.043495178222656,
        -0.23631057143211365
      ],
      "label": 8,
      "category": "spinach",
      "sprite_path": "static/dump/umap/static/train/peas/Image_89.jpg"
    },
    {
      "embedding": [
        2.9526352882385254,
        4.309693336486816
      ],
      "label": 8,
      "category": "spinach",
      "sprite_path": "static/dump/umap/static/train/peas/Image_65.jpg"
    },
    {
      "embedding": [
        11.18301773071289,
        2.1935884952545166
      ],
      "label": 8,
      "category": "spinach",
      "sprite_path": "static/dump/umap/static/train/peas/Image_1.jpg"
    },
    {
      "embedding": [
        10.548615455627441,
        1.0302650928497314
      ],
      "label": 8,
      "category": "spinach",
      "sprite_path": "static/dump/umap/static/train/peas/Image_16.jpg"
    },
    {
      "embedding": [
        8.603482246398926,
        1.9315329790115356
      ],
      "label": 8,
      "category": "spinach",
      "sprite_path": "static/dump/umap/static/train/peas/Image_57.jpg"
    },
    {
      "embedding": [
        10.141642570495605,
        1.8506327867507935
      ],
      "label": 8,
      "category": "spinach",
      "sprite_path": "static/dump/umap/static/train/peas/Image_12.jpg"
    },
    {
      "embedding": [
        1.5771560668945312,
        5.298247337341309
      ],
      "label": 8,
      "category": "spinach",
      "sprite_path": "static/dump/umap/static/train/peas/Image_56.jpg"
    },
    {
      "embedding": [
        9.108274459838867,
        1.852845549583435
      ],
      "label": 8,
      "category": "spinach",
      "sprite_path": "static/dump/umap/static/train/peas/Image_45.jpg"
    },
    {
      "embedding": [
        9.531932830810547,
        -0.10948149859905243
      ],
      "label": 8,
      "category": "spinach",
      "sprite_path": "static/dump/umap/static/train/peas/Image_94.jpg"
    },
    {
      "embedding": [
        11.675803184509277,
        1.084236741065979
      ],
      "label": 8,
      "category": "spinach",
      "sprite_path": "static/dump/umap/static/train/peas/Image_40.jpg"
    },
    {
      "embedding": [
        5.796660900115967,
        2.930973768234253
      ],
      "label": 8,
      "category": "spinach",
      "sprite_path": "static/dump/umap/static/train/peas/Image_10.jpg"
    },
    {
      "embedding": [
        10.176135063171387,
        1.9999901056289673
      ],
      "label": 8,
      "category": "spinach",
      "sprite_path": "static/dump/umap/static/train/peas/Image_21.jpg"
    },
    {
      "embedding": [
        10.094053268432617,
        1.0192159414291382
      ],
      "label": 8,
      "category": "spinach",
      "sprite_path": "static/dump/umap/static/train/peas/Image_5.png"
    },
    {
      "embedding": [
        10.329755783081055,
        -0.057259056717157364
      ],
      "label": 8,
      "category": "spinach",
      "sprite_path": "static/dump/umap/static/train/peas/Image_78.jpg"
    },
    {
      "embedding": [
        4.2306623458862305,
        3.685529947280884
      ],
      "label": 8,
      "category": "spinach",
      "sprite_path": "static/dump/umap/static/train/peas/Image_59.jpg"
    },
    {
      "embedding": [
        1.0368983745574951,
        4.566919803619385
      ],
      "label": 8,
      "category": "spinach",
      "sprite_path": "static/dump/umap/static/train/peas/Image_4.jpg"
    },
    {
      "embedding": [
        10.414910316467285,
        -0.020258842036128044
      ],
      "label": 8,
      "category": "spinach",
      "sprite_path": "static/dump/umap/static/train/peas/Image_38.jpg"
    },
    {
      "embedding": [
        3.208015203475952,
        4.332693576812744
      ],
      "label": 8,
      "category": "spinach",
      "sprite_path": "static/dump/umap/static/train/peas/Image_41.jpg"
    },
    {
      "embedding": [
        9.872492790222168,
        0.6883782744407654
      ],
      "label": 8,
      "category": "spinach",
      "sprite_path": "static/dump/umap/static/train/peas/Image_7.jpg"
    },
    {
      "embedding": [
        11.116713523864746,
        0.5679900050163269
      ],
      "label": 8,
      "category": "spinach",
      "sprite_path": "static/dump/umap/static/train/peas/Image_69.jpg"
    },
    {
      "embedding": [
        10.660385131835938,
        0.32884863018989563
      ],
      "label": 8,
      "category": "spinach",
      "sprite_path": "static/dump/umap/static/train/peas/Image_48.jpg"
    },
    {
      "embedding": [
        11.484081268310547,
        0.9008588790893555
      ],
      "label": 8,
      "category": "spinach",
      "sprite_path": "static/dump/umap/static/train/peas/Image_60.jpg"
    },
    {
      "embedding": [
        3.7714505195617676,
        3.8511838912963867
      ],
      "label": 8,
      "category": "spinach",
      "sprite_path": "static/dump/umap/static/train/peas/Image_13.jpg"
    },
    {
      "embedding": [
        7.732460975646973,
        1.8026140928268433
      ],
      "label": 8,
      "category": "spinach",
      "sprite_path": "static/dump/umap/static/train/peas/Image_49.jpg"
    },
    {
      "embedding": [
        8.788113594055176,
        -0.39448297023773193
      ],
      "label": 8,
      "category": "spinach",
      "sprite_path": "static/dump/umap/static/train/peas/Image_91.jpg"
    },
    {
      "embedding": [
        7.317766189575195,
        2.2775301933288574
      ],
      "label": 8,
      "category": "spinach",
      "sprite_path": "static/dump/umap/static/train/peas/Image_95.jpg"
    },
    {
      "embedding": [
        1.8847670555114746,
        5.118136882781982
      ],
      "label": 8,
      "category": "spinach",
      "sprite_path": "static/dump/umap/static/train/peas/Image_86.jpg"
    },
    {
      "embedding": [
        10.480193138122559,
        1.079477071762085
      ],
      "label": 8,
      "category": "spinach",
      "sprite_path": "static/dump/umap/static/train/peas/Image_68.jpg"
    },
    {
      "embedding": [
        3.114790201187134,
        5.707083702087402
      ],
      "label": 8,
      "category": "spinach",
      "sprite_path": "static/dump/umap/static/train/peas/Image_23.jpg"
    },
    {
      "embedding": [
        11.455142974853516,
        1.6381487846374512
      ],
      "label": 8,
      "category": "spinach",
      "sprite_path": "static/dump/umap/static/train/peas/Image_8.jpg"
    },
    {
      "embedding": [
        1.2523187398910522,
        4.173398494720459
      ],
      "label": 8,
      "category": "spinach",
      "sprite_path": "static/dump/umap/static/train/peas/Image_22.jpg"
    },
    {
      "embedding": [
        11.94820499420166,
        1.0641156435012817
      ],
      "label": 8,
      "category": "spinach",
      "sprite_path": "static/dump/umap/static/train/peas/Image_79.jpg"
    },
    {
      "embedding": [
        9.064643859863281,
        -0.27245646715164185
      ],
      "label": 8,
      "category": "spinach",
      "sprite_path": "static/dump/umap/static/train/peas/Image_17.jpg"
    },
    {
      "embedding": [
        9.021207809448242,
        -0.41804951429367065
      ],
      "label": 8,
      "category": "spinach",
      "sprite_path": "static/dump/umap/static/train/peas/Image_77.jpg"
    },
    {
      "embedding": [
        7.466329097747803,
        3.2394120693206787
      ],
      "label": 8,
      "category": "spinach",
      "sprite_path": "static/dump/umap/static/train/peas/Image_25.jpg"
    },
    {
      "embedding": [
        1.338789701461792,
        4.133554935455322
      ],
      "label": 8,
      "category": "spinach",
      "sprite_path": "static/dump/umap/static/train/peas/Image_46.jpg"
    },
    {
      "embedding": [
        10.413877487182617,
        0.29179564118385315
      ],
      "label": 8,
      "category": "spinach",
      "sprite_path": "static/dump/umap/static/train/peas/Image_9.jpg"
    },
    {
      "embedding": [
        8.945613861083984,
        -0.21324828267097473
      ],
      "label": 8,
      "category": "spinach",
      "sprite_path": "static/dump/umap/static/train/peas/Image_71.jpg"
    },
    {
      "embedding": [
        9.012857437133789,
        -0.353132963180542
      ],
      "label": 8,
      "category": "spinach",
      "sprite_path": "static/dump/umap/static/train/peas/Image_34.jpg"
    },
    {
      "embedding": [
        1.9936351776123047,
        5.400166034698486
      ],
      "label": 8,
      "category": "spinach",
      "sprite_path": "static/dump/umap/static/train/peas/Image_81.jpg"
    },
    {
      "embedding": [
        10.433941841125488,
        0.21178734302520752
      ],
      "label": 8,
      "category": "spinach",
      "sprite_path": "static/dump/umap/static/train/peas/Image_6.jpg"
    },
    {
      "embedding": [
        9.933706283569336,
        1.8051233291625977
      ],
      "label": 8,
      "category": "spinach",
      "sprite_path": "static/dump/umap/static/train/peas/Image_37.png"
    },
    {
      "embedding": [
        3.0955562591552734,
        5.411843776702881
      ],
      "label": 8,
      "category": "spinach",
      "sprite_path": "static/dump/umap/static/train/peas/Image_20.jpg"
    },
    {
      "embedding": [
        2.827948808670044,
        4.0153937339782715
      ],
      "label": 8,
      "category": "spinach",
      "sprite_path": "static/dump/umap/static/train/peas/Image_98.jpg"
    },
    {
      "embedding": [
        7.497957229614258,
        0.943558394908905
      ],
      "label": 8,
      "category": "spinach",
      "sprite_path": "static/dump/umap/static/train/peas/Image_47.jpg"
    },
    {
      "embedding": [
        10.48257064819336,
        2.233128786087036
      ],
      "label": 8,
      "category": "spinach",
      "sprite_path": "static/dump/umap/static/train/peas/Image_19.jpg"
    },
    {
      "embedding": [
        12.006352424621582,
        0.45241138339042664
      ],
      "label": 8,
      "category": "spinach",
      "sprite_path": "static/dump/umap/static/train/peas/Image_88.jpg"
    },
    {
      "embedding": [
        7.102029323577881,
        3.033695936203003
      ],
      "label": 8,
      "category": "spinach",
      "sprite_path": "static/dump/umap/static/train/peas/Image_29.jpg"
    },
    {
      "embedding": [
        10.435431480407715,
        0.572681725025177
      ],
      "label": 8,
      "category": "spinach",
      "sprite_path": "static/dump/umap/static/train/peas/Image_61.jpg"
    },
    {
      "embedding": [
        7.304145336151123,
        3.2129902839660645
      ],
      "label": 8,
      "category": "spinach",
      "sprite_path": "static/dump/umap/static/train/peas/Image_84.jpg"
    },
    {
      "embedding": [
        6.405130386352539,
        3.3762917518615723
      ],
      "label": 8,
      "category": "spinach",
      "sprite_path": "static/dump/umap/static/train/peas/Image_85.jpg"
    },
    {
      "embedding": [
        1.3782062530517578,
        5.564643383026123
      ],
      "label": 8,
      "category": "spinach",
      "sprite_path": "static/dump/umap/static/train/peas/Image_74.jpg"
    },
    {
      "embedding": [
        8.74583911895752,
        2.4897193908691406
      ],
      "label": 8,
      "category": "spinach",
      "sprite_path": "static/dump/umap/static/train/peas/Image_53.jpg"
    },
    {
      "embedding": [
        6.919754505157471,
        1.7993234395980835
      ],
      "label": 8,
      "category": "spinach",
      "sprite_path": "static/dump/umap/static/train/peas/Image_64.jpg"
    },
    {
      "embedding": [
        9.624034881591797,
        2.54099178314209
      ],
      "label": 8,
      "category": "spinach",
      "sprite_path": "static/dump/umap/static/train/peas/Image_92.jpg"
    },
    {
      "embedding": [
        0.8347763419151306,
        5.007739067077637
      ],
      "label": 8,
      "category": "spinach",
      "sprite_path": "static/dump/umap/static/train/peas/Image_27.jpg"
    },
    {
      "embedding": [
        2.696718692779541,
        4.598417282104492
      ],
      "label": 24,
      "category": "garlic",
      "sprite_path": "static/dump/umap/static/train/peas/Image_55.jpg"
    },
    {
      "embedding": [
        11.231111526489258,
        0.5358384847640991
      ],
      "label": 24,
      "category": "garlic",
      "sprite_path": "static/dump/umap/static/train/peas/Image_44.jpg"
    },
    {
      "embedding": [
        11.177905082702637,
        0.7968252301216125
      ],
      "label": 24,
      "category": "garlic",
      "sprite_path": "static/dump/umap/static/train/peas/Image_72.jpg"
    },
    {
      "embedding": [
        11.913630485534668,
        0.44603320956230164
      ],
      "label": 24,
      "category": "garlic",
      "sprite_path": "static/dump/umap/static/train/peas/Image_33.png"
    },
    {
      "embedding": [
        11.381415367126465,
        0.9054713249206543
      ],
      "label": 24,
      "category": "garlic",
      "sprite_path": "static/dump/umap/static/train/peas/Image_73.jpg"
    },
    {
      "embedding": [
        11.037673950195312,
        0.43279460072517395
      ],
      "label": 24,
      "category": "garlic",
      "sprite_path": "static/dump/umap/static/train/peas/Image_96.jpg"
    },
    {
      "embedding": [
        3.713075637817383,
        4.388232231140137
      ],
      "label": 24,
      "category": "garlic",
      "sprite_path": "static/dump/umap/static/train/peas/Image_52.jpg"
    },
    {
      "embedding": [
        11.374000549316406,
        3.073779582977295
      ],
      "label": 24,
      "category": "garlic",
      "sprite_path": "static/dump/umap/static/train/peas/Image_90.jpg"
    },
    {
      "embedding": [
        11.592421531677246,
        0.47689542174339294
      ],
      "label": 24,
      "category": "garlic",
      "sprite_path": "static/dump/umap/static/train/peas/Image_30.png"
    },
    {
      "embedding": [
        3.8555257320404053,
        4.9233293533325195
      ],
      "label": 24,
      "category": "garlic",
      "sprite_path": "static/dump/umap/static/train/peas/Image_83.jpg"
    },
    {
      "embedding": [
        9.904189109802246,
        2.322578191757202
      ],
      "label": 24,
      "category": "garlic",
      "sprite_path": "static/dump/umap/static/train/peas/Image_11.jpg"
    },
    {
      "embedding": [
        10.76771068572998,
        0.6525570154190063
      ],
      "label": 24,
      "category": "garlic",
      "sprite_path": "static/dump/umap/static/train/peas/Image_82.jpg"
    },
    {
      "embedding": [
        10.570545196533203,
        1.289321780204773
      ],
      "label": 24,
      "category": "garlic",
      "sprite_path": "static/dump/umap/static/train/peas/Image_80.jpg"
    },
    {
      "embedding": [
        9.954360961914062,
        1.9379624128341675
      ],
      "label": 24,
      "category": "garlic",
      "sprite_path": "static/dump/umap/static/train/peas/Image_26.png"
    },
    {
      "embedding": [
        9.46995735168457,
        2.596606969833374
      ],
      "label": 24,
      "category": "garlic",
      "sprite_path": "static/dump/umap/static/train/peas/Image_67.jpg"
    },
    {
      "embedding": [
        10.832500457763672,
        1.187088131904602
      ],
      "label": 24,
      "category": "garlic",
      "sprite_path": "static/dump/umap/static/train/peas/Image_50.jpg"
    },
    {
      "embedding": [
        9.042805671691895,
        1.6053152084350586
      ],
      "label": 24,
      "category": "garlic",
      "sprite_path": "static/dump/umap/static/train/peas/Image_58.jpg"
    },
    {
      "embedding": [
        8.611383438110352,
        1.9664374589920044
      ],
      "label": 24,
      "category": "garlic",
      "sprite_path": "static/dump/umap/static/train/peas/Image_62.jpg"
    },
    {
      "embedding": [
        5.385423183441162,
        3.0278244018554688
      ],
      "label": 24,
      "category": "garlic",
      "sprite_path": "static/dump/umap/static/train/peas/Image_97.png"
    },
    {
      "embedding": [
        7.125983715057373,
        3.3640432357788086
      ],
      "label": 24,
      "category": "garlic",
      "sprite_path": "static/dump/umap/static/train/peas/Image_100.jpg"
    },
    {
      "embedding": [
        8.243967056274414,
        3.0730860233306885
      ],
      "label": 24,
      "category": "garlic",
      "sprite_path": "static/dump/umap/static/train/peas/Image_70.jpg"
    },
    {
      "embedding": [
        3.4977574348449707,
        4.429329872131348
      ],
      "label": 24,
      "category": "garlic",
      "sprite_path": "static/dump/umap/static/train/peas/Image_15.jpg"
    },
    {
      "embedding": [
        2.9674949645996094,
        4.272754192352295
      ],
      "label": 24,
      "category": "garlic",
      "sprite_path": "static/dump/umap/static/train/peas/Image_35.jpg"
    },
    {
      "embedding": [
        11.268667221069336,
        0.5803663730621338
      ],
      "label": 24,
      "category": "garlic",
      "sprite_path": "static/dump/umap/static/train/peas/Image_14.jpg"
    },
    {
      "embedding": [
        10.850969314575195,
        1.059795618057251
      ],
      "label": 24,
      "category": "garlic",
      "sprite_path": "static/dump/umap/static/train/peas/Image_75.jpg"
    },
    {
      "embedding": [
        5.747145652770996,
        2.762208938598633
      ],
      "label": 24,
      "category": "garlic",
      "sprite_path": "static/dump/umap/static/train/peas/Image_24.jpg"
    },
    {
      "embedding": [
        3.469939947128296,
        3.893712282180786
      ],
      "label": 24,
      "category": "garlic",
      "sprite_path": "static/dump/umap/static/train/peas/Image_99.jpg"
    },
    {
      "embedding": [
        11.136991500854492,
        0.8561944961547852
      ],
      "label": 24,
      "category": "garlic",
      "sprite_path": "static/dump/umap/static/train/peas/Image_32.jpg"
    },
    {
      "embedding": [
        11.559935569763184,
        1.0396422147750854
      ],
      "label": 24,
      "category": "garlic",
      "sprite_path": "static/dump/umap/static/train/peas/Image_51.jpg"
    },
    {
      "embedding": [
        6.872514724731445,
        3.3551955223083496
      ],
      "label": 24,
      "category": "garlic",
      "sprite_path": "static/dump/umap/static/train/peas/Image_28.jpg"
    },
    {
      "embedding": [
        3.6364777088165283,
        4.27966833114624
      ],
      "label": 24,
      "category": "garlic",
      "sprite_path": "static/dump/umap/static/train/peas/Image_54.jpg"
    },
    {
      "embedding": [
        8.996066093444824,
        1.6212517023086548
      ],
      "label": 24,
      "category": "garlic",
      "sprite_path": "static/dump/umap/static/train/peas/Image_93.jpg"
    },
    {
      "embedding": [
        10.714006423950195,
        1.7924555540084839
      ],
      "label": 24,
      "category": "garlic",
      "sprite_path": "static/dump/umap/static/train/peas/Image_36.jpg"
    },
    {
      "embedding": [
        9.94736385345459,
        1.3212453126907349
      ],
      "label": 24,
      "category": "garlic",
      "sprite_path": "static/dump/umap/static/train/peas/Image_42.jpg"
    },
    {
      "embedding": [
        9.480749130249023,
        2.7274770736694336
      ],
      "label": 24,
      "category": "garlic",
      "sprite_path": "static/dump/umap/static/train/peas/Image_31.jpg"
    },
    {
      "embedding": [
        8.53424072265625,
        1.8683401346206665
      ],
      "label": 24,
      "category": "garlic",
      "sprite_path": "static/dump/umap/static/train/peas/Image_2.jpg"
    },
    {
      "embedding": [
        9.112632751464844,
        1.7909983396530151
      ],
      "label": 24,
      "category": "garlic",
      "sprite_path": "static/dump/umap/static/train/peas/Image_3.jpg"
    },
    {
      "embedding": [
        2.7665886878967285,
        4.238290309906006
      ],
      "label": 24,
      "category": "garlic",
      "sprite_path": "static/dump/umap/static/train/peas/Image_87.jpg"
    },
    {
      "embedding": [
        5.607535362243652,
        3.1661624908447266
      ],
      "label": 24,
      "category": "garlic",
      "sprite_path": "static/dump/umap/static/train/peas/Image_43.jpg"
    },
    {
      "embedding": [
        7.355809688568115,
        3.4701483249664307
      ],
      "label": 24,
      "category": "garlic",
      "sprite_path": "static/dump/umap/static/train/peas/Image_18.jpg"
    },
    {
      "embedding": [
        10.985753059387207,
        1.067609429359436
      ],
      "label": 24,
      "category": "garlic",
      "sprite_path": "static/dump/umap/static/train/watermelon/Image_65.jpg"
    },
    {
      "embedding": [
        13.108741760253906,
        1.6634496450424194
      ],
      "label": 24,
      "category": "garlic",
      "sprite_path": "static/dump/umap/static/train/watermelon/Image_1.jpg"
    },
    {
      "embedding": [
        12.555241584777832,
        1.665696144104004
      ],
      "label": 24,
      "category": "garlic",
      "sprite_path": "static/dump/umap/static/train/watermelon/Image_16.jpg"
    },
    {
      "embedding": [
        10.940008163452148,
        1.0811127424240112
      ],
      "label": 24,
      "category": "garlic",
      "sprite_path": "static/dump/umap/static/train/watermelon/Image_57.jpg"
    },
    {
      "embedding": [
        6.795678615570068,
        3.2665786743164062
      ],
      "label": 24,
      "category": "garlic",
      "sprite_path": "static/dump/umap/static/train/watermelon/Image_56.jpg"
    },
    {
      "embedding": [
        9.81969165802002,
        2.301403760910034
      ],
      "label": 24,
      "category": "garlic",
      "sprite_path": "static/dump/umap/static/train/watermelon/Image_45.jpg"
    },
    {
      "embedding": [
        2.4666831493377686,
        3.959458589553833
      ],
      "label": 24,
      "category": "garlic",
      "sprite_path": "static/dump/umap/static/train/watermelon/Image_94.jpg"
    },
    {
      "embedding": [
        6.609541416168213,
        3.3877720832824707
      ],
      "label": 24,
      "category": "garlic",
      "sprite_path": "static/dump/umap/static/train/watermelon/Image_40.jpg"
    },
    {
      "embedding": [
        7.956452369689941,
        3.3185479640960693
      ],
      "label": 24,
      "category": "garlic",
      "sprite_path": "static/dump/umap/static/train/watermelon/Image_10.jpg"
    },
    {
      "embedding": [
        3.332631826400757,
        4.309665203094482
      ],
      "label": 24,
      "category": "garlic",
      "sprite_path": "static/dump/umap/static/train/watermelon/Image_21.jpg"
    },
    {
      "embedding": [
        10.466288566589355,
        1.4563409090042114
      ],
      "label": 24,
      "category": "garlic",
      "sprite_path": "static/dump/umap/static/train/watermelon/Image_78.jpg"
    },
    {
      "embedding": [
        10.37932014465332,
        0.8913535475730896
      ],
      "label": 24,
      "category": "garlic",
      "sprite_path": "static/dump/umap/static/train/watermelon/Image_59.jpg"
    },
    {
      "embedding": [
        7.2528886795043945,
        3.66229248046875
      ],
      "label": 24,
      "category": "garlic",
      "sprite_path": "static/dump/umap/static/train/watermelon/Image_4.jpg"
    },
    {
      "embedding": [
        11.287522315979004,
        0.5675275921821594
      ],
      "label": 24,
      "category": "garlic",
      "sprite_path": "static/dump/umap/static/train/watermelon/Image_38.jpg"
    },
    {
      "embedding": [
        10.806747436523438,
        1.3500733375549316
      ],
      "label": 24,
      "category": "garlic",
      "sprite_path": "static/dump/umap/static/train/watermelon/Image_41.jpg"
    },
    {
      "embedding": [
        10.218152046203613,
        1.4497932195663452
      ],
      "label": 24,
      "category": "garlic",
      "sprite_path": "static/dump/umap/static/train/watermelon/Image_7.jpg"
    },
    {
      "embedding": [
        8.998821258544922,
        3.477978467941284
      ],
      "label": 24,
      "category": "garlic",
      "sprite_path": "static/dump/umap/static/train/watermelon/Image_69.jpg"
    },
    {
      "embedding": [
        9.872732162475586,
        2.459829092025757
      ],
      "label": 24,
      "category": "garlic",
      "sprite_path": "static/dump/umap/static/train/watermelon/Image_13.jpg"
    },
    {
      "embedding": [
        7.38414192199707,
        3.4353065490722656
      ],
      "label": 24,
      "category": "garlic",
      "sprite_path": "static/dump/umap/static/train/watermelon/Image_49.jpg"
    },
    {
      "embedding": [
        9.964444160461426,
        1.5622092485427856
      ],
      "label": 24,
      "category": "garlic",
      "sprite_path": "static/dump/umap/static/train/watermelon/Image_91.jpg"
    },
    {
      "embedding": [
        13.1072998046875,
        1.9361238479614258
      ],
      "label": 24,
      "category": "garlic",
      "sprite_path": "static/dump/umap/static/train/watermelon/Image_95.jpg"
    },
    {
      "embedding": [
        8.039375305175781,
        2.430976629257202
      ],
      "label": 24,
      "category": "garlic",
      "sprite_path": "static/dump/umap/static/train/watermelon/Image_19.png"
    },
    {
      "embedding": [
        10.797656059265137,
        1.173763394355774
      ],
      "label": 24,
      "category": "garlic",
      "sprite_path": "static/dump/umap/static/train/watermelon/Image_86.jpg"
    },
    {
      "embedding": [
        3.678006887435913,
        4.7136359214782715
      ],
      "label": 24,
      "category": "garlic",
      "sprite_path": "static/dump/umap/static/train/watermelon/Image_68.jpg"
    },
    {
      "embedding": [
        1.6411219835281372,
        3.9657931327819824
      ],
      "label": 24,
      "category": "garlic",
      "sprite_path": "static/dump/umap/static/train/watermelon/Image_14.jpeg"
    },
    {
      "embedding": [
        9.17212963104248,
        2.8421874046325684
      ],
      "label": 24,
      "category": "garlic",
      "sprite_path": "static/dump/umap/static/train/watermelon/Image_23.jpg"
    },
    {
      "embedding": [
        8.061623573303223,
        3.173821449279785
      ],
      "label": 24,
      "category": "garlic",
      "sprite_path": "static/dump/umap/static/train/watermelon/Image_8.jpg"
    },
    {
      "embedding": [
        10.415777206420898,
        1.240530252456665
      ],
      "label": 24,
      "category": "garlic",
      "sprite_path": "static/dump/umap/static/train/watermelon/Image_22.jpg"
    },
    {
      "embedding": [
        10.876420021057129,
        1.1489804983139038
      ],
      "label": 24,
      "category": "garlic",
      "sprite_path": "static/dump/umap/static/train/watermelon/Image_79.jpg"
    },
    {
      "embedding": [
        8.571846961975098,
        2.672092914581299
      ],
      "label": 24,
      "category": "garlic",
      "sprite_path": "static/dump/umap/static/train/watermelon/Image_17.jpg"
    },
    {
      "embedding": [
        11.631857872009277,
        2.685781240463257
      ],
      "label": 24,
      "category": "garlic",
      "sprite_path": "static/dump/umap/static/train/watermelon/Image_25.jpg"
    },
    {
      "embedding": [
        7.125082969665527,
        3.43052077293396
      ],
      "label": 24,
      "category": "garlic",
      "sprite_path": "static/dump/umap/static/train/watermelon/Image_46.jpg"
    },
    {
      "embedding": [
        7.853878021240234,
        2.3220794200897217
      ],
      "label": 24,
      "category": "garlic",
      "sprite_path": "static/dump/umap/static/train/watermelon/Image_9.jpg"
    },
    {
      "embedding": [
        7.408703327178955,
        3.3356494903564453
      ],
      "label": 24,
      "category": "garlic",
      "sprite_path": "static/dump/umap/static/train/watermelon/Image_34.jpg"
    },
    {
      "embedding": [
        11.681705474853516,
        0.5350708961486816
      ],
      "label": 24,
      "category": "garlic",
      "sprite_path": "static/dump/umap/static/train/watermelon/Image_81.jpg"
    },
    {
      "embedding": [
        8.619622230529785,
        2.718987226486206
      ],
      "label": 24,
      "category": "garlic",
      "sprite_path": "static/dump/umap/static/train/watermelon/Image_6.jpg"
    },
    {
      "embedding": [
        10.617522239685059,
        1.292998194694519
      ],
      "label": 24,
      "category": "garlic",
      "sprite_path": "static/dump/umap/static/train/watermelon/Image_20.jpg"
    },
    {
      "embedding": [
        6.875732421875,
        3.3209009170532227
      ],
      "label": 24,
      "category": "garlic",
      "sprite_path": "static/dump/umap/static/train/watermelon/Image_98.jpg"
    },
    {
      "embedding": [
        9.4415922164917,
        2.325871467590332
      ],
      "label": 24,
      "category": "garlic",
      "sprite_path": "static/dump/umap/static/train/watermelon/Image_47.jpg"
    },
    {
      "embedding": [
        8.351090431213379,
        2.0815186500549316
      ],
      "label": 24,
      "category": "garlic",
      "sprite_path": "static/dump/umap/static/train/watermelon/Image_88.jpg"
    },
    {
      "embedding": [
        10.385809898376465,
        1.3440167903900146
      ],
      "label": 24,
      "category": "garlic",
      "sprite_path": "static/dump/umap/static/train/watermelon/Image_29.jpg"
    },
    {
      "embedding": [
        10.707606315612793,
        1.41171133518219
      ],
      "label": 24,
      "category": "garlic",
      "sprite_path": "static/dump/umap/static/train/watermelon/Image_61.jpg"
    },
    {
      "embedding": [
        10.709848403930664,
        0.9540195465087891
      ],
      "label": 24,
      "category": "garlic",
      "sprite_path": "static/dump/umap/static/train/watermelon/Image_84.jpg"
    },
    {
      "embedding": [
        12.013961791992188,
        0.5407366752624512
      ],
      "label": 24,
      "category": "garlic",
      "sprite_path": "static/dump/umap/static/train/watermelon/Image_85.jpg"
    },
    {
      "embedding": [
        9.338109016418457,
        1.5778220891952515
      ],
      "label": 24,
      "category": "garlic",
      "sprite_path": "static/dump/umap/static/train/watermelon/Image_53.jpg"
    },
    {
      "embedding": [
        5.370841979980469,
        3.034552812576294
      ],
      "label": 24,
      "category": "garlic",
      "sprite_path": "static/dump/umap/static/train/watermelon/Image_89.png"
    },
    {
      "embedding": [
        7.865941047668457,
        3.221264123916626
      ],
      "label": 24,
      "category": "garlic",
      "sprite_path": "static/dump/umap/static/train/watermelon/Image_92.jpg"
    },
    {
      "embedding": [
        7.327236175537109,
        3.5625555515289307
      ],
      "label": 24,
      "category": "garlic",
      "sprite_path": "static/dump/umap/static/train/watermelon/Image_27.jpg"
    },
    {
      "embedding": [
        7.033895969390869,
        2.6638009548187256
      ],
      "label": 24,
      "category": "garlic",
      "sprite_path": "static/dump/umap/static/train/watermelon/Image_55.jpg"
    },
    {
      "embedding": [
        12.283257484436035,
        1.1230051517486572
      ],
      "label": 24,
      "category": "garlic",
      "sprite_path": "static/dump/umap/static/train/watermelon/Image_44.jpg"
    },
    {
      "embedding": [
        11.147833824157715,
        0.762955904006958
      ],
      "label": 24,
      "category": "garlic",
      "sprite_path": "static/dump/umap/static/train/watermelon/Image_33.png"
    },
    {
      "embedding": [
        9.920376777648926,
        1.2993674278259277
      ],
      "label": 24,
      "category": "garlic",
      "sprite_path": "static/dump/umap/static/train/watermelon/Image_73.jpg"
    },
    {
      "embedding": [
        11.112238883972168,
        1.4116320610046387
      ],
      "label": 24,
      "category": "garlic",
      "sprite_path": "static/dump/umap/static/train/watermelon/Image_96.jpg"
    },
    {
      "embedding": [
        8.728007316589355,
        2.8154406547546387
      ],
      "label": 24,
      "category": "garlic",
      "sprite_path": "static/dump/umap/static/train/watermelon/Image_52.jpg"
    },
    {
      "embedding": [
        9.391688346862793,
        1.4632962942123413
      ],
      "label": 24,
      "category": "garlic",
      "sprite_path": "static/dump/umap/static/train/watermelon/Image_90.jpg"
    },
    {
      "embedding": [
        11.632997512817383,
        0.48869526386260986
      ],
      "label": 24,
      "category": "garlic",
      "sprite_path": "static/dump/umap/static/train/watermelon/Image_83.jpg"
    },
    {
      "embedding": [
        5.765137195587158,
        2.7395522594451904
      ],
      "label": 24,
      "category": "garlic",
      "sprite_path": "static/dump/umap/static/train/watermelon/Image_67.jpg"
    },
    {
      "embedding": [
        9.247325897216797,
        2.7540693283081055
      ],
      "label": 24,
      "category": "garlic",
      "sprite_path": "static/dump/umap/static/train/watermelon/Image_50.jpg"
    },
    {
      "embedding": [
        12.163796424865723,
        1.9686663150787354
      ],
      "label": 24,
      "category": "garlic",
      "sprite_path": "static/dump/umap/static/train/watermelon/Image_58.jpg"
    },
    {
      "embedding": [
        11.419437408447266,
        0.6078380346298218
      ],
      "label": 24,
      "category": "garlic",
      "sprite_path": "static/dump/umap/static/train/watermelon/Image_97.jpg"
    },
    {
      "embedding": [
        2.4456868171691895,
        4.333047866821289
      ],
      "label": 35,
      "category": "tomato",
      "sprite_path": "static/dump/umap/static/train/watermelon/Image_62.jpg"
    },
    {
      "embedding": [
        6.474809646606445,
        3.373093843460083
      ],
      "label": 35,
      "category": "tomato",
      "sprite_path": "static/dump/umap/static/train/watermelon/Image_30.jpg"
    },
    {
      "embedding": [
        7.053961277008057,
        1.8700637817382812
      ],
      "label": 35,
      "category": "tomato",
      "sprite_path": "static/dump/umap/static/train/watermelon/Image_5.jpg"
    },
    {
      "embedding": [
        9.134809494018555,
        0.23251421749591827
      ],
      "label": 35,
      "category": "tomato",
      "sprite_path": "static/dump/umap/static/train/watermelon/Image_100.jpg"
    },
    {
      "embedding": [
        3.882453680038452,
        3.7970027923583984
      ],
      "label": 35,
      "category": "tomato",
      "sprite_path": "static/dump/umap/static/train/watermelon/Image_70.jpg"
    },
    {
      "embedding": [
        12.870279312133789,
        0.8230598568916321
      ],
      "label": 35,
      "category": "tomato",
      "sprite_path": "static/dump/umap/static/train/watermelon/Image_15.jpg"
    },
    {
      "embedding": [
        11.173043251037598,
        0.7841792106628418
      ],
      "label": 35,
      "category": "tomato",
      "sprite_path": "static/dump/umap/static/train/watermelon/Image_35.jpg"
    },
    {
      "embedding": [
        3.2004032135009766,
        4.45734167098999
      ],
      "label": 35,
      "category": "tomato",
      "sprite_path": "static/dump/umap/static/train/watermelon/Image_39.jpg"
    },
    {
      "embedding": [
        10.964988708496094,
        1.8933449983596802
      ],
      "label": 35,
      "category": "tomato",
      "sprite_path": "static/dump/umap/static/train/watermelon/Image_63.jpg"
    },
    {
      "embedding": [
        3.211113452911377,
        5.138526439666748
      ],
      "label": 35,
      "category": "tomato",
      "sprite_path": "static/dump/umap/static/train/watermelon/Image_24.jpg"
    },
    {
      "embedding": [
        8.672813415527344,
        0.18665394186973572
      ],
      "label": 35,
      "category": "tomato",
      "sprite_path": "static/dump/umap/static/train/watermelon/Image_99.jpg"
    },
    {
      "embedding": [
        7.627232551574707,
        2.9137802124023438
      ],
      "label": 35,
      "category": "tomato",
      "sprite_path": "static/dump/umap/static/train/watermelon/Image_32.jpg"
    },
    {
      "embedding": [
        2.1703579425811768,
        4.265740394592285
      ],
      "label": 35,
      "category": "tomato",
      "sprite_path": "static/dump/umap/static/train/watermelon/Image_37.jpg"
    },
    {
      "embedding": [
        12.01508617401123,
        0.9915663599967957
      ],
      "label": 35,
      "category": "tomato",
      "sprite_path": "static/dump/umap/static/train/watermelon/Image_51.jpg"
    },
    {
      "embedding": [
        7.274828910827637,
        1.5072425603866577
      ],
      "label": 35,
      "category": "tomato",
      "sprite_path": "static/dump/umap/static/train/watermelon/Image_28.jpg"
    },
    {
      "embedding": [
        7.142380237579346,
        1.2733367681503296
      ],
      "label": 35,
      "category": "tomato",
      "sprite_path": "static/dump/umap/static/train/watermelon/Image_36.jpg"
    },
    {
      "embedding": [
        13.142123222351074,
        1.670765995979309
      ],
      "label": 35,
      "category": "tomato",
      "sprite_path": "static/dump/umap/static/train/watermelon/Image_42.jpg"
    },
    {
      "embedding": [
        9.538934707641602,
        1.0567926168441772
      ],
      "label": 35,
      "category": "tomato",
      "sprite_path": "static/dump/umap/static/train/watermelon/Image_2.jpg"
    },
    {
      "embedding": [
        8.197514533996582,
        1.705978512763977
      ],
      "label": 35,
      "category": "tomato",
      "sprite_path": "static/dump/umap/static/train/watermelon/Image_3.jpg"
    },
    {
      "embedding": [
        11.113789558410645,
        1.9196749925613403
      ],
      "label": 35,
      "category": "tomato",
      "sprite_path": "static/dump/umap/static/train/watermelon/Image_26.jpg"
    },
    {
      "embedding": [
        11.221312522888184,
        1.1203033924102783
      ],
      "label": 35,
      "category": "tomato",
      "sprite_path": "static/dump/umap/static/train/watermelon/Image_66.jpg"
    },
    {
      "embedding": [
        3.344977855682373,
        4.320775032043457
      ],
      "label": 35,
      "category": "tomato",
      "sprite_path": "static/dump/umap/static/train/watermelon/Image_43.jpg"
    },
    {
      "embedding": [
        9.141525268554688,
        2.4527769088745117
      ],
      "label": 35,
      "category": "tomato",
      "sprite_path": "static/dump/umap/static/train/watermelon/Image_18.jpg"
    },
    {
      "embedding": [
        6.745293617248535,
        1.8480024337768555
      ],
      "label": 35,
      "category": "tomato",
      "sprite_path": "static/dump/umap/static/train/corn/Image_89.jpg"
    },
    {
      "embedding": [
        8.545889854431152,
        0.1675410270690918
      ],
      "label": 35,
      "category": "tomato",
      "sprite_path": "static/dump/umap/static/train/corn/Image_65.jpg"
    },
    {
      "embedding": [
        10.526132583618164,
        1.781936764717102
      ],
      "label": 35,
      "category": "tomato",
      "sprite_path": "static/dump/umap/static/train/corn/Image_1.jpg"
    },
    {
      "embedding": [
        2.7280185222625732,
        5.040299892425537
      ],
      "label": 35,
      "category": "tomato",
      "sprite_path": "static/dump/umap/static/train/corn/Image_16.jpg"
    },
    {
      "embedding": [
        2.759042501449585,
        4.741783618927002
      ],
      "label": 35,
      "category": "tomato",
      "sprite_path": "static/dump/umap/static/train/corn/Image_57.jpg"
    },
    {
      "embedding": [
        3.432910203933716,
        4.394983768463135
      ],
      "label": 35,
      "category": "tomato",
      "sprite_path": "static/dump/umap/static/train/corn/Image_12.jpg"
    },
    {
      "embedding": [
        4.503023147583008,
        4.482523441314697
      ],
      "label": 35,
      "category": "tomato",
      "sprite_path": "static/dump/umap/static/train/corn/Image_56.jpg"
    },
    {
      "embedding": [
        7.359551429748535,
        1.8988534212112427
      ],
      "label": 35,
      "category": "tomato",
      "sprite_path": "static/dump/umap/static/train/corn/Image_33.jpg"
    },
    {
      "embedding": [
        8.359759330749512,
        3.3223166465759277
      ],
      "label": 35,
      "category": "tomato",
      "sprite_path": "static/dump/umap/static/train/corn/Image_45.jpg"
    },
    {
      "embedding": [
        6.084138870239258,
        3.3206124305725098
      ],
      "label": 35,
      "category": "tomato",
      "sprite_path": "static/dump/umap/static/train/corn/Image_94.jpg"
    },
    {
      "embedding": [
        12.75948429107666,
        1.8928669691085815
      ],
      "label": 35,
      "category": "tomato",
      "sprite_path": "static/dump/umap/static/train/corn/Image_40.jpg"
    },
    {
      "embedding": [
        3.2051632404327393,
        4.663483619689941
      ],
      "label": 35,
      "category": "tomato",
      "sprite_path": "static/dump/umap/static/train/corn/Image_10.jpg"
    },
    {
      "embedding": [
        7.815778732299805,
        0.5787683725357056
      ],
      "label": 35,
      "category": "tomato",
      "sprite_path": "static/dump/umap/static/train/corn/Image_21.jpg"
    },
    {
      "embedding": [
        3.7853028774261475,
        4.909582614898682
      ],
      "label": 35,
      "category": "tomato",
      "sprite_path": "static/dump/umap/static/train/corn/Image_78.jpg"
    },
    {
      "embedding": [
        7.8307719230651855,
        2.8377952575683594
      ],
      "label": 35,
      "category": "tomato",
      "sprite_path": "static/dump/umap/static/train/corn/Image_59.jpg"
    },
    {
      "embedding": [
        11.924461364746094,
        0.5319181680679321
      ],
      "label": 35,
      "category": "tomato",
      "sprite_path": "static/dump/umap/static/train/corn/Image_20.png"
    },
    {
      "embedding": [
        8.112876892089844,
        1.020477533340454
      ],
      "label": 35,
      "category": "tomato",
      "sprite_path": "static/dump/umap/static/train/corn/Image_4.jpg"
    },
    {
      "embedding": [
        2.170187473297119,
        4.319807052612305
      ],
      "label": 35,
      "category": "tomato",
      "sprite_path": "static/dump/umap/static/train/corn/Image_38.jpg"
    },
    {
      "embedding": [
        6.946725368499756,
        2.109924793243408
      ],
      "label": 35,
      "category": "tomato",
      "sprite_path": "static/dump/umap/static/train/corn/Image_41.jpg"
    },
    {
      "embedding": [
        7.645733833312988,
        0.9675739407539368
      ],
      "label": 35,
      "category": "tomato",
      "sprite_path": "static/dump/umap/static/train/corn/Image_7.jpg"
    },
    {
      "embedding": [
        8.751385688781738,
        1.2867332696914673
      ],
      "label": 35,
      "category": "tomato",
      "sprite_path": "static/dump/umap/static/train/corn/Image_48.jpg"
    },
    {
      "embedding": [
        11.004560470581055,
        2.1734180450439453
      ],
      "label": 35,
      "category": "tomato",
      "sprite_path": "static/dump/umap/static/train/corn/Image_60.jpg"
    },
    {
      "embedding": [
        9.543022155761719,
        2.1990902423858643
      ],
      "label": 35,
      "category": "tomato",
      "sprite_path": "static/dump/umap/static/train/corn/Image_13.jpg"
    },
    {
      "embedding": [
        11.66495418548584,
        3.048668622970581
      ],
      "label": 35,
      "category": "tomato",
      "sprite_path": "static/dump/umap/static/train/corn/Image_49.jpg"
    },
    {
      "embedding": [
        9.833488464355469,
        0.8857236504554749
      ],
      "label": 35,
      "category": "tomato",
      "sprite_path": "static/dump/umap/static/train/corn/Image_91.jpg"
    },
    {
      "embedding": [
        12.84103012084961,
        1.3139445781707764
      ],
      "label": 35,
      "category": "tomato",
      "sprite_path": "static/dump/umap/static/train/corn/Image_95.jpg"
    },
    {
      "embedding": [
        7.373565196990967,
        1.571738362312317
      ],
      "label": 35,
      "category": "tomato",
      "sprite_path": "static/dump/umap/static/train/corn/Image_32.png"
    },
    {
      "embedding": [
        8.503730773925781,
        0.555129885673523
      ],
      "label": 35,
      "category": "tomato",
      "sprite_path": "static/dump/umap/static/train/corn/Image_86.jpg"
    },
    {
      "embedding": [
        8.414217948913574,
        0.3317379355430603
      ],
      "label": 35,
      "category": "tomato",
      "sprite_path": "static/dump/umap/static/train/corn/Image_68.jpg"
    },
    {
      "embedding": [
        3.0929415225982666,
        5.178883075714111
      ],
      "label": 35,
      "category": "tomato",
      "sprite_path": "static/dump/umap/static/train/corn/Image_23.jpg"
    },
    {
      "embedding": [
        6.0565314292907715,
        2.666294574737549
      ],
      "label": 35,
      "category": "tomato",
      "sprite_path": "static/dump/umap/static/train/corn/Image_8.jpg"
    },
    {
      "embedding": [
        8.303229331970215,
        2.2527105808258057
      ],
      "label": 35,
      "category": "tomato",
      "sprite_path": "static/dump/umap/static/train/corn/Image_22.jpg"
    },
    {
      "embedding": [
        11.287857055664062,
        1.6507052183151245
      ],
      "label": 35,
      "category": "tomato",
      "sprite_path": "static/dump/umap/static/train/corn/Image_79.jpg"
    },
    {
      "embedding": [
        11.1765718460083,
        0.6289694905281067
      ],
      "label": 35,
      "category": "tomato",
      "sprite_path": "static/dump/umap/static/train/corn/Image_17.jpg"
    },
    {
      "embedding": [
        11.967754364013672,
        0.7480630874633789
      ],
      "label": 35,
      "category": "tomato",
      "sprite_path": "static/dump/umap/static/train/corn/Image_25.jpg"
    },
    {
      "embedding": [
        6.967869758605957,
        2.0015947818756104
      ],
      "label": 35,
      "category": "tomato",
      "sprite_path": "static/dump/umap/static/train/corn/Image_9.jpg"
    },
    {
      "embedding": [
        11.227507591247559,
        2.0816216468811035
      ],
      "label": 35,
      "category": "tomato",
      "sprite_path": "static/dump/umap/static/train/corn/Image_71.jpg"
    },
    {
      "embedding": [
        6.474097728729248,
        3.3792989253997803
      ],
      "label": 35,
      "category": "tomato",
      "sprite_path": "static/dump/umap/static/train/corn/Image_81.jpg"
    },
    {
      "embedding": [
        6.917363166809082,
        2.548004150390625
      ],
      "label": 35,
      "category": "tomato",
      "sprite_path": "static/dump/umap/static/train/corn/Image_6.jpg"
    },
    {
      "embedding": [
        7.983402252197266,
        1.141482949256897
      ],
      "label": 35,
      "category": "tomato",
      "sprite_path": "static/dump/umap/static/train/corn/Image_98.jpg"
    },
    {
      "embedding": [
        8.784213066101074,
        1.2188940048217773
      ],
      "label": 35,
      "category": "tomato",
      "sprite_path": "static/dump/umap/static/train/corn/Image_47.jpg"
    },
    {
      "embedding": [
        2.064085006713867,
        4.201457500457764
      ],
      "label": 35,
      "category": "tomato",
      "sprite_path": "static/dump/umap/static/train/corn/Image_29.jpg"
    },
    {
      "embedding": [
        4.372686862945557,
        4.496949672698975
      ],
      "label": 35,
      "category": "tomato",
      "sprite_path": "static/dump/umap/static/train/corn/Image_61.jpg"
    },
    {
      "embedding": [
        10.757221221923828,
        2.0549817085266113
      ],
      "label": 35,
      "category": "tomato",
      "sprite_path": "static/dump/umap/static/train/corn/Image_84.jpg"
    },
    {
      "embedding": [
        7.0194315910339355,
        2.2488315105438232
      ],
      "label": 35,
      "category": "tomato",
      "sprite_path": "static/dump/umap/static/train/corn/Image_85.jpg"
    },
    {
      "embedding": [
        10.375605583190918,
        2.8440558910369873
      ],
      "label": 35,
      "category": "tomato",
      "sprite_path": "static/dump/umap/static/train/corn/Image_74.jpg"
    },
    {
      "embedding": [
        11.19434642791748,
        1.7567299604415894
      ],
      "label": 35,
      "category": "tomato",
      "sprite_path": "static/dump/umap/static/train/corn/Image_53.jpg"
    },
    {
      "embedding": [
        8.527039527893066,
        1.938896894454956
      ],
      "label": 35,
      "category": "tomato",
      "sprite_path": "static/dump/umap/static/train/corn/Image_92.jpg"
    },
    {
      "embedding": [
        11.21782398223877,
        1.2306541204452515
      ],
      "label": 35,
      "category": "tomato",
      "sprite_path": "static/dump/umap/static/train/corn/Image_27.jpg"
    },
    {
      "embedding": [
        9.996011734008789,
        2.4500083923339844
      ],
      "label": 35,
      "category": "tomato",
      "sprite_path": "static/dump/umap/static/train/corn/Image_55.jpg"
    },
    {
      "embedding": [
        10.12436294555664,
        2.141894817352295
      ],
      "label": 35,
      "category": "tomato",
      "sprite_path": "static/dump/umap/static/train/corn/Image_72.jpg"
    },
    {
      "embedding": [
        1.723795771598816,
        4.557338237762451
      ],
      "label": 35,
      "category": "tomato",
      "sprite_path": "static/dump/umap/static/train/corn/Image_73.jpg"
    },
    {
      "embedding": [
        8.896509170532227,
        2.328721523284912
      ],
      "label": 35,
      "category": "tomato",
      "sprite_path": "static/dump/umap/static/train/corn/Image_96.jpg"
    },
    {
      "embedding": [
        8.345434188842773,
        3.2862679958343506
      ],
      "label": 35,
      "category": "tomato",
      "sprite_path": "static/dump/umap/static/train/corn/Image_52.jpg"
    },
    {
      "embedding": [
        8.391929626464844,
        2.277233362197876
      ],
      "label": 35,
      "category": "tomato",
      "sprite_path": "static/dump/umap/static/train/corn/Image_90.jpg"
    },
    {
      "embedding": [
        11.913841247558594,
        0.5657818913459778
      ],
      "label": 35,
      "category": "tomato",
      "sprite_path": "static/dump/umap/static/train/corn/Image_83.jpg"
    },
    {
      "embedding": [
        11.213292121887207,
        1.2415478229522705
      ],
      "label": 35,
      "category": "tomato",
      "sprite_path": "static/dump/umap/static/train/corn/Image_11.jpg"
    },
    {
      "embedding": [
        9.72780704498291,
        1.5364915132522583
      ],
      "label": 35,
      "category": "tomato",
      "sprite_path": "static/dump/umap/static/train/corn/Image_82.jpg"
    },
    {
      "embedding": [
        11.091278076171875,
        2.063955068588257
      ],
      "label": 35,
      "category": "tomato",
      "sprite_path": "static/dump/umap/static/train/corn/Image_67.jpg"
    },
    {
      "embedding": [
        4.693934917449951,
        4.356085777282715
      ],
      "label": 35,
      "category": "tomato",
      "sprite_path": "static/dump/umap/static/train/corn/Image_50.jpg"
    },
    {
      "embedding": [
        3.102001190185547,
        4.782763481140137
      ],
      "label": 35,
      "category": "tomato",
      "sprite_path": "static/dump/umap/static/train/corn/Image_58.jpg"
    },
    {
      "embedding": [
        7.836482524871826,
        1.1800284385681152
      ],
      "label": 9,
      "category": "onion",
      "sprite_path": "static/dump/umap/static/train/corn/Image_97.jpg"
    },
    {
      "embedding": [
        9.729253768920898,
        1.1056431531906128
      ],
      "label": 9,
      "category": "onion",
      "sprite_path": "static/dump/umap/static/train/corn/Image_62.jpg"
    },
    {
      "embedding": [
        7.182371139526367,
        0.9988878965377808
      ],
      "label": 9,
      "category": "onion",
      "sprite_path": "static/dump/umap/static/train/corn/Image_30.jpg"
    },
    {
      "embedding": [
        8.053092002868652,
        1.2091447114944458
      ],
      "label": 9,
      "category": "onion",
      "sprite_path": "static/dump/umap/static/train/corn/Image_5.jpg"
    },
    {
      "embedding": [
        10.637504577636719,
        0.5991635322570801
      ],
      "label": 9,
      "category": "onion",
      "sprite_path": "static/dump/umap/static/train/corn/Image_100.jpg"
    },
    {
      "embedding": [
        9.404155731201172,
        1.5331780910491943
      ],
      "label": 9,
      "category": "onion",
      "sprite_path": "static/dump/umap/static/train/corn/Image_15.jpg"
    },
    {
      "embedding": [
        8.503742218017578,
        1.9004395008087158
      ],
      "label": 9,
      "category": "onion",
      "sprite_path": "static/dump/umap/static/train/corn/Image_35.jpg"
    },
    {
      "embedding": [
        6.538343906402588,
        1.7996221780776978
      ],
      "label": 9,
      "category": "onion",
      "sprite_path": "static/dump/umap/static/train/corn/Image_14.jpg"
    },
    {
      "embedding": [
        10.720552444458008,
        1.3500163555145264
      ],
      "label": 9,
      "category": "onion",
      "sprite_path": "static/dump/umap/static/train/corn/Image_39.jpg"
    },
    {
      "embedding": [
        8.801430702209473,
        3.6023759841918945
      ],
      "label": 9,
      "category": "onion",
      "sprite_path": "static/dump/umap/static/train/corn/Image_63.jpg"
    },
    {
      "embedding": [
        7.18708610534668,
        1.9299983978271484
      ],
      "label": 9,
      "category": "onion",
      "sprite_path": "static/dump/umap/static/train/corn/Image_75.jpg"
    },
    {
      "embedding": [
        11.956421852111816,
        0.6437559127807617
      ],
      "label": 9,
      "category": "onion",
      "sprite_path": "static/dump/umap/static/train/corn/Image_24.jpg"
    },
    {
      "embedding": [
        6.6194915771484375,
        0.9996721744537354
      ],
      "label": 9,
      "category": "onion",
      "sprite_path": "static/dump/umap/static/train/corn/Image_99.jpg"
    },
    {
      "embedding": [
        6.20556640625,
        2.8239214420318604
      ],
      "label": 9,
      "category": "onion",
      "sprite_path": "static/dump/umap/static/train/corn/Image_37.jpg"
    },
    {
      "embedding": [
        4.374133586883545,
        3.968825340270996
      ],
      "label": 9,
      "category": "onion",
      "sprite_path": "static/dump/umap/static/train/corn/Image_51.jpg"
    },
    {
      "embedding": [
        13.374911308288574,
        2.11360502243042
      ],
      "label": 9,
      "category": "onion",
      "sprite_path": "static/dump/umap/static/train/corn/Image_28.jpg"
    },
    {
      "embedding": [
        2.3432581424713135,
        5.606534957885742
      ],
      "label": 9,
      "category": "onion",
      "sprite_path": "static/dump/umap/static/train/corn/Image_54.jpg"
    },
    {
      "embedding": [
        8.326404571533203,
        2.517784833908081
      ],
      "label": 9,
      "category": "onion",
      "sprite_path": "static/dump/umap/static/train/corn/Image_93.jpg"
    },
    {
      "embedding": [
        7.195685863494873,
        1.2396314144134521
      ],
      "label": 9,
      "category": "onion",
      "sprite_path": "static/dump/umap/static/train/corn/Image_42.jpg"
    },
    {
      "embedding": [
        10.304994583129883,
        2.0778181552886963
      ],
      "label": 9,
      "category": "onion",
      "sprite_path": "static/dump/umap/static/train/corn/Image_31.jpg"
    },
    {
      "embedding": [
        8.34013843536377,
        1.1510975360870361
      ],
      "label": 9,
      "category": "onion",
      "sprite_path": "static/dump/umap/static/train/corn/Image_2.jpg"
    },
    {
      "embedding": [
        8.117659568786621,
        0.5794405341148376
      ],
      "label": 9,
      "category": "onion",
      "sprite_path": "static/dump/umap/static/train/corn/Image_3.jpg"
    },
    {
      "embedding": [
        6.420589923858643,
        2.0391435623168945
      ],
      "label": 9,
      "category": "onion",
      "sprite_path": "static/dump/umap/static/train/corn/Image_26.jpg"
    },
    {
      "embedding": [
        10.093717575073242,
        3.134232521057129
      ],
      "label": 9,
      "category": "onion",
      "sprite_path": "static/dump/umap/static/train/corn/Image_66.jpg"
    },
    {
      "embedding": [
        10.974156379699707,
        1.0997833013534546
      ],
      "label": 9,
      "category": "onion",
      "sprite_path": "static/dump/umap/static/train/corn/Image_18.jpg"
    },
    {
      "embedding": [
        7.143209457397461,
        0.9910890460014343
      ],
      "label": 9,
      "category": "onion",
      "sprite_path": "static/dump/umap/static/train/turnip/Image_66.png"
    },
    {
      "embedding": [
        13.267335891723633,
        2.02893328666687
      ],
      "label": 9,
      "category": "onion",
      "sprite_path": "static/dump/umap/static/train/turnip/Image_89.jpg"
    },
    {
      "embedding": [
        9.008527755737305,
        3.249112606048584
      ],
      "label": 9,
      "category": "onion",
      "sprite_path": "static/dump/umap/static/train/turnip/Image_65.jpg"
    },
    {
      "embedding": [
        11.197688102722168,
        0.7508362531661987
      ],
      "label": 9,
      "category": "onion",
      "sprite_path": "static/dump/umap/static/train/turnip/Image_1.jpg"
    },
    {
      "embedding": [
        7.405357360839844,
        1.5037131309509277
      ],
      "label": 9,
      "category": "onion",
      "sprite_path": "static/dump/umap/static/train/turnip/Image_57.jpg"
    },
    {
      "embedding": [
        1.4936144351959229,
        5.1977009773254395
      ],
      "label": 9,
      "category": "onion",
      "sprite_path": "static/dump/umap/static/train/turnip/Image_12.jpg"
    },
    {
      "embedding": [
        7.492660045623779,
        1.5822099447250366
      ],
      "label": 9,
      "category": "onion",
      "sprite_path": "static/dump/umap/static/train/turnip/Image_56.jpg"
    },
    {
      "embedding": [
        9.173937797546387,
        1.0822069644927979
      ],
      "label": 9,
      "category": "onion",
      "sprite_path": "static/dump/umap/static/train/turnip/Image_33.jpg"
    },
    {
      "embedding": [
        12.673919677734375,
        0.9483150243759155
      ],
      "label": 9,
      "category": "onion",
      "sprite_path": "static/dump/umap/static/train/turnip/Image_45.jpg"
    },
    {
      "embedding": [
        8.16115951538086,
        0.9784806370735168
      ],
      "label": 9,
      "category": "onion",
      "sprite_path": "static/dump/umap/static/train/turnip/Image_94.jpg"
    },
    {
      "embedding": [
        2.8522963523864746,
        5.5437164306640625
      ],
      "label": 9,
      "category": "onion",
      "sprite_path": "static/dump/umap/static/train/turnip/Image_40.jpg"
    },
    {
      "embedding": [
        9.079302787780762,
        1.0722253322601318
      ],
      "label": 9,
      "category": "onion",
      "sprite_path": "static/dump/umap/static/train/turnip/Image_10.jpg"
    },
    {
      "embedding": [
        3.7768027782440186,
        4.313344955444336
      ],
      "label": 9,
      "category": "onion",
      "sprite_path": "static/dump/umap/static/train/turnip/Image_21.jpg"
    },
    {
      "embedding": [
        6.961967945098877,
        0.7245486974716187
      ],
      "label": 9,
      "category": "onion",
      "sprite_path": "static/dump/umap/static/train/turnip/Image_78.jpg"
    },
    {
      "embedding": [
        2.3298180103302,
        5.610096454620361
      ],
      "label": 9,
      "category": "onion",
      "sprite_path": "static/dump/umap/static/train/turnip/Image_59.jpg"
    },
    {
      "embedding": [
        8.195079803466797,
        3.4196572303771973
      ],
      "label": 9,
      "category": "onion",
      "sprite_path": "static/dump/umap/static/train/turnip/Image_4.jpg"
    },
    {
      "embedding": [
        7.7808518409729,
        3.29252028465271
      ],
      "label": 9,
      "category": "onion",
      "sprite_path": "static/dump/umap/static/train/turnip/Image_38.jpg"
    },
    {
      "embedding": [
        8.837719917297363,
        3.671743154525757
      ],
      "label": 9,
      "category": "onion",
      "sprite_path": "static/dump/umap/static/train/turnip/Image_41.jpg"
    },
    {
      "embedding": [
        6.671078681945801,
        3.2511496543884277
      ],
      "label": 9,
      "category": "onion",
      "sprite_path": "static/dump/umap/static/train/turnip/Image_7.jpg"
    },
    {
      "embedding": [
        7.911688327789307,
        1.0221308469772339
      ],
      "label": 9,
      "category": "onion",
      "sprite_path": "static/dump/umap/static/train/turnip/Image_48.jpg"
    },
    {
      "embedding": [
        9.058157920837402,
        1.7278443574905396
      ],
      "label": 9,
      "category": "onion",
      "sprite_path": "static/dump/umap/static/train/turnip/Image_60.jpg"
    },
    {
      "embedding": [
        7.195060729980469,
        1.2165818214416504
      ],
      "label": 9,
      "category": "onion",
      "sprite_path": "static/dump/umap/static/train/turnip/Image_13.jpg"
    },
    {
      "embedding": [
        11.318893432617188,
        2.4137790203094482
      ],
      "label": 9,
      "category": "onion",
      "sprite_path": "static/dump/umap/static/train/turnip/Image_91.jpg"
    },
    {
      "embedding": [
        8.006872177124023,
        1.4872221946716309
      ],
      "label": 9,
      "category": "onion",
      "sprite_path": "static/dump/umap/static/train/turnip/Image_95.jpg"
    },
    {
      "embedding": [
        6.408655643463135,
        2.604823589324951
      ],
      "label": 9,
      "category": "onion",
      "sprite_path": "static/dump/umap/static/train/turnip/Image_69.png"
    },
    {
      "embedding": [
        8.36998176574707,
        2.0329549312591553
      ],
      "label": 9,
      "category": "onion",
      "sprite_path": "static/dump/umap/static/train/turnip/Image_86.jpg"
    },
    {
      "embedding": [
        7.164087295532227,
        3.1835227012634277
      ],
      "label": 9,
      "category": "onion",
      "sprite_path": "static/dump/umap/static/train/turnip/Image_23.jpg"
    },
    {
      "embedding": [
        0.7464432716369629,
        4.83044958114624
      ],
      "label": 9,
      "category": "onion",
      "sprite_path": "static/dump/umap/static/train/turnip/Image_8.jpg"
    },
    {
      "embedding": [
        7.86722993850708,
        0.8452335596084595
      ],
      "label": 9,
      "category": "onion",
      "sprite_path": "static/dump/umap/static/train/turnip/Image_79.jpg"
    },
    {
      "embedding": [
        9.481661796569824,
        0.8472409248352051
      ],
      "label": 9,
      "category": "onion",
      "sprite_path": "static/dump/umap/static/train/turnip/Image_17.jpg"
    },
    {
      "embedding": [
        3.129798173904419,
        5.81886100769043
      ],
      "label": 9,
      "category": "onion",
      "sprite_path": "static/dump/umap/static/train/turnip/Image_90.jpeg"
    },
    {
      "embedding": [
        9.930049896240234,
        1.8707579374313354
      ],
      "label": 9,
      "category": "onion",
      "sprite_path": "static/dump/umap/static/train/turnip/Image_77.jpg"
    },
    {
      "embedding": [
        2.433790922164917,
        5.7116899490356445
      ],
      "label": 9,
      "category": "onion",
      "sprite_path": "static/dump/umap/static/train/turnip/Image_25.jpg"
    },
    {
      "embedding": [
        8.729909896850586,
        3.5885417461395264
      ],
      "label": 9,
      "category": "onion",
      "sprite_path": "static/dump/umap/static/train/turnip/Image_46.jpg"
    },
    {
      "embedding": [
        12.188419342041016,
        0.9794321060180664
      ],
      "label": 9,
      "category": "onion",
      "sprite_path": "static/dump/umap/static/train/turnip/Image_9.jpg"
    },
    {
      "embedding": [
        8.675958633422852,
        2.849215507507324
      ],
      "label": 9,
      "category": "onion",
      "sprite_path": "static/dump/umap/static/train/turnip/Image_71.jpg"
    },
    {
      "embedding": [
        6.5735015869140625,
        2.362844944000244
      ],
      "label": 9,
      "category": "onion",
      "sprite_path": "static/dump/umap/static/train/turnip/Image_34.jpg"
    },
    {
      "embedding": [
        6.416169166564941,
        1.7874020338058472
      ],
      "label": 9,
      "category": "onion",
      "sprite_path": "static/dump/umap/static/train/turnip/Image_81.jpg"
    },
    {
      "embedding": [
        8.723984718322754,
        3.7101690769195557
      ],
      "label": 9,
      "category": "onion",
      "sprite_path": "static/dump/umap/static/train/turnip/Image_51.png"
    },
    {
      "embedding": [
        12.14321517944336,
        2.0125598907470703
      ],
      "label": 9,
      "category": "onion",
      "sprite_path": "static/dump/umap/static/train/turnip/Image_6.jpg"
    },
    {
      "embedding": [
        7.611349105834961,
        1.0503513813018799
      ],
      "label": 9,
      "category": "onion",
      "sprite_path": "static/dump/umap/static/train/turnip/Image_20.jpg"
    },
    {
      "embedding": [
        7.022698879241943,
        0.7083370089530945
      ],
      "label": 9,
      "category": "onion",
      "sprite_path": "static/dump/umap/static/train/turnip/Image_98.jpg"
    },
    {
      "embedding": [
        12.266579627990723,
        1.555693507194519
      ],
      "label": 9,
      "category": "onion",
      "sprite_path": "static/dump/umap/static/train/turnip/Image_19.jpg"
    },
    {
      "embedding": [
        11.404791831970215,
        1.9292250871658325
      ],
      "label": 9,
      "category": "onion",
      "sprite_path": "static/dump/umap/static/train/turnip/Image_88.jpg"
    },
    {
      "embedding": [
        8.265491485595703,
        0.4372691810131073
      ],
      "label": 9,
      "category": "onion",
      "sprite_path": "static/dump/umap/static/train/turnip/Image_29.jpg"
    },
    {
      "embedding": [
        10.545365333557129,
        1.1261584758758545
      ],
      "label": 9,
      "category": "onion",
      "sprite_path": "static/dump/umap/static/train/turnip/Image_61.jpg"
    },
    {
      "embedding": [
        8.820508003234863,
        0.9156787395477295
      ],
      "label": 9,
      "category": "onion",
      "sprite_path": "static/dump/umap/static/train/turnip/Image_84.jpg"
    },
    {
      "embedding": [
        9.67038631439209,
        2.9803593158721924
      ],
      "label": 9,
      "category": "onion",
      "sprite_path": "static/dump/umap/static/train/turnip/Image_85.jpg"
    },
    {
      "embedding": [
        10.804131507873535,
        2.4278202056884766
      ],
      "label": 9,
      "category": "onion",
      "sprite_path": "static/dump/umap/static/train/turnip/Image_74.jpg"
    },
    {
      "embedding": [
        7.614414691925049,
        1.0629771947860718
      ],
      "label": 9,
      "category": "onion",
      "sprite_path": "static/dump/umap/static/train/turnip/Image_53.jpg"
    },
    {
      "embedding": [
        9.571300506591797,
        1.6945812702178955
      ],
      "label": 9,
      "category": "onion",
      "sprite_path": "static/dump/umap/static/train/turnip/Image_64.jpg"
    },
    {
      "embedding": [
        11.156986236572266,
        0.9577786922454834
      ],
      "label": 9,
      "category": "onion",
      "sprite_path": "static/dump/umap/static/train/turnip/Image_92.jpg"
    },
    {
      "embedding": [
        8.681388854980469,
        2.0920896530151367
      ],
      "label": 9,
      "category": "onion",
      "sprite_path": "static/dump/umap/static/train/turnip/Image_27.jpg"
    },
    {
      "embedding": [
        9.027901649475098,
        2.3221845626831055
      ],
      "label": 9,
      "category": "onion",
      "sprite_path": "static/dump/umap/static/train/turnip/Image_55.jpg"
    },
    {
      "embedding": [
        9.126691818237305,
        0.7108733654022217
      ],
      "label": 9,
      "category": "onion",
      "sprite_path": "static/dump/umap/static/train/turnip/Image_44.jpg"
    },
    {
      "embedding": [
        11.524385452270508,
        2.6820926666259766
      ],
      "label": 9,
      "category": "onion",
      "sprite_path": "static/dump/umap/static/train/turnip/Image_39.png"
    },
    {
      "embedding": [
        7.774377822875977,
        1.1852918863296509
      ],
      "label": 9,
      "category": "onion",
      "sprite_path": "static/dump/umap/static/train/turnip/Image_73.jpg"
    },
    {
      "embedding": [
        7.8392534255981445,
        0.9029146432876587
      ],
      "label": 9,
      "category": "onion",
      "sprite_path": "static/dump/umap/static/train/turnip/Image_96.jpg"
    },
    {
      "embedding": [
        6.396516799926758,
        1.7730426788330078
      ],
      "label": 9,
      "category": "onion",
      "sprite_path": "static/dump/umap/static/train/turnip/Image_52.jpg"
    },
    {
      "embedding": [
        3.0147485733032227,
        5.655536651611328
      ],
      "label": 9,
      "category": "onion",
      "sprite_path": "static/dump/umap/static/train/turnip/Image_11.jpg"
    },
    {
      "embedding": [
        12.538561820983887,
        2.706650495529175
      ],
      "label": 9,
      "category": "onion",
      "sprite_path": "static/dump/umap/static/train/turnip/Image_82.jpg"
    },
    {
      "embedding": [
        10.302154541015625,
        1.2642573118209839
      ],
      "label": 9,
      "category": "onion",
      "sprite_path": "static/dump/umap/static/train/turnip/Image_80.jpg"
    },
    {
      "embedding": [
        10.791400909423828,
        0.5337010025978088
      ],
      "label": 34,
      "category": "grapes",
      "sprite_path": "static/dump/umap/static/train/turnip/Image_67.jpg"
    },
    {
      "embedding": [
        5.873696804046631,
        2.4594461917877197
      ],
      "label": 34,
      "category": "grapes",
      "sprite_path": "static/dump/umap/static/train/turnip/Image_50.jpg"
    },
    {
      "embedding": [
        6.741275787353516,
        3.4938511848449707
      ],
      "label": 34,
      "category": "grapes",
      "sprite_path": "static/dump/umap/static/train/turnip/Image_58.jpg"
    },
    {
      "embedding": [
        8.029289245605469,
        2.8744966983795166
      ],
      "label": 34,
      "category": "grapes",
      "sprite_path": "static/dump/umap/static/train/turnip/Image_97.jpg"
    },
    {
      "embedding": [
        12.064666748046875,
        2.3495635986328125
      ],
      "label": 34,
      "category": "grapes",
      "sprite_path": "static/dump/umap/static/train/turnip/Image_62.jpg"
    },
    {
      "embedding": [
        10.729208946228027,
        0.9710522890090942
      ],
      "label": 34,
      "category": "grapes",
      "sprite_path": "static/dump/umap/static/train/turnip/Image_30.jpg"
    },
    {
      "embedding": [
        12.121051788330078,
        0.5414470434188843
      ],
      "label": 34,
      "category": "grapes",
      "sprite_path": "static/dump/umap/static/train/turnip/Image_5.jpg"
    },
    {
      "embedding": [
        4.1399407386779785,
        4.696897983551025
      ],
      "label": 34,
      "category": "grapes",
      "sprite_path": "static/dump/umap/static/train/turnip/Image_100.jpg"
    },
    {
      "embedding": [
        6.29346227645874,
        3.1918747425079346
      ],
      "label": 34,
      "category": "grapes",
      "sprite_path": "static/dump/umap/static/train/turnip/Image_70.jpg"
    },
    {
      "embedding": [
        8.057928085327148,
        2.8303263187408447
      ],
      "label": 34,
      "category": "grapes",
      "sprite_path": "static/dump/umap/static/train/turnip/Image_15.jpeg"
    },
    {
      "embedding": [
        11.221624374389648,
        1.6178494691848755
      ],
      "label": 34,
      "category": "grapes",
      "sprite_path": "static/dump/umap/static/train/turnip/Image_35.jpg"
    },
    {
      "embedding": [
        9.439332962036133,
        2.9189467430114746
      ],
      "label": 34,
      "category": "grapes",
      "sprite_path": "static/dump/umap/static/train/turnip/Image_14.jpg"
    },
    {
      "embedding": [
        11.40898323059082,
        2.8721115589141846
      ],
      "label": 34,
      "category": "grapes",
      "sprite_path": "static/dump/umap/static/train/turnip/Image_76.jpg"
    },
    {
      "embedding": [
        10.376736640930176,
        1.9413286447525024
      ],
      "label": 34,
      "category": "grapes",
      "sprite_path": "static/dump/umap/static/train/turnip/Image_83.png"
    },
    {
      "embedding": [
        1.4750795364379883,
        5.04231071472168
      ],
      "label": 34,
      "category": "grapes",
      "sprite_path": "static/dump/umap/static/train/turnip/Image_75.jpg"
    },
    {
      "embedding": [
        9.585127830505371,
        2.7334554195404053
      ],
      "label": 34,
      "category": "grapes",
      "sprite_path": "static/dump/umap/static/train/turnip/Image_24.jpg"
    },
    {
      "embedding": [
        2.6470162868499756,
        5.126738548278809
      ],
      "label": 34,
      "category": "grapes",
      "sprite_path": "static/dump/umap/static/train/turnip/Image_99.jpg"
    },
    {
      "embedding": [
        10.469989776611328,
        1.9880750179290771
      ],
      "label": 34,
      "category": "grapes",
      "sprite_path": "static/dump/umap/static/train/turnip/Image_32.jpg"
    },
    {
      "embedding": [
        0.6625509262084961,
        5.401096343994141
      ],
      "label": 34,
      "category": "grapes",
      "sprite_path": "static/dump/umap/static/train/turnip/Image_37.jpg"
    },
    {
      "embedding": [
        9.024868965148926,
        1.2328294515609741
      ],
      "label": 34,
      "category": "grapes",
      "sprite_path": "static/dump/umap/static/train/turnip/Image_22.png"
    },
    {
      "embedding": [
        11.68069076538086,
        0.5916938185691833
      ],
      "label": 34,
      "category": "grapes",
      "sprite_path": "static/dump/umap/static/train/turnip/Image_28.jpg"
    },
    {
      "embedding": [
        9.41506576538086,
        0.8551743626594543
      ],
      "label": 34,
      "category": "grapes",
      "sprite_path": "static/dump/umap/static/train/turnip/Image_54.jpg"
    },
    {
      "embedding": [
        11.702271461486816,
        2.159832000732422
      ],
      "label": 34,
      "category": "grapes",
      "sprite_path": "static/dump/umap/static/train/turnip/Image_36.jpg"
    },
    {
      "embedding": [
        11.881867408752441,
        0.7704412937164307
      ],
      "label": 34,
      "category": "grapes",
      "sprite_path": "static/dump/umap/static/train/turnip/Image_42.jpg"
    },
    {
      "embedding": [
        12.238504409790039,
        2.271754026412964
      ],
      "label": 34,
      "category": "grapes",
      "sprite_path": "static/dump/umap/static/train/turnip/Image_31.jpg"
    },
    {
      "embedding": [
        3.610504150390625,
        4.122055530548096
      ],
      "label": 34,
      "category": "grapes",
      "sprite_path": "static/dump/umap/static/train/turnip/Image_2.jpg"
    },
    {
      "embedding": [
        6.864367485046387,
        3.061911106109619
      ],
      "label": 34,
      "category": "grapes",
      "sprite_path": "static/dump/umap/static/train/turnip/Image_3.jpg"
    },
    {
      "embedding": [
        8.619104385375977,
        2.277428388595581
      ],
      "label": 34,
      "category": "grapes",
      "sprite_path": "static/dump/umap/static/train/turnip/Image_26.jpg"
    },
    {
      "embedding": [
        12.251788139343262,
        1.875968098640442
      ],
      "label": 34,
      "category": "grapes",
      "sprite_path": "static/dump/umap/static/train/turnip/Image_87.jpg"
    },
    {
      "embedding": [
        8.205822944641113,
        2.8881545066833496
      ],
      "label": 34,
      "category": "grapes",
      "sprite_path": "static/dump/umap/static/train/turnip/Image_43.jpg"
    },
    {
      "embedding": [
        10.222579956054688,
        2.6653194427490234
      ],
      "label": 34,
      "category": "grapes",
      "sprite_path": "static/dump/umap/static/train/turnip/Image_18.jpg"
    },
    {
      "embedding": [
        9.998164176940918,
        2.006777048110962
      ],
      "label": 34,
      "category": "grapes",
      "sprite_path": "static/dump/umap/static/train/pear/Image_89.jpg"
    },
    {
      "embedding": [
        9.061651229858398,
        2.9444644451141357
      ],
      "label": 34,
      "category": "grapes",
      "sprite_path": "static/dump/umap/static/train/pear/Image_65.jpg"
    },
    {
      "embedding": [
        11.64484691619873,
        2.3957011699676514
      ],
      "label": 34,
      "category": "grapes",
      "sprite_path": "static/dump/umap/static/train/pear/Image_1.jpg"
    },
    {
      "embedding": [
        11.182378768920898,
        3.093846321105957
      ],
      "label": 34,
      "category": "grapes",
      "sprite_path": "static/dump/umap/static/train/pear/Image_16.jpg"
    },
    {
      "embedding": [
        9.035371780395508,
        2.90620493888855
      ],
      "label": 34,
      "category": "grapes",
      "sprite_path": "static/dump/umap/static/train/pear/Image_12.jpg"
    },
    {
      "embedding": [
        6.917309284210205,
        2.7833077907562256
      ],
      "label": 34,
      "category": "grapes",
      "sprite_path": "static/dump/umap/static/train/pear/Image_45.jpg"
    },
    {
      "embedding": [
        9.4281587600708,
        2.6048126220703125
      ],
      "label": 34,
      "category": "grapes",
      "sprite_path": "static/dump/umap/static/train/pear/Image_94.jpg"
    },
    {
      "embedding": [
        1.187304973602295,
        5.246288776397705
      ],
      "label": 34,
      "category": "grapes",
      "sprite_path": "static/dump/umap/static/train/pear/Image_57.png"
    },
    {
      "embedding": [
        13.196327209472656,
        1.6369060277938843
      ],
      "label": 34,
      "category": "grapes",
      "sprite_path": "static/dump/umap/static/train/pear/Image_40.jpg"
    },
    {
      "embedding": [
        10.920058250427246,
        2.064340591430664
      ],
      "label": 34,
      "category": "grapes",
      "sprite_path": "static/dump/umap/static/train/pear/Image_21.jpg"
    },
    {
      "embedding": [
        8.760927200317383,
        1.5880471467971802
      ],
      "label": 34,
      "category": "grapes",
      "sprite_path": "static/dump/umap/static/train/pear/Image_78.jpg"
    },
    {
      "embedding": [
        8.600257873535156,
        1.5680423974990845
      ],
      "label": 34,
      "category": "grapes",
      "sprite_path": "static/dump/umap/static/train/pear/Image_59.jpg"
    },
    {
      "embedding": [
        12.08287239074707,
        1.7634779214859009
      ],
      "label": 34,
      "category": "grapes",
      "sprite_path": "static/dump/umap/static/train/pear/Image_4.jpg"
    },
    {
      "embedding": [
        10.536521911621094,
        1.5568822622299194
      ],
      "label": 34,
      "category": "grapes",
      "sprite_path": "static/dump/umap/static/train/pear/Image_7.jpg"
    },
    {
      "embedding": [
        7.253138542175293,
        2.9904351234436035
      ],
      "label": 34,
      "category": "grapes",
      "sprite_path": "static/dump/umap/static/train/pear/Image_69.jpg"
    },
    {
      "embedding": [
        6.366097927093506,
        3.640092372894287
      ],
      "label": 34,
      "category": "grapes",
      "sprite_path": "static/dump/umap/static/train/pear/Image_60.jpg"
    },
    {
      "embedding": [
        10.173046112060547,
        2.8135814666748047
      ],
      "label": 34,
      "category": "grapes",
      "sprite_path": "static/dump/umap/static/train/pear/Image_13.jpg"
    },
    {
      "embedding": [
        11.658610343933105,
        1.9818060398101807
      ],
      "label": 34,
      "category": "grapes",
      "sprite_path": "static/dump/umap/static/train/pear/Image_95.jpg"
    },
    {
      "embedding": [
        10.557526588439941,
        1.4716010093688965
      ],
      "label": 34,
      "category": "grapes",
      "sprite_path": "static/dump/umap/static/train/pear/Image_68.jpg"
    },
    {
      "embedding": [
        8.712663650512695,
        2.5759007930755615
      ],
      "label": 34,
      "category": "grapes",
      "sprite_path": "static/dump/umap/static/train/pear/Image_23.jpg"
    },
    {
      "embedding": [
        11.8695707321167,
        2.2330431938171387
      ],
      "label": 34,
      "category": "grapes",
      "sprite_path": "static/dump/umap/static/train/pear/Image_8.jpg"
    },
    {
      "embedding": [
        6.830016613006592,
        2.80415678024292
      ],
      "label": 34,
      "category": "grapes",
      "sprite_path": "static/dump/umap/static/train/pear/Image_48.png"
    },
    {
      "embedding": [
        10.576236724853516,
        1.5697498321533203
      ],
      "label": 34,
      "category": "grapes",
      "sprite_path": "static/dump/umap/static/train/pear/Image_22.jpg"
    },
    {
      "embedding": [
        9.419845581054688,
        2.7597358226776123
      ],
      "label": 34,
      "category": "grapes",
      "sprite_path": "static/dump/umap/static/train/pear/Image_86.png"
    },
    {
      "embedding": [
        0.9198295474052429,
        5.601388454437256
      ],
      "label": 34,
      "category": "grapes",
      "sprite_path": "static/dump/umap/static/train/pear/Image_79.jpg"
    },
    {
      "embedding": [
        12.769698143005371,
        0.7723838090896606
      ],
      "label": 34,
      "category": "grapes",
      "sprite_path": "static/dump/umap/static/train/pear/Image_17.jpg"
    },
    {
      "embedding": [
        11.726827621459961,
        1.4632428884506226
      ],
      "label": 34,
      "category": "grapes",
      "sprite_path": "static/dump/umap/static/train/pear/Image_25.jpg"
    },
    {
      "embedding": [
        8.25332260131836,
        2.580828905105591
      ],
      "label": 34,
      "category": "grapes",
      "sprite_path": "static/dump/umap/static/train/pear/Image_46.jpg"
    },
    {
      "embedding": [
        13.388799667358398,
        1.317883014678955
      ],
      "label": 34,
      "category": "grapes",
      "sprite_path": "static/dump/umap/static/train/pear/Image_9.jpg"
    },
    {
      "embedding": [
        0.742310106754303,
        5.0073981285095215
      ],
      "label": 34,
      "category": "grapes",
      "sprite_path": "static/dump/umap/static/train/pear/Image_34.jpg"
    },
    {
      "embedding": [
        11.40690803527832,
        1.8405858278274536
      ],
      "label": 34,
      "category": "grapes",
      "sprite_path": "static/dump/umap/static/train/pear/Image_81.jpg"
    },
    {
      "embedding": [
        3.5260307788848877,
        4.8984856605529785
      ],
      "label": 34,
      "category": "grapes",
      "sprite_path": "static/dump/umap/static/train/pear/Image_6.jpg"
    },
    {
      "embedding": [
        8.467111587524414,
        2.866644859313965
      ],
      "label": 34,
      "category": "grapes",
      "sprite_path": "static/dump/umap/static/train/pear/Image_98.jpg"
    },
    {
      "embedding": [
        12.00433349609375,
        2.191899538040161
      ],
      "label": 34,
      "category": "grapes",
      "sprite_path": "static/dump/umap/static/train/pear/Image_19.jpg"
    },
    {
      "embedding": [
        10.098822593688965,
        2.207822799682617
      ],
      "label": 34,
      "category": "grapes",
      "sprite_path": "static/dump/umap/static/train/pear/Image_88.jpg"
    },
    {
      "embedding": [
        12.150586128234863,
        2.265143394470215
      ],
      "label": 34,
      "category": "grapes",
      "sprite_path": "static/dump/umap/static/train/pear/Image_29.jpg"
    },
    {
      "embedding": [
        11.395588874816895,
        2.470485210418701
      ],
      "label": 34,
      "category": "grapes",
      "sprite_path": "static/dump/umap/static/train/pear/Image_85.jpg"
    },
    {
      "embedding": [
        7.500677585601807,
        2.693868637084961
      ],
      "label": 34,
      "category": "grapes",
      "sprite_path": "static/dump/umap/static/train/pear/Image_56.png"
    },
    {
      "embedding": [
        9.579598426818848,
        2.7754547595977783
      ],
      "label": 34,
      "category": "grapes",
      "sprite_path": "static/dump/umap/static/train/pear/Image_53.jpg"
    },
    {
      "embedding": [
        1.3070462942123413,
        5.460658073425293
      ],
      "label": 34,
      "category": "grapes",
      "sprite_path": "static/dump/umap/static/train/pear/Image_64.jpg"
    },
    {
      "embedding": [
        10.321052551269531,
        2.941824197769165
      ],
      "label": 34,
      "category": "grapes",
      "sprite_path": "static/dump/umap/static/train/pear/Image_27.jpg"
    },
    {
      "embedding": [
        8.587109565734863,
        1.5767210721969604
      ],
      "label": 34,
      "category": "grapes",
      "sprite_path": "static/dump/umap/static/train/pear/Image_55.jpg"
    },
    {
      "embedding": [
        7.9005255699157715,
        2.377892255783081
      ],
      "label": 34,
      "category": "grapes",
      "sprite_path": "static/dump/umap/static/train/pear/Image_72.jpg"
    },
    {
      "embedding": [
        0.6217902302742004,
        5.35422945022583
      ],
      "label": 34,
      "category": "grapes",
      "sprite_path": "static/dump/umap/static/train/pear/Image_33.png"
    },
    {
      "embedding": [
        10.371618270874023,
        2.2992982864379883
      ],
      "label": 34,
      "category": "grapes",
      "sprite_path": "static/dump/umap/static/train/pear/Image_73.jpg"
    },
    {
      "embedding": [
        10.827033042907715,
        2.3240935802459717
      ],
      "label": 34,
      "category": "grapes",
      "sprite_path": "static/dump/umap/static/train/pear/Image_96.jpg"
    },
    {
      "embedding": [
        12.059728622436523,
        2.402510643005371
      ],
      "label": 34,
      "category": "grapes",
      "sprite_path": "static/dump/umap/static/train/pear/Image_52.jpg"
    },
    {
      "embedding": [
        9.888201713562012,
        2.689088821411133
      ],
      "label": 34,
      "category": "grapes",
      "sprite_path": "static/dump/umap/static/train/pear/Image_11.jpg"
    },
    {
      "embedding": [
        11.194941520690918,
        1.9098808765411377
      ],
      "label": 34,
      "category": "grapes",
      "sprite_path": "static/dump/umap/static/train/pear/Image_80.jpg"
    },
    {
      "embedding": [
        11.88088607788086,
        1.0858159065246582
      ],
      "label": 34,
      "category": "grapes",
      "sprite_path": "static/dump/umap/static/train/pear/Image_67.jpg"
    },
    {
      "embedding": [
        7.032250881195068,
        3.0438053607940674
      ],
      "label": 34,
      "category": "grapes",
      "sprite_path": "static/dump/umap/static/train/pear/Image_50.jpg"
    },
    {
      "embedding": [
        2.319837808609009,
        5.333301544189453
      ],
      "label": 34,
      "category": "grapes",
      "sprite_path": "static/dump/umap/static/train/pear/Image_47.jpeg"
    },
    {
      "embedding": [
        10.840509414672852,
        2.040003776550293
      ],
      "label": 34,
      "category": "grapes",
      "sprite_path": "static/dump/umap/static/train/pear/Image_58.png"
    },
    {
      "embedding": [
        4.500670433044434,
        4.0365190505981445
      ],
      "label": 34,
      "category": "grapes",
      "sprite_path": "static/dump/umap/static/train/pear/Image_97.jpg"
    },
    {
      "embedding": [
        11.917906761169434,
        0.5857174396514893
      ],
      "label": 34,
      "category": "grapes",
      "sprite_path": "static/dump/umap/static/train/pear/Image_62.jpg"
    },
    {
      "embedding": [
        5.52467679977417,
        3.071434736251831
      ],
      "label": 34,
      "category": "grapes",
      "sprite_path": "static/dump/umap/static/train/pear/Image_30.jpg"
    },
    {
      "embedding": [
        11.550230026245117,
        1.7438147068023682
      ],
      "label": 34,
      "category": "grapes",
      "sprite_path": "static/dump/umap/static/train/pear/Image_5.jpg"
    },
    {
      "embedding": [
        11.562671661376953,
        1.157322883605957
      ],
      "label": 34,
      "category": "grapes",
      "sprite_path": "static/dump/umap/static/train/pear/Image_100.jpg"
    },
    {
      "embedding": [
        11.148612976074219,
        2.62188458442688
      ],
      "label": 34,
      "category": "grapes",
      "sprite_path": "static/dump/umap/static/train/pear/Image_82.png"
    },
    {
      "embedding": [
        10.670195579528809,
        1.2592264413833618
      ],
      "label": 34,
      "category": "grapes",
      "sprite_path": "static/dump/umap/static/train/pear/Image_70.jpg"
    },
    {
      "embedding": [
        10.690117835998535,
        2.2495875358581543
      ],
      "label": 34,
      "category": "grapes",
      "sprite_path": "static/dump/umap/static/train/pear/Image_38.png"
    },
    {
      "embedding": [
        12.005119323730469,
        0.6351701021194458
      ],
      "label": 34,
      "category": "grapes",
      "sprite_path": "static/dump/umap/static/train/pear/Image_15.jpg"
    },
    {
      "embedding": [
        11.384007453918457,
        1.8474665880203247
      ],
      "label": 34,
      "category": "grapes",
      "sprite_path": "static/dump/umap/static/train/pear/Image_35.jpg"
    },
    {
      "embedding": [
        9.53374195098877,
        2.845000743865967
      ],
      "label": 34,
      "category": "grapes",
      "sprite_path": "static/dump/umap/static/train/pear/Image_61.png"
    },
    {
      "embedding": [
        10.907143592834473,
        2.396278142929077
      ],
      "label": 34,
      "category": "grapes",
      "sprite_path": "static/dump/umap/static/train/pear/Image_14.jpg"
    },
    {
      "embedding": [
        1.1183195114135742,
        5.331291198730469
      ],
      "label": 34,
      "category": "grapes",
      "sprite_path": "static/dump/umap/static/train/pear/Image_39.jpg"
    },
    {
      "embedding": [
        2.5838797092437744,
        4.268717288970947
      ],
      "label": 34,
      "category": "grapes",
      "sprite_path": "static/dump/umap/static/train/pear/Image_76.jpg"
    },
    {
      "embedding": [
        9.886675834655762,
        2.513087034225464
      ],
      "label": 23,
      "category": "mango",
      "sprite_path": "static/dump/umap/static/train/pear/Image_63.jpg"
    },
    {
      "embedding": [
        2.9458463191986084,
        5.7938361167907715
      ],
      "label": 23,
      "category": "mango",
      "sprite_path": "static/dump/umap/static/train/pear/Image_24.jpg"
    },
    {
      "embedding": [
        11.99748420715332,
        2.2158989906311035
      ],
      "label": 23,
      "category": "mango",
      "sprite_path": "static/dump/umap/static/train/pear/Image_10.png"
    },
    {
      "embedding": [
        2.3343608379364014,
        4.636601448059082
      ],
      "label": 23,
      "category": "mango",
      "sprite_path": "static/dump/umap/static/train/pear/Image_99.jpg"
    },
    {
      "embedding": [
        1.199035882949829,
        6.165881156921387
      ],
      "label": 23,
      "category": "mango",
      "sprite_path": "static/dump/umap/static/train/pear/Image_32.jpg"
    },
    {
      "embedding": [
        10.591141700744629,
        1.7046096324920654
      ],
      "label": 23,
      "category": "mango",
      "sprite_path": "static/dump/umap/static/train/pear/Image_37.jpg"
    },
    {
      "embedding": [
        11.993968963623047,
        1.217750072479248
      ],
      "label": 23,
      "category": "mango",
      "sprite_path": "static/dump/umap/static/train/pear/Image_51.jpg"
    },
    {
      "embedding": [
        12.183834075927734,
        2.4452967643737793
      ],
      "label": 23,
      "category": "mango",
      "sprite_path": "static/dump/umap/static/train/pear/Image_28.jpg"
    },
    {
      "embedding": [
        2.849945545196533,
        4.653116703033447
      ],
      "label": 23,
      "category": "mango",
      "sprite_path": "static/dump/umap/static/train/pear/Image_54.jpg"
    },
    {
      "embedding": [
        2.3831517696380615,
        4.728693962097168
      ],
      "label": 23,
      "category": "mango",
      "sprite_path": "static/dump/umap/static/train/pear/Image_93.jpg"
    },
    {
      "embedding": [
        2.7890639305114746,
        5.503603458404541
      ],
      "label": 23,
      "category": "mango",
      "sprite_path": "static/dump/umap/static/train/pear/Image_36.jpg"
    },
    {
      "embedding": [
        1.782636046409607,
        5.745388031005859
      ],
      "label": 23,
      "category": "mango",
      "sprite_path": "static/dump/umap/static/train/pear/Image_42.jpg"
    },
    {
      "embedding": [
        1.055881142616272,
        6.223977088928223
      ],
      "label": 23,
      "category": "mango",
      "sprite_path": "static/dump/umap/static/train/pear/Image_31.jpg"
    },
    {
      "embedding": [
        1.438944697380066,
        5.936521530151367
      ],
      "label": 23,
      "category": "mango",
      "sprite_path": "static/dump/umap/static/train/pear/Image_49.png"
    },
    {
      "embedding": [
        10.25394344329834,
        1.9947571754455566
      ],
      "label": 23,
      "category": "mango",
      "sprite_path": "static/dump/umap/static/train/pear/Image_2.jpg"
    },
    {
      "embedding": [
        5.483203887939453,
        3.394124746322632
      ],
      "label": 23,
      "category": "mango",
      "sprite_path": "static/dump/umap/static/train/pear/Image_3.jpg"
    },
    {
      "embedding": [
        1.3081750869750977,
        6.087402820587158
      ],
      "label": 23,
      "category": "mango",
      "sprite_path": "static/dump/umap/static/train/pear/Image_26.jpg"
    },
    {
      "embedding": [
        1.1548283100128174,
        6.205991744995117
      ],
      "label": 23,
      "category": "mango",
      "sprite_path": "static/dump/umap/static/train/pear/Image_66.jpg"
    },
    {
      "embedding": [
        12.850362777709961,
        2.6523241996765137
      ],
      "label": 23,
      "category": "mango",
      "sprite_path": "static/dump/umap/static/train/pear/Image_87.jpg"
    },
    {
      "embedding": [
        12.297555923461914,
        1.125173807144165
      ],
      "label": 23,
      "category": "mango",
      "sprite_path": "static/dump/umap/static/train/pear/Image_43.jpg"
    },
    {
      "embedding": [
        9.99381160736084,
        2.824467420578003
      ],
      "label": 23,
      "category": "mango",
      "sprite_path": "static/dump/umap/static/train/pear/Image_18.jpg"
    },
    {
      "embedding": [
        13.067741394042969,
        2.002119541168213
      ],
      "label": 23,
      "category": "mango",
      "sprite_path": "static/dump/umap/static/train/pineapple/Image_65.jpg"
    },
    {
      "embedding": [
        11.627010345458984,
        0.5615329146385193
      ],
      "label": 23,
      "category": "mango",
      "sprite_path": "static/dump/umap/static/train/pineapple/Image_1.jpg"
    },
    {
      "embedding": [
        9.987724304199219,
        1.1962721347808838
      ],
      "label": 23,
      "category": "mango",
      "sprite_path": "static/dump/umap/static/train/pineapple/Image_16.jpg"
    },
    {
      "embedding": [
        11.703699111938477,
        1.8121228218078613
      ],
      "label": 23,
      "category": "mango",
      "sprite_path": "static/dump/umap/static/train/pineapple/Image_38.jpeg"
    },
    {
      "embedding": [
        12.300025939941406,
        1.9576162099838257
      ],
      "label": 23,
      "category": "mango",
      "sprite_path": "static/dump/umap/static/train/pineapple/Image_57.jpg"
    },
    {
      "embedding": [
        11.790789604187012,
        2.1409621238708496
      ],
      "label": 23,
      "category": "mango",
      "sprite_path": "static/dump/umap/static/train/pineapple/Image_12.jpg"
    },
    {
      "embedding": [
        1.840999960899353,
        5.556230545043945
      ],
      "label": 23,
      "category": "mango",
      "sprite_path": "static/dump/umap/static/train/pineapple/Image_56.jpg"
    },
    {
      "embedding": [
        1.4655572175979614,
        4.464022636413574
      ],
      "label": 23,
      "category": "mango",
      "sprite_path": "static/dump/umap/static/train/pineapple/Image_33.jpg"
    },
    {
      "embedding": [
        3.290712356567383,
        5.746704578399658
      ],
      "label": 23,
      "category": "mango",
      "sprite_path": "static/dump/umap/static/train/pineapple/Image_41.png"
    },
    {
      "embedding": [
        7.504426956176758,
        3.3431215286254883
      ],
      "label": 23,
      "category": "mango",
      "sprite_path": "static/dump/umap/static/train/pineapple/Image_40.jpg"
    },
    {
      "embedding": [
        7.955935478210449,
        0.6485152840614319
      ],
      "label": 23,
      "category": "mango",
      "sprite_path": "static/dump/umap/static/train/pineapple/Image_10.jpg"
    },
    {
      "embedding": [
        11.15020751953125,
        1.6582605838775635
      ],
      "label": 23,
      "category": "mango",
      "sprite_path": "static/dump/umap/static/train/pineapple/Image_21.jpg"
    },
    {
      "embedding": [
        11.211026191711426,
        1.7084710597991943
      ],
      "label": 23,
      "category": "mango",
      "sprite_path": "static/dump/umap/static/train/pineapple/Image_78.jpg"
    },
    {
      "embedding": [
        1.4821628332138062,
        5.908133506774902
      ],
      "label": 23,
      "category": "mango",
      "sprite_path": "static/dump/umap/static/train/pineapple/Image_59.jpg"
    },
    {
      "embedding": [
        8.060620307922363,
        0.2762194275856018
      ],
      "label": 23,
      "category": "mango",
      "sprite_path": "static/dump/umap/static/train/pineapple/Image_4.jpg"
    },
    {
      "embedding": [
        1.851189136505127,
        5.844351768493652
      ],
      "label": 23,
      "category": "mango",
      "sprite_path": "static/dump/umap/static/train/pineapple/Image_7.jpg"
    },
    {
      "embedding": [
        1.4251641035079956,
        5.583960056304932
      ],
      "label": 23,
      "category": "mango",
      "sprite_path": "static/dump/umap/static/train/pineapple/Image_69.jpg"
    },
    {
      "embedding": [
        13.128360748291016,
        2.0442376136779785
      ],
      "label": 23,
      "category": "mango",
      "sprite_path": "static/dump/umap/static/train/pineapple/Image_48.jpg"
    },
    {
      "embedding": [
        9.062028884887695,
        1.6077443361282349
      ],
      "label": 23,
      "category": "mango",
      "sprite_path": "static/dump/umap/static/train/pineapple/Image_79.png"
    },
    {
      "embedding": [
        12.471139907836914,
        1.9383533000946045
      ],
      "label": 23,
      "category": "mango",
      "sprite_path": "static/dump/umap/static/train/pineapple/Image_13.jpg"
    },
    {
      "embedding": [
        3.281811237335205,
        5.814042091369629
      ],
      "label": 23,
      "category": "mango",
      "sprite_path": "static/dump/umap/static/train/pineapple/Image_49.jpg"
    },
    {
      "embedding": [
        9.962440490722656,
        2.1491219997406006
      ],
      "label": 23,
      "category": "mango",
      "sprite_path": "static/dump/umap/static/train/pineapple/Image_91.jpg"
    },
    {
      "embedding": [
        1.0089638233184814,
        6.161505222320557
      ],
      "label": 23,
      "category": "mango",
      "sprite_path": "static/dump/umap/static/train/pineapple/Image_95.jpg"
    },
    {
      "embedding": [
        13.33139705657959,
        1.5799158811569214
      ],
      "label": 23,
      "category": "mango",
      "sprite_path": "static/dump/umap/static/train/pineapple/Image_86.jpg"
    },
    {
      "embedding": [
        12.028496742248535,
        0.7618763446807861
      ],
      "label": 23,
      "category": "mango",
      "sprite_path": "static/dump/umap/static/train/pineapple/Image_23.jpg"
    },
    {
      "embedding": [
        1.0452892780303955,
        6.220143795013428
      ],
      "label": 23,
      "category": "mango",
      "sprite_path": "static/dump/umap/static/train/pineapple/Image_8.jpg"
    },
    {
      "embedding": [
        11.168341636657715,
        0.48571470379829407
      ],
      "label": 23,
      "category": "mango",
      "sprite_path": "static/dump/umap/static/train/pineapple/Image_22.jpg"
    },
    {
      "embedding": [
        0.9729071259498596,
        5.386929988861084
      ],
      "label": 23,
      "category": "mango",
      "sprite_path": "static/dump/umap/static/train/pineapple/Image_17.jpg"
    },
    {
      "embedding": [
        3.2610065937042236,
        5.762014389038086
      ],
      "label": 23,
      "category": "mango",
      "sprite_path": "static/dump/umap/static/train/pineapple/Image_77.jpg"
    },
    {
      "embedding": [
        11.310220718383789,
        1.4948347806930542
      ],
      "label": 23,
      "category": "mango",
      "sprite_path": "static/dump/umap/static/train/pineapple/Image_25.jpg"
    },
    {
      "embedding": [
        11.997320175170898,
        1.6706210374832153
      ],
      "label": 23,
      "category": "mango",
      "sprite_path": "static/dump/umap/static/train/pineapple/Image_46.jpg"
    },
    {
      "embedding": [
        1.897646427154541,
        4.732623100280762
      ],
      "label": 23,
      "category": "mango",
      "sprite_path": "static/dump/umap/static/train/pineapple/Image_9.jpg"
    },
    {
      "embedding": [
        13.246658325195312,
        1.6746970415115356
      ],
      "label": 23,
      "category": "mango",
      "sprite_path": "static/dump/umap/static/train/pineapple/Image_71.jpg"
    },
    {
      "embedding": [
        1.3809449672698975,
        5.508672714233398
      ],
      "label": 23,
      "category": "mango",
      "sprite_path": "static/dump/umap/static/train/pineapple/Image_34.jpg"
    },
    {
      "embedding": [
        1.1854915618896484,
        5.484216213226318
      ],
      "label": 23,
      "category": "mango",
      "sprite_path": "static/dump/umap/static/train/pineapple/Image_81.jpg"
    },
    {
      "embedding": [
        13.01501750946045,
        1.8336842060089111
      ],
      "label": 23,
      "category": "mango",
      "sprite_path": "static/dump/umap/static/train/pineapple/Image_6.jpg"
    },
    {
      "embedding": [
        1.3783553838729858,
        5.503875732421875
      ],
      "label": 23,
      "category": "mango",
      "sprite_path": "static/dump/umap/static/train/pineapple/Image_20.jpg"
    },
    {
      "embedding": [
        1.4668080806732178,
        4.466410160064697
      ],
      "label": 23,
      "category": "mango",
      "sprite_path": "static/dump/umap/static/train/pineapple/Image_98.jpg"
    },
    {
      "embedding": [
        11.980527877807617,
        2.364549398422241
      ],
      "label": 23,
      "category": "mango",
      "sprite_path": "static/dump/umap/static/train/pineapple/Image_92.png"
    },
    {
      "embedding": [
        3.190207004547119,
        5.86565637588501
      ],
      "label": 23,
      "category": "mango",
      "sprite_path": "static/dump/umap/static/train/pineapple/Image_47.jpg"
    },
    {
      "embedding": [
        13.31144905090332,
        1.6125507354736328
      ],
      "label": 23,
      "category": "mango",
      "sprite_path": "static/dump/umap/static/train/pineapple/Image_19.jpg"
    },
    {
      "embedding": [
        6.834072113037109,
        2.9255638122558594
      ],
      "label": 23,
      "category": "mango",
      "sprite_path": "static/dump/umap/static/train/pineapple/Image_60.jpeg"
    },
    {
      "embedding": [
        11.464770317077637,
        0.44882383942604065
      ],
      "label": 23,
      "category": "mango",
      "sprite_path": "static/dump/umap/static/train/pineapple/Image_88.jpg"
    },
    {
      "embedding": [
        13.016998291015625,
        2.3265540599823
      ],
      "label": 23,
      "category": "mango",
      "sprite_path": "static/dump/umap/static/train/pineapple/Image_24.png"
    },
    {
      "embedding": [
        1.608826994895935,
        5.617283344268799
      ],
      "label": 23,
      "category": "mango",
      "sprite_path": "static/dump/umap/static/train/pineapple/Image_61.jpg"
    },
    {
      "embedding": [
        1.0411148071289062,
        6.227626800537109
      ],
      "label": 23,
      "category": "mango",
      "sprite_path": "static/dump/umap/static/train/pineapple/Image_84.jpg"
    },
    {
      "embedding": [
        1.2784340381622314,
        4.756224155426025
      ],
      "label": 23,
      "category": "mango",
      "sprite_path": "static/dump/umap/static/train/pineapple/Image_85.jpg"
    },
    {
      "embedding": [
        12.056992530822754,
        1.9454408884048462
      ],
      "label": 23,
      "category": "mango",
      "sprite_path": "static/dump/umap/static/train/pineapple/Image_74.jpg"
    },
    {
      "embedding": [
        11.489473342895508,
        2.092454195022583
      ],
      "label": 23,
      "category": "mango",
      "sprite_path": "static/dump/umap/static/train/pineapple/Image_53.jpg"
    },
    {
      "embedding": [
        13.293227195739746,
        1.8017923831939697
      ],
      "label": 23,
      "category": "mango",
      "sprite_path": "static/dump/umap/static/train/pineapple/Image_64.jpg"
    },
    {
      "embedding": [
        1.4657145738601685,
        5.96030330657959
      ],
      "label": 23,
      "category": "mango",
      "sprite_path": "static/dump/umap/static/train/pineapple/Image_89.png"
    },
    {
      "embedding": [
        1.4855806827545166,
        5.995534420013428
      ],
      "label": 23,
      "category": "mango",
      "sprite_path": "static/dump/umap/static/train/pineapple/Image_27.jpg"
    },
    {
      "embedding": [
        10.987029075622559,
        2.7588400840759277
      ],
      "label": 23,
      "category": "mango",
      "sprite_path": "static/dump/umap/static/train/pineapple/Image_55.jpg"
    },
    {
      "embedding": [
        8.848674774169922,
        0.8828049898147583
      ],
      "label": 23,
      "category": "mango",
      "sprite_path": "static/dump/umap/static/train/pineapple/Image_44.jpg"
    },
    {
      "embedding": [
        1.533513069152832,
        5.766759395599365
      ],
      "label": 23,
      "category": "mango",
      "sprite_path": "static/dump/umap/static/train/pineapple/Image_31.jpeg"
    },
    {
      "embedding": [
        1.5356310606002808,
        5.111651420593262
      ],
      "label": 23,
      "category": "mango",
      "sprite_path": "static/dump/umap/static/train/pineapple/Image_72.jpg"
    },
    {
      "embedding": [
        11.954920768737793,
        2.227534770965576
      ],
      "label": 23,
      "category": "mango",
      "sprite_path": "static/dump/umap/static/train/pineapple/Image_73.jpg"
    },
    {
      "embedding": [
        0.8951612114906311,
        5.931303024291992
      ],
      "label": 23,
      "category": "mango",
      "sprite_path": "static/dump/umap/static/train/pineapple/Image_96.jpg"
    },
    {
      "embedding": [
        10.455007553100586,
        2.4815361499786377
      ],
      "label": 23,
      "category": "mango",
      "sprite_path": "static/dump/umap/static/train/pineapple/Image_52.jpg"
    },
    {
      "embedding": [
        2.1337411403656006,
        5.277514457702637
      ],
      "label": 23,
      "category": "mango",
      "sprite_path": "static/dump/umap/static/train/pineapple/Image_90.jpg"
    },
    {
      "embedding": [
        13.198413848876953,
        2.021240234375
      ],
      "label": 23,
      "category": "mango",
      "sprite_path": "static/dump/umap/static/train/pineapple/Image_83.jpg"
    },
    {
      "embedding": [
        1.142655611038208,
        6.208179473876953
      ],
      "label": 23,
      "category": "mango",
      "sprite_path": "static/dump/umap/static/train/pineapple/Image_11.jpg"
    },
    {
      "embedding": [
        12.062247276306152,
        1.2786139249801636
      ],
      "label": 23,
      "category": "mango",
      "sprite_path": "static/dump/umap/static/train/pineapple/Image_82.jpg"
    },
    {
      "embedding": [
        10.085100173950195,
        1.841739296913147
      ],
      "label": 23,
      "category": "mango",
      "sprite_path": "static/dump/umap/static/train/pineapple/Image_80.jpg"
    },
    {
      "embedding": [
        10.772963523864746,
        0.6767356395721436
      ],
      "label": 23,
      "category": "mango",
      "sprite_path": "static/dump/umap/static/train/pineapple/Image_26.png"
    },
    {
      "embedding": [
        1.3102267980575562,
        6.1152777671813965
      ],
      "label": 23,
      "category": "mango",
      "sprite_path": "static/dump/umap/static/train/pineapple/Image_67.jpg"
    },
    {
      "embedding": [
        6.364576816558838,
        1.7534986734390259
      ],
      "label": 23,
      "category": "mango",
      "sprite_path": "static/dump/umap/static/train/pineapple/Image_50.jpg"
    },
    {
      "embedding": [
        10.6744384765625,
        1.8095855712890625
      ],
      "label": 23,
      "category": "mango",
      "sprite_path": "static/dump/umap/static/train/pineapple/Image_58.png"
    },
    {
      "embedding": [
        1.9333374500274658,
        5.762223243713379
      ],
      "label": 25,
      "category": "apple",
      "sprite_path": "static/dump/umap/static/train/pineapple/Image_97.jpg"
    },
    {
      "embedding": [
        6.208401203155518,
        3.86555552482605
      ],
      "label": 25,
      "category": "apple",
      "sprite_path": "static/dump/umap/static/train/pineapple/Image_29.png"
    },
    {
      "embedding": [
        2.4582228660583496,
        4.919727325439453
      ],
      "label": 25,
      "category": "apple",
      "sprite_path": "static/dump/umap/static/train/pineapple/Image_68.png"
    },
    {
      "embedding": [
        8.994950294494629,
        1.4528485536575317
      ],
      "label": 25,
      "category": "apple",
      "sprite_path": "static/dump/umap/static/train/pineapple/Image_62.jpg"
    },
    {
      "embedding": [
        5.922411918640137,
        3.069819688796997
      ],
      "label": 25,
      "category": "apple",
      "sprite_path": "static/dump/umap/static/train/pineapple/Image_30.jpg"
    },
    {
      "embedding": [
        7.74766206741333,
        0.9670535326004028
      ],
      "label": 25,
      "category": "apple",
      "sprite_path": "static/dump/umap/static/train/pineapple/Image_5.jpg"
    },
    {
      "embedding": [
        5.978484153747559,
        2.5610227584838867
      ],
      "label": 25,
      "category": "apple",
      "sprite_path": "static/dump/umap/static/train/pineapple/Image_100.jpg"
    },
    {
      "embedding": [
        6.200095176696777,
        1.7429089546203613
      ],
      "label": 25,
      "category": "apple",
      "sprite_path": "static/dump/umap/static/train/pineapple/Image_70.jpg"
    },
    {
      "embedding": [
        13.401128768920898,
        1.445855975151062
      ],
      "label": 25,
      "category": "apple",
      "sprite_path": "static/dump/umap/static/train/pineapple/Image_15.jpg"
    },
    {
      "embedding": [
        9.270877838134766,
        2.5697364807128906
      ],
      "label": 25,
      "category": "apple",
      "sprite_path": "static/dump/umap/static/train/pineapple/Image_35.jpg"
    },
    {
      "embedding": [
        9.808465957641602,
        2.3650736808776855
      ],
      "label": 25,
      "category": "apple",
      "sprite_path": "static/dump/umap/static/train/pineapple/Image_14.jpg"
    },
    {
      "embedding": [
        9.563467979431152,
        0.6955701112747192
      ],
      "label": 25,
      "category": "apple",
      "sprite_path": "static/dump/umap/static/train/pineapple/Image_39.jpg"
    },
    {
      "embedding": [
        12.269238471984863,
        2.2666702270507812
      ],
      "label": 25,
      "category": "apple",
      "sprite_path": "static/dump/umap/static/train/pineapple/Image_45.png"
    },
    {
      "embedding": [
        10.042068481445312,
        2.5510635375976562
      ],
      "label": 25,
      "category": "apple",
      "sprite_path": "static/dump/umap/static/train/pineapple/Image_76.jpg"
    },
    {
      "embedding": [
        0.9227765202522278,
        6.291510105133057
      ],
      "label": 25,
      "category": "apple",
      "sprite_path": "static/dump/umap/static/train/pineapple/Image_63.jpg"
    },
    {
      "embedding": [
        6.646584510803223,
        2.1876626014709473
      ],
      "label": 25,
      "category": "apple",
      "sprite_path": "static/dump/umap/static/train/pineapple/Image_75.jpg"
    },
    {
      "embedding": [
        2.0565333366394043,
        5.813472270965576
      ],
      "label": 25,
      "category": "apple",
      "sprite_path": "static/dump/umap/static/train/pineapple/Image_99.jpg"
    },
    {
      "embedding": [
        4.46500825881958,
        3.9886786937713623
      ],
      "label": 25,
      "category": "apple",
      "sprite_path": "static/dump/umap/static/train/pineapple/Image_32.jpg"
    },
    {
      "embedding": [
        13.17888355255127,
        1.6573693752288818
      ],
      "label": 25,
      "category": "apple",
      "sprite_path": "static/dump/umap/static/train/pineapple/Image_37.jpg"
    },
    {
      "embedding": [
        5.3903584480285645,
        2.994715690612793
      ],
      "label": 25,
      "category": "apple",
      "sprite_path": "static/dump/umap/static/train/pineapple/Image_28.jpg"
    },
    {
      "embedding": [
        11.902770042419434,
        1.0335263013839722
      ],
      "label": 25,
      "category": "apple",
      "sprite_path": "static/dump/umap/static/train/pineapple/Image_54.jpg"
    },
    {
      "embedding": [
        0.9862660765647888,
        6.2430739402771
      ],
      "label": 25,
      "category": "apple",
      "sprite_path": "static/dump/umap/static/train/pineapple/Image_93.jpg"
    },
    {
      "embedding": [
        6.19317102432251,
        3.8579859733581543
      ],
      "label": 25,
      "category": "apple",
      "sprite_path": "static/dump/umap/static/train/pineapple/Image_36.jpg"
    },
    {
      "embedding": [
        12.261627197265625,
        0.7038553357124329
      ],
      "label": 25,
      "category": "apple",
      "sprite_path": "static/dump/umap/static/train/pineapple/Image_87.png"
    },
    {
      "embedding": [
        0.873241126537323,
        6.320624351501465
      ],
      "label": 25,
      "category": "apple",
      "sprite_path": "static/dump/umap/static/train/pineapple/Image_42.jpg"
    },
    {
      "embedding": [
        0.9097279906272888,
        6.326063632965088
      ],
      "label": 25,
      "category": "apple",
      "sprite_path": "static/dump/umap/static/train/pineapple/Image_2.jpg"
    },
    {
      "embedding": [
        11.821683883666992,
        0.5013144016265869
      ],
      "label": 25,
      "category": "apple",
      "sprite_path": "static/dump/umap/static/train/pineapple/Image_3.jpg"
    },
    {
      "embedding": [
        9.048745155334473,
        1.097360372543335
      ],
      "label": 25,
      "category": "apple",
      "sprite_path": "static/dump/umap/static/train/pineapple/Image_66.jpg"
    },
    {
      "embedding": [
        6.186491966247559,
        2.0861597061157227
      ],
      "label": 25,
      "category": "apple",
      "sprite_path": "static/dump/umap/static/train/pineapple/Image_43.jpg"
    },
    {
      "embedding": [
        1.2476749420166016,
        6.16253662109375
      ],
      "label": 25,
      "category": "apple",
      "sprite_path": "static/dump/umap/static/train/pineapple/Image_18.jpg"
    },
    {
      "embedding": [
        1.6283684968948364,
        5.65104866027832
      ],
      "label": 25,
      "category": "apple",
      "sprite_path": "static/dump/umap/static/train/grapes/Image_89.jpg"
    },
    {
      "embedding": [
        1.658034324645996,
        5.842337131500244
      ],
      "label": 25,
      "category": "apple",
      "sprite_path": "static/dump/umap/static/train/grapes/Image_65.jpg"
    },
    {
      "embedding": [
        8.551234245300293,
        3.555922031402588
      ],
      "label": 25,
      "category": "apple",
      "sprite_path": "static/dump/umap/static/train/grapes/Image_1.jpg"
    },
    {
      "embedding": [
        9.792598724365234,
        2.9018709659576416
      ],
      "label": 25,
      "category": "apple",
      "sprite_path": "static/dump/umap/static/train/grapes/Image_16.jpg"
    },
    {
      "embedding": [
        0.8892813920974731,
        6.288459300994873
      ],
      "label": 25,
      "category": "apple",
      "sprite_path": "static/dump/umap/static/train/grapes/Image_57.jpg"
    },
    {
      "embedding": [
        8.475194931030273,
        2.5263736248016357
      ],
      "label": 25,
      "category": "apple",
      "sprite_path": "static/dump/umap/static/train/grapes/Image_12.jpg"
    },
    {
      "embedding": [
        11.915040016174316,
        0.7750718593597412
      ],
      "label": 25,
      "category": "apple",
      "sprite_path": "static/dump/umap/static/train/grapes/Image_56.jpg"
    },
    {
      "embedding": [
        0.8893185257911682,
        6.298863887786865
      ],
      "label": 25,
      "category": "apple",
      "sprite_path": "static/dump/umap/static/train/grapes/Image_33.jpg"
    },
    {
      "embedding": [
        12.566397666931152,
        1.171980381011963
      ],
      "label": 25,
      "category": "apple",
      "sprite_path": "static/dump/umap/static/train/grapes/Image_94.jpg"
    },
    {
      "embedding": [
        7.285992622375488,
        3.184180498123169
      ],
      "label": 25,
      "category": "apple",
      "sprite_path": "static/dump/umap/static/train/grapes/Image_10.jpg"
    },
    {
      "embedding": [
        0.8786112666130066,
        6.296134948730469
      ],
      "label": 25,
      "category": "apple",
      "sprite_path": "static/dump/umap/static/train/grapes/Image_21.jpg"
    },
    {
      "embedding": [
        10.389089584350586,
        1.8267923593521118
      ],
      "label": 25,
      "category": "apple",
      "sprite_path": "static/dump/umap/static/train/grapes/Image_78.jpg"
    },
    {
      "embedding": [
        9.681968688964844,
        2.5097546577453613
      ],
      "label": 25,
      "category": "apple",
      "sprite_path": "static/dump/umap/static/train/grapes/Image_59.jpg"
    },
    {
      "embedding": [
        10.25003719329834,
        1.0478519201278687
      ],
      "label": 25,
      "category": "apple",
      "sprite_path": "static/dump/umap/static/train/grapes/Image_4.jpg"
    },
    {
      "embedding": [
        12.516790390014648,
        1.0249792337417603
      ],
      "label": 25,
      "category": "apple",
      "sprite_path": "static/dump/umap/static/train/grapes/Image_38.jpg"
    },
    {
      "embedding": [
        9.82744026184082,
        2.0040786266326904
      ],
      "label": 25,
      "category": "apple",
      "sprite_path": "static/dump/umap/static/train/grapes/Image_41.jpg"
    },
    {
      "embedding": [
        0.832313597202301,
        6.353344440460205
      ],
      "label": 25,
      "category": "apple",
      "sprite_path": "static/dump/umap/static/train/grapes/Image_7.png"
    },
    {
      "embedding": [
        1.147401213645935,
        5.474935054779053
      ],
      "label": 25,
      "category": "apple",
      "sprite_path": "static/dump/umap/static/train/grapes/Image_69.jpg"
    },
    {
      "embedding": [
        8.670012474060059,
        3.7120635509490967
      ],
      "label": 25,
      "category": "apple",
      "sprite_path": "static/dump/umap/static/train/grapes/Image_48.jpg"
    },
    {
      "embedding": [
        13.265328407287598,
        1.616070032119751
      ],
      "label": 25,
      "category": "apple",
      "sprite_path": "static/dump/umap/static/train/grapes/Image_60.jpg"
    },
    {
      "embedding": [
        10.864492416381836,
        1.9609473943710327
      ],
      "label": 25,
      "category": "apple",
      "sprite_path": "static/dump/umap/static/train/grapes/Image_13.jpg"
    },
    {
      "embedding": [
        8.182766914367676,
        0.7638274431228638
      ],
      "label": 25,
      "category": "apple",
      "sprite_path": "static/dump/umap/static/train/grapes/Image_91.jpg"
    },
    {
      "embedding": [
        4.478357791900635,
        3.590176820755005
      ],
      "label": 25,
      "category": "apple",
      "sprite_path": "static/dump/umap/static/train/grapes/Image_95.jpg"
    },
    {
      "embedding": [
        10.847679138183594,
        1.7136136293411255
      ],
      "label": 25,
      "category": "apple",
      "sprite_path": "static/dump/umap/static/train/grapes/Image_86.jpg"
    },
    {
      "embedding": [
        9.325039863586426,
        2.633843183517456
      ],
      "label": 25,
      "category": "apple",
      "sprite_path": "static/dump/umap/static/train/grapes/Image_68.jpg"
    },
    {
      "embedding": [
        10.545027732849121,
        2.11387300491333
      ],
      "label": 25,
      "category": "apple",
      "sprite_path": "static/dump/umap/static/train/grapes/Image_23.jpg"
    },
    {
      "embedding": [
        12.337005615234375,
        1.718076229095459
      ],
      "label": 25,
      "category": "apple",
      "sprite_path": "static/dump/umap/static/train/grapes/Image_8.jpg"
    },
    {
      "embedding": [
        1.0193289518356323,
        6.281333923339844
      ],
      "label": 25,
      "category": "apple",
      "sprite_path": "static/dump/umap/static/train/grapes/Image_22.jpg"
    },
    {
      "embedding": [
        8.786433219909668,
        3.5956368446350098
      ],
      "label": 25,
      "category": "apple",
      "sprite_path": "static/dump/umap/static/train/grapes/Image_79.jpg"
    },
    {
      "embedding": [
        10.559809684753418,
        1.4237942695617676
      ],
      "label": 25,
      "category": "apple",
      "sprite_path": "static/dump/umap/static/train/grapes/Image_17.jpg"
    },
    {
      "embedding": [
        8.766788482666016,
        3.5975899696350098
      ],
      "label": 25,
      "category": "apple",
      "sprite_path": "static/dump/umap/static/train/grapes/Image_77.jpg"
    },
    {
      "embedding": [
        0.8871254324913025,
        5.273644924163818
      ],
      "label": 25,
      "category": "apple",
      "sprite_path": "static/dump/umap/static/train/grapes/Image_46.jpg"
    },
    {
      "embedding": [
        1.7416199445724487,
        4.807775020599365
      ],
      "label": 25,
      "category": "apple",
      "sprite_path": "static/dump/umap/static/train/grapes/Image_9.jpg"
    },
    {
      "embedding": [
        5.473973751068115,
        3.0263564586639404
      ],
      "label": 25,
      "category": "apple",
      "sprite_path": "static/dump/umap/static/train/grapes/Image_71.jpg"
    },
    {
      "embedding": [
        12.518169403076172,
        0.9801598787307739
      ],
      "label": 25,
      "category": "apple",
      "sprite_path": "static/dump/umap/static/train/grapes/Image_34.jpg"
    },
    {
      "embedding": [
        11.955918312072754,
        2.344008445739746
      ],
      "label": 25,
      "category": "apple",
      "sprite_path": "static/dump/umap/static/train/grapes/Image_81.jpg"
    },
    {
      "embedding": [
        11.012428283691406,
        0.9816614389419556
      ],
      "label": 25,
      "category": "apple",
      "sprite_path": "static/dump/umap/static/train/grapes/Image_20.jpg"
    },
    {
      "embedding": [
        10.03762149810791,
        2.2291479110717773
      ],
      "label": 25,
      "category": "apple",
      "sprite_path": "static/dump/umap/static/train/grapes/Image_98.jpg"
    },
    {
      "embedding": [
        12.479870796203613,
        1.4177416563034058
      ],
      "label": 25,
      "category": "apple",
      "sprite_path": "static/dump/umap/static/train/grapes/Image_47.jpg"
    },
    {
      "embedding": [
        6.274016380310059,
        3.677110195159912
      ],
      "label": 25,
      "category": "apple",
      "sprite_path": "static/dump/umap/static/train/grapes/Image_19.jpg"
    },
    {
      "embedding": [
        11.696255683898926,
        1.6383519172668457
      ],
      "label": 25,
      "category": "apple",
      "sprite_path": "static/dump/umap/static/train/grapes/Image_88.jpg"
    },
    {
      "embedding": [
        12.222639083862305,
        1.0365649461746216
      ],
      "label": 25,
      "category": "apple",
      "sprite_path": "static/dump/umap/static/train/grapes/Image_29.jpg"
    },
    {
      "embedding": [
        8.966647148132324,
        2.5887815952301025
      ],
      "label": 25,
      "category": "apple",
      "sprite_path": "static/dump/umap/static/train/grapes/Image_61.jpg"
    },
    {
      "embedding": [
        11.071768760681152,
        0.5446674227714539
      ],
      "label": 25,
      "category": "apple",
      "sprite_path": "static/dump/umap/static/train/grapes/Image_84.jpg"
    },
    {
      "embedding": [
        0.8108817934989929,
        6.382952690124512
      ],
      "label": 25,
      "category": "apple",
      "sprite_path": "static/dump/umap/static/train/grapes/Image_85.jpg"
    },
    {
      "embedding": [
        8.565691947937012,
        2.566476821899414
      ],
      "label": 25,
      "category": "apple",
      "sprite_path": "static/dump/umap/static/train/grapes/Image_74.jpg"
    },
    {
      "embedding": [
        8.732327461242676,
        3.621289014816284
      ],
      "label": 25,
      "category": "apple",
      "sprite_path": "static/dump/umap/static/train/grapes/Image_25.jpeg"
    },
    {
      "embedding": [
        0.8314285278320312,
        6.30592155456543
      ],
      "label": 25,
      "category": "apple",
      "sprite_path": "static/dump/umap/static/train/grapes/Image_53.jpg"
    },
    {
      "embedding": [
        0.9971117377281189,
        6.273580551147461
      ],
      "label": 25,
      "category": "apple",
      "sprite_path": "static/dump/umap/static/train/grapes/Image_64.jpg"
    },
    {
      "embedding": [
        7.014108657836914,
        0.8646736741065979
      ],
      "label": 25,
      "category": "apple",
      "sprite_path": "static/dump/umap/static/train/grapes/Image_92.jpg"
    },
    {
      "embedding": [
        9.965895652770996,
        2.3759777545928955
      ],
      "label": 25,
      "category": "apple",
      "sprite_path": "static/dump/umap/static/train/grapes/Image_27.jpg"
    },
    {
      "embedding": [
        10.867526054382324,
        2.0290791988372803
      ],
      "label": 25,
      "category": "apple",
      "sprite_path": "static/dump/umap/static/train/grapes/Image_55.jpg"
    },
    {
      "embedding": [
        10.000421524047852,
        1.1262578964233398
      ],
      "label": 25,
      "category": "apple",
      "sprite_path": "static/dump/umap/static/train/grapes/Image_44.jpg"
    },
    {
      "embedding": [
        1.1824030876159668,
        6.238847732543945
      ],
      "label": 25,
      "category": "apple",
      "sprite_path": "static/dump/umap/static/train/grapes/Image_39.png"
    },
    {
      "embedding": [
        11.305069923400879,
        0.9206667542457581
      ],
      "label": 25,
      "category": "apple",
      "sprite_path": "static/dump/umap/static/train/grapes/Image_73.jpg"
    },
    {
      "embedding": [
        0.8090588450431824,
        6.3829779624938965
      ],
      "label": 25,
      "category": "apple",
      "sprite_path": "static/dump/umap/static/train/grapes/Image_96.jpg"
    },
    {
      "embedding": [
        7.281920433044434,
        3.1039600372314453
      ],
      "label": 25,
      "category": "apple",
      "sprite_path": "static/dump/umap/static/train/grapes/Image_52.jpg"
    },
    {
      "embedding": [
        5.386236190795898,
        3.0313754081726074
      ],
      "label": 25,
      "category": "apple",
      "sprite_path": "static/dump/umap/static/train/grapes/Image_90.jpg"
    },
    {
      "embedding": [
        0.8777543902397156,
        6.167587757110596
      ],
      "label": 25,
      "category": "apple",
      "sprite_path": "static/dump/umap/static/train/grapes/Image_11.jpg"
    },
    {
      "embedding": [
        0.876185953617096,
        6.230583667755127
      ],
      "label": 25,
      "category": "apple",
      "sprite_path": "static/dump/umap/static/train/grapes/Image_100.jpeg"
    },
    {
      "embedding": [
        0.6762582659721375,
        5.446954250335693
      ],
      "label": 25,
      "category": "apple",
      "sprite_path": "static/dump/umap/static/train/grapes/Image_80.jpg"
    },
    {
      "embedding": [
        5.411907196044922,
        3.005075216293335
      ],
      "label": 25,
      "category": "apple",
      "sprite_path": "static/dump/umap/static/train/grapes/Image_67.jpg"
    },
    {
      "embedding": [
        12.543008804321289,
        1.131812334060669
      ],
      "label": 25,
      "category": "apple",
      "sprite_path": "static/dump/umap/static/train/grapes/Image_50.jpg"
    },
    {
      "embedding": [
        10.977306365966797,
        0.5232232213020325
      ],
      "label": 25,
      "category": "apple",
      "sprite_path": "static/dump/umap/static/train/grapes/Image_58.jpg"
    },
    {
      "embedding": [
        8.79625415802002,
        3.6103479862213135
      ],
      "label": 25,
      "category": "apple",
      "sprite_path": "static/dump/umap/static/train/grapes/Image_97.jpg"
    },
    {
      "embedding": [
        6.255788326263428,
        3.6969785690307617
      ],
      "label": 25,
      "category": "apple",
      "sprite_path": "static/dump/umap/static/train/grapes/Image_62.jpg"
    },
    {
      "embedding": [
        8.886122703552246,
        1.7035995721817017
      ],
      "label": 25,
      "category": "apple",
      "sprite_path": "static/dump/umap/static/train/grapes/Image_30.jpg"
    },
    {
      "embedding": [
        7.229038715362549,
        3.201171875
      ],
      "label": 25,
      "category": "apple",
      "sprite_path": "static/dump/umap/static/train/grapes/Image_70.jpg"
    },
    {
      "embedding": [
        9.94720458984375,
        0.9875054359436035
      ],
      "label": 25,
      "category": "apple",
      "sprite_path": "static/dump/umap/static/train/grapes/Image_40.jpeg"
    },
    {
      "embedding": [
        9.607959747314453,
        2.5762059688568115
      ],
      "label": 14,
      "category": "paprika",
      "sprite_path": "static/dump/umap/static/train/grapes/Image_15.jpg"
    },
    {
      "embedding": [
        10.231011390686035,
        0.4111686944961548
      ],
      "label": 14,
      "category": "paprika",
      "sprite_path": "static/dump/umap/static/train/grapes/Image_35.jpg"
    },
    {
      "embedding": [
        10.037068367004395,
        2.4600861072540283
      ],
      "label": 14,
      "category": "paprika",
      "sprite_path": "static/dump/umap/static/train/grapes/Image_5.jpeg"
    },
    {
      "embedding": [
        2.9073374271392822,
        4.83986759185791
      ],
      "label": 14,
      "category": "paprika",
      "sprite_path": "static/dump/umap/static/train/grapes/Image_28.jpeg"
    },
    {
      "embedding": [
        10.71032428741455,
        1.6120721101760864
      ],
      "label": 14,
      "category": "paprika",
      "sprite_path": "static/dump/umap/static/train/grapes/Image_14.jpg"
    },
    {
      "embedding": [
        9.975164413452148,
        2.330216646194458
      ],
      "label": 14,
      "category": "paprika",
      "sprite_path": "static/dump/umap/static/train/grapes/Image_45.png"
    },
    {
      "embedding": [
        9.518892288208008,
        2.2135729789733887
      ],
      "label": 14,
      "category": "paprika",
      "sprite_path": "static/dump/umap/static/train/grapes/Image_76.jpg"
    },
    {
      "embedding": [
        3.0937259197235107,
        4.582474231719971
      ],
      "label": 14,
      "category": "paprika",
      "sprite_path": "static/dump/umap/static/train/grapes/Image_63.jpg"
    },
    {
      "embedding": [
        10.488873481750488,
        1.7438021898269653
      ],
      "label": 14,
      "category": "paprika",
      "sprite_path": "static/dump/umap/static/train/grapes/Image_75.jpg"
    },
    {
      "embedding": [
        6.1920390129089355,
        3.3377482891082764
      ],
      "label": 14,
      "category": "paprika",
      "sprite_path": "static/dump/umap/static/train/grapes/Image_24.jpg"
    },
    {
      "embedding": [
        2.586233377456665,
        4.692914009094238
      ],
      "label": 14,
      "category": "paprika",
      "sprite_path": "static/dump/umap/static/train/grapes/Image_99.jpg"
    },
    {
      "embedding": [
        2.0714292526245117,
        4.829926490783691
      ],
      "label": 14,
      "category": "paprika",
      "sprite_path": "static/dump/umap/static/train/grapes/Image_32.jpg"
    },
    {
      "embedding": [
        8.43603801727295,
        2.3509891033172607
      ],
      "label": 14,
      "category": "paprika",
      "sprite_path": "static/dump/umap/static/train/grapes/Image_37.jpg"
    },
    {
      "embedding": [
        10.67223834991455,
        1.399570107460022
      ],
      "label": 14,
      "category": "paprika",
      "sprite_path": "static/dump/umap/static/train/grapes/Image_51.jpg"
    },
    {
      "embedding": [
        10.512117385864258,
        1.2601507902145386
      ],
      "label": 14,
      "category": "paprika",
      "sprite_path": "static/dump/umap/static/train/grapes/Image_54.jpg"
    },
    {
      "embedding": [
        10.309483528137207,
        1.255274772644043
      ],
      "label": 14,
      "category": "paprika",
      "sprite_path": "static/dump/umap/static/train/grapes/Image_93.jpg"
    },
    {
      "embedding": [
        4.138738632202148,
        4.666694641113281
      ],
      "label": 14,
      "category": "paprika",
      "sprite_path": "static/dump/umap/static/train/grapes/Image_87.png"
    },
    {
      "embedding": [
        3.121805191040039,
        5.834169387817383
      ],
      "label": 14,
      "category": "paprika",
      "sprite_path": "static/dump/umap/static/train/grapes/Image_42.jpg"
    },
    {
      "embedding": [
        10.761465072631836,
        0.9579880237579346
      ],
      "label": 14,
      "category": "paprika",
      "sprite_path": "static/dump/umap/static/train/grapes/Image_31.jpg"
    },
    {
      "embedding": [
        1.4359067678451538,
        4.176002025604248
      ],
      "label": 14,
      "category": "paprika",
      "sprite_path": "static/dump/umap/static/train/grapes/Image_2.jpg"
    },
    {
      "embedding": [
        10.012381553649902,
        2.3268086910247803
      ],
      "label": 14,
      "category": "paprika",
      "sprite_path": "static/dump/umap/static/train/grapes/Image_3.jpg"
    },
    {
      "embedding": [
        6.318100929260254,
        2.8214974403381348
      ],
      "label": 14,
      "category": "paprika",
      "sprite_path": "static/dump/umap/static/train/grapes/Image_26.jpg"
    },
    {
      "embedding": [
        10.03200912475586,
        1.822801113128662
      ],
      "label": 14,
      "category": "paprika",
      "sprite_path": "static/dump/umap/static/train/grapes/Image_66.jpg"
    },
    {
      "embedding": [
        8.734207153320312,
        3.7086093425750732
      ],
      "label": 14,
      "category": "paprika",
      "sprite_path": "static/dump/umap/static/train/grapes/Image_43.jpg"
    },
    {
      "embedding": [
        11.182723045349121,
        0.4540598392486572
      ],
      "label": 14,
      "category": "paprika",
      "sprite_path": "static/dump/umap/static/train/grapes/Image_18.jpg"
    },
    {
      "embedding": [
        4.231505870819092,
        4.6163434982299805
      ],
      "label": 14,
      "category": "paprika",
      "sprite_path": "static/dump/umap/static/train/tomato/Image_89.jpg"
    },
    {
      "embedding": [
        2.8796935081481934,
        4.160189628601074
      ],
      "label": 14,
      "category": "paprika",
      "sprite_path": "static/dump/umap/static/train/tomato/Image_65.jpg"
    },
    {
      "embedding": [
        12.83297061920166,
        1.7507107257843018
      ],
      "label": 14,
      "category": "paprika",
      "sprite_path": "static/dump/umap/static/train/tomato/Image_1.jpg"
    },
    {
      "embedding": [
        10.286239624023438,
        0.4544011354446411
      ],
      "label": 14,
      "category": "paprika",
      "sprite_path": "static/dump/umap/static/train/tomato/Image_16.jpg"
    },
    {
      "embedding": [
        10.534249305725098,
        0.9733017086982727
      ],
      "label": 14,
      "category": "paprika",
      "sprite_path": "static/dump/umap/static/train/tomato/Image_57.jpg"
    },
    {
      "embedding": [
        9.790061950683594,
        1.4455453157424927
      ],
      "label": 14,
      "category": "paprika",
      "sprite_path": "static/dump/umap/static/train/tomato/Image_12.jpg"
    },
    {
      "embedding": [
        11.061622619628906,
        1.3299999237060547
      ],
      "label": 14,
      "category": "paprika",
      "sprite_path": "static/dump/umap/static/train/tomato/Image_56.jpg"
    },
    {
      "embedding": [
        9.32913875579834,
        1.7999869585037231
      ],
      "label": 14,
      "category": "paprika",
      "sprite_path": "static/dump/umap/static/train/tomato/Image_33.jpg"
    },
    {
      "embedding": [
        9.962045669555664,
        0.11772411316633224
      ],
      "label": 14,
      "category": "paprika",
      "sprite_path": "static/dump/umap/static/train/tomato/Image_45.jpg"
    },
    {
      "embedding": [
        10.658502578735352,
        1.1188277006149292
      ],
      "label": 14,
      "category": "paprika",
      "sprite_path": "static/dump/umap/static/train/tomato/Image_40.jpg"
    },
    {
      "embedding": [
        8.965564727783203,
        1.9818910360336304
      ],
      "label": 14,
      "category": "paprika",
      "sprite_path": "static/dump/umap/static/train/tomato/Image_10.jpg"
    },
    {
      "embedding": [
        10.502135276794434,
        0.5863595604896545
      ],
      "label": 14,
      "category": "paprika",
      "sprite_path": "static/dump/umap/static/train/tomato/Image_21.jpg"
    },
    {
      "embedding": [
        9.524736404418945,
        2.4142675399780273
      ],
      "label": 14,
      "category": "paprika",
      "sprite_path": "static/dump/umap/static/train/tomato/Image_78.jpg"
    },
    {
      "embedding": [
        2.8537800312042236,
        3.8297884464263916
      ],
      "label": 14,
      "category": "paprika",
      "sprite_path": "static/dump/umap/static/train/tomato/Image_59.jpg"
    },
    {
      "embedding": [
        9.028777122497559,
        1.924183964729309
      ],
      "label": 14,
      "category": "paprika",
      "sprite_path": "static/dump/umap/static/train/tomato/Image_4.jpg"
    },
    {
      "embedding": [
        2.525402545928955,
        4.107334136962891
      ],
      "label": 14,
      "category": "paprika",
      "sprite_path": "static/dump/umap/static/train/tomato/Image_38.jpg"
    },
    {
      "embedding": [
        10.408675193786621,
        0.19872409105300903
      ],
      "label": 14,
      "category": "paprika",
      "sprite_path": "static/dump/umap/static/train/tomato/Image_41.jpg"
    },
    {
      "embedding": [
        2.3948068618774414,
        5.110367298126221
      ],
      "label": 14,
      "category": "paprika",
      "sprite_path": "static/dump/umap/static/train/tomato/Image_7.jpg"
    },
    {
      "embedding": [
        8.409465789794922,
        2.3196299076080322
      ],
      "label": 14,
      "category": "paprika",
      "sprite_path": "static/dump/umap/static/train/tomato/Image_69.jpg"
    },
    {
      "embedding": [
        10.450300216674805,
        0.2777292728424072
      ],
      "label": 14,
      "category": "paprika",
      "sprite_path": "static/dump/umap/static/train/tomato/Image_60.jpg"
    },
    {
      "embedding": [
        7.173923015594482,
        3.655146360397339
      ],
      "label": 14,
      "category": "paprika",
      "sprite_path": "static/dump/umap/static/train/tomato/Image_13.jpg"
    },
    {
      "embedding": [
        11.65127182006836,
        0.8451244831085205
      ],
      "label": 14,
      "category": "paprika",
      "sprite_path": "static/dump/umap/static/train/tomato/Image_91.jpg"
    },
    {
      "embedding": [
        10.866649627685547,
        0.6816035509109497
      ],
      "label": 14,
      "category": "paprika",
      "sprite_path": "static/dump/umap/static/train/tomato/Image_86.jpg"
    },
    {
      "embedding": [
        2.7870049476623535,
        5.2621235847473145
      ],
      "label": 14,
      "category": "paprika",
      "sprite_path": "static/dump/umap/static/train/tomato/Image_68.jpg"
    },
    {
      "embedding": [
        9.772008895874023,
        2.3912389278411865
      ],
      "label": 14,
      "category": "paprika",
      "sprite_path": "static/dump/umap/static/train/tomato/Image_23.jpg"
    },
    {
      "embedding": [
        11.701255798339844,
        0.6521871089935303
      ],
      "label": 14,
      "category": "paprika",
      "sprite_path": "static/dump/umap/static/train/tomato/Image_8.jpg"
    },
    {
      "embedding": [
        10.478348731994629,
        0.2660888135433197
      ],
      "label": 14,
      "category": "paprika",
      "sprite_path": "static/dump/umap/static/train/tomato/Image_48.png"
    },
    {
      "embedding": [
        10.49416446685791,
        0.9467068314552307
      ],
      "label": 14,
      "category": "paprika",
      "sprite_path": "static/dump/umap/static/train/tomato/Image_22.jpg"
    },
    {
      "embedding": [
        11.215448379516602,
        0.947136640548706
      ],
      "label": 14,
      "category": "paprika",
      "sprite_path": "static/dump/umap/static/train/tomato/Image_79.jpg"
    },
    {
      "embedding": [
        10.955092430114746,
        0.3360055088996887
      ],
      "label": 14,
      "category": "paprika",
      "sprite_path": "static/dump/umap/static/train/tomato/Image_17.jpg"
    },
    {
      "embedding": [
        10.34322738647461,
        2.0390169620513916
      ],
      "label": 14,
      "category": "paprika",
      "sprite_path": "static/dump/umap/static/train/tomato/Image_77.jpg"
    },
    {
      "embedding": [
        2.8652374744415283,
        4.448305130004883
      ],
      "label": 14,
      "category": "paprika",
      "sprite_path": "static/dump/umap/static/train/tomato/Image_25.jpg"
    },
    {
      "embedding": [
        10.200798988342285,
        0.43431898951530457
      ],
      "label": 14,
      "category": "paprika",
      "sprite_path": "static/dump/umap/static/train/tomato/Image_42.png"
    },
    {
      "embedding": [
        3.011852979660034,
        4.86830997467041
      ],
      "label": 14,
      "category": "paprika",
      "sprite_path": "static/dump/umap/static/train/tomato/Image_9.jpg"
    },
    {
      "embedding": [
        10.830083847045898,
        1.0392932891845703
      ],
      "label": 14,
      "category": "paprika",
      "sprite_path": "static/dump/umap/static/train/tomato/Image_71.jpg"
    },
    {
      "embedding": [
        2.5468909740448,
        4.248835563659668
      ],
      "label": 14,
      "category": "paprika",
      "sprite_path": "static/dump/umap/static/train/tomato/Image_34.jpg"
    },
    {
      "embedding": [
        8.58545207977295,
        2.2893917560577393
      ],
      "label": 14,
      "category": "paprika",
      "sprite_path": "static/dump/umap/static/train/tomato/Image_81.jpg"
    },
    {
      "embedding": [
        1.5421899557113647,
        4.645007133483887
      ],
      "label": 14,
      "category": "paprika",
      "sprite_path": "static/dump/umap/static/train/tomato/Image_6.jpg"
    },
    {
      "embedding": [
        8.310745239257812,
        2.7562811374664307
      ],
      "label": 14,
      "category": "paprika",
      "sprite_path": "static/dump/umap/static/train/tomato/Image_20.jpg"
    },
    {
      "embedding": [
        3.8697283267974854,
        4.852378845214844
      ],
      "label": 14,
      "category": "paprika",
      "sprite_path": "static/dump/umap/static/train/tomato/Image_98.jpg"
    },
    {
      "embedding": [
        10.669259071350098,
        0.2676340937614441
      ],
      "label": 14,
      "category": "paprika",
      "sprite_path": "static/dump/umap/static/train/tomato/Image_47.jpg"
    },
    {
      "embedding": [
        8.229469299316406,
        2.0973830223083496
      ],
      "label": 14,
      "category": "paprika",
      "sprite_path": "static/dump/umap/static/train/tomato/Image_19.jpg"
    },
    {
      "embedding": [
        8.668658256530762,
        1.6977194547653198
      ],
      "label": 14,
      "category": "paprika",
      "sprite_path": "static/dump/umap/static/train/tomato/Image_29.jpg"
    },
    {
      "embedding": [
        3.2513694763183594,
        3.9644596576690674
      ],
      "label": 14,
      "category": "paprika",
      "sprite_path": "static/dump/umap/static/train/tomato/Image_61.jpg"
    },
    {
      "embedding": [
        9.487972259521484,
        0.9021161198616028
      ],
      "label": 14,
      "category": "paprika",
      "sprite_path": "static/dump/umap/static/train/tomato/Image_84.jpg"
    },
    {
      "embedding": [
        10.090621948242188,
        2.4265024662017822
      ],
      "label": 14,
      "category": "paprika",
      "sprite_path": "static/dump/umap/static/train/tomato/Image_74.jpg"
    },
    {
      "embedding": [
        2.5248756408691406,
        5.468135356903076
      ],
      "label": 14,
      "category": "paprika",
      "sprite_path": "static/dump/umap/static/train/tomato/Image_53.jpg"
    },
    {
      "embedding": [
        10.61070728302002,
        0.7351017594337463
      ],
      "label": 14,
      "category": "paprika",
      "sprite_path": "static/dump/umap/static/train/tomato/Image_27.jpg"
    },
    {
      "embedding": [
        9.922810554504395,
        2.5028457641601562
      ],
      "label": 14,
      "category": "paprika",
      "sprite_path": "static/dump/umap/static/train/tomato/Image_55.jpg"
    },
    {
      "embedding": [
        11.646482467651367,
        0.94352787733078
      ],
      "label": 14,
      "category": "paprika",
      "sprite_path": "static/dump/umap/static/train/tomato/Image_44.jpg"
    },
    {
      "embedding": [
        9.800355911254883,
        2.0467920303344727
      ],
      "label": 14,
      "category": "paprika",
      "sprite_path": "static/dump/umap/static/train/tomato/Image_62.png"
    },
    {
      "embedding": [
        1.5000771284103394,
        4.62771463394165
      ],
      "label": 14,
      "category": "paprika",
      "sprite_path": "static/dump/umap/static/train/tomato/Image_72.jpg"
    },
    {
      "embedding": [
        12.452585220336914,
        0.5902130603790283
      ],
      "label": 14,
      "category": "paprika",
      "sprite_path": "static/dump/umap/static/train/tomato/Image_73.jpg"
    },
    {
      "embedding": [
        10.115274429321289,
        1.6579891443252563
      ],
      "label": 14,
      "category": "paprika",
      "sprite_path": "static/dump/umap/static/train/tomato/Image_96.jpg"
    },
    {
      "embedding": [
        3.253706216812134,
        5.80026388168335
      ],
      "label": 14,
      "category": "paprika",
      "sprite_path": "static/dump/umap/static/train/tomato/Image_52.jpg"
    },
    {
      "embedding": [
        9.923023223876953,
        1.3464024066925049
      ],
      "label": 14,
      "category": "paprika",
      "sprite_path": "static/dump/umap/static/train/tomato/Image_90.jpg"
    },
    {
      "embedding": [
        7.99410343170166,
        2.9161107540130615
      ],
      "label": 14,
      "category": "paprika",
      "sprite_path": "static/dump/umap/static/train/tomato/Image_83.jpg"
    },
    {
      "embedding": [
        9.567180633544922,
        1.0120402574539185
      ],
      "label": 14,
      "category": "paprika",
      "sprite_path": "static/dump/umap/static/train/tomato/Image_11.jpg"
    },
    {
      "embedding": [
        7.826083660125732,
        2.4569666385650635
      ],
      "label": 14,
      "category": "paprika",
      "sprite_path": "static/dump/umap/static/train/tomato/Image_31.png"
    },
    {
      "embedding": [
        10.542755126953125,
        1.2234593629837036
      ],
      "label": 14,
      "category": "paprika",
      "sprite_path": "static/dump/umap/static/train/tomato/Image_82.jpg"
    },
    {
      "embedding": [
        10.007096290588379,
        2.2373528480529785
      ],
      "label": 14,
      "category": "paprika",
      "sprite_path": "static/dump/umap/static/train/tomato/Image_67.jpg"
    },
    {
      "embedding": [
        10.499156951904297,
        0.8667296767234802
      ],
      "label": 14,
      "category": "paprika",
      "sprite_path": "static/dump/umap/static/train/tomato/Image_50.jpg"
    },
    {
      "embedding": [
        3.432117462158203,
        4.98697566986084
      ],
      "label": 14,
      "category": "paprika",
      "sprite_path": "static/dump/umap/static/train/tomato/Image_46.png"
    },
    {
      "embedding": [
        2.7353224754333496,
        4.268312931060791
      ],
      "label": 14,
      "category": "paprika",
      "sprite_path": "static/dump/umap/static/train/tomato/Image_58.jpg"
    },
    {
      "embedding": [
        2.8710451126098633,
        4.414475440979004
      ],
      "label": 14,
      "category": "paprika",
      "sprite_path": "static/dump/umap/static/train/tomato/Image_97.jpg"
    },
    {
      "embedding": [
        12.832074165344238,
        0.8186511397361755
      ],
      "label": 14,
      "category": "paprika",
      "sprite_path": "static/dump/umap/static/train/tomato/Image_30.jpg"
    },
    {
      "embedding": [
        6.288393497467041,
        1.9934020042419434
      ],
      "label": 14,
      "category": "paprika",
      "sprite_path": "static/dump/umap/static/train/tomato/Image_5.jpg"
    },
    {
      "embedding": [
        3.3108839988708496,
        5.108099460601807
      ],
      "label": 14,
      "category": "paprika",
      "sprite_path": "static/dump/umap/static/train/tomato/Image_100.jpg"
    },
    {
      "embedding": [
        9.12820053100586,
        2.5085978507995605
      ],
      "label": 14,
      "category": "paprika",
      "sprite_path": "static/dump/umap/static/train/tomato/Image_70.jpg"
    },
    {
      "embedding": [
        8.655108451843262,
        1.7124053239822388
      ],
      "label": 14,
      "category": "paprika",
      "sprite_path": "static/dump/umap/static/train/tomato/Image_15.jpg"
    },
    {
      "embedding": [
        8.914856910705566,
        1.922204852104187
      ],
      "label": 14,
      "category": "paprika",
      "sprite_path": "static/dump/umap/static/train/tomato/Image_35.jpeg"
    },
    {
      "embedding": [
        10.785441398620605,
        0.6971611976623535
      ],
      "label": 14,
      "category": "paprika",
      "sprite_path": "static/dump/umap/static/train/tomato/Image_14.jpg"
    },
    {
      "embedding": [
        10.507402420043945,
        0.7285786271095276
      ],
      "label": 14,
      "category": "paprika",
      "sprite_path": "static/dump/umap/static/train/tomato/Image_39.jpg"
    },
    {
      "embedding": [
        7.890527725219727,
        3.1457059383392334
      ],
      "label": 14,
      "category": "paprika",
      "sprite_path": "static/dump/umap/static/train/tomato/Image_76.jpg"
    },
    {
      "embedding": [
        10.778203010559082,
        0.3696262538433075
      ],
      "label": 14,
      "category": "paprika",
      "sprite_path": "static/dump/umap/static/train/tomato/Image_63.jpg"
    },
    {
      "embedding": [
        8.461593627929688,
        2.377781391143799
      ],
      "label": 33,
      "category": "pineapple",
      "sprite_path": "static/dump/umap/static/train/tomato/Image_24.jpg"
    },
    {
      "embedding": [
        8.394532203674316,
        0.5956977605819702
      ],
      "label": 33,
      "category": "pineapple",
      "sprite_path": "static/dump/umap/static/train/tomato/Image_99.jpg"
    },
    {
      "embedding": [
        8.932668685913086,
        0.7483540177345276
      ],
      "label": 33,
      "category": "pineapple",
      "sprite_path": "static/dump/umap/static/train/tomato/Image_32.jpg"
    },
    {
      "embedding": [
        10.740463256835938,
        0.5426335334777832
      ],
      "label": 33,
      "category": "pineapple",
      "sprite_path": "static/dump/umap/static/train/tomato/Image_80.png"
    },
    {
      "embedding": [
        11.489612579345703,
        1.3953181505203247
      ],
      "label": 33,
      "category": "pineapple",
      "sprite_path": "static/dump/umap/static/train/tomato/Image_37.jpg"
    },
    {
      "embedding": [
        10.063238143920898,
        1.0231828689575195
      ],
      "label": 33,
      "category": "pineapple",
      "sprite_path": "static/dump/umap/static/train/tomato/Image_51.jpg"
    },
    {
      "embedding": [
        12.57347297668457,
        0.5574389696121216
      ],
      "label": 33,
      "category": "pineapple",
      "sprite_path": "static/dump/umap/static/train/tomato/Image_28.jpg"
    },
    {
      "embedding": [
        9.970308303833008,
        0.45936742424964905
      ],
      "label": 33,
      "category": "pineapple",
      "sprite_path": "static/dump/umap/static/train/tomato/Image_54.jpg"
    },
    {
      "embedding": [
        3.8449480533599854,
        4.927665710449219
      ],
      "label": 33,
      "category": "pineapple",
      "sprite_path": "static/dump/umap/static/train/tomato/Image_93.jpg"
    },
    {
      "embedding": [
        1.8391631841659546,
        4.48385763168335
      ],
      "label": 33,
      "category": "pineapple",
      "sprite_path": "static/dump/umap/static/train/tomato/Image_75.jpeg"
    },
    {
      "embedding": [
        7.471067428588867,
        2.3454792499542236
      ],
      "label": 33,
      "category": "pineapple",
      "sprite_path": "static/dump/umap/static/train/tomato/Image_2.jpg"
    },
    {
      "embedding": [
        7.018780708312988,
        2.196059226989746
      ],
      "label": 33,
      "category": "pineapple",
      "sprite_path": "static/dump/umap/static/train/tomato/Image_3.jpg"
    },
    {
      "embedding": [
        12.550629615783691,
        1.0699480772018433
      ],
      "label": 33,
      "category": "pineapple",
      "sprite_path": "static/dump/umap/static/train/tomato/Image_26.jpg"
    },
    {
      "embedding": [
        3.141331672668457,
        4.4907708168029785
      ],
      "label": 33,
      "category": "pineapple",
      "sprite_path": "static/dump/umap/static/train/tomato/Image_66.jpg"
    },
    {
      "embedding": [
        10.63576889038086,
        1.276460886001587
      ],
      "label": 33,
      "category": "pineapple",
      "sprite_path": "static/dump/umap/static/train/tomato/Image_87.jpg"
    },
    {
      "embedding": [
        12.501749992370605,
        1.1294214725494385
      ],
      "label": 33,
      "category": "pineapple",
      "sprite_path": "static/dump/umap/static/train/tomato/Image_43.jpg"
    },
    {
      "embedding": [
        9.817286491394043,
        2.186919927597046
      ],
      "label": 33,
      "category": "pineapple",
      "sprite_path": "static/dump/umap/static/train/tomato/Image_18.jpg"
    }
  ]
};

export const useEmbeddingsData = () => {
  const [points, setPoints] = useState<Point[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // In production, replace this with actual API call
        // const response = await fetch('your-api-endpoint');
        // const data = await response.json();
        const data = MOCK_API_DATA; // Simulated API response

        // Scale embeddings to fit the visualization space
        const scaledPoints = data.items.map((item: EmbeddingItem, index: number) => {
          // Scale factors can be adjusted based on your needs
          const scaleX = 800;
          const scaleY = 600;
          
          return {
            id: index,
            x: item.embedding[0] * (scaleX / 15), // Adjust scaling factor as needed
            y: item.embedding[1] * (scaleY / 15),
            category: item.category,
            spritePath: item.sprite_path,
            originalItem: item
          };
        });

        setPoints(scaledPoints);
        setIsLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch data');
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { points, isLoading, error };
};