package com.example.philips.devweek;
//import com.example.philips.devweek.IncidenciaExame;
    import org.springframework.data.jpa.repository.JpaRepository;

    public interface OcorrenciaRepo extends JpaRepository<IncidenciaExame, Long> {
    }


