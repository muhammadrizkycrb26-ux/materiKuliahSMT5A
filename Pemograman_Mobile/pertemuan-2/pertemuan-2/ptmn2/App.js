// App.js
import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  FlatList,
  SectionList,
  TextInput,
  Button,
  TouchableOpacity,
  Pressable,
  Switch,
  Modal,
  ActivityIndicator,
  StatusBar,
  SafeAreaView,
  Alert,
} from 'react-native';

// ✅ Import styles dari file terpisah
import { styles, COLORS } from './styles';

// ============================================
// DATA
// ============================================
const PROFILE = {
  name: 'Mohammad Rizky Saputra',
  title: 'Web Developer',
  email: 'muhammadrizkycrb26@gmail.com',
  phone: '083834395671',
  location: 'Losari, Cirebon, Jawa Barat',
  bio: 'Web Developer | Building modern, scalable, and user-centric web applications.',
  avatar: require('./assets/profile.png')
};

const SKILLS = [
  { id: '1', name: 'React Native', level: 90, color: '#61DAFB' },
  { id: '2', name: 'Flutter', level: 75, color: '#02569B' },
  { id: '3', name: 'JavaScript', level: 88, color: '#F7DF1E' },
  { id: '4', name: 'TypeScript', level: 80, color: '#3178C6' },
  { id: '5', name: 'Node.js', level: 70, color: '#339933' },
  { id: '6', name: 'Firebase', level: 82, color: '#FFCA28' },
  { id: '7', name: 'Laravel', level: 75, color: '#9c39aa' },
  { id: '8', name: 'GSAP', level: 70, color: '#343dbc' },
];

const SECTIONS = [
  {
    title: '💼 Pengalaman Kerja & Organisasi',
    data: [
      {
        id: 'e1',
        role: 'Mobile Developer',
        company: 'Startup Fintech - PayEasy',
        period: '2025 - 2026',
        desc: 'Mengembangkan fitur pembayaran digital menggunakan React Native & Redux.',
      },
      {
        id: 'e2',
        role: 'Departemen Kesejahteraan',
        company: 'OSMN, SMA Madinatunnajah Kalimukti',
        period: '2023 - 2024',
        desc: 'Mengelola ketertiban dan kesejahteraan anggota organisasi, termasuk kegiatan sosial dan internal.',
      },
    ],
  },
  {
    title: '🎓 Pendidikan',
    data: [
      {
        id: 'd1',
        role: 'S1 Informatika',
        company: 'Universitas Islam Negeri Siber Syekh Nurjati Cirebon',
        period: '2024 - sekarang',
        desc: 'Mahasiswa aktif semester 5 program studi Informatika',
      },
      {
        id: 'd2',
        role: 'IPA',
        company: 'SMA Madinatunnajah Kalimukti',
        period: '2021 - 2024',
        desc: 'Menyelesaikan pendidikan menengah atas dengan baik.',
      },
    ],
  },
];

const SOCIAL = [
  { id: 's1', label: 'GitHub', icon: '👤', url: 'https://github.com/muhammadrizkycrb26-ux' },
  { id: 's2', label: 'Instagram', icon: '📷', url: 'https://www.instagram.com/rzky_2608?stkn=ZmF6eXJkbXdveWhy' },
  { id: 's3', label: 'TikTok', icon: '🎵', url: 'https://www.tiktok.com/@zkyy_5661' },
];

// ============================================
// KOMPONEN
// ============================================
const SkillCard = ({ item }) => (
  <View style={styles.skillCard}>
    <View style={styles.skillHeader}>
      <Text style={styles.skillName}>{item.name}</Text>
      <Text style={styles.skillPercent}>{item.level}%</Text>
    </View>
    <View style={styles.progressBg}>
      <View
        style={[
          styles.progressFill,
          { width: `${item.level}%`, backgroundColor: item.color }
        ]}
      />
    </View>
  </View>
);

const TimelineCard = ({ item, onPress }) => (
  <TouchableOpacity
    style={styles.timelineCard}
    onPress={() => onPress(item)}
    activeOpacity={0.75}
  >
    <View style={styles.timelineDot} />
    <View style={styles.timelineContent}>
      <Text style={styles.timelineRole}>{item.role}</Text>
      <Text style={styles.timelineCompany}>{item.company}</Text>
      <Text style={styles.timelinePeriod}>{item.period}</Text>
      <Text style={styles.timelineHint}>Ketuk untuk detail →</Text>
    </View>
  </TouchableOpacity>
);

// ============================================
// APP
// ============================================
export default function App() {
  const [openToWork, setOpenToWork] = useState(true);
  const [selectedItem, setSelectedItem] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [senderName, setSenderName] = useState('');
  const [message, setMessage] = useState('');
  const [sending, setSending] = useState(false);
  const [pressing, setPressing] = useState(false);

  const handleCardPress = (item) => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  const handleSend = () => {
    if (!senderName.trim() || !message.trim()) {
      Alert.alert('⚠️ Peringatan', 'Nama dan pesan tidak boleh kosong!');
      return;
    }

    setSending(true);

    setTimeout(() => {
      setSending(false);
      setSenderName('');
      setMessage('');
      Alert.alert('✅ Berhasil', `Pesan dari ${senderName} telah terkirim!`);
    }, 2000);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar backgroundColor="#1a1a2e" barStyle="light-content" />

      {/* HEADER BAR */}
      <View style={styles.headerBar}>
        <Text style={styles.headerTitle}>📄 Curriculum Vitae</Text>
        <View style={styles.switchRow}>
          <Text style={styles.switchLabel}>
            {openToWork ? '🟢 Open' : '🔴 Busy'}
          </Text>
          <Switch
            value={openToWork}
            onValueChange={setOpenToWork}
            trackColor={{ false: '#555', true: '#4ade80' }}
            thumbColor={openToWork ? '#fff' : '#aaa'}
          />
        </View>
      </View>

      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>

        {/* SECTION PROFIL */}
        <View style={styles.profileSection}>
          <Image source={PROFILE.avatar} style={styles.avatar} />

          {openToWork && (
            <View style={styles.badge}>
              <Text style={styles.badgeText}>🟢 Open to Work</Text>
            </View>
          )}

          <Text style={styles.profileName}>{PROFILE.name}</Text>
          <Text style={styles.profileTitle}>{PROFILE.title}</Text>
          <Text style={styles.profileBio}>{PROFILE.bio}</Text>

          <View style={styles.contactRow}>
            <Text style={styles.contactItem}>📧 {PROFILE.email}</Text>
            <Text style={styles.contactItem}>📍 {PROFILE.location}</Text>
          </View>
          <Text style={styles.contactItem}>📱 {PROFILE.phone}</Text>

          <View style={styles.socialRow}>
            {SOCIAL.map((s) => (
              <TouchableOpacity
                key={s.id}
                style={styles.socialBtn}
                onPress={() => Alert.alert('🔗 Link', s.url)}
                activeOpacity={0.8}
              >
                <Text style={styles.socialIcon}>{s.icon}</Text>
                <Text style={styles.socialLabel}>{s.label}</Text>
              </TouchableOpacity>
            ))}
          </View>

          <Pressable
            style={({ pressed }) => [
              styles.downloadBtn,
              pressed && styles.downloadBtnPressed,
            ]}
            onPressIn={() => setPressing(true)}
            onPressOut={() => setPressing(false)}
            onPress={() => Alert.alert('📥 Download', 'CV sedang diunduh...')}
          >
            <Text style={styles.downloadBtnText}>
              {pressing ? '⏳ Mengunduh...' : '📥 Download CV (PDF)'}
            </Text>
          </Pressable>
        </View>

        {/* SECTION SKILLS */}
        <View style={styles.sectionBox}>
          <Text style={styles.sectionTitle}>🛠️ Keahlian</Text>
          <Text style={styles.sectionSubtitle}>
            └ FlatList: menampilkan list data secara efisien
          </Text>
          <FlatList
            data={SKILLS}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <SkillCard item={item} />}
            scrollEnabled={false}
            ItemSeparatorComponent={() => <View style={{ height: 8 }} />}
          />
        </View>

        {/* SECTION RIWAYAT */}
        <View style={styles.sectionBox}>
          <Text style={styles.sectionTitle}>📜 Riwayat</Text>
          <Text style={styles.sectionSubtitle}>
            └ SectionList: data dikelompokkan per kategori. Ketuk kartu untuk Modal detail.
          </Text>
          <SectionList
            sections={SECTIONS}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TimelineCard item={item} onPress={handleCardPress} />
            )}
            renderSectionHeader={({ section: { title } }) => (
              <View style={styles.sectionHeader}>
                <Text style={styles.sectionHeaderText}>{title}</Text>
              </View>
            )}
            scrollEnabled={false}
            ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
            SectionSeparatorComponent={() => <View style={{ height: 16 }} />}
          />
        </View>

        {/* SECTION KONTAK */}
        <View style={styles.sectionBox}>
          <Text style={styles.sectionTitle}>✉️ Hubungi Saya</Text>
          <Text style={styles.sectionSubtitle}>
            └ TextInput, Button, ActivityIndicator
          </Text>
          <TextInput
            style={styles.textInput}
            placeholder="Nama Anda"
            placeholderTextColor="#888"
            value={senderName}
            onChangeText={setSenderName}
            returnKeyType="next"
            editable={!sending}
          />
          <TextInput
            style={[styles.textInput, styles.textArea]}
            placeholder="Tulis pesan Anda di sini..."
            placeholderTextColor="#888"
            value={message}
            onChangeText={setMessage}
            multiline
            numberOfLines={4}
            textAlignVertical="top"
            editable={!sending}
          />

          {sending ? (
            <View style={styles.loadingRow}>
              <ActivityIndicator size="large" color="#7c3aed" />
              <Text style={styles.loadingText}>Mengirim pesan...</Text>
            </View>
          ) : (
            <Button
              title="✉️ Kirim Pesan"
              color="#7c3aed"
              onPress={handleSend}
            />
          )}
        </View>

        <View style={{ height: 40 }} />
      </ScrollView>

      {/* MODAL */}
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalBox}>
            {selectedItem && (
              <>
                <Text style={styles.modalTitle}>{selectedItem.role}</Text>
                <Text style={styles.modalCompany}>{selectedItem.company}</Text>
                <Text style={styles.modalPeriod}>📅 {selectedItem.period}</Text>
                <View style={styles.modalDivider} />
                <Text style={styles.modalDesc}>{selectedItem.desc}</Text>
              </>
            )}
            <TouchableOpacity
              style={styles.modalCloseBtn}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.modalCloseBtnText}>✕ Tutup</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

    </SafeAreaView>
  );
}