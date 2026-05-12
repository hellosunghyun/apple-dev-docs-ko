---
source_path: "documentation/AVFoundation/quicktime-movies.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/quicktime-movies"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:quicktime-movies:0000:0001">QuickTime 영화</span>

<span class="ko-segment" data-segment-id="seg:paragraph:quicktime-movies:0001:0001">**프레임워크**: AVFoundation</span>

<span class="ko-segment" data-segment-id="seg:paragraph:quicktime-movies:0002:0001">QuickTime 영화 파일의 내용을 액세스하고 미디어 트랙의 샘플 단위 편집을 수행합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:topics:0003:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:movies:0004:0001">Movies</span>

- <span class="ko-segment" data-segment-id="seg:list:movies:0005:0001"><a href="avmovie.md">class AVMovie</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:movies:0006:0001">QuickTime 영화 파일 형식 또는 MPEG-4와 같은 관련 형식을 준수하는 시청각 컨테이너를 나타내는 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:movies:0007:0001"><a href="avmovietrack.md">class AVMovieTrack</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:movies:0008:0001">QuickTime 또는 ISO base media 파일 형식을 준수하는 영화의 트랙입니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:mutable-movies:0009:0001">변경 가능한 영화</span>

- <span class="ko-segment" data-segment-id="seg:list:mutable-movies:0010:0001"><a href="avmutablemovie.md">class AVMutableMovie</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:mutable-movies:0011:0001">QuickTime 영화 파일 형식 또는 MPEG-4와 같은 관련 형식에 맞는 시청각 컨테이너를 나타내는 변경 가능한 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:mutable-movies:0012:0001"><a href="avmutablemovietrack.md">class AVMutableMovieTrack</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:mutable-movies:0013:0001">QuickTime 또는 ISO base media 파일 형식을 준수하는 변경 가능한 트랙입니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:fragmented-movies:0014:0001">분할된 영화</span>

- <span class="ko-segment" data-segment-id="seg:list:fragmented-movies:0015:0001"><a href="avfragmentedmovie.md">class AVFragmentedMovie</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:fragmented-movies:0016:0001">분할된 영화 파일을 나타내는 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:fragmented-movies:0017:0001"><a href="avfragmentedmovietrack.md">class AVFragmentedMovieTrack</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:fragmented-movies:0018:0001">분할된 영화의 트랙을 나타내는 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:fragmented-movies:0019:0001"><a href="avfragmentedmovieminder.md">class AVFragmentedMovieMinder</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:fragmented-movies:0020:0001">분할된 영화가 추가 영화 조각을 더 추가하는지 확인하는 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:fragmented-movies:0021:0001"><a href="avfragmentminding.md">protocol AVFragmentMinding</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:fragmented-movies:0022:0001">자산이 fragment minding을 지원하는지 정의하는 프로토콜입니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:sample-cursors:0023:0001">샘플 커서</span>

- <span class="ko-segment" data-segment-id="seg:list:sample-cursors:0024:0001"><a href="avsamplecursor.md">class AVSampleCursor</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:sample-cursors:0025:0001">커서의 현재 위치에 있는 미디어 샘플 정보를 제공하는 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:sample-cursors:0026:0001"><a href="avsamplecursorsyncinfo.md">struct AVSampleCursorSyncInfo</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:sample-cursors:0027:0001">디코더를 재동기화할 때 고려할 미디어 샘플의 특성을 설명하는 구조체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:sample-cursors:0028:0001"><a href="avsamplecursordependencyinfo.md">struct AVSampleCursorDependencyInfo</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:sample-cursors:0029:0001">동일한 샘플 시퀀스 내에서 미디어 샘플과 다른 미디어 샘플 간의 종속성을 설명하는 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:sample-cursors:0030:0001"><a href="avsamplecursoraudiodependencyinfo.md">struct AVSampleCursorAudioDependencyInfo</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:sample-cursors:0031:0001">오디오 샘플의 독립적 디코딩 가능성을 설명하는 구조체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:sample-cursors:0032:0001"><a href="avsamplecursorstoragerange.md">struct AVSampleCursorStorageRange</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:sample-cursors:0033:0001">미디어 샘플 또는 해당 청크의 저장 오프셋과 길이를 나타내는 구조체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:sample-cursors:0034:0001"><a href="avsamplecursorchunkinfo.md">struct AVSampleCursorChunkInfo</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:sample-cursors:0035:0001">미디어 샘플 청크에 대한 정보를 제공하는 값입니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:media-data-storage:0036:0001">미디어 데이터 저장소</span>

- <span class="ko-segment" data-segment-id="seg:list:media-data-storage:0037:0001"><a href="avmediadatastorage.md">class AVMediaDataStorage</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:media-data-storage:0038:0001">미디어 샘플 데이터 저장 파일을 나타내는 객체입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0039:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0040:0001"><a href="composite-assets.md">Composite assets</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0041:0001">여러 자산의 트랙과 트랙 구간을 결합해 재생하거나 처리할 수 있는 복합 자산을 만듭니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0042:0001"><a href="video-effects.md">Video effects</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0043:0001">표준 비디오 전환 효과를 정의하고 레이어 애니메이션을 미디어 타이밍과 동기화하며 사용자 지정 비디오 합성기를 생성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0044:0001"><a href="audio-mixing.md">Audio mixing</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0045:0001">자산의 기간 동안 여러 오디오 트랙의 오디오 레벨을 혼합하는 방법을 정의합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0047:0001">*<a href="https://developer.apple.com/documentation/avfoundation/quicktime-movies">View on Apple Developer</a>*</span>
