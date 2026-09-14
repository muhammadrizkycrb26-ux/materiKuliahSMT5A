import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.cvCard}>
        <View style={styles.cvHeader}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>MR</Text>
          </View>
          <Text style={styles.cvName}>Mohammad Rizky Saputra</Text>
          <Text style={styles.cvRole}>Mahasiswa Informatika</Text>
        </View>

        <View style={styles.cvBody}>
          <View style={styles.cvSection}>
            <Text style={styles.cvSectionTitle}>DATA DIRI</Text>
            <View style={styles.cvRow}>
              <Text style={styles.cvLabel}>NIM</Text>
              <Text style={styles.cvValue}>2488010071</Text>
            </View>
            <View style={styles.cvRow}>
              <Text style={styles.cvLabel}>Program Studi</Text>
              <Text style={styles.cvValue}>Informatika</Text>
            </View>
            <View style={styles.cvRow}>
              <Text style={styles.cvLabel}>Asal Sekolah</Text>
              <Text style={styles.cvValue}>SMA Madinatunnajah</Text>
            </View>
          </View>

          <View style={styles.cvSection}>
            <Text style={styles.cvSectionTitle}>TENTANG SAYA</Text>
            <Text style={styles.cvAbout}>
              Mahasiswa aktif Program Studi Teknik Informatika yang tertarik
              pada pengembangan aplikasi mobile dan web.
            </Text>
          </View>

          <View style={styles.cvSection}>
            <Text style={styles.cvSectionTitle}>SKILL</Text>
            <View style={styles.skillRow}>
              {['React Native', 'JavaScript', 'HTML', 'CSS'].map((skill) => (
                <View key={skill} style={styles.skillBadge}>
                  <Text style={styles.skillText}>{skill}</Text>
                </View>
              ))}
            </View>
          </View>

          {/* ===== Section Cita-cita baru ===== */}
          <View style={styles.cvSection}>
            <Text style={styles.cvSectionTitle}>CITA-CITA</Text>
            <Text style={styles.cvAbout}>
              Menjadi seorang Software Engineer profesional yang mampu
              membangun aplikasi yang bermanfaat bagi banyak orang.
            </Text>

            <Text style={[styles.cvSectionTitle, { marginTop: 16 }]}>
              RENCANA MENCAPAI CITA-CITA
            </Text>
            <View style={styles.planItem}>
              <View style={styles.planBullet} />
              <Text style={styles.planText}>
                Menyelesaikan studi Teknik Informatika tepat waktu dengan hasil
                yang baik
              </Text>
            </View>
            <View style={styles.planItem}>
              <View style={styles.planBullet} />
              <Text style={styles.planText}>
                Aktif mengikuti pelatihan dan sertifikasi di bidang pengembangan
                perangkat lunak
              </Text>
            </View>
            <View style={styles.planItem}>
              <View style={styles.planBullet} />
              <Text style={styles.planText}>
                Membangun portofolio proyek nyata melalui magang dan
                organisasi
              </Text>
            </View>
            <View style={styles.planItem}>
              <View style={styles.planBullet} />
              <Text style={styles.planText}>
                Terus belajar teknologi baru secara konsisten setiap hari
              </Text>
            </View>
          </View>
        </View>
      </View>

      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f2f4f7',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  cvCard: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    width: '100%',
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 8,
  },
  cvHeader: {
    backgroundColor: '#4f46e5',
    paddingVertical: 32,
    alignItems: 'center',
  },
  avatar: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  avatarText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4f46e5',
  },
  cvName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  cvRole: {
    fontSize: 14,
    color: '#e0e7ff',
    marginTop: 4,
  },
  cvBody: {
    padding: 24,
  },
  cvSection: {
    marginBottom: 20,
  },
  cvSectionTitle: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#4f46e5',
    letterSpacing: 1,
    marginBottom: 10,
  },
  cvRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  cvLabel: {
    fontSize: 14,
    color: '#6b7280',
  },
  cvValue: {
    fontSize: 14,
    color: '#1a1a1a',
    fontWeight: '600',
  },
  cvAbout: {
    fontSize: 14,
    color: '#4b5563',
    lineHeight: 20,
  },
  skillRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  skillBadge: {
    backgroundColor: '#eef2ff',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  skillText: {
    fontSize: 13,
    color: '#4f46e5',
    fontWeight: '600',
  },
  planItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  planBullet: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#4f46e5',
    marginTop: 7,
    marginRight: 10,
  },
  planText: {
    flex: 1,
    fontSize: 14,
    color: '#4b5563',
    lineHeight: 20,
  },
});