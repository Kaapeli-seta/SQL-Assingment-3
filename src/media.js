const mediaItems = [
  {
    media_id: 9632,
    filename: 'CoffeeIcon.png',
    filesize: 887574,
    title: 'CoffeeIcon',
    description: 'Coin shaped icon of a coffee cup',
    user_id: 1606,
    media_type: 'image/png',
    created_at: '2023-10-16T19:00:09.000Z',
  },
  {
    media_id: 9626,
    filename: 'PageIcon.png',
    filesize: 60703,
    title: 'PageIcon',
    description: 'Icon for a page',
    user_id: 3671,
    media_type: 'image/png',
    created_at: '2023-10-13T12:14:26.000Z',
  },
  {
    media_id: 9625,
    filename: 'Wood-512x512.png',
    filesize: 30635,
    title: 'Wood-512x512',
    description: 'Image of a wood texture',
    user_id: 260,
    media_type: 'image/png',
    created_at: '2023-10-12T20:03:08.000Z',
  },
  {
    media_id: 9592,
    filename: 'Coffee-cup.jpg',
    filesize: 85472,
    title: 'Coffe-cup',
    description: 'image of a coffee cup on a table',
    user_id: 3609,
    media_type: 'image/jpeg',
    created_at: '2023-10-12T06:59:05.000Z',
  },
  {
    media_id: 9590,
    filename: 'OQ-PQ.png',
    filesize: 23829,
    title: 'OQ-PQ',
    description: 'Image of vectors in a triangle',
    user_id: 305,
    media_type: 'image/png',
    created_at: '2023-10-12T06:56:41.000Z',
  },
];

const getItmes = (res) => {
  res.json(mediaItems);
};

const postItmes = (req, res) => {
  const newItem = req.body;
  newItem.media_id = mediaItems[mediaItems.length - 1].media_id + 1;
  mediaItems.push(newItem);
  res.status(201).json({message: 'Item added', id: newItem.id});
};

const getItemById = (req, res) => {
  const id = parseInt(req.params.id);
  const item = mediaItems.find((item) => item.media_id === id);
  if (item) {
    if (req.query.format === 'plain') {
      res.send(item.name);
      return;
    }
    res.json(item);
  } else {
    res.status(404).json({message: 'item not found'});
  }
};

const putItemById = (req, res) => {
  const id = parseInt(req.params.id);
  let item = mediaItems.findIndex((item) => item.media_id === id);
  mediaItems[item] = {...mediaItems[item], ...req.body};
  res.status(201).json({item});
};

export {getItmes, postItmes, getItemById, putItemById, mediaItems};
