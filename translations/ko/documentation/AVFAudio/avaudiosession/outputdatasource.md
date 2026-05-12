---
source_path: "documentation/AVFAudio/avaudiosession/outputdatasource.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfaudio/avaudiosession/outputdatasource"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:outputdatasource:0000:0001">outputDataSource</span>

<span class="ko-segment" data-segment-id="seg:paragraph:outputdatasource:0001:0001">**Framework**: AVFAudio **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:outputdatasource:0002:0001">현재 선택된 출력 데이터 소스입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:outputdatasource:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:outputdatasource:0004:0001">iOS 6.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:outputdatasource:0004:0002">iPadOS 6.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:outputdatasource:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:outputdatasource:0004:0004">tvOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:outputdatasource:0004:0005">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:outputdatasource:0004:0006">watchOS 2.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var outputDataSource: AVAudioSessionDataSourceDescription? { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">이 property의 값은 여러 출력 소스 간 전환이 현재 불가능한 경우 <a href="https://developer.apple.com/documentation/ObjectiveC/nil-227m0">@@TOKEN_0@@</a>입니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">일부 USB 액세서리만 출력 소스 전환을 지원합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001">[var outputDataSources: [AVAudioSessionDataSourceDescription]?](avaudiosession/outputdatasources.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">현재 오디오 경로에 사용 가능한 출력 데이터 소스 배열입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avaudiosession/setoutputdatasource(_:">func setOutputDataSource(AVAudioSessionDataSourceDescription?) throws</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">오디오 세션에 대한 출력 데이터 소스를 설정합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avaudiosessiondatasourcedescription.md">class AVAudioSessionDataSourceDescription</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">오디오 입력 또는 출력의 데이터 소스를 정의하는 객체로, 소스의 이름, 위치, 방향 등의 정보를 제공합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avaudiosession/overrideoutputaudioport(_:">func overrideOutputAudioPort(AVAudioSession.PortOverride) throws</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">현재 오디오 경로를 일시적으로 변경합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">*<a href="https://developer.apple.com/documentation/avfaudio/avaudiosession/outputdatasource">View on Apple Developer</a>*</span>
