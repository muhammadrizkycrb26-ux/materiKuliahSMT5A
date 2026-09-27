# 📱 Modul Praktikum 4: Core Components & Styling #

## 🎯 Tujuan Pembelajaran

Setelah menyelesaikan praktikum ini, mahasiswa mampu:

1. Memahami dan menggunakan **16 Core Components** React Native
2. Menerapkan **StyleSheet** untuk styling terpusat
3. Menggunakan **useState** untuk state management dasar
4. Membuat layout yang responsif dengan **Flexbox**
5. Menangani **interaksi pengguna** (tekan, input, scroll)

## 📱 Praktikum ##

## 📝 LANGKAH 1 — Import & Struktur Dasar

1. Buka File App.js pada folder projek ptmn2
2. Import Library dan Core Component yang dibutuhkan
3. Konfirmasi bukti

<img src="code awal.png" width="50%" >

---

## 📝 LANGKAH 2 — Menyiapkan Data (Objek & Array)

1. Membuat Array Objek bernama PROFILE untuk menampung data Profile
2. Konfirmasi Bukti

<img src="code 1.png" width="50%" >

// ============================================
//  DATA SKILLS (array of objects)
//  → Akan ditampilkan dengan FlatList
// ============================================

<img src="code 2.png" width="50%" >

// ============================================
//  DATA RIWAYAT (sections)
//  → Akan ditampilkan dengan SectionList
// ============================================

<img src="code 3 baru.png" width="50%" >

> [!NOTE]
> **Mengapa data di luar komponen?**  
> Data yang tidak berubah (statis) tidak perlu masuk ke dalam fungsi komponen agar tidak di-recreate setiap render.

---

## 📝 LANGKAH 3 — Sub-Components (SkillCard & TimelineCard)

**Konsep:** Komponen kecil yang bertugas merender satu item list. Ini adalah praktik **component reuse**.

Tambahkan kode berikut **di antara data dan fungsi App()**:

<img src="code 4.png" width="50%" >

---

## 📝 LANGKAH 4 — State Management dengan useState

**Konsep:** `useState` menyimpan data yang bisa berubah. Setiap perubahan state akan men-trigger re-render komponen.

Tambahkan state di dalam fungsi `App()`:
 
<img src="code 6.png" width="50%" >

**✅ Checkpoint:** Aplikasi masih menampilkan teks, tidak ada error.

---

## 📝 LANGKAH 5 — SafeAreaView, StatusBar & Header

**Konsep:**
- `SafeAreaView` → memastikan konten tidak tertutup notch (takik kamera) atau home indicator
- `StatusBar` → mengatur tampilan bar di bagian atas perangkat
- `View` + `Switch` → membangun header bar

Ganti bagian `return (...)` di `App()`:

<img src="code langkah 5.png" width="50%" >

> [!TIP]
> `flexDirection: 'row'` membuat anak View tersusun **horizontal** (kiri ke kanan).  
> Default di React Native adalah `column` (atas ke bawah).

**✅ Checkpoint:** Header bar berwarna gelap dengan teks putih dan switch terlihat.

---

## 📝 LANGKAH 6 — ScrollView & Profil Section (View, Text,  img/image)

**Konsep:**
- `ScrollView` → membungkus konten panjang agar bisa di-scroll
- ` img/image` → menampilkan gambar dari URL (`source={{ uri: '...' }}`)
- `Text` → bisa di-styling dengan `style` prop seperti CSS

Ganti `<View><Text ...>Step 5</Text></View>` dengan:

{/* 4. ScrollView → semua konten CV dibungkus di sini */}

<img src="code langkah 6.png" width="50%" >
 
> [!NOTE]
> **Perbedaan `TouchableOpacity` vs `Pressable`:**
> - `TouchableOpacity` → sederhana, otomatis redup saat ditekan
> - `Pressable` → lebih fleksibel, kita kontrol sendiri style saat `pressed`

**✅ Checkpoint:** Foto profil, nama, jabatan, bio, dan tombol sosmed terlihat.

---

## 📝 LANGKAH 7 — FlatList (Daftar Skills)

**Konsep:** `FlatList` dioptimalkan untuk menampilkan daftar panjang — hanya item yang terlihat di layar yang di-render (lazy rendering / windowing).

Tambahkan kode berikut **di dalam** `<ScrollView>`, setelah section profil:
 
{/* ════════════════════════════════════
    SECTION SKILLS
    Komponen: FlatList
    ════════════════════════════════════ */}

<img src="code langkah 7.png" width="50%" >
 
> [!TIP]
> **Props penting FlatList:**
> | Prop | Fungsi |
> |---|---|
> | `data` | Array sumber data |
> | `keyExtractor` | Fungsi penghasil key unik |
> | `renderItem` | Fungsi render tiap item |
> | `ItemSeparatorComponent` | Komponen pemisah antar item |
> | `ListHeaderComponent` | Komponen di atas list |
> | `ListFooterComponent` | Komponen di bawah list |
> | `numColumns` | Jumlah kolom (grid) |

**✅ Checkpoint:** Daftar skill dengan progress bar berwarna-warni terlihat.

---

## 📝 LANGKAH 8 — SectionList (Pengalaman & Pendidikan)

**Konsep:** `SectionList` seperti `FlatList` tetapi bisa mengelompokkan data berdasarkan section/kategori. Membutuhkan prop `sections` (bukan `data`) yang berisi array objek `{ title, data }`.
 
{/* ════════════════════════════════════
    SECTION RIWAYAT
    Komponen: SectionList
    ════════════════════════════════════ */}

<img src="code langkah 8.png" width="50%" >
 
> [!NOTE]
> **Perbedaan FlatList vs SectionList:**
> | | FlatList | SectionList |
> |---|---|---|
> | Data | `data={array}` | `sections={[{title, data}]}` |
> | Header kelompok | Tidak ada | `renderSectionHeader` |
> | Penggunaan | List seragam | List berkategori |

**✅ Checkpoint:** Daftar pengalaman kerja & pendidikan terkelompok terlihat.

---

## 📝 LANGKAH 9 — TextInput, Button & ActivityIndicator

**Konsep:**
- `TextInput` → input teks. `value` + `onChangeText` = controlled component
- `Button` → tombol paling sederhana di React Native
- `ActivityIndicator` → spinner loading
 
{/* ════════════════════════════════════
    SECTION FORM KONTAK
    Komponen: TextInput, Button, ActivityIndicator
    ════════════════════════════════════ */}

<img src="code langkah 9.png" width="50%" >
 
> [!TIP]
> **Controlled vs Uncontrolled Component:**
> - **Controlled:** `value={state}` + `onChangeText={setState}` → nilai input selalu sesuai state
> - **Uncontrolled:** hanya pakai `ref` → tidak direkomendasikan di React

**✅ Checkpoint:** Form input nama & pesan berfungsi. Tekan "Kirim Pesan" → loading 2 detik → Alert sukses.

---

## 📝 LANGKAH 10 — Modal (Popup Detail)

**Konsep:** `Modal` menampilkan konten di atas (overlay) tampilan saat ini. Dikendalikan dengan prop `visible`.

Tambahkan **setelah** penutup `</ScrollView>` dan sebelum `</SafeAreaView>`:

 
{/* ════════════════════════════════════
    12. MODAL → popup detail riwayat
    ════════════════════════════════════ */}

<img src="code langkah 10.png" width="50%" >

> [!NOTE]
> **Props Modal:**
> | Prop | Nilai | Fungsi |
> |---|---|---|
> | `visible` | `true`/`false` | Tampilkan/sembunyikan |
> | `animationType` | `'slide'`, `'fade'`, `'none'` | Animasi kemunculan |
> | `transparent` | `true`/`false` | Latar transparan |
> | `onRequestClose` | fungsi | Tombol back Android |

**✅ Checkpoint:** Ketuk kartu riwayat → modal muncul dari bawah → tombol Tutup menutup modal.

---

## 📝 LANGKAH 11 — StyleSheet (Styling Terpusat)

**Konsep:** `StyleSheet.create()` adalah cara resmi styling di React Native. Mirip CSS tetapi menggunakan JavaScript object dengan properti camelCase.

Tambahkan kode berikut di **bawah** fungsi `App()` (paling bawah file):


// ============================================
//  PALET WARNA (konstanta warna terpusat)
// ============================================

<img src="code langkah 11 A.png" width="50%" >

// ============================================
//  16. StyleSheet.create() → semua style
// ============================================

<img src="code langkah 11 B.png" width="50%" >

  // ── HEADER BAR ────────────────────────────

  <img src="code langkah 11 C.png" width="50%" >

  // ── SECTION PROFIL ─────────────────────────

  <img src="code langkah 11 D.png" width="50%" >

  // ── SOSIAL MEDIA ───────────────────────────

  <img src="code langkah 11 E.png" width="50%" >

  // ── PRESSABLE DOWNLOAD ─────────────────────

  <img src="code langkah 11 F.png" width="50%" >

  // ── SECTION BOX (wrapper kartu) ────────────

  <img src="code langkah 11 G.png" width="50%" >

  // ── SECTION LIST HEADER ────────────────────

  <img src="code langkah 11 H.png" width="50%" >

  // ── SKILL CARD ─────────────────────────────

  <img src="code langkah 11 I.png" width="50%" >

  // ── TIMELINE CARD ──────────────────────────

  <img src="code langkah 11 J.png" width="50%" >

  // ── TEXT INPUT ─────────────────────────────

  <img src="code langkah 11 K.png" width="50%" >

  // ── LOADING ROW ────────────────────────────

  <img src="code langkah 11 L" width="50%">

  // ── MODAL ──────────────────────────────────
  
  <img src="code langkah 11 M" width="50%" >




## ✅ LANGKAH 12 — Verifikasi & Pengujian

Jalankan aplikasi dan pastikan semua fitur bekerja:

| # | Yang Diuji | Hasil yang Diharapkan |
|---|---|---|
| 1 | Aplikasi bisa dibuka | Layar CV tampil tanpa error |
| 2 | Foto profil tampil | Gambar dari URL terload |
| 3 | Halaman bisa di-scroll | Semua section bisa diakses |
| 4 | Toggle Switch | Badge "Open to Work" muncul/hilang |
| 5 | Progress bar skill | Bar berwarna sesuai persentase |
| 6 | Ketuk kartu riwayat | Modal popup muncul dari bawah |
| 7 | Tombol Tutup di Modal | Modal tertutup |
| 8 | Isi form & kirim | Loading 2 detik → Alert sukses |
| 9 | Kirim dengan input kosong | Alert peringatan muncul |
| 10 | Tekan Download CV | Efek visual berubah + Alert |
| 11 | Tap tombol sosmed | Alert URL muncul |

---

### Hasil Akhir ###

<img src="My CV 1.gif" width="50%">