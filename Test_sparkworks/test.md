Soal 1: Buat function untuk melakukan sorting. Jangan asumsi bahwa size array angka akan selalu sama

Soal 2: Buat sebuah fungsi untuk mencetak angka dari 1 sampai 100. Untuk angka kelipatan 3 akan mencetak kata "Fizz", bukan angkanya. Untuk angka kelipatan 5 akan mencetak kata "Buzz", bukan angkanya. Untuk angka kelipatan 3 dan 5 akan mencetak kata "FizzBuzz", bukan angkanya.

Tulis sebuah fungsi yang bertugas untuk merotasi array ke kiri.
Fungsi tersebut memiliki 2 parameter:

- rotasi : berupa integer menentukan jumlah rotasi ke kiri
- array[n] : array berisi integer yang akan dirotasi
  fungsi tersebut harus mengembalikan array berisi integer yang telah dirotasi

contoh:
jika rotasi = 2
array = [1, 2, 3, 4, 5]
maka setelah 2 kali rotasi ke kiri hasil array nya adalah [3, 4, 5, 1, 2]
array tersebut mengalami rotasi sebagai berikut:
[1, 2, 3, 4, 5] -> [2, 3, 4, 5, 1] -> [3, 4, 5, 1, 2]

Gunakan contoh berikut sebagai test:
rotasiKeKiri(4, [1, 2, 3, 4, 5])
hasilnya => [2, 3, 4, 5, 1]

rotasiKeKiri(3, [8, 3, 7, 9, 0, 4])
hasilnya => [9, 0, 4, 8, 3, 7]

rotasiKeKiri(6, [8, 3, 7, 9, 0, 4])
hasilnya => [8, 3, 7, 9, 0, 4]
