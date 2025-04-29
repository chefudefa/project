
export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  const users = {
    "user001": "a7Yb9C",
    "user002": "q9Xp2M",
    "user003": "Z4kL0v",
    "user004": "n1Pz8q",
    "user005": "p0Yr7d",
    "user006": "r3Cw5z",
    "user007": "e2Jk7v",
    "user008": "m4Tx8q",
    "user009": "f1Pv3w",
    "user010": "b6Wq9y",
    "user011": "l8Xn2z",
    "user012": "k3Ms5q",
    "user013": "g9Vq7w",
    "user014": "v2Rk4z",
    "user015": "t5Zw1y",
    "user016": "s7Px9q",
    "user017": "h8Nk5v",
    "user018": "d1Wq3y",
    "user019": "c4Xp7z",
    "user020": "x3Vq8w",
    "user021": "z9Rk5q",
    "user022": "y2Lx1v",
    "user023": "w6Mn9y",
    "user024": "u5Qp7z",
    "user025": "i8Yk3w",
    "user026": "o7Zn5q",
    "user027": "p3Xq8y",
    "user028": "n2Vk7z",
    "user029": "m6Wq1v",
    "user030": "l5Px9y",
    "user031": "k1Rk7z",
    "user032": "j8Yp3w",
    "user033": "h7Vn5q",
    "user034": "g4Wq8y",
    "user035": "f3Xp7z",
    "user036": "e9Rk1w",
    "user037": "d2Lx7q",
    "user038": "c6Mn8y",
    "user039": "b5Qp1z",
    "user040": "a8Yk7w",
    "user041": "z7Zn3q",
    "user042": "y3Xq5y",
    "user043": "w2Vk9z",
    "user044": "v6Wq3w",
    "user045": "u5Px7q",
    "user046": "t1Rk8y",
    "user047": "s8Yp1z",
    "user048": "r7Vn3w",
    "user049": "q4Wq7z",
    "user050": "p3Xp9y"
  };

  const { username, password } = req.body;

  if (users[username] && users[username] === password) {
    return res.status(200).json({ success: true });
  } else {
    return res.status(200).json({ success: false });
  }
}
