---
source_path: "documentation/AVFoundation/avassetwriterinput/preferredmediachunkduration.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avassetwriterinput/preferredmediachunkduration"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:preferredmediachunkduration:0000:0001">preferredMediaChunkDuration</span>

<span class="ko-segment" data-segment-id="seg:paragraph:preferredmediachunkduration:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:preferredmediachunkduration:0002:0001">출력 파일에서 샘플 데이터 각 청크에 사용할 기간입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:preferredmediachunkduration:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:preferredmediachunkduration:0004:0001">iOS 8.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:preferredmediachunkduration:0004:0002">iPadOS 8.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:preferredmediachunkduration:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:preferredmediachunkduration:0004:0004">macOS 10.10+</span>
- <span class="ko-segment" data-segment-id="seg:list:preferredmediachunkduration:0004:0005">tvOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:preferredmediachunkduration:0004:0006">visionOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var preferredMediaChunkDuration: CMTime { get set }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">이 속성은 QuickTime Movie 파일과 같이 미디어 청크 정렬을 지원하는 파일 형식을 지원합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">청크 기간은 미디어 파일을 읽을 때, 예를 들어 재생 중에 시스템이 수행하는 I/O의 세분성에 영향을 줄 수 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0003">청크 기간을 더 길게 설정하면 디스크에서 읽는 횟수가 줄어들 수 있지만, 메모리 사용량이 늘어날 가능성이 있습니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">하나의 청크에는 하나 이상의 샘플이 들어 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0002">청크 내 샘플들의 총 기간은 선호 청크 기간을 초과하지 않으며, 샘플 기간이 이 선호 청크 기간보다 길면 샘플 단일 기간으로 제한됩니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">기본값은 <a href="https://developer.apple.com/documentation/CoreMedia/CMTime/invalid">@@TOKEN_0@@</a>이며, 이는 입력에서 적절한 기본값을 선택함을 의미합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0002">청크 기간을 음수 또는 숫자가 아닌 값으로 설정하면 오류입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0011:0001">쓰기 시작 후에는 이 값을 설정할 수 없습니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0012:0001">참고</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0013:0001"><a href="avassetwriterinput/preferredmediachunkalignment.md">var preferredMediaChunkAlignment: Int</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0014:0001">미디어 청크 정렬을 위한 바이트 단위 경계입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0015:0001"><a href="avassetwriterinput/samplereferencebaseurl.md">var sampleReferenceBaseURL: URL?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0016:0001">샘플 참조가 기준이 되는 base URL입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0017:0001"><a href="avassetwriterinput/mediadatalocation-swift.property.md">var mediaDataLocation: AVAssetWriterInput.MediaDataLocation</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0018:0001">입력이 미디어 데이터를 배치하고 인터리브하는 방식을 지정합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0019:0001"><a href="avassetwriterinput/mediadatalocation-swift.struct.md">AVAssetWriterInput.MediaDataLocation</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0020:0001">미디어 데이터의 배치 및 인터리브 방식을 나타내는 구조체입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0022:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avassetwriterinput/preferredmediachunkduration">View on Apple Developer</a>*</span>
