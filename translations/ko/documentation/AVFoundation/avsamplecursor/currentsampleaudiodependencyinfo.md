---
source_path: "documentation/AVFoundation/avsamplecursor/currentsampleaudiodependencyinfo.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avsamplecursor/currentsampleaudiodependencyinfo"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:currentsampleaudiodependencyinfo:0000:0001">currentSampleAudioDependencyInfo</span>

<span class="ko-segment" data-segment-id="seg:paragraph:currentsampleaudiodependencyinfo:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:currentsampleaudiodependencyinfo:0002:0001">오디오 샘플의 독립 디코딩 가능성에 대한 정보입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:currentsampleaudiodependencyinfo:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:currentsampleaudiodependencyinfo:0004:0001">iOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:currentsampleaudiodependencyinfo:0004:0002">iPadOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:currentsampleaudiodependencyinfo:0004:0003">Mac Catalyst 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:currentsampleaudiodependencyinfo:0004:0004">macOS 10.15+</span>
- <span class="ko-segment" data-segment-id="seg:list:currentsampleaudiodependencyinfo:0004:0005">tvOS 16.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:currentsampleaudiodependencyinfo:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:currentsampleaudiodependencyinfo:0004:0007">watchOS 9.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var currentSampleAudioDependencyInfo: AVSampleCursorAudioDependencyInfo { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">오디오 디코더가 전체 새로고침에 필요한 첫 번째 샘플 위치로 샘플 커서를 이동하려면, 현재 샘플에서 뒤로 이동해 다음 조건을 충족하는 샘플을 찾습니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:discussion:0009:0001">해당 샘플의 <a href="avsamplecursoraudiodependencyinfo/audiosampleisindependentlydecodable.md">@@TOKEN_0@@</a> 속성 값이 <a href="https://developer.apple.com/documentation/Swift/true">@@TOKEN_1@@</a>입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:discussion:0009:0002">해당 샘플의 <a href="avsamplecursoraudiodependencyinfo/audiosamplepacketrefreshcount.md">@@TOKEN_0@@</a> 속성 값이 뒤로 이동한 단계 수보다 크거나 같습니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">현재 샘플이 <code>audioSamplePacketRefreshCount</code>가 <code>0</code>인 상태에서 독립적으로 디코딩 가능하면 커서를 다시 배치할 필요가 없습니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0011:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avsamplecursor/currentchunkinfo.md">var currentChunkInfo: AVSampleCursorChunkInfo</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">현재 샘플이 속한 샘플 청크에 대한 정보를 제공하는 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avsamplecursorchunkinfo.md">struct AVSampleCursorChunkInfo</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">미디어 샘플 청크에 대한 정보를 제공하는 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avsamplecursor/currentchunkstoragerange.md">var currentChunkStorageRange: AVSampleCursorStorageRange</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">현재 샘플과 함께 청크 단위로 로드할 저장 컨테이너의 샘플 범위입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="avsamplecursorstoragerange.md">struct AVSampleCursorStorageRange</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avspatialvideoconfiguration-swift.struct/init(formatdescription:">View on Apple Developer</a>)*</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="avsamplecursor/currentchunkstorageurl.md">var currentChunkStorageURL: URL?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">현재 샘플과 같은 작업에서 로드할 현재 샘플 및 다른 샘플들의 저장 컨테이너 URL입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="avsamplecursor/currentsampledependencyinfo.md">var currentSampleDependencyInfo: AVSampleCursorDependencyInfo</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">동일한 샘플 시퀀스 내 미디어 샘플 간의 관계를 설명하는 종속성 정보입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="avsamplecursordependencyinfo.md">struct AVSampleCursorDependencyInfo</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">동일한 샘플 시퀀스 내 미디어 샘플 간의 종속성을 설명하기 위한 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="avsamplecursor/currentsampleduration.md">var currentSampleDuration: CMTime</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">커서의 현재 위치에 있는 샘플의 디코드 기간입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001"><a href="avsamplecursor/currentsampleindexinchunk.md">var currentSampleIndexInChunk: Int64</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">현재 샘플이 속한 청크 내의 현재 샘플 인덱스입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0030:0001"><a href="avsamplecursor/currentsamplestoragerange.md">var currentSampleStorageRange: AVSampleCursorStorageRange</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">현재 청크 저장 URL에서 현재 샘플의 오프셋과 길이입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0032:0001"><a href="avsamplecursor/currentsamplesyncinfo.md">var currentSampleSyncInfo: AVSampleCursorSyncInfo</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0033:0001">디코더를 재동기화할 때 고려할 현재 샘플의 동기화 정보입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0034:0001"><a href="avsamplecursorsyncinfo.md">struct AVSampleCursorSyncInfo</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0035:0001">디코더를 재동기화할 때 고려할 미디어 샘플의 특성을 설명하는 구조체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0036:0001"><a href="avsamplecursor/copycurrentsampleformatdescription.md">func copyCurrentSampleFormatDescription() -&gt; CMFormatDescription</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0037:0001">커서의 현재 위치에 있는 샘플의 포맷 설명을 반환합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0038:0001">[var currentSampleDependencyAttachments: [AnyHashable : Any]?](avsamplecursor/currentsampledependencyattachments.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0039:0001">종속성과 관련된 샘플 버퍼 첨부 정보를 담은 딕셔너리입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0041:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avsamplecursor/currentsampleaudiodependencyinfo">View on Apple Developer</a>*</span>
