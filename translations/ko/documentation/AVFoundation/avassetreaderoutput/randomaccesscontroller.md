---
source_path: "documentation/AVFoundation/avassetreaderoutput/randomaccesscontroller.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avassetreaderoutput/randomaccesscontroller"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:avassetreaderoutputrandomaccesscontroller:0000:0001">AVAssetReaderOutput.RandomAccessController</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avassetreaderoutputrandomaccesscontroller:0001:0001">**Framework**: AVFoundation **Kind**: class</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avassetreaderoutputrandomaccesscontroller:0002:0001">지정된 시간 범위를 읽도록 출력 제공자를 다시 설정하는 데 사용되는 객체입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avassetreaderoutputrandomaccesscontroller:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:avassetreaderoutputrandomaccesscontroller:0004:0001">iOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avassetreaderoutputrandomaccesscontroller:0004:0002">iPadOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avassetreaderoutputrandomaccesscontroller:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:avassetreaderoutputrandomaccesscontroller:0004:0004">macOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avassetreaderoutputrandomaccesscontroller:0004:0005">tvOS 26.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avassetreaderoutputrandomaccesscontroller:0004:0006">visionOS 26.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
class RandomAccessController
```

## <span class="ko-segment" data-segment-id="seg:heading:topics:0007:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:configuring-a-controller:0008:0001">컨트롤러 구성</span>

- <span class="ko-segment" data-segment-id="seg:list:configuring-a-controller:0009:0001"><a href="avassetreaderoutput/randomaccesscontroller/markconfigurationasfinal.md">func markConfigurationAsFinal()</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:configuring-a-controller:0010:0001">시간 범위의 재구성이 더 이상 필요하지 않음을 공급자에 알리고, 연결된 AVAssetReader가 <code>AVAssetReaderStatus/completed</code> 상태로 진행할 수 있도록 합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:configuring-a-controller:0011:0001">[func resetForReading(timeRanges: [CMTimeRange])](avassetreaderoutput/randomaccesscontroller/resetforreading(timeranges:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:configuring-a-controller:0012:0001">새 시간 범위 집합으로 다시 읽기를 시작합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0013:0001">참고</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avassetreaderoutput/copynextsamplebuffer.md">func copyNextSampleBuffer() -&gt; CMSampleBuffer?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">출력에서 다음 샘플 버퍼를 복사합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avassetreaderoutput/provider.md">AVAssetReaderOutput.Provider</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">자산 리더에서 공통 미디어 유형의 샘플 컬렉션을 읽는 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="avassetreaderoutput/supportedpayload.md">AVAssetReaderOutput.SupportedPayload</a></span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0020:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avassetreaderoutput/randomaccesscontroller">View on Apple Developer</a>*</span>
