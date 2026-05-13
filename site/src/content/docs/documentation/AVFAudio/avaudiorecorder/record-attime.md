---
source_path: "documentation/AVFAudio/avaudiorecorder/record-attime.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfaudio/avaudiorecorder/record-attime"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:recordattime:0000:0001">record(atTime:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:recordattime:0001:0001">**Framework**: AVFAudio **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:recordattime:0002:0001">지정된 시점부터 오디오 녹음을 시작합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:recordattime:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:recordattime:0004:0001">iOS 6.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:recordattime:0004:0002">iPadOS 6.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:recordattime:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:recordattime:0004:0004">macOS 10.9+</span>
- <span class="ko-segment" data-segment-id="seg:list:recordattime:0004:0005">tvOS 17.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:recordattime:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:recordattime:0004:0007">watchOS 4.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func record(atTime time: TimeInterval) -> Bool
```

#### <span class="ko-segment" data-segment-id="seg:heading:return-value:0007:0001">반환 값</span>

<span class="ko-segment" data-segment-id="seg:paragraph:return-value:0008:0001">녹음이 성공적으로 시작되면 <a href="https://developer.apple.com/documentation/Swift/true">@@TOKEN_0@@</a>, 그렇지 않으면 <a href="https://developer.apple.com/documentation/Swift/false">@@TOKEN_1@@</a>입니다.</span>

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0009:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">이 메서드는 단일 recorder에서 호출할 수 있으며, 아래 예제처럼 여러 recorder의 녹음을 동기화하는 데에도 사용할 수 있습니다.</span>

```swift
func startSynchronizedRecording() {
    // Create a time offset relative to the current device time.
    let timeOffset = recorderOne.deviceCurrentTime + 0.01
    
    // Synchronize the recording time of both recorders.
    recorderOne.record(atTime: timeOffset)
    recorderTwo.record(atTime: timeOffset)
}
```

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0012:0001">이 메서드를 호출하면 오디오 파일을 생성하고 시스템을 녹음하도록 준비하는 <a href="avaudiorecorder/preparetorecord(">@@TOKEN_0@@</a>.md)가 암시적으로 호출됩니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0013:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0014:0001"><code>time</code>: 녹음을 시작할 시간입니다. <a href="avaudiorecorder/devicecurrenttime.md">@@TOKEN_1@@</a>를 기준으로 한 상대 시간입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0015:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avaudiorecorder/preparetorecord.md">func prepareToRecord() -&gt; Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">오디오 파일을 생성하고 시스템을 녹음하도록 준비합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="avaudiorecorder/record.md">func record() -&gt; Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">오디오 녹음을 시작하거나 다시 시작합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="avaudiorecorder/record(forduration:">func record(forDuration: TimeInterval) -&gt; Bool</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">지정된 기간 동안 오디오를 녹음합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="avaudiorecorder/record(attime:forduration:">func record(atTime: TimeInterval, forDuration: TimeInterval) -&gt; Bool</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">지정된 시점부터 지정된 기간 동안 오디오를 녹음합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="avaudiorecorder/pause.md">func pause()</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">오디오 녹음을 일시 중지합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="avaudiorecorder/stop.md">func stop()</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">녹음을 중지하고 오디오 파일을 닫습니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001"><a href="avaudiorecorder/isrecording.md">var isRecording: Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">오디오 레코더가 녹음 중인지 나타내는 부울 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0030:0001"><a href="avaudiorecorder/deleterecording.md">func deleteRecording() -&gt; Bool</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">녹음된 오디오 파일을 삭제합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0033:0001">*<a href="https://developer.apple.com/documentation/avfaudio/avaudiorecorder/record(attime:">View on Apple Developer</a>)*</span>
