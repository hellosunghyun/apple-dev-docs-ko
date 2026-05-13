---
source_path: "documentation/AVFoundation/implementing-flexible-enhanced-buffering-for-your-content.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/implementing-flexible-enhanced-buffering-for-your-content"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:implementing-flexible-enhanced-buffering-for-your-content:0000:0001">Implementing flexible enhanced buffering for your content</span>

<span class="ko-segment" data-segment-id="seg:paragraph:implementing-flexible-enhanced-buffering-for-your-content:0001:0001">**Framework**: AVFoundation</span>

<span class="ko-segment" data-segment-id="seg:paragraph:implementing-flexible-enhanced-buffering-for-your-content:0002:0001">Configure your app for flexible enhanced buffering to stream content faster to AirPlay-enabled devices and supported CarPlay vehicles.</span>

#### <span class="ko-segment" data-segment-id="seg:heading:overview:0003:0001">Overview</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0004:0001">If you’re working with content that requires flexibility with buffering, use the <a href="avsamplebufferaudiorenderer.md">@@TOKEN_0@@</a> and <a href="avsamplebufferrendersynchronizer.md">@@TOKEN_1@@</a> classes.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0005:0001">To implement flexible enhanced buffering, complete the following steps.</span>

1. <span class="ko-segment" data-segment-id="seg:list:overview:0006:0001">Create a serialization queue to perform all playback operations on, and create the audio renderer and the render synchronizer to establish the media timeline.</span>

```swift
let serializationQueue = DispatchQueue(label: "sample.buffer.player.serialization.queue")
let audioRenderer = AVSampleBufferAudioRenderer()
let renderSynchronizer = AVSampleBufferRenderSynchronizer()
```

1. <span class="ko-segment" data-segment-id="seg:list:overview:0008:0001">Observe when the renderer has flushed enqueued audio, such as when the rate of playback increases or decreases, and re-enqueue audio data starting from the time the flush occurred.</span>

```swift
automaticFlushObserver = NotificationCenter.default.addObserver(forName: .AVSampleBufferAudioRendererWasFlushedAutomatically,
                                                                object: audioRenderer,
                                                                queue: nil) { [weak self] notification in
    self?.serializationQueue.async { [weak self] in
        guard let self = self else { return } 
        // Restart from the point where the flush interrupts the audio.
        let restartTime = (notification.userInfo?[AVSampleBufferAudioRendererFlushTimeKey] as? NSValue)?.timeValue
        self.autoflushPlayback(restartingAt: restartTime)
    }
}
```

1. <span class="ko-segment" data-segment-id="seg:list:overview:0010:0001">Add the audio renderer to the render synchronizer, to tell the audio renderer to follow the media timeline.</span>

```swift
renderSynchronizer.addRenderer(audioRenderer)
```

1. <span class="ko-segment" data-segment-id="seg:list:overview:0012:0001">Tell the audio renderer to start processing audio data, and set the render synchronizer’s rate to <code>1</code> to start playback.</span>

```swift
serializationQueue.async { [weak self] in
    guard let self = self else { return }
    // Start processing audio data and stop when there's no more data.
    self.audioRenderer.requestMediaDataWhenReady(on: serializationQueue) { [weak self] in
        guard let self = self else { return }
        while self.audioRenderer.isReadyForMoreMediaData {
            let sampleBuffer = self.nextSampleBuffer() // Returns nil at end of data.
            if let sampleBuffer = sampleBuffer {
                self.audioRenderer.enqueue(sampleBuffer)
            } else {
                // Tell the renderer to stop requesting audio data.
                audioRenderer.stopRequestingMediaData()
            }
        }
    }

    // Start playback at the natural rate of the media.
    self.renderSynchronizer.rate = 1.0
}
```

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0014:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0015:0001"><a href="implementing-simple-enhanced-buffering-for-your-content.md">Implementing simple enhanced buffering for your content</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0016:0001">Configure your app for simple enhanced buffering to stream content faster to AirPlay-enabled devices and supported CarPlay vehicles.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0017:0001"><a href="integrating-airplay-for-long-form-video-apps.md">Integrating AirPlay for long-form video apps</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0018:0001">Integrate AirPlay features and implement a dedicated external playback experience by preparing the routing system for long-form video playback.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0020:0001">*<a href="https://developer.apple.com/documentation/avfoundation/implementing-flexible-enhanced-buffering-for-your-content">View on Apple Developer</a>*</span>
