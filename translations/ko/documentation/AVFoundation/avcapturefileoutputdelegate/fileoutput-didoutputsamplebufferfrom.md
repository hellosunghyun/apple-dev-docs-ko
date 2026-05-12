---
source_path: "documentation/AVFoundation/avcapturefileoutputdelegate/fileoutput-didoutputsamplebufferfrom.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcapturefileoutputdelegate/fileoutput-didoutputsamplebufferfrom"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:fileoutputdidoutputsamplebufferfrom:0000:0001">fileOutput(_:didOutputSampleBuffer:from:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:fileoutputdidoutputsamplebufferfrom:0001:0001">**Framework**: AVFoundation **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:fileoutputdidoutputsamplebufferfrom:0002:0001">이 메서드는 출력이 샘플을 수신하는 즉시 델리게이트가 샘플을 검사하고, 정확한 시점에 녹화를 시작하거나 중지할 수 있도록 합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:fileoutputdidoutputsamplebufferfrom:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:fileoutputdidoutputsamplebufferfrom:0004:0001">macOS 10.7+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
optional func fileOutput(_ output: AVCaptureFileOutput, didOutputSampleBuffer sampleBuffer: CMSampleBuffer, from connection: AVCaptureConnection)
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">이 메서드는 지정된 연결에서 파일 출력이 단일 샘플 버퍼(예: 비디오 프레임 한 개 또는 오디오 버퍼)를 받을 때마다 호출됩니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">이를 통해 델리게이트는 정확한 샘플 경계에서 녹화를 시작 및 중지하거나 출력 파일을 변경할 수 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0003">이 메서드 내에서 호출되는 경우 파일 출력의 <a href="avcapturefileoutput/startrecording(to:recordingdelegate:">@@TOKEN_0@@</a>.md) 및 <a href="avcapturefileoutput/resumerecording(">@@TOKEN_1@@</a>.md) 메서드는 수신한 샘플 버퍼를 새 파일에 반드시 포함하고, 반면 <a href="avcapturefileoutput/stoprecording(">@@TOKEN_2@@</a>.md) 및 <a href="avcapturefileoutput/pauserecording(">@@TOKEN_3@@</a>.md) 호출은 현재 샘플 버퍼 이전의 모든 샘플을 기존 파일에 반드시 포함합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001"><code>CMSampleBuffer</code> 객체를 검사하여 샘플 고유의 정보를 수집할 수 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0002">이 메서드에서 호출될 때 샘플 버퍼는 항상 비디오 프레임 한 개를 포함하지만, 오디오 샘플 여러 개를 포함할 수도 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0003">B-frame 비디오 형식의 샘플은 항상 표시 순서로 전달됩니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">이 메서드 범위 밖에서 <code>CMSampleBuffer</code> 객체를 참조해야 하는 경우, 먼저 이를 유지했다가 사용이 끝나면 해제해야 합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0011:0001">최적의 성능을 유지하려면 일부 샘플 버퍼가 디바이스 시스템과 다른 캡처 입력에서 재사용해야 하는 메모리 풀을 직접 참조합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0011:0002">메모리 블록을 가능한 한 적게 복사하는 비압축 디바이스 네이티브 캡처에서 이러한 상황이 자주 발생합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0011:0003">여러 샘플 버퍼가 해당 메모리 풀을 너무 오래 참조하면 입력에서 새 샘플을 메모리에 복사할 수 없게 되어 해당 샘플이 드롭됩니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0011:0004">애플리케이션이 제공된 <code>CMSampleBuffer</code> 객체를 너무 오래 유지하여 샘플이 드롭되는 상황이 발생하지만 장기간 샘플 데이터에 접근해야 하는 경우, 데이터는 새 버퍼로 복사한 뒤 이전에 retain된 상태였다면 <code>CFRelease</code>를 호출해 참조 메모리가 재사용되도록 고려합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0012:0001">이 메서드가 특정 스레드에서 호출된다고 가정해서는 안 됩니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0012:0002">또한 이 메서드는 자주 호출되므로 캡처 성능 문제를 방지하려면 효율적으로 동작해야 합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0013:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0014:0001"><code>output</code>: 미디어 데이터를 수신하는 캡처 파일 출력입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0014:0002"><code>sampleBuffer</code>: 샘플 데이터와 샘플 형식, 표시 시간과 같은 추가 정보를 포함하는 <code>CMSampleBuffer</code> 객체입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0014:0003"><code>connection</code>: 샘플 데이터가 수신된 파일 출력에 연결된 <a href="avcaptureconnection.md">@@TOKEN_1@@</a> 객체입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0015:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avcapturefileoutputdelegate/fileoutputshouldprovidesampleaccuraterecordingstart(_:">func fileOutputShouldProvideSampleAccurateRecordingStart(AVCaptureFileOutput) -&gt; Bool</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">클라이언트가 <a href="avcapturefileoutputdelegate/fileoutput(_:didoutputsamplebuffer:from:">@@TOKEN_0@@</a>.md)에서 프레임 정확도 녹화에 옵트인할 수 있도록 허용합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcapturefileoutputdelegate/fileoutput(_:didoutputsamplebuffer:from:">Apple Developer에서 보기</a>)*</span>
