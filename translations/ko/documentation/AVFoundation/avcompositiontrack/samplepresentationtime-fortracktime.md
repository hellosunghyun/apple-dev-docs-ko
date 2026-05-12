---
source_path: "documentation/AVFoundation/avcompositiontrack/samplepresentationtime-fortracktime.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcompositiontrack/samplepresentationtime-fortracktime"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:samplepresentationtimefortracktime:0000:0001">samplePresentationTime(forTrackTime:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:samplepresentationtimefortracktime:0001:0001">**Framework**: AVFoundation **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:samplepresentationtimefortracktime:0002:0001">지정한 트랙 시간을 적절한 시간 매핑으로 변환한 다음 결과 샘플 프레젠테이션 시간을 반환합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:samplepresentationtimefortracktime:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:samplepresentationtimefortracktime:0004:0001">iOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:samplepresentationtimefortracktime:0004:0002">iPadOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:samplepresentationtimefortracktime:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:samplepresentationtimefortracktime:0004:0004">macOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:samplepresentationtimefortracktime:0004:0005">tvOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:samplepresentationtimefortracktime:0004:0006">visionOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:samplepresentationtimefortracktime:0004:0007">watchOS ?+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func samplePresentationTime(forTrackTime trackTime: CMTime) -> CMTime
```

#### <span class="ko-segment" data-segment-id="seg:heading:return-value:0007:0001">반환 값</span>

<span class="ko-segment" data-segment-id="seg:paragraph:return-value:0008:0001">지정한 시간에 해당하는 샘플 프레젠테이션 시간입니다. 시간 범위를 벗어나면 <a href="https://developer.apple.com/documentation/CoreMedia/CMTime/invalid">@@TOKEN_0@@</a>이(가) 반환됩니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0009:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0001"><code>trackTime</code>: 샘플 프레젠테이션 시간을 요청할 트랙 시간입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0011:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avcompositiontrack/timerange.md">var timeRange: CMTimeRange</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">에셋의 전체 타임라인에서 트랙의 시간 범위입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avcompositiontrack/naturaltimescale.md">var naturalTimeScale: CMTimeScale</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">트랙이 참조하는 미디어의 natural time scale입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avcompositiontrack/estimateddatarate.md">var estimatedDataRate: Float</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">트랙이 참조하는 미디어의 예상 데이터 전송률(초당 비트)입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcompositiontrack/samplepresentationtime(fortracktime:">View on Apple Developer</a>)*</span>
