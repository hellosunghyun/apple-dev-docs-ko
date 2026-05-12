---
source_path: "documentation/AVFoundation/avmutablemovietrack/preferredmediachunkduration.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avmutablemovietrack/preferredmediachunkduration"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:preferredmediachunkduration:0000:0001">preferredMediaChunkDuration</span>

<span class="ko-segment" data-segment-id="seg:paragraph:preferredmediachunkduration:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:preferredmediachunkduration:0002:0001">미디어 청크 지속 시간을 지원하는 파일 형식에서 파일에 기록되는 각 샘플 데이터 청크에 사용할 최대 지속 시간입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:preferredmediachunkduration:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:preferredmediachunkduration:0004:0001">iOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:preferredmediachunkduration:0004:0002">iPadOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:preferredmediachunkduration:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:preferredmediachunkduration:0004:0004">macOS 10.11+</span>
- <span class="ko-segment" data-segment-id="seg:list:preferredmediachunkduration:0004:0005">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:preferredmediachunkduration:0004:0006">watchOS 6.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var preferredMediaChunkDuration: CMTime { get set }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">청크 내 샘플의 총 지속 시간은 선호 청크 지속 시간을 초과할 수 없습니다. 단일 샘플의 지속 시간이 선호 청크 지속 시간보다 큰 경우 단일 샘플의 지속 시간이 적용됩니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">기본 미디어 청크 지속 시간은 <code>1.0</code>초입니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0003">청크 지속 시간을 음수 또는 숫자가 아닌 값으로 설정하면 오류가 발생합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avmutablemovietrack/preferredmediachunkalignment.md">var preferredMediaChunkAlignment: Int</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">미디어 청크 정렬을 지원하는 파일 형식에서 사용할 미디어 청크 정렬의 경계입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avmutablemovietrack/preferredmediachunksize.md">var preferredMediaChunkSize: Int</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">미디어 청크 지속 시간을 지원하는 파일 형식에서 파일에 기록되는 각 샘플 데이터 청크의 최대 크기입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avmutablemovietrack/preferredmediachunkduration">View on Apple Developer</a>*</span>
