---
source_path: "documentation/AVFAudio/avaudiosession/overrideoutputaudioport.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfaudio/avaudiosession/overrideoutputaudioport"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:overrideoutputaudioport:0000:0001">overrideOutputAudioPort(_:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overrideoutputaudioport:0001:0001">**Framework**: AVFAudio **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overrideoutputaudioport:0002:0001">현재 오디오 경로를 일시적으로 변경합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overrideoutputaudioport:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:overrideoutputaudioport:0004:0001">iOS 6.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:overrideoutputaudioport:0004:0002">iPadOS 6.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:overrideoutputaudioport:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:overrideoutputaudioport:0004:0004">tvOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:overrideoutputaudioport:0004:0005">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:overrideoutputaudioport:0004:0006">watchOS 2.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func overrideOutputAudioPort(_ portOverride: AVAudioSession.PortOverride) throws
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">앱이 <a href="avaudiosession/category-swift.struct/playandrecord.md">@@TOKEN_0@@</a> 카테고리를 사용하는 경우, <a href="avaudiosession/portoverride/speaker.md">@@TOKEN_1@@</a> 옵션으로 이 메서드를 호출하면 시스템은 다른 설정에 상관없이 오디오를 내장 스피커와 마이크로 라우팅합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">이 변경은 현재 경로가 바뀌거나 <a href="avaudiosession/portoverride/none.md">@@TOKEN_0@@</a> 옵션으로 이 메서드를 다시 호출할 때까지만 유지됩니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">이 동작을 영구적으로 사용하려면 카테고리의 <a href="avaudiosession/categoryoptions-swift.struct/defaulttospeaker.md">@@TOKEN_0@@</a> 옵션을 대신 설정해야 합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0002">이 옵션을 설정하면 헤드폰 등의 다른 액세서리가 사용되지 않을 때 수신기 대신 스피커로 라우팅됩니다.</span>

> <span class="ko-segment" data-segment-id="seg:blockquote:discussion:0010:0001">**참고**: 스피커폰 기능에서 오디오를 수신기 대신 스피커로 라우팅하려면 <a href="https://developer.apple.com/documentation/MediaPlayer">@@TOKEN_0@@</a> 프레임워크의 <a href="https://developer.apple.com/documentation/MediaPlayer/MPVolumeView">@@TOKEN_1@@</a> 클래스를 사용하는 것이 바람직합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0011:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0012:0001"><code>portOverride</code>: 오디오 출력에 대한 오버라이드 옵션입니다. 상수 목록은 <a href="avaudiosession/portoverride.md">@@TOKEN_1@@</a>에서 확인합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:topics:0013:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:data-types:0014:0001">데이터 유형</span>

- <span class="ko-segment" data-segment-id="seg:list:data-types:0015:0001"><a href="avaudiosession/portoverride.md">AVAudioSession.PortOverride</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:data-types:0016:0001"><a href="avaudiosession/overrideoutputaudioport(_:">@@TOKEN_0@@</a>.md) 메서드에 사용할 수 있는 상수입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0017:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001">[var outputDataSources: [AVAudioSessionDataSourceDescription]?](avaudiosession/outputdatasources.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">현재 오디오 경로에서 사용할 수 있는 출력 데이터 소스의 배열입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="avaudiosession/outputdatasource.md">var outputDataSource: AVAudioSessionDataSourceDescription?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">현재 선택된 출력 데이터 소스입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="avaudiosession/setoutputdatasource(_:">func setOutputDataSource(AVAudioSessionDataSourceDescription?) throws</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">오디오 세션의 출력 데이터 소스를 설정합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="avaudiosessiondatasourcedescription.md">class AVAudioSessionDataSourceDescription</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">오디오 입력 또는 출력의 데이터 소스를 정의하며, 소스의 이름, 위치, 방향 등의 정보를 제공하는 객체입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">*<a href="https://developer.apple.com/documentation/avfaudio/avaudiosession/overrideoutputaudioport(_:">Apple Developer에서 보기</a>)*</span>
